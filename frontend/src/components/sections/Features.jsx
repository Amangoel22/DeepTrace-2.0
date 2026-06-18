import { useContext } from "react";
import {
  FiActivity,
  FiFileText,
  FiGrid,
  FiShield,
} from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeContext";

const features = [
  {
    title: "Deepfake Detection",
    description:
      "Identify AI-manipulated video with high-confidence detection models trained to surface subtle visual inconsistencies.",
    icon: FiShield,
    accent: "from-cyan-400 to-blue-500",
    iconColor: "text-cyan-400",
    glow: "group-hover:shadow-cyan-500/10",
  },
  {
    title: "Forensic Heatmaps",
    description:
      "Pinpoint altered regions frame by frame with visual heatmaps that make manipulation patterns clear and reviewable.",
    icon: FiGrid,
    accent: "from-violet-400 to-fuchsia-500",
    iconColor: "text-violet-400",
    glow: "group-hover:shadow-violet-500/10",
  },
  {
    title: "Explainable Analysis",
    description:
      "Understand every result through transparent AI reasoning, confidence signals, and suspicious timestamp breakdowns.",
    icon: FiActivity,
    accent: "from-emerald-400 to-cyan-500",
    iconColor: "text-emerald-400",
    glow: "group-hover:shadow-emerald-500/10",
  },
  {
    title: "Evidence Reports",
    description:
      "Export structured forensic reports with key findings and supporting evidence ready for secure sharing and review.",
    icon: FiFileText,
    accent: "from-amber-400 to-orange-500",
    iconColor: "text-amber-400",
    glow: "group-hover:shadow-amber-500/10",
  },
];

function Features() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className={`relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 ${
        isDark ? "bg-slate-950 text-white" : "bg-white text-slate-950"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent ${
          isDark ? "opacity-100" : "opacity-60"
        }`}
      />
      <div className="pointer-events-none absolute left-1/2 top-24 -z-0 size-72 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span
            className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
              isDark
                ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                : "border-cyan-600/20 bg-cyan-500/10 text-cyan-700"
            }`}
          >
            Built for trust
          </span>
          <h2
            id="features-heading"
            className="mt-5 text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-5xl"
          >
            Why DeepTrace
          </h2>
          <p
            className={`mt-4 text-base leading-7 sm:text-lg ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Advanced AI-powered forensic tools for media verification.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:gap-5 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className={`group relative overflow-hidden rounded-2xl border p-6 shadow-xl transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                  feature.glow
                } ${
                  isDark
                    ? "border-white/10 bg-slate-900/70 hover:border-white/20 hover:bg-slate-900"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${feature.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div
                  className={`absolute right-0 top-0 size-28 translate-x-10 -translate-y-10 rounded-full bg-gradient-to-br ${feature.accent} opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-15`}
                />

                <div className="relative">
                  <div
                    className={`flex size-12 items-center justify-center rounded-xl border transition duration-300 group-hover:scale-105 ${
                      isDark
                        ? "border-white/10 bg-white/5"
                        : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    <Icon
                      aria-hidden="true"
                      className={`text-xl ${feature.iconColor}`}
                    />
                  </div>

                  <div className="mt-8 flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {feature.title}
                    </h3>
                    
                  </div>
                  <p
                    className={`mt-3 text-sm leading-6 ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
