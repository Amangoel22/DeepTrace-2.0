import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <footer
      className={`border-t px-6 py-10 lg:px-8 ${
        isDark
          ? "border-white/10 bg-slate-950 text-white"
          : "border-slate-200 bg-white text-slate-900"
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold">DeepTrace</h3>
          <p
            className={`mt-2 text-sm ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            AI-powered media verification and forensic analysis.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm font-medium">
          <a href="#features" className="hover:text-cyan-400">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-cyan-400">
            How It Works
          </a>
          <a href="#login" className="hover:text-cyan-400">
            Login
          </a>
          <a href="#signup" className="hover:text-cyan-400">
            Sign Up
          </a>
        </div>

        {/* Copyright */}
        <div
          className={`text-sm ${
            isDark ? "text-slate-500" : "text-slate-500"
          }`}
        >
          © 2026 DeepTrace
          <br />
          Built for digital media verification.
        </div>
      </div>
    </footer>
  );
}

export default Footer;