import { useContext } from "react";
import {
  FiActivity,
  FiCheckCircle,
  FiClock,
  FiDownload,
  FiFileText,
  FiHeadphones,
  FiHash,
  FiInfo,
  FiLock,
  FiSearch,
  FiShield,
} from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeContext";


const forensicFindings = [
  {
    id: "F-01",
    time: "00:12.08",
    finding: "Facial boundary blending",
    basis: "Edge coherence deviates across 14 consecutive frames.",
    severity: "High",
  },
  {
    id: "F-02",
    time: "00:38.42",
    finding: "Illumination mismatch",
    basis: "Specular response conflicts with the scene light vector.",
    severity: "Medium",
  },
];

const timestamps = [
  { time: "00:12.08", label: "Facial boundary", risk: "High" },
  { time: "00:38.42", label: "Lighting mismatch", risk: "Medium" },
  { time: "01:04.17", label: "Texture anomaly", risk: "Low" },
];

function DashboardPreview() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const panelClasses = isDark
    ? "border-white/10 bg-slate-900/80 shadow-black/30"
    : "border-slate-200 bg-white shadow-slate-300/40";
  const insetClasses = isDark
    ? "border-white/10 bg-slate-950/70"
    : "border-slate-200 bg-slate-50";
  const mutedClasses = isDark ? "text-slate-400" : "text-slate-600";

  return (
    <section
      id="dashboard-preview"
      aria-labelledby="dashboard-preview-heading"
      className={`relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 ${
        isDark ? "bg-slate-950 text-white" : "bg-white text-slate-950"
      }`}
    >
      <div className="pointer-events-none absolute right-0 top-1/3 size-112 translate-x-1/3 rounded-full bg-violet-500/6 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 size-96 -translate-x-1/3 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
              isDark
                ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                : "border-cyan-600/20 bg-cyan-500/10 text-cyan-700"
            }`}
          >
            <FiShield aria-hidden="true" />
            Forensic workspace
          </span>
          <h2
            id="dashboard-preview-heading"
            className="mt-5 text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-5xl"
          >
            See DeepTrace In Action
          </h2>
          <p className={`mt-4 text-base leading-7 sm:text-lg ${mutedClasses}`}>
            Explore how DeepTrace analyzes media, identifies manipulation, and
            generates evidence-ready reports.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-8 lg:mt-16 lg:grid-cols-[1.35fr_0.65fr] lg:gap-6 xl:grid-cols-[1.45fr_0.55fr]">
          <div className="relative min-w-0">
            <div className="absolute -inset-3 -z-10 rounded-4xl bg-linear-to-r from-cyan-500/10 via-transparent to-violet-500/10 blur-xl" />
            <div className={`overflow-hidden rounded-2xl border shadow-2xl ${panelClasses}`}>
              <div
                className={`flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3 sm:px-5 ${
                  isDark ? "border-white/10" : "border-slate-200"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="size-2 rounded-full bg-rose-400" />
                    <span className="size-2 rounded-full bg-amber-400" />
                    <span className="size-2 rounded-full bg-emerald-400" />
                  </div>
                  <span className={`hidden h-4 w-px sm:block ${isDark ? "bg-white/10" : "bg-slate-200"}`} />
                  <span className="text-xs font-semibold">Analysis Overview</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-medium text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  Analysis complete
                </div>
              </div>

              <div className="grid gap-3 p-3 sm:grid-cols-2 sm:p-5">
                <div className={`rounded-xl border p-4 ${insetClasses}`}>
                  <div className="flex items-center justify-between">
                    <p className={`text-xs font-medium ${mutedClasses}`}>Authenticity Score</p>
                    <FiCheckCircle aria-hidden="true" className="text-emerald-400" />
                  </div>
                  <div className="mt-3 flex items-end justify-between gap-3">
                    <strong className="text-3xl font-semibold tracking-tight text-emerald-400">92.4%</strong>
                    <span className="mb-1 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">Likely authentic</span>
                  </div>
                  <div className={`mt-4 h-1.5 overflow-hidden rounded-full ${isDark ? "bg-white/10" : "bg-slate-200"}`}>
                    <div className="h-full w-[92.4%] rounded-full bg-linear-to-r from-emerald-400 to-teal-400" />
                  </div>
                </div>

                <div className={`rounded-xl border p-4 ${insetClasses}`}>
                  <div className="flex items-center justify-between">
                    <p className={`text-xs font-medium ${mutedClasses}`}>Fake Probability</p>
                    <FiActivity aria-hidden="true" className="text-amber-400" />
                  </div>
                  <div className="mt-3 flex items-end justify-between gap-3">
                    <strong className="text-3xl font-semibold tracking-tight text-amber-400">7.6%</strong>
                    <span className={`mb-1 text-[10px] font-medium ${mutedClasses}`}>Low confidence</span>
                  </div>
                  <div className={`mt-4 h-1.5 overflow-hidden rounded-full ${isDark ? "bg-white/10" : "bg-slate-200"}`}>
                    <div className="h-full w-[8%] rounded-full bg-linear-to-r from-amber-400 to-rose-400" />
                  </div>
                </div>

                <div className={`rounded-xl border p-4 sm:col-span-2 ${insetClasses}`}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold">Confidence Timeline</p>
                      <p className={`mt-1 text-[10px] ${mutedClasses}`}>Frame-level manipulation probability</p>
                    </div>
                    <span className={`font-mono text-[10px] ${mutedClasses}`}>00:00 - 01:26</span>
                  </div>
                  <div className="relative mt-4 h-28" aria-label="Line graph of manipulation probability over time">
                    <div className={`absolute inset-0 rounded-lg bg-[linear-gradient(to_right,transparent_24.8%,currentColor_25%,transparent_25.2%,transparent_49.8%,currentColor_50%,transparent_50.2%,transparent_74.8%,currentColor_75%,transparent_75.2%),linear-gradient(to_bottom,transparent_32.8%,currentColor_33%,transparent_33.2%,transparent_65.8%,currentColor_66%,transparent_66.2%)] ${isDark ? "text-white/6" : "text-slate-900/6"}`} />
                    <div className="absolute inset-x-0 top-[35%] border-t border-dashed border-amber-400/35">
                      <span className="absolute right-0 -top-4 text-[8px] font-medium uppercase tracking-wide text-amber-400">Review threshold</span>
                    </div>
                    <svg
                      viewBox="0 0 600 120"
                      preserveAspectRatio="none"
                      className="absolute inset-0 size-full overflow-visible"
                      role="img"
                      aria-label="Probability remains low with peaks at 12, 38, and 64 seconds"
                    >
                      <defs>
                        <linearGradient id="confidence-area" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.28" />
                          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="confidence-line" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#2dd4bf" />
                          <stop offset="58%" stopColor="#f59e0b" />
                          <stop offset="100%" stopColor="#fb7185" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 103 C18 99 34 101 50 94 S78 89 92 92 S110 78 124 48 S145 32 160 72 S190 91 212 88 S242 84 260 65 S278 18 298 29 S322 76 345 82 S374 86 392 68 S414 23 434 17 S458 58 476 70 S505 75 520 87 S552 96 600 91 L600 120 L0 120 Z"
                        fill="url(#confidence-area)"
                      />
                      <path
                        d="M0 103 C18 99 34 101 50 94 S78 89 92 92 S110 78 124 48 S145 32 160 72 S190 91 212 88 S242 84 260 65 S278 18 298 29 S322 76 345 82 S374 86 392 68 S414 23 434 17 S458 58 476 70 S505 75 520 87 S552 96 600 91"
                        fill="none"
                        stroke="url(#confidence-line)"
                        strokeWidth="2.5"
                        vectorEffect="non-scaling-stroke"
                      />
                      <g fill="#f59e0b" stroke={isDark ? "#020617" : "#f8fafc"} strokeWidth="2">
                        <circle cx="132" cy="43" r="4" />
                        <circle cx="298" cy="29" r="4" />
                      </g>
                      <circle cx="434" cy="17" r="4" fill="#fb7185" stroke={isDark ? "#020617" : "#f8fafc"} strokeWidth="2" />
                    </svg>
                    <span className="absolute left-[20%] top-[27%] h-[62%] border-l border-dashed border-amber-400/25" />
                    <span className="absolute left-[49%] top-[15%] h-[74%] border-l border-dashed border-amber-400/25" />
                    <span className="absolute left-[72%] top-[7%] h-[82%] border-l border-dashed border-rose-400/25" />
                  </div>
                  <div className={`mt-2 flex justify-between font-mono text-[9px] ${mutedClasses}`}>
                    <span>00:00</span>
                    <span>00:43</span>
                    <span>01:26</span>
                  </div>
                </div>

                <div className={`overflow-hidden rounded-xl border ${insetClasses}`}>
                  <div className="flex items-center justify-between px-4 py-3">
                    <div>
                      <p className="text-xs font-semibold">Heatmap Preview</p>
                      <p className={`mt-1 text-[10px] ${mutedClasses}`}>Detected manipulation regions</p>
                    </div>
                    <span className="rounded-md bg-rose-400/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-wide text-rose-400">Live frame</span>
                  </div>
                  <div
  className={`rounded-xl border p-4 ${insetClasses}`}
>
  <div className="flex items-center justify-between">
    <div>
      <p className="text-xs font-semibold">
        Frame Analysis
      </p>
      <p className={`mt-1 text-[10px] ${mutedClasses}`}>
        Highlighted manipulation region
      </p>
    </div>

    <span className="rounded-md bg-amber-400/10 px-2 py-1 text-[9px] font-semibold text-amber-400">
      Frame 924
    </span>
  </div>

  <div className="mt-4 aspect-video rounded-xl border border-dashed border-amber-400/30 flex items-center justify-center">
    <div className="text-center">
      <div className="mx-auto mb-3 h-16 w-16 rounded-full border-2 border-amber-400/40" />

      <p className="text-xs font-medium">
        Jawline Region Flagged
      </p>

      <p className={`mt-1 text-[10px] ${mutedClasses}`}>
        Confidence: 97%
      </p>
    </div>
  </div>
</div>
                </div>

                <div className={`rounded-xl border p-4 ${insetClasses}`}>
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold">Suspicious Timestamps</p>
                      <p className={`mt-1 text-[10px] ${mutedClasses}`}>3 moments require review</p>
                    </div>
                    <FiClock aria-hidden="true" className="text-amber-400" />
                  </div>
                  <div className="space-y-2">
                    {timestamps.map((timestamp) => (
                      <div
                        key={timestamp.time}
                        className={`flex items-center gap-3 rounded-lg border px-3 py-2 ${
                          isDark ? "border-white/5 bg-white/2.5" : "border-slate-200 bg-white"
                        }`}
                      >
                        <span className="font-mono text-[10px] font-semibold text-amber-400">{timestamp.time}</span>
                        <span className={`min-w-0 flex-1 truncate text-[10px] ${mutedClasses}`}>{timestamp.label}</span>
                        <span className={`text-[9px] font-medium ${timestamp.risk === "High" ? "text-rose-400" : timestamp.risk === "Medium" ? "text-amber-400" : "text-emerald-400"}`}>
                          {timestamp.risk}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1" aria-label="Investigation details">

            <div className={`rounded-2xl border p-5 shadow-lg sm:row-span-2 ${panelClasses}`}>
              <div className="flex items-center gap-2">
                <FiSearch aria-hidden="true" className="text-amber-400" />
                <h3 className="text-sm font-semibold">Key Findings</h3>
              </div>
              <div className="mt-4 space-y-3">
                {forensicFindings.map((finding) => (
                  <article
                    key={finding.id}
                    className={`rounded-xl border p-3 ${isDark ? "border-white/8 bg-slate-950/55" : "border-slate-200 bg-slate-50"}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 font-mono text-[9px]">
                        <span className={mutedClasses}>{finding.id}</span>
                        <span className="text-amber-400">{finding.time}</span>
                      </div>
                      <span className={`text-[9px] font-semibold ${finding.severity === "High" ? "text-rose-400" : finding.severity === "Medium" ? "text-amber-400" : "text-emerald-400"}`}>
                        {finding.severity}
                      </span>
                    </div>
                    <h4 className="mt-2 text-xs font-semibold">{finding.finding}</h4>
                    <p className={`mt-1.5 text-[10px] leading-4 ${mutedClasses}`}>{finding.basis}</p>
                  </article>
                ))}
              </div>
            </div>

            <div
              className={`flex items-center gap-3 rounded-2xl border border-dashed p-4 sm:col-span-2 lg:col-span-1 ${
                isDark
                  ? "border-violet-400/25 bg-violet-400/6 text-violet-300"
                  : "border-violet-500/25 bg-violet-50 text-violet-700"
              }`}
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-violet-400/10">
                <FiHeadphones aria-hidden="true" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em]">
                  <FiInfo aria-hidden="true" />
                  Coming Soon:
                </div>
                <p className="mt-1 text-xs font-semibold">Audio Deepfake Detection</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default DashboardPreview;
