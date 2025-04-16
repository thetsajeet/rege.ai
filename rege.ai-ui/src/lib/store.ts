import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

type ResumeStore = {
  resume: Resume;
  setResume: (data: Partial<Resume>) => void;
  updateField: <T extends keyof Resume>(section: T, value: Resume[T]) => void;
  updateExperience: (data: ExperienceItem, id: string) => void;
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
      links: [],
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
      certifications: [],
    },
    setResume: (data: Partial<Resume>) =>
      set((state) => {
        state.resume = { ...state.resume, ...data };
      }),
    updateField: (section, value) =>
      set((state) => {
        state.resume[section] = value;
      }),
    updateExperience: (data: ExperienceItem, id: string) => {
      set((state) => {
        state.resume.experiences = state.resume.experiences.map((exp) => {
          if (exp.id === id) return data;
          return exp;
        });
      });
    },
  })),
);
