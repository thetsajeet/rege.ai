"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Github,
  Globe,
  Home,
  Linkedin,
  Mail,
  Pencil,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import WorkExperience from "./components/WorkExperience";

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
      <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
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

function CertificationsSection() {
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
    <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
        Certifications
      </h2>
      <hr className="border-zinc-400 dark:border-zinc-700" />

      <div className="grid grid-cols-1 md:grid-cols-2">
        {certifications.map((cert, idx) => (
          <div key={idx} className="flex items-center gap-4 py-4 pl-2 border">
            <img
              src={cert.thumbnail}
              alt={cert.title}
              className="w-20 h-16 object-cover rounded-sm border border-zinc-300 dark:border-zinc-700"
            />
            <div className="flex-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <div className="font-medium">{cert.title}</div>
              <div className="text-zinc-500 dark:text-zinc-400">
                {cert.issuer}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                Issued: {cert.issued}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AchievementsSection() {
  const achievements = [
    {
      title: 'won "Best Innovation Award"',
      event: "Hackfest 2024",
      month: "Mar 2024",
    },
    {
      title: 'won "Top 10 Finalist"',
      event: "DevCon India",
      month: "Jan 2024",
    },
    { title: 'won "Design Champion"', event: "UI Jam", month: "Nov 2023" },
  ];

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
        Achievements
      </h2>
      <hr className="border-zinc-400 dark:border-zinc-700" />

      <div className="space-y-3 divide-y">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center text-sm text-zinc-700 dark:text-zinc-300 py-1"
          >
            <span>
              {item.title} in <span className="italic">{item.event}</span>
            </span>
            <span className="text-md italic text-zinc-500 dark:text-zinc-400">
              {item.month}
            </span>
          </div>
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
        <LinksSection />
      </div>
      {/* work experience */}
      <WorkExperience />
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
        <AchievementsSection />
      </div>
      {/* certifications */}
      <div className="mt-4">
        <CertificationsSection />
      </div>
    </div>
  );
}
