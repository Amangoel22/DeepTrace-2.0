import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Sidebar from "../components/layout/Sidebar";
import { mockAnalysis } from "../data/mockAnalysis";

function AnalysisPage() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div
      className={`flex min-h-screen ${
        isDark ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <Sidebar />

      <main className="flex-1 p-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Analysis Report</h1>

          <p className={`mt-2 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            Results generated from uploaded media.
          </p>
          <p className="mt-1 text-sm text-slate-500">{mockAnalysis.fileName}</p>
        </div>

        {/* Video Preview */}
        <div
          className={`mt-8 overflow-hidden rounded-3xl border ${
            isDark
              ? "border-white/10 bg-white/3"
              : "border-slate-200 bg-white"
          }`}
        >
          <video controls className="w-full max-h-87.5 bg-black">
            <source src={mockAnalysis.fileName} type="video/mp4" />
          </video>
        </div>

        {/* Authenticity Score */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div
            className={`rounded-3xl border p-6 ${
              isDark
                ? "border-white/10 bg-white/3"
                : "border-slate-200 bg-white"
            }`}
          >
            <p className="text-sm text-slate-400">Authenticity Score</p>

            <h2 className="mt-2 text-5xl font-bold text-emerald-400">
              {mockAnalysis.authenticityScore}%
            </h2>
          </div>

          <div
            className={`rounded-3xl border p-6 ${
              isDark
                ? "border-white/10 bg-white/3"
                : "border-slate-200 bg-white"
            }`}
          >
            <p className="text-sm text-slate-400">Final Verdict</p>

            <h2 className="mt-2 text-3xl font-bold text-emerald-400">
              {mockAnalysis.verdict}
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div
          className={`mt-8 rounded-3xl border p-6 ${
            isDark
              ? "border-white/10 bg-white/3"
              : "border-slate-200 bg-white"
          }`}
        >
          <h3 className="text-xl font-semibold">Confidence Timeline</h3>

          <div className="mt-6 h-72 rounded-2xl border border-white/10 p-6">
            <div className="flex h-full">
              <div className="mr-4 flex flex-col justify-between text-xs text-slate-500">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>
              </div>

              <div className="relative flex-1">
                <svg viewBox="0 0 100 40" className="h-full w-full">
                  <polyline
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    points="0,22 10,20 20,12 30,25 40,18 50,10 60,15 70,30 80,18 90,10 100,13"
                  />
                </svg>

                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-slate-500">
                  <span>00:00</span>
                  <span>00:20</span>
                  <span>00:40</span>
                  <span>01:00</span>
                  <span>01:20</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flagged Segments */}
        <div
          className={`mt-8 rounded-3xl border p-6 ${
            isDark
              ? "border-white/10 bg-white/3"
              : "border-slate-200 bg-white"
          }`}
        >
          <h3 className="text-xl font-semibold">Flagged Segments</h3>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full">
              <thead className="border-b border-white/10">
                <tr className="text-left text-sm text-slate-400">
                  <th className="px-4 py-3">Timestamp</th>
                  <th className="px-4 py-3">Reason</th>
                  <th className="px-4 py-3">Confidence</th>
                  <th className="px-4 py-3">Severity</th>
                </tr>
              </thead>

              <tbody>
                {mockAnalysis.flaggedSegments.map((segment) => (
                  <tr
                    key={segment.timestamp}
                    className="border-b border-white/10 last:border-none"
                  >
                    <td className="px-4 py-4">{segment.timestamp}</td>

                    <td className="px-4 py-4">{segment.reason}</td>

                    <td className="px-4 py-4">{segment.confidence}%</td>

                    <td
                      className={`px-4 py-4 ${
                        segment.severity === "High"
                          ? "text-red-400"
                          : segment.severity === "Medium"
                            ? "text-yellow-400"
                            : "text-cyan-400"
                      }`}
                    >
                      {segment.severity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Heatmap */}
        <div
          className={`mt-8 rounded-3xl border p-6 ${
            isDark
              ? "border-white/10 bg-white/3"
              : "border-slate-200 bg-white"
          }`}
        >
          <h3 className="text-xl font-semibold">Heatmap Analysis</h3>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
            <div className="h-64 flex items-center justify-center bg-slate-900">
              Heatmap Preview
            </div>

            <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
              <span>
                Frame {mockAnalysis.heatmap.frame} /{" "}
                {mockAnalysis.heatmap.totalFrames}
              </span>

              <button className="text-cyan-400 hover:text-cyan-300">
                View Full Size
              </button>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div
          className={`mt-8 rounded-3xl border p-6 ${
            isDark
              ? "border-white/10 bg-white/3"
              : "border-slate-200 bg-white"
          }`}
        >
          <h3 className="text-xl font-semibold">Model Explanation</h3>

          <ul className="mt-4 space-y-3 text-slate-400">
            {mockAnalysis.findings.map((finding) => (
              <li key={finding}>• {finding}</li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="mt-8 flex gap-4">
          <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400">
            Download Report
          </button>

          <button
            className={`rounded-xl border px-6 py-3 font-semibold ${
              isDark
                ? "border-white/10 hover:bg-white/5"
                : "border-slate-200 hover:bg-slate-100"
            }`}
          >
            Analyze Another Video
          </button>
        </div>
      </main>
    </div>
  );
}

export default AnalysisPage;
