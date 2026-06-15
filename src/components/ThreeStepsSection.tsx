const steps = [
  {
    num: "01",
    badge: "STEP 1 · 무료",
    badgeBg: "var(--primary)",
    icon: "🤖",
    title: "AI 코지맘 진단",
    desc: "학년·성향·상황을 입력하면 AI가 1줄 처방을 드립니다.",
    sub: "무료 · 24시간 · 하루 10회 상담 가능",
    cta: "무료 진단 시작 →",
    ctaStyle: "primary",
  },
  {
    num: "02",
    badge: "STEP 2 · 가이드",
    badgeBg: "var(--primary-dark)",
    icon: "📚",
    title: "전자책 & 루틴북",
    desc: "검증된 기준이 정리된 실행 가이드. 우리 집에 바로 적용할 수 있어요.",
    sub: "15,000원~ · 누적 6,000부 판매",
    cta: "가이드북 보기 →",
    ctaStyle: "outline",
  },
  {
    num: "03",
    badge: "STEP 3 · 맞춤",
    badgeBg: "var(--text-light)",
    icon: "💬",
    title: "1:1 & 소그룹 코칭",
    desc: "4주간 우리 집 상황에 맞춘 밀착 코칭. 엄마와 함께 학습할 수 있는 구조.",
    sub: "엄마와 함께 학습할 수 있는 구조",
    cta: "상담 먼저 받기 →",
    ctaStyle: "primary",
    comingSoon: true,
  },
];

export default function ThreeStepsSection() {
  return (
    <section className="py-16 md:py-20" style={{ background: "white" }}>
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-dark)" }}>
            막막하다면,{" "}
            <span style={{ color: "var(--primary)" }}>3단계</span>로 시작해요
          </h2>
          <p className="mt-3 text-base" style={{ color: "var(--text-mid)" }}>
            복잡하게 생각하지 않아도 돼요. 딱 이 순서대로만 해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.num}
              className="card relative"
              style={{
                background: "var(--cream-dark)",
                border: "1px solid var(--border)",
              }}
            >
              {step.comingSoon && (
                <span
                  className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-semibold text-white"
                  style={{ background: "var(--text-light)" }}
                >
                  준비중
                </span>
              )}
              <div
                className="text-5xl font-bold mb-2"
                style={{ color: "var(--border)" }}
              >
                {step.num}
              </div>
              <div className="text-3xl mb-3">{step.icon}</div>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3"
                style={{ background: step.badgeBg }}
              >
                {step.badge}
              </span>
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: "var(--text-dark)" }}
              >
                {step.title}
              </h3>
              <p className="text-sm mb-2" style={{ color: "var(--text-mid)" }}>
                {step.desc}
              </p>
              <p className="text-xs mb-5" style={{ color: "var(--primary)" }}>
                {step.sub}
              </p>
              <a
                href="#"
                className={step.ctaStyle === "primary" ? "btn-primary text-sm py-2 w-full justify-center" : "btn-outline text-sm py-2 w-full justify-center"}
              >
                {step.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
