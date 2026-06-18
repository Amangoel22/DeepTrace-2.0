import { useContext } from "react";
import {
  FiBarChart2,
  FiCpu,
  FiFileText,
  FiUploadCloud,
} from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeContext";

const steps = [
  {
    stage: "Input",
    title: "Upload Video",
    description: "Upload media for verification.",
    icon: FiUploadCloud,
    darkAccent: "border-teal-400/25 bg-teal-400/10 text-teal-300 group-hover:border-teal-400/50",
    lightAccent: "border-teal-500/25 bg-teal-50 text-teal-700 group-hover:border-teal-500/50",
    stageColor: "text-teal-400",
    glowColor: "bg-teal-400/20",
  },
  {
    stage: "Processing",
    title: "AI Analysis",
    description: "DeepTrace scans frames for manipulation patterns.",
    icon: FiCpu,
    darkAccent: "border-violet-400/25 bg-violet-400/10 text-violet-300 group-hover:border-violet-400/50",
    lightAccent: "border-violet-500/25 bg-violet-50 text-violet-700 group-hover:border-violet-500/50",
    stageColor: "text-violet-400",
    glowColor: "bg-violet-400/20",
  },
  {
    stage: "Detection",
    title: "Review Results",
    description: "Inspect heatmaps, timestamps and confidence scores.",
    icon: FiBarChart2,
    darkAccent: "border-amber-400/25 bg-amber-400/10 text-amber-300 group-hover:border-amber-400/50",
    lightAccent: "border-amber-500/25 bg-amber-50 text-amber-700 group-hover:border-amber-500/50",
    stageColor: "text-amber-400",
    glowColor: "bg-amber-400/20",
  },
  {
    stage: "Output",
    title: "Generate Report",
    description: "Download evidence-ready forensic reports.",
    icon: FiFileText,
    darkAccent: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300 group-hover:border-emerald-400/50",
    lightAccent: "border-emerald-500/25 bg-emerald-50 text-emerald-700 group-hover:border-emerald-500/50",
    stageColor: "text-emerald-400",
    glowColor: "bg-emerald-400/20",
  },
];

function HowItWorks() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className={`relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 ${
        isDark ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-950"
      }`}
    >
      <div
        className={`pointer-events-none absolute left-1/2 top-0 h-80 w-[48rem] -translate-x-1/2 rounded-full blur-3xl ${
          isDark ? "bg-violet-500/[0.035]" : "bg-slate-400/[0.07]"
        }`}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span
            className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
              isDark
                ? "border-white/10 bg-white/[0.04] text-slate-300"
                : "border-slate-200 bg-white text-slate-600"
            }`}
          >
            Simple workflow
          </span>
          <h2
            id="how-it-works-heading"
            className="mt-5 text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-5xl"
          >
            How DeepTrace Works
          </h2>
          <p
            className={`mt-4 text-base leading-7 sm:text-lg ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            From upload to forensic reporting in four simple steps.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-6xl lg:mt-18">
          <div
            aria-hidden="true"
            className={`absolute bottom-16 left-6 top-16 w-px sm:left-8 lg:bottom-auto lg:left-[12.5%] lg:right-[12.5%] lg:top-8 lg:h-px lg:w-auto ${
              isDark
                ? "bg-gradient-to-b from-white/20 via-white/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-white/20 lg:to-transparent"
                : "bg-gradient-to-b from-slate-300 via-slate-200 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-slate-300 lg:to-transparent"
            }`}
          >
            <span
              className={`absolute inset-y-0 left-0 hidden w-full border-t border-dashed lg:block ${
                isDark ? "border-white/15" : "border-slate-300/80"
              }`}
            />
            <span className="absolute left-1/2 top-1/2 hidden h-px w-1/3 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[1px] lg:block" />
          </div>

          <div className="grid gap-5 lg:grid-cols-4 lg:gap-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className={`group relative flex gap-5 rounded-2xl border p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:gap-6 sm:p-6 lg:block lg:border-transparent lg:bg-transparent lg:p-0 lg:text-center lg:shadow-none lg:hover:shadow-none ${
                    isDark
                      ? "border-white/10 bg-slate-900/70 hover:border-cyan-400/20 lg:hover:border-transparent"
                      : "border-slate-200 bg-white hover:border-cyan-500/25 lg:hover:border-transparent"
                  }`}
                >
                  <div className="relative z-10 shrink-0">
                    <div
                      className={`relative flex size-12 items-center justify-center rounded-xl border shadow-lg transition duration-300 group-hover:scale-105 sm:size-16 sm:rounded-2xl lg:mx-auto ${
                        isDark ? step.darkAccent : step.lightAccent
                      } ${isDark ? "shadow-black/20" : "shadow-slate-300/40"}`}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute inset-2 -z-10 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 ${step.glowColor}`}
                      />
                      <Icon aria-hidden="true" className="text-xl sm:text-2xl" />
                    </div>
                  </div>

                  <div className="pt-0.5 lg:mt-7 lg:pt-0">
                    <p
                      className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${step.stageColor}`}
                    >
                      {step.stage}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p
                      className={`mt-2 text-sm leading-6 lg:mx-auto lg:max-w-56 ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs ${
              isDark
                ? "border-white/10 bg-white/[0.03] text-slate-400"
                : "border-slate-200 bg-white text-slate-600"
            }`}
          >
            <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            Secure processing from start to finish
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
