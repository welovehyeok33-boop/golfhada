import type { Metadata } from 'next';
import Link from 'next/link';
import Planner from './Planner';
export const metadata:Metadata={title:"첫 라운드 준비 도우미",description:"남은 기간·장비·이동 방법을 골라 준비 목록을 줄여 보세요. 동반자에게 물어볼 내용과 내가 챙길 것을 분리하면 전날의 혼란이 줄어듭니다.",alternates:{canonical:"/tools/round-planner"}};
export default function Page(){return <><div className="mx-auto max-w-5xl px-6 pt-8"><Link href="/" className="text-sm underline">홈으로</Link><h1 className="mt-4 text-3xl font-bold">첫 라운드 준비 도우미</h1></div><Planner/></>;}
