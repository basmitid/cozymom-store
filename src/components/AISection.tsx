export default function AISection() {
  return (
    <section
      id="ai"
      className="py-16 md:py-20"
      style={{ background: "var(--cream-dark)" }}
    >
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{ background: "var(--primary-light)", color: "white" }}
          >
            🤖 무료 AI 상담
          </span>

          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--text-dark)" }}
          >
            어떤 전자책이 맞을지
            <br />
            모르겠다면?
          </h2>
          <p className="text-base mb-8" style={{ color: "var(--text-mid)" }}>
            아이 학년, 고민, 현재 상황을 알려주시면
            <br />
            코지맘 AI가 딱 맞는 전자책을 추천해드려요.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="btn-primary text-base py-3 px-8 justify-center">
              🎯 맞춤 전자책 추천 받기 →
            </a>
            <a href="#" className="btn-outline text-base py-3 px-8 justify-center">
              AI 상담 시작하기 →
            </a>
          </div>

          {/* AI 특징 */}
          <div
            className="mt-10 grid grid-cols-3 gap-4 text-center p-6 rounded-2xl"
            style={{ background: "white", border: "1px solid var(--border)" }}
          >
            {[
              { icon: "⚡", label: "무료", sub: "완전 무료" },
              { icon: "🕐", label: "24시간", sub: "언제든지" },
              { icon: "🔄", label: "10회", sub: "하루 상담 가능" },
            ].map((feat) => (
              <div key={feat.label}>
                <div className="text-2xl mb-1">{feat.icon}</div>
                <div className="text-sm font-bold" style={{ color: "var(--primary)" }}>
                  {feat.label}
                </div>
                <div className="text-xs" style={{ color: "var(--text-light)" }}>
                  {feat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
