export default function CTASection() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "var(--primary-dark)" }}
    >
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          {/* 할인 배지 */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
            style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
          >
            🏷️ 지금 전 상품 25% 할인 중 · 20,000원 → 15,000원
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            엄마의 기준이 서는 순간,
            <br />
            아이의 하루가 달라집니다.
          </h2>

          <p className="text-base mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
            지금도 준비해 쓰고 있다면, 이제는 더 버티지 않아도 됩니다.
            <br />
            아이만 보지 마세요. 엄마의 방식까지 함께 봐야
            <br />
            비로소 우리 집 공부가 흔들리지 않습니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a
              href="#ebooks"
              className="text-base py-4 px-10 rounded-xl font-bold transition-all justify-center inline-flex items-center gap-2"
              style={{ background: "white", color: "var(--primary-dark)" }}
            >
              📚 우리 집에 맞는 전자책 찾기 →
            </a>
          </div>

          <div className="flex flex-col items-center gap-2">
            <a
              href="#free"
              className="text-sm underline"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              🎁 무료 체크리스트만 먼저 받기 →
            </a>
            <div
              className="flex flex-wrap justify-center gap-3 text-sm mt-2"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              <span>✓ 6,000명 선택</span>
              <span>✓ 5.0 만점</span>
              <span>✓ 무료 AI 진단</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
