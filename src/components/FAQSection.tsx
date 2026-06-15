"use client";

import { useState } from "react";

const faqs = [
  {
    q: "논술학원을 안 보내도 정말 되나요?",
    a: "네, 됩니다. 코지맘 가이드북은 학원 없이도 집에서 실행할 수 있는 단계별 루틴을 제공해요. 하루 15~30분만 투자하면 돼요. 실제로 6,000명이 넘는 엄마들이 학원 없이 이 방법으로 아이의 변화를 경험했어요.",
  },
  {
    q: "독해력·문해력을 키우는 데 얼마나 걸리나요?",
    a: "개인차가 있지만, 4주 독서법 루틴을 꾸준히 따라가면 보통 3~4주 내에 변화를 느낄 수 있어요. 빠른 경우 2주 만에 '이해하고 설명하는' 모습이 나타나기도 해요.",
  },
  {
    q: "어떤 전자책부터 시작하면 좋을까요?",
    a: "학년과 현재 가장 큰 고민에 따라 달라요. AI 상담을 통해 우리 아이에게 맞는 첫 번째 전자책을 추천받을 수 있어요. 또는 '성적을 바꾸는 4주 독서법'이 가장 많이 선택되는 입문 가이드예요.",
  },
  {
    q: "수행평가·서술형 대비도 되나요?",
    a: "네, 수행평가 완벽대비 가이드는 초5~중1 대상으로 과목별 완벽 대비 전략을 담고 있어요. 단순 시험 준비가 아닌, 평소 루틴으로 자연스럽게 준비하는 방법을 안내해요.",
  },
  {
    q: "전자책은 어떻게 보나요?",
    a: "구매 후 즉시 PDF 파일로 다운로드할 수 있어요. 스마트폰, 태블릿, PC 등 어떤 기기에서도 볼 수 있어요. 별도 앱 설치 없이 바로 사용 가능합니다.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20" style={{ background: "white" }}>
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-dark)" }}>
            자주 묻는 질문
          </h2>
          <p className="mt-3 text-base" style={{ color: "var(--text-mid)" }}>
            구매 전 가장 많이 물어보시는 질문들
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="card p-0 overflow-hidden cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex items-center justify-between p-5">
                <span className="font-semibold text-sm pr-4" style={{ color: "var(--text-dark)" }}>
                  {faq.q}
                </span>
                <span
                  className="text-xl flex-shrink-0 transition-transform"
                  style={{
                    color: "var(--primary)",
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0)",
                  }}
                >
                  +
                </span>
              </div>
              {openIndex === i && (
                <div
                  className="px-5 pb-5 text-sm leading-relaxed"
                  style={{ color: "var(--text-mid)", borderTop: "1px solid var(--border)" }}
                >
                  <p className="pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
