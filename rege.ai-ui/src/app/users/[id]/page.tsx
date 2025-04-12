"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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
      <div>
        <div className="mt-4">
          <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              Links
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
        <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            Skills
          </h2>
          <hr className="border-zinc-400 dark:border-zinc-700" />

          <div className="space-y-6">
            <ExperienceItem />
            <hr className="border-zinc-300 dark:border-zinc-800" />
            <ExperienceItem />
          </div>
        </div>
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
