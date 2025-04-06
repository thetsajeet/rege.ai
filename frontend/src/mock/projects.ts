const projects: Project[] = [
  {
    title: "AI Resume Generator",
    duration: "Jan 2024 - Mar 2024",
    notes: [
      "Built an AI-powered tool to generate ATS-friendly resumes.",
      "Integrated OpenAI API for tailored job description analysis.",
      "Used SolidJS for frontend and FastAPI for backend.",
      "Deployed on Vercel with persistent MongoDB Atlas backend.",
    ],
    refs: [
      {
        label: "GitHub",
        url: "https://github.com/user/ai-resume-gen",
      },
    ],
  },
  {
    title: "Realtime File Sharing App",
    duration: "Nov 2023 - Dec 2023",
    notes: [
      "Implemented rooms for temporary file uploads using WebSockets.",
      "Auto-deletes files when all users leave the room.",
      "Used Go (Gin) for backend and React for frontend.",
      "Optimized file streaming for performance.",
    ],
    refs: [
      {
        label: "Demo",
        url: "https://fileshare.app/demo",
      },
    ],
  },
  {
    title: "Workflow as a Service Platform",
    duration: "Sep 2023 - Oct 2023",
    notes: [
      "Enabled organizations to design roles, forms, and workflows.",
      "Drag-and-drop interface with live preview.",
      "Stored workflows as JSON and rendered dynamically.",
      "Included analytics and approval pipelines.",
    ],
    refs: [
      {
        label: "Docs",
        url: "https://waas.docs.dev",
      },
    ],
  },
  {
    title: "Gamified Learning Platform",
    duration: "Jul 2023 - Aug 2023",
    notes: [
      "Created a platform like Udemy with gamification layers.",
      "Users earn energy points and rank on leaderboards.",
      "AI assistant helps during quiz solving and course progress.",
      "Supports video, text, and interactive content uploads.",
    ],
    refs: [
      {
        label: "Platform",
        url: "https://learnhub.dev",
      },
    ],
  },
];

export { projects };
