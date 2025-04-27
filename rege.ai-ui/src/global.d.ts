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

type BioLink = {
  id: string;
  label: string;
  prefix?: string;
  value: string;
  custom?: boolean;
};

type Achievement = {
  id: string;
  text: string;
  month?: string;
  year?: string;
};

type Certification = {
  id: string;
  imageUrl?: string;
  label: string;
  issuedBy?: string;
  issuedMonth?: string;
  issuedYear?: string;
};

type Bio = {
  userId: string;
  fullName: string;
  profession?: string;
  dob?: Date;
  location?: string;
  imageUrl?: string;
  email?: string;
  phone?: string;
};

type Skill = {
  id: string;
  label: string;
};

type Resume = {
  bio: Bio;
  links: BioLink[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  skills: Skill[];
  achievements: Achievement[];
  certifications: Certification[];
};
