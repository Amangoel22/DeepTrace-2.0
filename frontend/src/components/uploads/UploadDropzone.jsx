import { useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function UploadDropzone() {
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [videoUrl, setVideoUrl] = useState(null);

    function handleFileSelect(event) {
        const file = event.target.files[0];

        if (file) {
            setSelectedFile(file);
            setVideoUrl(URL.createObjectURL(file));
        }
    }

    function handleAnalyze() {
        setIsAnalyzing(true);

        let currentProgress = 0;

        const interval = setInterval(() => {
            currentProgress += 10;

            setProgress(currentProgress);

            if (currentProgress >= 100) {
                clearInterval(interval);

                setTimeout(() => {
                    navigate("/analysis");
                }, 500);
            }
        }, 300);
    }

    return (
        <div className="rounded-3xl border border-white/10 bg-white/3 p-10 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]
">
            <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                className="hidden"
                onChange={handleFileSelect}
            />

            {!selectedFile ? (
                <div className="flex flex-col items-center text-center">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-500/10">
                        <FiUploadCloud size={36} className="text-cyan-400" />
                    </div>

                    <h2 className="text-2xl font-semibold">Upload Video</h2>

                    <p className="mt-3 max-w-xl text-slate-400">
                        Drag and drop a video file for forensic analysis and deepfake
                        detection.
                    </p>

                    <button
                        onClick={() => fileInputRef.current.click()}
                        className="cursor-pointer mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
                    >
                        Browse Files
                    </button>

                    <p className="mt-4 text-sm text-slate-500">MP4 • MOV • AVI • WEBM</p>
                </div>
            ) : (
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-2xl font-semibold">File Ready</h2>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/3 p-6">
                        {videoUrl && (
                            <video
                                src={videoUrl}
                                controls
                                className="mb-6 max-h-80 w-full rounded-xl border border-white/10"
                            />
                        )}
                        <p className="text-lg font-medium">{selectedFile.name}</p>

                        <p className="mt-2 text-slate-400">
                            {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                        </p>

                        {!isAnalyzing ? (
                            <button
                                onClick={handleAnalyze}
                                className="cursor-pointer mt-6 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
                            >
                                Analyze Video
                            </button>
                        ) : (
                            <>
                                <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-700">
                                    <div
                                        className="h-full rounded-full bg-cyan-400 transition-all duration-300"
                                        style={{
                                            width: `${progress}%`,
                                        }}
                                    />
                                </div>

                                <p className="mt-3 text-sm text-slate-400">
                                    Analyzing... {progress}%
                                </p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default UploadDropzone;
