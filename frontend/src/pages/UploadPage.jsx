import { useContext } from "react";
import { FiBell, FiMoon, FiSun } from "react-icons/fi";
import Sidebar from "../components/layout/Sidebar";
import UploadDropzone from "../components/uploads/UploadDropzone";
// import RecentAnalyses from "../components/uploads/RecentAnalyses";
import { ThemeContext } from "../context/ThemeContext";
function UploadPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div
      className={`flex min-h-screen ${
        isDark
          ? "bg-slate-950 text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      <Sidebar />

      <main className="flex-1">
        {/* Topbar */}
        <header
          className={`sticky top-0 z-10 flex items-center justify-between border-b px-8 py-5 backdrop-blur-xl ${
            isDark
              ? "border-white/10 bg-slate-950/70"
              : "border-slate-200 bg-white/70"
          }`}
        >
          <div>
            <h1 className="text-2xl font-bold">
              Upload Media
            </h1>

            <p
              className={`mt-1 text-sm ${
                isDark
                  ? "text-slate-400"
                  : "text-slate-500"
              }`}
            >
              Analyze videos for manipulation,
              deepfakes and authenticity signals.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              className={`cursor-pointer rounded-xl p-3 transition ${
                isDark
                  ? "hover:bg-white/5"
                  : "hover:bg-slate-100"
              }`}
            >
              <FiBell size={18} />
            </button>

            <button
              onClick={toggleTheme}
              className={`cursor-pointer rounded-xl p-3 transition ${
                isDark
                  ? "hover:bg-white/5"
                  : "hover:bg-slate-100"
              }`}
            >
              {isDark ? (
                <FiSun size={18} />
              ) : (
                <FiMoon size={18} />
              )}
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          <UploadDropzone />
          {/* Recent Analyses */}
          <div className="mt-8">
            <h3 className="mb-4 text-xl font-semibold">
              Recent Analyses
            </h3>

            <div
              className={`overflow-hidden rounded-2xl border ${
                isDark
                  ? "border-white/10 bg-white/[0.03]"
                  : "border-slate-200 bg-white"
              }`}
            >
              {[
                {
                  name: "interview.mp4",
                  status: "Completed",
                  date: "2 days ago",
                },
                {
                  name: "speech.mp4",
                  status: "Completed",
                  date: "5 days ago",
                },
                {
                  name: "conference.mp4",
                  status: "Completed",
                  date: "1 week ago",
                },
              ].map((file) => (
                <div
                  key={file.name}
                  className={`flex items-center justify-between border-b px-6 py-4 last:border-none ${
                    isDark
                      ? "border-white/10"
                      : "border-slate-200"
                  }`}
                >
                  <div>
                    <p className="font-medium">
                      {file.name}
                    </p>

                    <p
                      className={`text-sm ${
                        isDark
                          ? "text-slate-400"
                          : "text-slate-500"
                      }`}
                    >
                      {file.date}
                    </p>
                  </div>

                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
                    {file.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UploadPage;