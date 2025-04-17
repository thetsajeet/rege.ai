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
        profession: "SDE 2",
        dob: "07/12/2000",
        location: "Pune",
      },
      links: [
        {
          id: "1",
          label: "LinkedIn",
          prefix: "linkedin.com/in/",
          value: "john-doe",
        },
        {
          id: "2",
          label: "GitHub",
          prefix: "github.com/",
          value: "johndoe",
        },
        {
          id: "3",
          label: "Portfolio",
          value: "https://johndoe.dev",
        },
        {
          id: "4",
          label: "Twitter",
          prefix: "twitter.com/",
          value: "johndoe",
        },
        {
          id: "5",
          label: "Email",
          value: "john@example.com",
        },
        {
          id: "6",
          label: "Mobile",
          value: "+919812345678",
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
