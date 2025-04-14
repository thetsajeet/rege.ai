"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, Pencil } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function ExperienceItem() {

  return (
    <div className="relative z-0 overflow-hidden">
      <div className="space-y-1">
        <div className="flex justify-between items-start">
          <div className="flex gap-1">
            <span className="underline underline-offset-3 cursor-pointer">
              sde
            </span>
            <span>&middot;</span>
            <span className="underline underline-offset-3 cursor-pointer">
              citi
            </span>
          </div>
          <p className="flex italic gap-1 text-sm text-zinc-500 dark:text-zinc-400 relative">
            <span className="underline underline-offset-3 cursor-pointer">
              Jan 2023
            </span>
            <span>-</span>
            <span className="underline underline-offset-3 cursor-pointer">
              Jan 2023
            </span>
          </p>
        </div>

        <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
          <li>Built AI resume tools with React 19 & Tailwind v4</li>
          <li>Implemented shadcn UI components for rapid prototyping</li>
          <li>Integrated LLM-based JD parsing and resume matching</li>
        </ul>

        <button className="text-sm mt-2 text-purple-400 hover:underline">
          + Add Point
        </button>
      </div>

      <hr className="border-zinc-300 dark:border-zinc-800" />
    </div>
  );
}

export default function WorkExperience() {

  return (
    <div className="mt-4">
      <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            Work Experience
          </h2>
          <Button
            variant="outline"
            size="icon"
            className="cursor-pointer rounded-full"
          >
            <Pencil />
          </Button>
        </div>

        <hr className="border-zinc-400 dark:border-zinc-700" />
        
          <div className="space-y-6">
            {[1, 2].map((item: any, key: any) => (
              <ExperienceItem key={key}/>
            ))}
          </div>
        

        <button className="w-full mt-4 text-sm text-white bg-purple-600 hover:bg-purple-700 py-2 rounded-md transition">
          + Add New Experience
        </button>
      </div>
    </div>
  );
}
