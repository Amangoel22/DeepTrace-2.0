export const mockAnalysis = {
  fileName: "demo.mp4",

  authenticityScore: 92.4,

  verdict: "Likely Authentic",

  verdictColor: "emerald",

  severitySummary: {
    high: 1,
    medium: 1,
    low: 1,
  },

  flaggedSegments: [
    {
      timestamp: "00:12",
      reason: "Facial Boundary Mismatch",
      confidence: 97,
      severity: "High",
    },

    {
      timestamp: "00:38",
      reason: "Lighting Inconsistency",
      confidence: 84,
      severity: "Medium",
    },

    {
      timestamp: "01:04",
      reason: "Texture Shift",
      confidence: 68,
      severity: "Low",
    },
  ],

  findings: [
    "Facial boundary artifacts detected around the subject's jawline.",
    "Inconsistent lighting patterns observed across consecutive frames.",
    "Texture continuity breaks identified in high-motion regions.",
  ],

  heatmap: {
    frame: 127,
    totalFrames: 198,
  },

  timeline: [
    { time: 0, score: 78 },
    { time: 10, score: 82 },
    { time: 20, score: 95 },
    { time: 30, score: 70 },
    { time: 40, score: 84 },
    { time: 50, score: 98 },
    { time: 60, score: 85 },
  ],
};