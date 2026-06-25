"use client";

import { useState } from "react";
import { siteConfig } from "@/config";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`[${siteConfig.name} 문의] ${name || "문의"}`);
    const body = encodeURIComponent(
      `이름: ${name}\n회신 이메일: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "w-full rounded-lg border border-green-200 px-3 py-2 text-sm outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500";

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-green-900">이름</label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} required className={`mt-1 ${inputClass}`} />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-green-900">회신 이메일</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className={`mt-1 ${inputClass}`} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-green-900">문의 내용</label>
        <textarea id="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required className={`mt-1 ${inputClass}`} />
      </div>
      <button type="submit" className="rounded-full bg-green-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-green-700">
        메일 보내기
      </button>
    </form>
  );
}
