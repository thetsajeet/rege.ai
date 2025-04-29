import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBrain,
  IconClipboardText,
  IconEye,
  IconGauge,
  IconStar,
  IconTargetArrow,
} from "@tabler/icons-react";

export default function BentoGridDemo() {
  return (
    <BentoGrid>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i == 1 || i == 2 || i == 5 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-400/40 to-violet-600/30 dark:from-blue-800 dark:to-violet-900"></div>
);

const items = [
  {
    title: "Tailored Resume Generation",
    description:
      "Create ATS-friendly resumes customized to job descriptions using AI.",
    header: <Skeleton />,
    icon: <IconClipboardText className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Career Highlights Library",
    description:
      "Store and manage your achievements, experiences, and projects in one place.",
    header: <Skeleton />,
    icon: <IconStar className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Smart Skill Extraction",
    description:
      "Automatically detect and showcase relevant skills from your career data.",
    header: <Skeleton />,
    icon: <IconBrain className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Job Description Analyzer",
    description:
      "Unpack the key requirements of any job post to align your resume.",
    header: <Skeleton />,
    icon: <IconTargetArrow className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Real-time Preview",
    description:
      "View beautiful, structured previews of your resume as you build it.",
    header: <Skeleton />,
    icon: <IconEye className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Insightful Resume Scores",
    description:
      "Get instant feedback on how your resume matches the job’s needs.",
    header: <Skeleton />,
    icon: <IconGauge className="h-4 w-4 text-neutral-500" />,
  },
];
