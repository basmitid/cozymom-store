const painPoints = [
  {
    icon: "✏️",
    title: "논술·사술형이 막막해요",
    desc: "학원 보내야 하나 매일 고민했어요. 서술형만 나오면 '몰라' 하고 멈춰버려요.",
  },
  {
    icon: "📖",
    title: "독해력·문해력이 약해요",
    desc: "읽은 것 같은데 질문하면 대답을 못 해요. 문해력 문제인지도 몰랐어요.",
  },
  {
    icon: "📅",
    title: "공부 습관이 안 잡혀요",
    desc: "계획표 만들어도 작심삼일, 독서도 산소라인이 없어요.",
  },
  {
    icon: "🎯",
    title: "수행평가·중학교가 두려워요",
    desc: "갑자기 나오는 수행평가, 중학교 준비를 어디서부터 해야 할지 막막해요.",
  },
];

export default function PainPointsSection() {
  return (
    <section className="py-16 md:py-20" style={{ background: "var(--cream)" }}>
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-sm font-medium mb-2" style={{ color: "var(--primary)" }}>
            이런 고민이 있으셨나요?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-dark)" }}>
            엄마들이 매일 하는 <span style={{ color: "var(--primary)" }}>4가지 고민</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {painPoints.map((item) => (
            <div key={item.title} className="card flex gap-4">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <h3
                  className="text-base font-bold mb-1"
                  style={{ color: "var(--text-dark)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-mid)" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 전환 문구 */}
        <div className="text-center mt-12">
          <p className="text-base mb-2" style={{ color: "var(--text-mid)" }}>
            코지맘은 <strong style={{ color: "var(--primary)" }}>바로 이 고민</strong>에서 시작했습니다.
          </p>
          <p className="text-lg font-medium" style={{ color: "var(--text-dark)" }}>
            기준을 잡아주는 가이드가 있으면,
            사교육 없이도 우리 집만의 공부 루틴을 만들 수 있어요.
          </p>
          <div className="mt-6">
            <a href="#ai" className="btn-outline">
              내 아이 고민 유형 알아보기 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
