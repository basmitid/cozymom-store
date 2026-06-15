const rows = [
  { label: "월 비용", school: "30~80만원", online: "10~20만원", cozymom: "1.5만원 (1권)" },
  { label: "논술·서술형", school: "별도 학원", online: "이론 중심", cozymom: "실전 가이드" },
  { label: "독해력·문해력", school: "과목 분리", online: "시청 위주", cozymom: "루틴 통합" },
  { label: "수행평가", school: "시험 직전", online: "비연계", cozymom: "과목별 가이드" },
  { label: "맞춤도", school: "반 단위", online: "선택형", cozymom: "우리 집 맞춤" },
  { label: "부모 역할", school: "셔틀+비용", online: "관리 어려움", cozymom: "기준 코치" },
];

export default function ComparisonSection() {
  return (
    <section className="py-16 md:py-20" style={{ background: "var(--cream)" }}>
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-dark)" }}>
            학원 vs 인강 vs 코지맘
          </h2>
          <p className="mt-3 text-base" style={{ color: "var(--text-mid)" }}>
            같은 고민, 다른 해법.
          </p>
        </div>

        <div className="max-w-3xl mx-auto overflow-x-auto">
          <table className="w-full" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th className="py-3 px-4 text-left text-sm" style={{ color: "var(--text-light)" }}></th>
                <th className="py-3 px-4 text-center text-sm font-semibold" style={{ color: "var(--text-mid)" }}>학원</th>
                <th className="py-3 px-4 text-center text-sm font-semibold" style={{ color: "var(--text-mid)" }}>인강</th>
                <th
                  className="py-3 px-4 text-center text-sm font-bold rounded-t-xl"
                  style={{ background: "var(--primary)", color: "white" }}
                >
                  코지맘
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  style={{
                    background: i % 2 === 0 ? "white" : "var(--cream-dark)",
                  }}
                >
                  <td
                    className="py-3 px-4 text-sm font-medium"
                    style={{ color: "var(--primary-dark)" }}
                  >
                    {row.label}
                  </td>
                  <td
                    className="py-3 px-4 text-sm text-center"
                    style={{ color: "var(--text-mid)" }}
                  >
                    {row.school}
                  </td>
                  <td
                    className="py-3 px-4 text-sm text-center"
                    style={{ color: "var(--text-mid)" }}
                  >
                    {row.online}
                  </td>
                  <td
                    className="py-3 px-4 text-sm text-center font-semibold"
                    style={{
                      background: i % 2 === 0 ? "rgba(201,123,90,0.08)" : "rgba(201,123,90,0.12)",
                      color: "var(--primary-dark)",
                    }}
                  >
                    ✅ {row.cozymom}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-10">
          <a href="#ebooks" className="btn-primary text-base py-3 px-8">
            📚 코지맘 전자책 바로 보기 →
          </a>
        </div>
      </div>
    </section>
  );
}
