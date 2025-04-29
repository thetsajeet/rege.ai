import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

type ResumeStore = {
  resume: Resume;
  initResume: (data: Resume) => void;
  updateField: <T extends keyof Resume>(section: T, value: Resume[T]) => void;
};

export const useResumeStore = create<ResumeStore>()(
  immer((set) => ({
    resume: {
      bio: {},
      experiences: [],
      certifications: [],
      achievements: [],
      education: [],
      projects: [],
      skills: [],
      links: [],
    } as Resume,
    initResume: (data: Resume) =>
      set((state) => {
        state.resume = data;
      }),
    updateField: (section, value) =>
      set((state) => {
        state.resume[section] = value;
      }),
  })),
);
