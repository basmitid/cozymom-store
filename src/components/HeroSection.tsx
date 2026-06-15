export default function HeroSection() {
  return (
    <section
      style={{ background: "var(--cream-dark)" }}
      className="py-16 md:py-24"
    >
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          {/* 배지 */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ background: "var(--primary-light)", color: "white" }}>
            🎁 무료 자료부터 서울형~까지 공부 루틴을 한곳에
          </div>

          {/* 헤드라인 */}
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "var(--text-dark)" }}
          >
            사교육 없이도
            <br />
            <span style={{ color: "var(--primary)" }}>우리 아이 공부 습관,</span>
            <br />
            만들 수 있어요.
          </h1>

          <p
            className="text-base md:text-lg mb-8 max-w-xl mx-auto"
            style={{ color: "var(--text-mid)" }}
          >
            6,000명의 엄마가 선택한 초등 공부 가이드북.
            <br />
            학원이 없어도 집에서, 엄마가 함께 공부 루틴을 만들 수 있어요.
          </p>

          {/* CTA 버튼들 */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#ebooks" className="btn-primary text-base py-3 px-8 justify-center">
              📚 전자책 찾기 →
            </a>
            <a href="#free" className="btn-outline text-base py-3 px-8 justify-center">
              무료 체크리스트 받기
            </a>
          </div>

          {/* 신뢰 지표 - 작은 텍스트 */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm"
            style={{ color: "var(--text-light)" }}>
            <span>✓ 6,000명 선택</span>
            <span>✓ 후기 평점 5.0</span>
            <span>✓ 무료 AI 진단</span>
          </div>
        </div>
      </div>
    </section>
  );
}
