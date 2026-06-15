const testimonials = [
  {
    grade: "초3 · 논술·서술형 고민",
    before: "\"논술학원 보내야 하나 매일 고민했어요. 서술형만 나오면 '몰라' 하고 멈춰버려요.\"",
    after: "\"매일 15분 독서+한 줄 쓰기 3주 했더니 스스로 쓰기 시작. 학원 없이도 된다는 자신감이 생겼어요!\"",
    book: "📚 국어 공부습관 엄마 코칭 가이드북",
  },
  {
    grade: "초5 · 독해력·문해력 고민",
    before: "\"책을 읽긴 읽는데 질문하면 대답을 못 해요. 문해력 문제인지도 몰랐어요.\"",
    after: "\"4주 독서법대로 했더니 읽은 책 내용을 스스로 설명해요. 이렇게 빠르게 변할 수 있다니!\"",
    book: "📚 성적을 바꾸는 4주 독서법",
  },
  {
    grade: "초6 · 수행평가 고민",
    before: "\"과학 수행평가가 갑자기 나와서 어떻게 준비해야 할지 몰랐어요.\"",
    after: "\"과목별 가이드대로 준비했더니 선생님께 칭찬받았어요. 아이도 자신감이 생겼어요!\"",
    book: "📚 수행평가 완벽대비 가이드",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-16 md:py-20" style={{ background: "white" }}>
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-dark)" }}>
            기준이 생기니,
            <br />
            <span style={{ color: "var(--primary)" }}>진짜 달라졌다는 엄마들</span>
          </h2>
          <p className="mt-3 text-base" style={{ color: "var(--text-mid)" }}>
            코지맘 전자책을 읽은 엄마들의 실제 이야기
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div key={item.grade} className="card overflow-hidden p-0">
              {/* Before */}
              <div className="p-5" style={{ background: "var(--cream-dark)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "white", color: "var(--text-mid)" }}
                  >
                    😰 Before
                  </span>
                  <span className="text-xs" style={{ color: "var(--text-light)" }}>
                    📍 {item.grade}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                  {item.before}
                </p>
              </div>
              {/* After */}
              <div className="p-5" style={{ background: "var(--primary-light)" }}>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3"
                  style={{ background: "var(--primary)" }}
                >
                  😊 After
                </span>
                <p className="text-sm font-medium leading-relaxed text-white">
                  {item.after}
                </p>
                <p className="mt-3 text-xs text-white/80">{item.book}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm" style={{ color: "var(--text-light)" }}>
          후기는 '진단→기준→루틴→실행'이 실제로 작동한다는 증거입니다.
        </p>
      </div>
    </section>
  );
}
