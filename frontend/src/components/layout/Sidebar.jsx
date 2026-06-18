import {
    FiHome,
    FiUploadCloud,
    FiClock,
    FiFileText,
    FiSettings,
} from "react-icons/fi";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const menuItems = [
    {
        label: "Overview",
        icon: FiHome,
        active: false,
    },
    {
        label: "Upload",
        icon: FiUploadCloud,
        active: true,
    },
    {
        label: "History",
        icon: FiClock,
        active: false,
    },
    {
        label: "Reports",
        icon: FiFileText,
        active: false,
    },
    {
        label: "Settings",
        icon: FiSettings,
        active: false,
    },
];

function Sidebar() {
    const { theme } = useContext(ThemeContext);
    const isDark = theme === "dark";

    return (
        <aside
            className={`flex h-screen w-64 flex-col border-r ${isDark
                    ? "border-white/10 bg-slate-950 text-white"
                    : "border-slate-200 bg-white text-slate-900"
                }`}
        >
            {/* Logo */}
            <div className="border-b border-inherit px-6 py-6">
                <h1 className="text-xl font-bold tracking-tight">
                    DeepTrace
                </h1>
                <p
                    className={`mt-1 text-xs ${isDark ? "text-slate-400" : "text-slate-500"
                        }`}
                >
                    Media Verification Platform
                </p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6">
                <ul className="space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <li key={item.label}>
                                <button
                                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${item.active
                                            ? isDark
                                                ? "bg-cyan-500/10 text-cyan-400"
                                                : "bg-cyan-50 text-cyan-700"
                                            : isDark
                                                ? "text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-400 hover:translate-x-1"
                                                : "text-slate-600 hover:bg-cyan-50 hover:text-cyan-700 hover:translate-x-1"
                                        }`}
                                >
                                    <Icon size={18} />
                                    {item.label}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* User Section */}
            <div
                className={`border-t px-4 py-4 ${isDark ? "border-white/10" : "border-slate-200"
                    }`}
            >
                <div className="rounded-xl p-3">
                    <p className="text-sm font-semibold">
                        Aman Goel
                    </p>
                    <p
                        className={`mt-1 text-xs ${isDark ? "text-slate-400" : "text-slate-500"
                            }`}
                    >
                        Free Plan
                    </p>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;