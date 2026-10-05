"use client";
import { useEffect, useRef } from 'react';
import { initializePlanner } from './engine';
import content from './content.json';
export default function Planner(){ const ref=useRef<HTMLDivElement>(null); useEffect(()=>initializePlanner(ref.current?.querySelector('.prep-tool')),[]); return <><style>{content.css}</style><div ref={ref} dangerouslySetInnerHTML={{__html:content.html}} /></>; }
