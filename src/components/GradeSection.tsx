const grades = [
  {
    icon: "🌱",
    range: "초1~2학년",
    desc: "독서습관이 독해력·문해력·사고력의 기초. 억지 없이 잡는 독서 루틴.",
    books: ["📚 성적을 바꾸는 4주 독서법", "📚 흔들리지 않는 공부 루틴"],
  },
  {
    icon: "📚",
    range: "초3~4학년",
    desc: "독해력·문해력 차이가 벌어지는 시기. 초등국어와 서술형 쓰기 루틴.",
    books: ["📚 국어 공부습관 엄마 코칭 가이드북", "📚 성적을 바꾸는 4주 독서법"],
  },
  {
    icon: "✏️",
    range: "초5~6학년",
    desc: "서술형·논술 비중이 커지고 수행평가 본격화. 사고력을 함께 준비.",
    books: ["📚 수행평가 완벽대비 가이드", "📚 초등 사교육 없이 과학 상위 0.1%"],
  },
  {
    icon: "🎯",
    range: "예비중",
    desc: "중등 수행평가·서술형·독서 포트폴리오 준비. 초6 겨울방학이 골든타임.",
    books: ["📚 예비중 아이 엄마 체크리스트 (무료)", "📚 수행평가 완벽대비 가이드"],
  },
];

export default function GradeSection() {
  return (
    <section className="py-16 md:py-20" style={{ background: "white" }}>
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-dark)" }}>
            우리 아이 학년이{" "}
            <span style={{ color: "var(--primary)" }}>어떻게 되나요?</span>
          </h2>
          <p className="mt-3 text-base" style={{ color: "var(--text-mid)" }}>
            학년마다 집중해야 할 포인트가 달라요
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {grades.map((grade) => (
            <div key={grade.range} className="card">
              <div className="text-3xl mb-3">{grade.icon}</div>
              <h3
                className="text-base font-bold mb-2"
                style={{ color: "var(--text-dark)" }}
              >
                {grade.range}
              </h3>
              <p className="text-sm mb-4" style={{ color: "var(--text-mid)" }}>
                {grade.desc}
              </p>
              <ul className="space-y-1">
                {grade.books.map((book) => (
                  <li key={book} className="text-xs" style={{ color: "var(--primary)" }}>
                    {book}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
