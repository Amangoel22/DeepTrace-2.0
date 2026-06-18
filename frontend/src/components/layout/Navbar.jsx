import { useContext, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeContext";

const navigationLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Roadmap", href: "#roadmap" },
];

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDark = theme === "dark";

  const surfaceClasses = isDark
    ? "border-white/10 bg-slate-950/85 text-white"
    : "border-slate-200/80 bg-white/85 text-slate-950";
  const mutedTextClasses = isDark
    ? "text-slate-300 hover:text-white"
    : "text-slate-600 hover:text-slate-950";
  const secondaryButtonClasses = isDark
    ? "border-white/10 bg-white/5 text-slate-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950";

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl ${surfaceClasses}`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        <a
          href="#"
          onClick={closeMenu}
          className="flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20">
            D
          </span>
          <span className="text-lg font-semibold tracking-tight">DeepTrace</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${mutedTextClasses}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
            className={`flex size-10 items-center justify-center rounded-xl border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${secondaryButtonClasses}`}
          >
            {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#login"
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${mutedTextClasses}`}
            >
              Login
            </a>
            <a
              href="#signup"
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              Sign Up
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((menuOpen) => !menuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className={`flex size-10 items-center justify-center rounded-xl border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 md:hidden ${secondaryButtonClasses}`}
          >
            {isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className={`border-t px-4 py-4 md:hidden ${
            isDark ? "border-white/10" : "border-slate-200"
          }`}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${mutedTextClasses}`}
              >
                {link.label}
              </a>
            ))}
            <div
              className={`my-2 border-t ${
                isDark ? "border-white/10" : "border-slate-200"
              }`}
            />
            <a
              href="#login"
              onClick={closeMenu}
              className={`rounded-xl px-3 py-2.5 text-center text-sm font-semibold transition-colors ${secondaryButtonClasses}`}
            >
              Login
            </a>
            <a
              href="#signup"
              onClick={closeMenu}
              className="mt-1 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-2.5 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
