const stats = [
  { value: "8.9만", label: "팔로워" },
  { value: "1.3만", label: "네이버 카페" },
  { value: "6,000+", label: "전자책 판매" },
  { value: "5.0", label: "후기 평점" },
];

const badges = [
  "전자책 15종 · 15,000원부터",
  "🎁 무료 체크리스트 제공",
  "⭐ 후기 평점 5.0 만점",
];

export default function StatsSection() {
  return (
    <section className="py-10" style={{ background: "white", borderBottom: "1px solid var(--border)" }}>
      <div className="section-container">
        {/* 뱃지 바 */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {badges.map((badge) => (
            <span
              key={badge}
              className="px-4 py-2 rounded-full text-sm font-medium"
              style={{ background: "var(--cream-dark)", color: "var(--text-mid)" }}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* 숫자 통계 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ color: "var(--primary)" }}
              >
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: "var(--text-light)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 태그 */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {["#논술", "#독해력", "#문해력", "#사고력", "#서술형평가", "#수행평가", "#공부습관", "#독서습관"].map(
            (tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm font-medium cursor-pointer transition-colors"
                style={{ background: "var(--cream-mid)", color: "var(--primary-dark)" }}
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
