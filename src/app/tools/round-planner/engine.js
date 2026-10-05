export function initializePlanner(root) {
  if (!root) return () => {};
  const all = (s) => [...root.querySelectorAll(s)];
  const one = (s) => root.querySelector(s);
  const value = (id) => one(`[data-field="${id}"]`)?.value ?? '';
  const text = (s, v) => { const el = one(s); if (el) el.textContent = v; };
  const number = (id) => { const el = one(`[data-field="${id}"]`), v = value(id); return v.trim() && el.validity.valid && Number.isFinite(Number(v)) && Number(v) >= 0 ? Number(v) : null; };
  function render() {
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
      const hours = number('hours'), commute = number('commute');
      const total = hours !== null && commute !== null ? hours * 60 + commute * 2 : null;
      text('[data-advice]', total === null ? '근무시간과 편도 통근시간을 입력하면 하루에 확보할 시간을 계산합니다.' : `근무 ${hours}시간 + 왕복 통근 ${commute * 2}분 = 하루 ${Math.floor(total / 60)}시간 ${total % 60}분. 식사·별도 휴게·출근 준비 시간은 추가로 확보하세요. 이 값은 임금 계산이나 채용 적합성 판정이 아닙니다.`);
    }
    if (root.dataset.kind === 'pig') {
      const max = number('available');
      for (const key of ['a', 'b']) {
        const walk = number(`${key}-walk`), rest = number(`${key}-rest`), travel = number(`${key}-travel`);
        const total = walk !== null && rest !== null && travel !== null ? walk + rest + travel : null;
        text(`[data-total="${key}"]`, total === null ? '왕복 걷기·휴식·왕복 이동 시간을 모두 채우면 합계를 표시합니다.' : `하루 예상 ${Math.floor(total / 60)}시간 ${total % 60}분${max !== null ? total > max * 60 ? ' · 확보한 시간을 초과합니다. 구간이나 일정을 다시 정하세요.' : ` · 남는 시간 ${Math.round(max * 60 - total)}분. 교통 지연과 현장 변수를 별도로 고려하세요.` : ''}`);
      }
    }
  }
  function summary() {
    const lines = [root.dataset.title, new Date().toLocaleDateString('ko-KR'), ''];
    all('[data-field]').forEach(el => { if (el.closest('[hidden]')) return; const v = el.tagName === 'SELECT' ? el.options[el.selectedIndex].text : el.value; if (v) lines.push(`${el.dataset.label}: ${v}`); });
    all('[data-advice], [data-total]').forEach(el => lines.push(el.textContent));
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
  root.addEventListener('input', render); root.addEventListener('change', render); root.addEventListener('click', click); root.addEventListener('submit', submit);
  render();
  return () => { root.removeEventListener('input', render); root.removeEventListener('change', render); root.removeEventListener('click', click); root.removeEventListener('submit', submit); };
}
