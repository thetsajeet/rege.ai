"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Check,
  Github,
  Globe,
  Home,
  Linkedin,
  Mail,
  Pencil,
  Phone,
  Twitter,
  X,
} from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import Exp from "./components/Experiences/Experience";
import Project from "./components/Projects/Project";
import Certification from "./components/Certifications/Certification";
import Achievement from "./components/Achievements/Achievement";
import BioLink from "./components/Bio/BioLink";
import BioData from "./components/Bio/BioData";
import ListSkill from "./components/Skills/ListSkill";
import Navbar from "@/components/shared/Navbar";
import Education from "./components/Education/Education";

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

export default function UserPage() {
  const { id } = useParams();

  if (id === null || id === undefined) notFound();

  return (
    <div className="flex flex-col pb-20">
      <div>
        <Navbar />
      </div>
      {/* biodata */}
      <div className="mt-4">
        <BioData />
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
        <ListSkill />
      </div>
      {/* education */}
      <div className="mt-4">
        <Education />
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
