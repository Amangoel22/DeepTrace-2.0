import { useContext } from "react";
import {
  FiAlertTriangle,
  FiArrowRight,
  FiCheckCircle,
  FiPlay,
  FiShield,
  FiUploadCloud,
} from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeContext";

const suspiciousTimestamps = [
  { time: "00:12", confidence: "High", width: "w-[82%]" },
  { time: "00:38", confidence: "Medium", width: "w-[58%]" },
  { time: "01:04", confidence: "Low", width: "w-[34%]" },
];

function Hero() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const sectionClasses = isDark
    ? "bg-slate-950 text-white"
    : "bg-slate-50 text-slate-950";
  const mutedTextClasses = isDark ? "text-slate-400" : "text-slate-600";
  const cardClasses = isDark
    ? "border-white/10 bg-slate-900/90 shadow-black/30"
    : "border-slate-200 bg-white/95 shadow-slate-300/50";
  const insetClasses = isDark
    ? "border-white/10 bg-slate-950/70"
    : "border-slate-200 bg-slate-50";

  return (
    <section
      className={`relative isolate overflow-hidden ${sectionClasses}`}
      aria-labelledby="hero-heading"
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] opacity-70 ${
          isDark
            ? "bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_36%),radial-gradient(circle_at_82%_22%,rgba(59,130,246,0.18),transparent_32%)]"
            : "bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_36%),radial-gradient(circle_at_82%_22%,rgba(59,130,246,0.12),transparent_32%)]"
        }`}
      />

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <div
            className={`mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wide ${
              isDark
                ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                : "border-cyan-600/20 bg-cyan-500/10 text-cyan-700"
            }`}
          >
            <FiShield aria-hidden="true" className="text-sm" />
            AI-Powered Media Verification
          </div>

          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl lg:leading-[1.08]"
          >
            Detect Deepfakes{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Before They Spread
            </span>
          </h1>

          <p
            className={`mt-6 max-w-xl text-base leading-8 sm:text-lg ${mutedTextClasses}`}
          >
            DeepTrace analyzes digital media with advanced AI to reveal
            manipulation signals, suspicious moments, and clear authenticity
            insights before misinformation gains momentum.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#analyze"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              <FiUploadCloud aria-hidden="true" className="text-lg" />
              Analyze Video
              <FiArrowRight aria-hidden="true" />
            </a>
            <a
              href="#demo"
              className={`inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${
                isDark
                  ? "border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10"
                  : "border-slate-200 bg-white text-slate-800 shadow-sm hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              <span
                className={`flex size-6 items-center justify-center rounded-full ${
                  isDark ? "bg-white/10" : "bg-slate-100"
                }`}
              >
                <FiPlay aria-hidden="true" className="ml-0.5 text-xs" />
              </span>
              Watch Demo
            </a>
          </div>

          <div className={`mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs ${mutedTextClasses}`}>
            <span className="flex items-center gap-1.5">
              <FiCheckCircle aria-hidden="true" className="text-emerald-400" />
              Results in seconds
            </span>
            <span className="flex items-center gap-1.5">
              <FiCheckCircle aria-hidden="true" className="text-emerald-400" />
              Secure processing
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-2xl" />
          <div
            className={`overflow-hidden rounded-2xl border shadow-2xl ${cardClasses}`}
          >
            <div
              className={`flex items-center justify-between border-b px-4 py-3 sm:px-5 ${
                isDark ? "border-white/10" : "border-slate-200"
              }`}
            >
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-rose-400" />
                <span className="size-2.5 rounded-full bg-amber-400" />
                <span className="size-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className={`text-xs font-medium ${mutedTextClasses}`}>
                forensic_analysis_042.mp4
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
                <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                Complete
              </div>
            </div>

            <div className="grid gap-4 p-4 sm:p-5 xl:grid-cols-[1.15fr_0.85fr]">
              <div className={`overflow-hidden rounded-xl border ${insetClasses}`}>
                <div className="flex items-center justify-between px-4 py-3">
                  <div>
                    <p className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${mutedTextClasses}`}>
                      Heatmap Preview
                    </p>
                    <p className="mt-1 text-sm font-semibold">Manipulation analysis</p>
                  </div>
                  <span className="rounded-md bg-rose-500/10 px-2 py-1 text-[10px] font-semibold text-rose-400">
                    3 regions flagged
                  </span>
                </div>

                <div className="relative mx-3 mb-3 aspect-video overflow-hidden rounded-lg bg-[linear-gradient(135deg,#111827_0%,#1e293b_50%,#0f172a_100%)] sm:mx-4 sm:mb-4">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
                  <div className="absolute left-[18%] top-[20%] size-24 rounded-full bg-rose-500/45 blur-xl" />
                  <div className="absolute bottom-[12%] right-[15%] size-20 rounded-full bg-amber-400/40 blur-xl" />
                  <div className="absolute left-[44%] top-[38%] size-16 rounded-full bg-cyan-400/25 blur-lg" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-slate-950/90 to-transparent px-3 pb-2 pt-8 text-[10px] text-slate-300">
                    <span>Frame 924 / 2,418</span>
                    <span>00:38.42</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 xl:grid-cols-1">
                <div className={`rounded-xl border p-3.5 ${insetClasses}`}>
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[11px] font-medium ${mutedTextClasses}`}>
                      Authenticity Score
                    </span>
                    <FiCheckCircle aria-hidden="true" className="text-emerald-400" />
                  </div>
                  <div className="mt-2 flex items-end justify-between">
                    <strong className="text-2xl font-semibold tracking-tight text-emerald-400">
                      92.4%
                    </strong>
                    <span className="text-[10px] font-medium text-emerald-400">Likely real</span>
                  </div>
                  <div className={`mt-3 h-1.5 overflow-hidden rounded-full ${isDark ? "bg-white/10" : "bg-slate-200"}`}>
                    <div className="h-full w-[92.4%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                  </div>
                </div>

                <div className={`rounded-xl border p-3.5 ${insetClasses}`}>
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[11px] font-medium ${mutedTextClasses}`}>
                      Fake Probability
                    </span>
                    <FiAlertTriangle aria-hidden="true" className="text-amber-400" />
                  </div>
                  <div className="mt-2 flex items-end justify-between">
                    <strong className="text-2xl font-semibold tracking-tight text-amber-400">
                      7.6%
                    </strong>
                    <span className={`text-[10px] ${mutedTextClasses}`}>Low risk</span>
                  </div>
                  <div className={`mt-3 h-1.5 overflow-hidden rounded-full ${isDark ? "bg-white/10" : "bg-slate-200"}`}>
                    <div className="h-full w-[8%] rounded-full bg-gradient-to-r from-amber-400 to-rose-400" />
                  </div>
                </div>
              </div>

              <div className={`rounded-xl border p-4 xl:col-span-2 ${insetClasses}`}>
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Suspicious Timestamps</p>
                    <p className={`mt-0.5 text-[11px] ${mutedTextClasses}`}>
                      Review frames with detected anomalies
                    </p>
                  </div>
                  <span className="rounded-full bg-amber-400/10 px-2 py-1 text-[10px] font-semibold text-amber-400">
                    3 detected
                  </span>
                </div>
                <div className="grid gap-2 sm:grid-cols-3">
                  {suspiciousTimestamps.map((timestamp) => (
                    <div
                      key={timestamp.time}
                      className={`rounded-lg border p-2.5 ${
                        isDark
                          ? "border-white/5 bg-white/[0.03]"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-mono font-semibold">{timestamp.time}</span>
                        <span className={mutedTextClasses}>{timestamp.confidence}</span>
                      </div>
                      <div className={`mt-2 h-1 overflow-hidden rounded-full ${isDark ? "bg-white/10" : "bg-slate-200"}`}>
                        <div className={`h-full rounded-full bg-gradient-to-r from-amber-400 to-rose-500 ${timestamp.width}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
