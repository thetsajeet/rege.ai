import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

type ResumeStore = {
  resume: Resume;
  setResume: (data: Partial<Resume>) => void;
  updateField: <T extends keyof Resume>(section: T, value: Resume[T]) => void;
};

export const useResumeStore = create<ResumeStore>()(
  immer((set) => ({
    resume: {
      bio: {
        userId: "1",
        fullName: "Ajeet T S",
      },
      links: [
        {
          id: "0",
          label: "LinkedIn",
          prefix: "linkedin.com/in/",
          value: "",
          custom: false,
        },
        {
          id: "1",
          label: "GitHub",
          prefix: "github.com/",
          value: "",
          custom: false,
        },
        {
          id: "2",
          label: "Portfolio",
          value: "",
          custom: false,
        },
        {
          id: "3",
          label: "Twitter",
          prefix: "x.com/",
          value: "",
          custom: false,
        },
      ],
      experiences: [],
      projects: [],
      education: [],
      skills: [
        { id: "1", label: "Angular" },
        { id: "2", label: "React" },
        { id: "3", label: "Node" },
      ],
      achievements: [
        {
          id: "1",
          text: 'won "Best Innovation Award"',
          year: "2024",
          month: "1",
        },
      ],
      certifications: [
        {
          id: "1",
          label: "AWS Certified Solutions Architect",
          issuedBy: "Amazon Web Services",
          issuedMonth: "5",
          issuedYear: "2023",
          imageUrl: "https://github.com/shadcn.png",
        },
        {
          id: "2",
          label: "Google Cloud Professional Data Engineer",
          issuedBy: "Google Cloud",
          issuedMonth: "11",
          issuedYear: "2022",
          imageUrl: "https://github.com/shadcn.png",
        },
        {
          id: "3",
          label: "Scrum Master Certified (SMC)",
          issuedBy: "Scrum Alliance",
          issuedMonth: "8",
          issuedYear: "2021",
          imageUrl: "https://github.com/shadcn.png",
        },
        {
          id: "4",
          label: "Microsoft Certified Fundamentals",
          issuedBy: "Microsoft",
          issuedMonth: "2",
          issuedYear: "2023",
          imageUrl: "https://github.com/shadcn.png",
        },
        {
          id: "5",
          label: "Certified Kubernetes Administrator (CKA)",
          issuedBy: "Cloud Native Computing Foundation",
          issuedMonth: "4",
          issuedYear: "2022",
          imageUrl: "https://github.com/shadcn.png",
        },
      ],
    },
    setResume: (data: Partial<Resume>) =>
      set((state) => {
        state.resume = { ...state.resume, ...data };
      }),
    updateField: (section, value) =>
      set((state) => {
        state.resume[section] = value;
      }),
  })),
);
