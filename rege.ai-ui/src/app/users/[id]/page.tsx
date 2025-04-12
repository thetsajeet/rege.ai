"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Github, Globe, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import { notFound, useParams } from "next/navigation";

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

function LinksSection() {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
      <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
        Links
      </h2>
      <hr className="border-zinc-400 dark:border-zinc-700" />

      <div className="grid md:grid-cols-3 gap-x-2 gap-y-4">
        <LinkRow
          icon={<Linkedin className="w-4 h-4" />}
          label="LinkedIn"
          prefix="linkedin.com/in/"
          placeholder="your-name"
        />
        <LinkRow
          icon={<Github className="w-4 h-4" />}
          label="GitHub"
          prefix="github.com/"
          placeholder="username"
        />
        <LinkRow
          icon={<Globe className="w-4 h-4" />}
          label="Portfolio"
          prefix=""
          placeholder="https://yourdomain.com"
        />
        <LinkRow
          icon={<Twitter className="w-4 h-4" />}
          label="Twitter"
          prefix="twitter.com/"
          placeholder="handle"
        />
        <LinkRow
          icon={<Mail className="w-4 h-4" />}
          label="Email"
          prefix=""
          placeholder="you@example.com"
        />
        <LinkRow
          icon={<Phone className="w-4 h-4" />}
          label="Mobile"
          prefix=""
          placeholder="+919876543210"
        />
      </div>
    </div>
  );
}

function LinkRow({ icon, label, prefix, placeholder }: any) {
  return (
    <div className="flex items-center">
      <Badge className="bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 rounded-sm px-2 py-1 mr-2">
        {icon}
      </Badge>
      {prefix && (
        <span className="text-sm text-zinc-600 dark:text-zinc-400 whitespace-nowrap font-semibold mr-1">
          {prefix}
        </span>
      )}
      <Input
        type="text"
        placeholder={placeholder}
        className="flex-1 text-sm h-8 border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950"
      />
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
      <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
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

export default function UserPage() {
  const { id } = useParams();

  if (id === null || id === undefined) notFound();

  return (
    <div className="flex flex-col">
      <div>navbar</div>
      {/* url */}
      <div className="flex self-center align-middle p-1">
        <Badge className="rounded-sm mr-1">rege.ai</Badge>
        <span className="mr-1">/</span>
        <span>thetsajeet</span>
      </div>
      {/* profile picture */}
      <div className="mt-4 flex justify-center">
        <Avatar className="size-32">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      {/* links */}
      <div className="mt-4">
        <LinksSection />
      </div>
      {/* work experience */}
      <div className="mt-4">
        <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            Work Experience
          </h2>
          <hr className="border-zinc-400 dark:border-zinc-700" />

          <div className="space-y-6">
            <ExperienceItem />
            <hr className="border-zinc-300 dark:border-zinc-800" />
            <ExperienceItem />
          </div>
        </div>
      </div>
      {/* projects */}
      <div className="mt-4">
        <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            Projects
          </h2>
          <hr className="border-zinc-400 dark:border-zinc-700" />

          <div className="space-y-6">
            <ExperienceItem />
            <hr className="border-zinc-300 dark:border-zinc-800" />
            <ExperienceItem />
          </div>
        </div>
      </div>
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
        <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            Achievements
          </h2>
          <hr className="border-zinc-400 dark:border-zinc-700" />

          <div className="space-y-6">
            <ExperienceItem />
            <hr className="border-zinc-300 dark:border-zinc-800" />
            <ExperienceItem />
          </div>
        </div>
      </div>
      {/* certifications */}
      <div className="mt-4">
        <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            Certifications
          </h2>
          <hr className="border-zinc-400 dark:border-zinc-700" />

          <div className="space-y-6">
            <ExperienceItem />
            <hr className="border-zinc-300 dark:border-zinc-800" />
            <ExperienceItem />
          </div>
        </div>
      </div>
    </div>
  );
}
