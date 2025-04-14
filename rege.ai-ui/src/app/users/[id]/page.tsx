"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Github,
  Globe,
  Home,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import Exp from "./components/Experiences/Experience";
import Project from "./components/Projects/Project";
import Certification from "./components/Certifications/Certification";
import Achievement from "./components/Achievements/Achievement";
import BioLink from "./components/BioLinks.tsx/BioLink";

function ExperienceItem() {
  return (
    <div className="relative z-10">
      <div className="flex w-full items-center text-zinc-800 dark:text-zinc-100">
        <span className="flex-1">
          <span className="text-base font-medium">SDE2</span>
          <span className="mx-1">&middot;</span>
          <span className="text-sm underline underline-offset-2 text-zinc-600 dark:text-zinc-400">
            rege.ai
          </span>
        </span>
        <span className="text-sm justify-self-end italic text-zinc-600 dark:text-zinc-400">
          apr 2023 - present
        </span>
      </div>

      <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
        <li>Built AI resume tools with React 19 & Tailwind v4</li>
        <li>Implemented shadcn UI components for rapid prototyping</li>
        <li>Integrated LLM-based JD parsing and resume matching</li>
      </ul>
    </div>
  );
}

function SkillsSection() {
  const skills = [
    "React",
    "Angular",
    "Node.js",
    "TypeScript",
    "TailwindCSS",
    "MongoDB",
  ];

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
        Skills
      </h2>
      <hr className="border-zinc-400 dark:border-zinc-700" />

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <Badge
            key={idx}
            className="bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 rounded-sm px-3 py-1 text-sm"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="w-full px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        {/* Left: Home button */}
        <div className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
          <Link href={"/"}>
            <Home className="size-5" />
          </Link>
        </div>

        {/* Center: rege.ai/<username> */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1 text-sm">
          <Badge className="bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 px-2 py-0.5 rounded-sm">
            rege.ai
          </Badge>
          <span className="text-zinc-600 dark:text-zinc-400">
            <span className="mr-1">/</span>
            <span>theaj7</span>
          </span>
        </div>

        {/* Right: Empty to balance flex layout */}
        <div className="w-12" />
      </div>
    </nav>
  );
}

function BioCard() {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 max-w-screen-xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-6">
        {/* Avatar */}
        <Avatar className="size-40">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>

        {/* Metadata */}
        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
          <div>
            <span className="font-medium text-zinc-800 dark:text-zinc-100">
              Full Name:
            </span>{" "}
            John Doe
          </div>
          <div>
            <span className="font-medium text-zinc-800 dark:text-zinc-100">
              Location:
            </span>{" "}
            San Francisco, CA
          </div>
          <div>
            <span className="font-medium text-zinc-800 dark:text-zinc-100">
              Date of Birth:
            </span>{" "}
            15 Aug 1995
          </div>
          <div>
            <span className="font-medium text-zinc-800 dark:text-zinc-100">
              Profession:
            </span>{" "}
            Full-Stack Developer
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UserPage() {
  const { id } = useParams();

  if (id === null || id === undefined) notFound();

  const certifications = [
    {
      title: "Full-Stack Web Development",
      issuer: "freeCodeCamp",
      issued: "Feb 2024",
      thumbnail: "https://github.com/shadcn.png", // Replace with cert preview
    },
    {
      title: "AI for Everyone",
      issuer: "DeepLearning.AI",
      issued: "Nov 2023",
      thumbnail: "https://github.com/shadcn.png",
    },
    {
      title: "Full-Stack Web Development",
      issuer: "freeCodeCamp",
      issued: "Feb 2024",
      thumbnail: "https://github.com/shadcn.png", // Replace with cert preview
    },
    {
      title: "AI for Everyone",
      issuer: "DeepLearning.AI",
      issued: "Nov 2023",
      thumbnail: "https://github.com/shadcn.png",
    },
    {
      title: "AI for Everyone",
      issuer: "DeepLearning.AI",
      issued: "Nov 2023",
      thumbnail: "https://github.com/shadcn.png",
    },
  ];

  return (
    <div className="flex flex-col pb-20">
      {/* url */}
      <div>
        <Navbar />
      </div>
      {/* profile picture */}
      <div className="mt-4">
        <BioCard />
      </div>
      {/* links */}
      <div className="mt-4">
        <BioLink />
      </div>
      {/* work experience */}
      <Exp />
      {/* projects */}
      <Project />
      {/* skills */}
      <div className="mt-4">
        <SkillsSection />
      </div>
      {/* education */}
      <div className="mt-4">
        <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            Education
          </h2>
          <hr className="border-zinc-400 dark:border-zinc-700" />

          <div className="space-y-6">
            <ExperienceItem />
            <hr className="border-zinc-300 dark:border-zinc-800" />
            <ExperienceItem />
          </div>
        </div>
      </div>
      {/* achievements */}
      <div className="mt-4">
        <Achievement />
      </div>
      {/* certifications */}
      <div className="mt-4">
        <Certification />
      </div>
    </div>
  );
}
