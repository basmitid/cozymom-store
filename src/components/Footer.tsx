const trustItems = [
  { icon: "🔒", label: "안전 결제" },
  { icon: "📱", label: "즉시 다운로드" },
  { icon: "💬", label: "1:1 문의 가능" },
  { icon: "👩", label: "현직 엄마 제작" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--cream-dark)", borderTop: "1px solid var(--border)" }}>
      {/* 신뢰 아이콘 바 */}
      <div
        className="py-8"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {trustItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-xs font-medium" style={{ color: "var(--text-mid)" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 링크 */}
      <div className="py-6" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: "var(--text-mid)" }}>
            <a href="#" className="hover:underline">이용약관</a>
            <a href="#" className="hover:underline">개인정보 취급방침</a>
            <a href="#" className="hover:underline">사업자정보 확인</a>
          </div>
        </div>
      </div>

      {/* 사업자 정보 */}
      <div className="py-8">
        <div className="section-container">
          <p className="text-center text-xs leading-relaxed" style={{ color: "var(--text-light)" }}>
            [상호] <strong>햇살가든</strong> &nbsp; [대표자] <strong>윤신애</strong> &nbsp;
            [사업자 등록번호] <strong>563-12-02706</strong>
            <br />
            [통신판매업 신고] <strong>제2024-고양덕양구-1998호</strong>
            <br />
            10576 경기도 고양시 덕양구 오금로 193 1층 윤신애
            <br />
            shinaeee@naver.com &nbsp;|&nbsp; 010-8103-3176
          </p>
          <p
            className="text-center text-xs mt-4"
            style={{ color: "var(--border)" }}
          >
            © 2024 코지맘 · 햇살가든. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
