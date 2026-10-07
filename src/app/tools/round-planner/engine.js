export function initializePlanner(root) {
  if (!root) return () => {};
  const all = (s) => [...root.querySelectorAll(s)];
  const one = (s) => root.querySelector(s);
  const value = (id) => one(`[data-field="${id}"]`)?.value ?? '';
  const text = (s, v) => { const el = one(s); if (el) el.textContent = v; };
  const number = (id) => { const el = one(`[data-field="${id}"]`), v = value(id); if (!v.trim()) return null; if (!el.validity.valid) return null; if (!Number.isFinite(Number(v))) return null; return Number(v) >= 0 ? Number(v) : null; };
  const duration = n => `${Math.floor(Math.round(n) / 60)}시간 ${Math.round(n) % 60}분`;
  function preset(key) {
    const data = one(`[data-preset="${key}:${value(key+'-route')}"]`);
    for (const part of ['walk','name']) { const el = one(`[data-field="${key}-${part}"]`); if (el) el.value = data ? data.dataset[part === 'walk' ? 'minutes' : 'name'] : ''; }
  }
  function render() {
    one('[data-copy-preview]')?.remove();
    const invalid = all('input[type="number"]').filter(el => !el.validity.valid);
    all('input[type="number"]').forEach(el => el.setAttribute('aria-invalid', String(!el.validity.valid)));
    text('[data-errors]', invalid.length ? `입력 범위를 확인하세요: ${invalid.map(el => el.dataset.label).join(', ')}. 음수나 허용 범위를 벗어난 값은 계산하지 않습니다.` : '');
    all('[data-when]').forEach(el => { const [key, expected] = el.dataset.when.split('='); el.hidden = value(key) !== expected; });
    const checks = all('[data-check]').filter(el => !el.closest('[hidden]'));
    const done = checks.filter(el => el.checked).length;
    text('[data-progress]', `${done} / ${checks.length}개 준비 완료`);
    const progress = one('progress'); if (progress) { progress.max = checks.length || 1; progress.value = done; }
    if (root.dataset.kind === 'golf') {
      const days = number('days');
      text('[data-advice]', days === null ? '남은 기간을 입력하면 먼저 할 일을 안내합니다.' : days <= 1 ? '오늘은 예약 시간·집결 장소·가방을 확인하세요. 새 장비나 스윙 교정보다 이동과 준비 확인에 시간을 쓰세요.' : days <= 7 ? '이번 주에는 실제 사용할 장비를 점검하고, 골프장 이용 조건과 동반자 준비 상황을 확인하세요.' : '시간이 남아 있을 때 장비 대여 여부와 이동 계획부터 정하세요. 연습 일정은 무리 없이 나누어 잡습니다.');
    }
    if (root.dataset.kind === 'job') {
      const totals = {};
      for (const k of ['a','b']) {
        const hours=number(k+'-hours'), rest=number(k+'-break'), commute=number(k+'-commute'), days=number(k+'-days'), fare=number(k+'-fare');
        const impossible=[hours,rest].includes(null) ? false : hours*60+rest>1440;
        const daily=impossible ? null : [hours,rest,commute].includes(null) ? null : hours*60+rest+commute*2;
        const monthly=[daily,days].includes(null) ? null : daily*days;
        const cost=[fare,days].includes(null) ? null : fare*days;
        totals[k]={daily,cost};
        text(`[data-total="${k}"]`, `${impossible ? '근무와 별도 휴게의 합이 24시간을 넘습니다. 중복 입력을 확인하세요.' : daily===null ? '하루 확보 시간: 미확인' : '하루 확보 시간: '+duration(daily)} / 월 확보 시간: ${monthly===null ? '미확인' : duration(monthly)} / 월 교통비: ${cost===null ? '미확인' : cost.toLocaleString('ko-KR')+'원'}`);
        const questions=all(`[data-known="${k}"]`).filter(el=>!el.checked).map(el=>el.dataset.question);
        for(const [part,q] of [['hours','하루 실제 근무시간은 몇 시간인가요?'],['break','별도 휴게시간은 몇 분인가요?'],['commute','실제 출퇴근 시각의 편도 이동은 몇 분 걸리나요?'],['days','비교할 달의 출근일은 며칠인가요?'],['fare','하루 왕복 교통비 중 본인 부담은 얼마인가요?']])if(number(k+'-'+part)===null)questions.push(q);
        const container=one(`[data-questions="${k}"]`); container.replaceChildren();
        const heading=document.createElement('strong'); heading.textContent=`공고 ${k.toUpperCase()} · 지원 전 질문 ${questions.length}개`;container.append(heading);
        const ul=document.createElement('ul'); questions.forEach(q=>{const li=document.createElement('li');li.textContent=q;ul.append(li);});container.append(ul);
        if(!questions.length) { const p=document.createElement('p');p.textContent='입력·체크한 조건을 저장하고 마감·접수 방법을 확인하세요.';container.append(p); }
      }
      text('[data-comparison]', `${[totals.a.daily,totals.b.daily].includes(null) ? '하루 시간 차이: 미확인' : `A − B 하루 시간 차이: ${totals.a.daily-totals.b.daily}분 (양수이면 A가 더 김)`}. ${[totals.a.cost,totals.b.cost].includes(null) ? '월 교통비 차이: 미확인' : `A − B 월 교통비 차이: ${(totals.a.cost-totals.b.cost).toLocaleString('ko-KR')}원 (양수이면 A가 더 큼)`}.`);
    }
    if (root.dataset.kind === 'pig') {
      const max = number('available');
      const totals=[];
      for (const key of ['a', 'b']) {
        const walk=number(key+'-walk'),rest=number(key+'-rest'),out=number(key+'-out'),back=number(key+'-back');
        const total=[walk,rest,out,back].includes(null) ? null : walk+rest+out+back;totals.push(total);
        text(`[data-total="${key}"]`, total===null ? '걷기·휴식·가는 이동·오는 이동을 모두 채우면 합계를 표시합니다. 추가 시간이 없으면 0을 입력하세요.' : `하루 계획 ${duration(total)}${max===null ? '' : total>max*60 ? ` · 확보한 시간보다 ${total-max*60}분 초과` : ` · 남는 시간 ${max*60-total}분`}`);
      }
      text('[data-comparison]',totals.includes(null) ? '두 후보의 시간을 모두 입력하면 하루 시간 차이를 표시합니다.' : `후보 A − 후보 B: ${totals[0]-totals[1]}분. 양수이면 A가 더 오래 걸리는 계획입니다. 공식 난이도와 방문일 통제도 함께 확인하세요.`);
    }
  }
  function summary() {
    const lines = [root.dataset.title, new Date().toLocaleDateString('ko-KR'), ''];
    all('[data-field]').forEach(el => { if (el.closest('[hidden]')) return; const v = el.tagName === 'SELECT' ? el.options[el.selectedIndex].text : el.value; lines.push(`${el.dataset.label}: ${v || '미확인'}`); });
    all('[data-advice], [data-total]').forEach(el => lines.push(el.textContent));
    all('[data-summary]').filter(el=>!el.closest('[hidden]')).forEach(el=>lines.push(el.innerText));
    lines.push('', '준비 목록');
    all('[data-check]').filter(el => !el.closest('[hidden]')).forEach(el => lines.push(`${el.checked ? '[완료]' : '[미확인]'} ${el.closest('label').textContent.trim()}`));
    lines.push('', '함께 읽기');
    all('[data-related] a').filter(el => !el.closest('[hidden]')).forEach(el => lines.push(`${el.textContent.trim()} ${el.href}`));
    return lines.join('\n');
  }
  function click(event) {
    const button = event.target.closest('[data-action]'); if (!button) return;
    const action = button.dataset.action;
    if (action === 'reset') {
      all('form').forEach(form => form.reset());
      text('[data-status]', '입력과 체크를 처음 상태로 되돌렸습니다.'); render();
    }
    if (action === 'copy') {
      let preview=one('[data-copy-preview]');
      if(!preview){preview=document.createElement('textarea');preview.dataset.copyPreview='';preview.readOnly=true;preview.rows=12;preview.setAttribute('aria-label','공유할 준비표 내용');button.closest('.pt-actions').after(preview);}
      preview.value=summary();preview.focus();preview.select();text('[data-status]','공유할 내용을 아래에 펼쳤습니다. 자동 복사가 제한되면 선택된 내용을 직접 복사하거나 텍스트로 저장하세요.');
      navigator.clipboard.writeText(summary()).then(()=>text('[data-status]','준비표를 복사했습니다. 동반자나 본인 메모에 붙여넣을 수 있습니다.')).catch(()=>text('[data-status]','복사를 사용할 수 없습니다. 텍스트 저장을 이용해 주세요.'));
    }
    if (action === 'download') {
      const invalid = all('input[type="number"]').find(el => !el.validity.valid);
      if (invalid) { invalid.focus(); text('[data-status]', '잘못된 숫자를 수정한 뒤 저장해 주세요.'); return; }
      const url = URL.createObjectURL(new Blob([summary()], { type: 'text/plain;charset=utf-8' }));
      const link = document.createElement('a'); link.href = url; link.download = `${root.dataset.kind}-preparation.txt`; link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      text('[data-status]', '준비표를 텍스트 파일로 저장했습니다. 다운로드 목록을 확인하세요.');
    }
    if (action === 'print') window.print();
    if (action === 'sample') {
      const example = { available: '6', 'a-name': '예시 A · 같은 입구로 복귀', 'a-walk': '150', 'a-rest': '40', 'a-travel': '80', 'b-name': '예시 B · 다른 입구로 하산', 'b-walk': '180', 'b-rest': '40', 'b-travel': '160' };
      for (const [key, v] of Object.entries(example)) { const el = one(`[data-field="${key}"]`); if (el) el.value = v; }
      text('[data-status]', '가상의 시간 비교 예시입니다. 실제 코스 수치가 아닙니다. 본인의 확인한 값으로 바꿔주세요.'); render();
    }
  }
  const submit = event => event.preventDefault();
  const printout=document.createElement('pre');printout.className='pt-print';root.append(printout);
  const beforePrint=()=>{printout.textContent=summary();};window.addEventListener('beforeprint',beforePrint);
  const change = event => { const key=event.target.dataset.field; if(['a-route','b-route'].includes(key))preset(key[0]); render(); };
  root.addEventListener('input', render); root.addEventListener('change', change); root.addEventListener('click', click); root.addEventListener('submit', submit);
  render();
  return () => { printout.remove();window.removeEventListener('beforeprint',beforePrint);root.removeEventListener('input', render); root.removeEventListener('change', change); root.removeEventListener('click', click); root.removeEventListener('submit', submit); };
}
