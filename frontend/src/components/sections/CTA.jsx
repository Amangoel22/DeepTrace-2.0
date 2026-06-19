import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FiArrowRight, FiPlayCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

function CTA() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      className={`relative overflow-hidden px-6 py-24 lg:px-8 ${isDark
        ? "bg-slate-950 text-white"
        : "bg-white text-slate-900"
        }`}
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <span
          className={`inline-flex items-center rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${isDark
            ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
            : "border-cyan-600/20 bg-cyan-500/10 text-cyan-700"
            }`}
        >
          Start Investigating
        </span>

        <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          Ready to Verify Digital Media?
        </h2>

        <p
          className={`mx-auto mt-6 max-w-2xl text-lg leading-8 ${isDark ? "text-slate-400" : "text-slate-600"
            }`}
        >
          Analyze suspicious videos, uncover manipulation patterns,
          and generate evidence-ready forensic reports with DeepTrace.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/upload"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:scale-[1.02] hover:bg-cyan-400"
          >
            Analyze Video
            <FiArrowRight />
          </Link>

          <button
            className={`inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 font-semibold transition ${isDark
              ? "border-white/10 hover:bg-white/5"
              : "border-slate-300 hover:bg-slate-100"
              }`}
          >
            <FiPlayCircle />
            Create Account
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;