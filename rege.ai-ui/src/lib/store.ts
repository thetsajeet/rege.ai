import { create } from "zustand";

export type Link = {
  label: string;
  prefix?: string;
  value: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  isWorkingHere: boolean;
  points: string[];
};

export type ProjectItem = {
  role: string;
  startDate: string;
  endDate?: string;
  isWorkingHere: boolean;
  points: string[];
};

export type EducationItem = {
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  isWorkingHere: boolean;
  points: string[];
};

export type Achievement = {
  value: string;
  month: string;
  year: string;
};

export type Certification = {
  image?: string;
  title: string;
  issuedBy: string;
  issueDate: string;
};

export type Bio = {
  userId: string;
  fullName: string;
  profession: string;
  dob: string;
  location: string;
};

type Resume = {
  bio: Bio;
  links: Link[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  skills: string[];
  achievements: Achievement[];
  certifications: Certification[];
};

type ResumeStore = {
  resume: Resume;
  setResume: (data: Partial<Resume>) => void;
  updateField: <T extends keyof Resume>(section: T, value: Resume[T]) => void;
};

export const useResumeStore = create<ResumeStore>((set) => ({
  resume: {
    bio: {
      userId: "",
      fullName: "aj",
      profession: "",
      dob: "",
      location: "",
    },
    links: [],
    experiences: [],
    projects: [],
    education: [],
    skills: [],
    achievements: [],
    certifications: [],
  },
  setResume: (data) =>
    set((state) => ({
      resume: {
        ...state.resume,
        ...data,
      },
    })),
  updateField: (section, value) =>
    set((state) => ({
      resume: {
        ...state.resume,
        [section]: value,
      },
    })),
}));
