const categories = [
  {
    icon: "✏️",
    title: "논술·사술형",
    desc: "단계별 루틴으로 쓰는 힘을 키우는 방법",
  },
  {
    icon: "📖",
    title: "독해력·문해력",
    desc: "매일 15분 독서 루틴으로 자연스럽게 향상",
  },
  {
    icon: "📚",
    title: "독서·공부습관",
    desc: "잔소리 없이 스스로 읽고 공부하는 루틴 설계",
  },
  {
    icon: "🎯",
    title: "수행평가·중등",
    desc: "과목별 완벽 대비 + 중학교 준비 로드맵",
  },
];

export default function SolutionSection() {
  return (
    <section className="py-16 md:py-20" style={{ background: "var(--cream-dark)" }}>
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-dark)" }}>
            모든 고민, <span style={{ color: "var(--primary)" }}>하나의 기준</span>으로 해결돼요
          </h2>
          <p className="mt-3 text-base" style={{ color: "var(--text-mid)" }}>
            과목별 걱정이 아니라 <strong>습관 구조</strong>가 핵심이에요
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div key={cat.title} className="card text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">{cat.icon}</div>
              <h3
                className="text-base font-bold mb-2"
                style={{ color: "var(--text-dark)" }}
              >
                {cat.title}
              </h3>
              <p className="text-sm" style={{ color: "var(--text-mid)" }}>
                {cat.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#ebooks" className="btn-primary text-base py-3 px-8">
            📚 우리 아이에 맞는 전자책 찾기 →
          </a>
        </div>
      </div>
    </section>
  );
}
