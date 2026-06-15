const ebooks = [
  { icon: "📚", title: "성적을 바꾸는 4주 독서법", tag: "독해력", price: "15,000", grade: "초1~6" },
  { icon: "✏️", title: "국어 공부습관 엄마 코칭 가이드북", tag: "논술·서술형", price: "15,000", grade: "초3~6" },
  { icon: "📖", title: "흔들리지 않는 공부 루틴", tag: "공부습관", price: "15,000", grade: "초1~6" },
  { icon: "🎯", title: "수행평가 완벽대비 가이드", tag: "수행평가", price: "18,000", grade: "초5~중1" },
  { icon: "🔬", title: "초등 사교육 없이 과학 상위 0.1%", tag: "과학", price: "15,000", grade: "초3~6" },
  { icon: "📝", title: "서술형 논술 기초 완성", tag: "논술", price: "15,000", grade: "초3~5" },
  { icon: "💡", title: "사고력 키우는 질문 대화법", tag: "사고력", price: "12,000", grade: "초1~4" },
  { icon: "📅", title: "독서 루틴 30일 챌린지", tag: "독서습관", price: "12,000", grade: "초1~6" },
  { icon: "🌟", title: "예비중 엄마 체크리스트", tag: "예비중", price: "무료", grade: "초6" },
  { icon: "🏫", title: "중등 수행평가 준비 로드맵", tag: "수행평가", price: "18,000", grade: "예비중·중1" },
  { icon: "🧠", title: "문해력 4주 완성 프로그램", tag: "문해력", price: "15,000", grade: "초3~6" },
  { icon: "✍️", title: "한 줄 일기로 시작하는 글쓰기", tag: "서술형", price: "12,000", grade: "초1~3" },
  { icon: "📊", title: "학년별 국어 공부 로드맵", tag: "공부계획", price: "15,000", grade: "초1~6" },
  { icon: "🎲", title: "놀면서 키우는 어휘력", tag: "어휘·독해", price: "12,000", grade: "초1~4" },
  { icon: "🚀", title: "자기주도학습 습관 만들기", tag: "공부습관", price: "15,000", grade: "초4~중1" },
];

const tagColors: Record<string, string> = {
  "독해력": "#D4A5C0",
  "논술·서술형": "#A5C4D4",
  "공부습관": "#A5D4B5",
  "수행평가": "#D4BCA5",
  "과학": "#B5A5D4",
  "논술": "#A5C4D4",
  "사고력": "#D4D4A5",
  "독서습관": "#D4A5A5",
  "예비중": "#C9B5A5",
  "문해력": "#A5D4C9",
  "서술형": "#D4C4A5",
  "공부계획": "#B5D4A5",
  "어휘·독해": "#D4A5C9",
};

export default function EbooksSection() {
  return (
    <section id="ebooks" className="py-16 md:py-20" style={{ background: "var(--cream)" }}>
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-dark)" }}>
            우리 아이 고민에 맞는{" "}
            <span style={{ color: "var(--primary)" }}>가이드북</span>
          </h2>
          <p className="mt-3 text-base" style={{ color: "var(--text-mid)" }}>
            논술·독해력·문해력·사고력·독서습관·수행평가·과학 — 15종
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {ebooks.map((book) => (
            <div
              key={book.title}
              className="card cursor-pointer group transition-all hover:-translate-y-1 hover:shadow-lg p-5"
            >
              {/* 아이콘 배경 */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-4"
                style={{ background: "var(--cream-dark)" }}
              >
                {book.icon}
              </div>

              {/* 태그 */}
              <span
                className="inline-block px-2 py-0.5 rounded-full text-xs font-medium text-white mb-2"
                style={{ background: tagColors[book.tag] || "var(--primary-light)" }}
              >
                {book.tag}
              </span>

              <h3
                className="text-sm font-bold mb-2 leading-snug group-hover:text-[var(--primary)] transition-colors"
                style={{ color: "var(--text-dark)" }}
              >
                {book.title}
              </h3>

              <p className="text-xs mb-4" style={{ color: "var(--text-light)" }}>
                대상: {book.grade}
              </p>

              <div className="flex items-center justify-between">
                <span
                  className="font-bold text-base"
                  style={{ color: book.price === "무료" ? "var(--success)" : "var(--primary)" }}
                >
                  {book.price === "무료" ? "무료" : `${book.price}원`}
                </span>
                <button
                  className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all"
                  style={{
                    background: "var(--primary)",
                    color: "white",
                  }}
                >
                  {book.price === "무료" ? "무료 받기" : "구매하기"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#ai" className="btn-outline text-base">
            🤖 어떤 전자책이 맞는지 모르겠다면? AI 상담 받기 →
          </a>
        </div>
      </div>
    </section>
  );
}
