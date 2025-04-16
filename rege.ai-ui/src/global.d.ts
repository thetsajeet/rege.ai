type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  startMonth: string;
  startYear: string;
  endMonth?: string;
  endYear?: string;
  isWorkingHere: boolean;
  points: string[];
};

type ProjectItem = {
  id: string;
  title: string;
  links?: { label: string; value: string }[];
  points: string[];
};

type EducationItem = {
  id: string;
  degree: string;
  university: string;
  startMonth: string;
  startYear: string;
  endMonth?: string;
  endYear?: string;
  isPursuing: boolean;
  points: string[];
};
