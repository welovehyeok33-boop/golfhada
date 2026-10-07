"use client";
import { useState } from "react";
const won=(n:number)=>n.toLocaleString("ko-KR")+"원";
const fields=[['green','그린피 (1인)'],['meal','식사·개인 기타 (1인)'],['cart','카트비 (팀 전체)'],['caddie','캐디피 (팀 전체)'],['shared','공동 교통·기타 (팀 전체)']] as const;
export default function RoundCostCalculator(){
 const [values,setValues]=useState<Record<string,string>>({green:'150000',meal:'15000',cart:'100000',caddie:'150000',shared:'0'});
 const [people,setPeople]=useState(4),[memo,setMemo]=useState(''),[status,setStatus]=useState('');
 const valid=fields.every(([k])=>values[k].trim()!=='' && Number.isInteger(Number(values[k])) && Number(values[k])>=0 && Number(values[k])<=1000000000);
 const personal=Number(values.green)+Number(values.meal),shared=Number(values.cart)+Number(values.caddie)+Number(values.shared);
 const base=Math.floor(shared/people),remainder=shared%people,total=personal*people+shared;
 const summary=valid ? ['라운드 비용·동반자 정산표',`인원: ${people}명`,...fields.map(([k,label])=>`${label}: ${won(Number(values[k]))}`),`개인 비용 합계: 1인 ${won(personal)}`,`팀 공통 비용: ${won(shared)}`,`팀 전체 합계: ${won(total)}`,...Array.from({length:people},(_,i)=>`동반자 ${i+1}: ${won(personal+base+(i<remainder?1:0))}`),`예약·정산 메모: ${memo||'미입력'}`,'개인 비용은 모두 같다고 가정합니다. 개인별 할인·식사 차이는 별도 정산하세요.','팀 공통 금액을 원 단위로 나누고 남은 1원씩을 앞 번호부터 배분합니다. 번호는 정산 예시이며 누가 부담할지는 함께 정하세요.'].join('\n') : '금액을 모두 0~1,000,000,000원의 정수로 입력해 주세요. 빈칸은 미확인입니다.';
 const save=()=>{const url=URL.createObjectURL(new Blob([summary],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='golf-round-cost.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);setStatus('정산표를 저장했습니다.');};
 const inputClass='w-full min-w-0 rounded-lg border border-green-200 bg-white p-3 text-green-900';
 return <section className="round-cost rounded-2xl border border-green-100 bg-cream p-5 sm:p-6">
 <style>{`@media print{body *{visibility:hidden}.round-cost,.round-cost *{visibility:visible}.round-cost{position:absolute;left:0;top:0;width:100%;background:white}.round-cost .cost-form,.round-cost .cost-actions,.round-cost .cost-screen{display:none}.round-cost pre{white-space:pre-wrap;font:14px/1.7 sans-serif}}`}</style>
 <div className="cost-form"><p className="mb-5 text-sm">기본 금액은 계산 예시입니다. 예약에서 확인한 금액으로 바꾸세요. 무료라고 확인한 항목은 0, 아직 모르는 항목은 빈칸으로 두세요.</p>
 <div className="grid gap-4 sm:grid-cols-2">{fields.map(([k,label])=><label key={k} className="block text-sm font-medium">{label}<input className={inputClass} type="number" inputMode="numeric" min="0" max="1000000000" step="1" value={values[k]} onChange={e=>setValues({...values,[k]:e.target.value})}/></label>)}</div>
 <fieldset className="mt-5"><legend className="mb-2 font-semibold">함께 나눌 인원</legend><div className="flex gap-2">{[1,2,3,4].map(n=><button key={n} type="button" onClick={()=>setPeople(n)} aria-pressed={people===n} className={`min-h-12 flex-1 rounded-lg border p-2 ${people===n?'bg-green-700 text-white':'bg-white text-green-900'}`}>{n}명</button>)}</div></fieldset>
 <label className="mt-5 block text-sm font-medium">예약·정산 메모<input className={inputClass} maxLength={250} value={memo} onChange={e=>setMemo(e.target.value)} placeholder="예: 공동 교통비에 주차 포함, 식사는 각자 결제"/></label></div>
 <div className="mt-6 rounded-xl border border-green-200 bg-white p-4" aria-live="polite"><h2 className="mb-3 text-xl font-bold">인원별 정산 결과</h2><pre className="whitespace-pre-wrap break-words font-sans text-sm leading-7">{summary}</pre></div>
 <div className="cost-actions mt-5 flex flex-wrap gap-3"><button className="rounded-lg bg-green-700 p-3 text-white disabled:opacity-40" disabled={!valid} onClick={()=>navigator.clipboard.writeText(summary).then(()=>setStatus('동반자 공유용 정산표를 복사했습니다.')).catch(()=>setStatus('복사를 사용할 수 없습니다. 텍스트 저장을 이용하세요.'))}>정산표 복사</button><button className="rounded-lg border p-3 disabled:opacity-40" disabled={!valid} onClick={save}>텍스트 저장</button><button className="rounded-lg border p-3 disabled:opacity-40" disabled={!valid} onClick={()=>window.print()}>인쇄 / PDF</button></div>
 <p className="cost-screen mt-3 text-sm" role="status">{status}</p><p className="cost-screen mt-3 text-sm">입력은 이 계산기에서 서버로 전송하거나 자동 저장하지 않습니다. 복사·다운로드한 정산표는 기기에 남습니다. <a className="underline" href="/tools/round-planner">집결·장비 준비표 만들기 →</a></p>
 </section>;
}
