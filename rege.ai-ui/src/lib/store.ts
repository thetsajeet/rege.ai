import { create } from "zustand";

type Link = {
  label: string;
  prefix?: string;
  value: string;
};

type ExperienceItem = {
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  isWorkingHere: boolean;
  points: string[];
};

type ProjectItem = {
  role: string;
  startDate: string;
  endDate?: string;
  isWorkingHere: boolean;
  points: string[];
};

type EducationItem = {
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  isWorkingHere: boolean;
  points: string[];
};

type Achievement = {
  value: string;
  month: string;
  year: string;
};

type Certification = {
  image?: string;
  title: string;
  issuedBy: string;
  issueDate: string;
};

type Resume = {
  bio: {
    userId: string;
    fullName: string;
    profession: string;
    dob: string;
    location: string;
  };
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
      fullName: "",
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
