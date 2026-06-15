"use client";

import { useState } from "react";

const navItems = [
  { label: "전자책 플레이어", href: "#ebooks" },
  { label: "무료 체크리스트", href: "#free" },
  { label: "AI 처방전", href: "#ai" },
  { label: "고객 후기", href: "#reviews" },
  { label: "내 서재", href: "#mybooks" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{ background: "white", borderBottom: "1px solid var(--border)" }}
      className="sticky top-0 z-50"
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <a href="#" className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold"
              style={{ background: "var(--primary)" }}
            >
              C
            </div>
            <span
              className="text-lg font-bold tracking-tight"
              style={{ color: "var(--primary-dark)" }}
            >
              Cozy<span style={{ color: "var(--primary)" }}>Mom</span>
            </span>
          </a>

          {/* 데스크탑 네비 */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--text-mid)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--primary)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text-mid)")
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a href="#ebooks" className="btn-primary hidden sm:inline-flex text-sm py-2 px-4">
              전자책 보기
            </a>
            {/* 햄버거 */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="메뉴"
            >
              <div className="w-5 h-0.5 mb-1" style={{ background: "var(--text-dark)" }} />
              <div className="w-5 h-0.5 mb-1" style={{ background: "var(--text-dark)" }} />
              <div className="w-5 h-0.5" style={{ background: "var(--text-dark)" }} />
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {menuOpen && (
          <div
            className="md:hidden py-4 border-t"
            style={{ borderColor: "var(--border)" }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm font-medium"
                style={{ color: "var(--text-mid)" }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#ebooks" className="btn-primary mt-3 text-sm py-2 px-4 w-full justify-center">
              전자책 보기
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
