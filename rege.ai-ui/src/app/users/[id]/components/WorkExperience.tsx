"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogOverlay, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogHeader, DialogClose } from "@/components/ui/dialog";
import { Edit, Pencil, Trash, X } from "lucide-react";
import EditExperience from "./EditExperienceItem";
import { useState } from "react";
import EditDialog from "@/components/shared/EditDialog";

function ExperienceItem() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="space-y-1 overflow-hidden">
        <div className="flex justify-start items-center gap-2 relative">
          <EditDialog trigger={
              <Pencil className="size-4 text-yellow-400 cursor-pointer" />
          } content={
            <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  editting
                </DialogDescription>
              </DialogHeader>
          } />
          <EditDialog trigger={
              <Trash className="size-4 text-red-400 cursor-pointer" />
          } content={
            <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
          } />

        </div>
        <div className="flex justify-between items-start">
          <div className="flex gap-1">
            <span >
              sde
            </span>
            <span>&middot;</span>
            <span >
              citi
            </span>
          </div>
          <p className="flex italic gap-1 text-sm text-zinc-500 dark:text-zinc-400 relative">
            <span >
              Jan 2023
            </span>
            <span>-</span>
            <span >
              Jan 2023
            </span>
          </p>
        </div>

        <ul className="my-3 list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
          <li>Built AI resume tools with React 19 & Tailwind v4</li>
          <li>Implemented shadcn UI components for rapid prototyping</li>
          <li>Integrated LLM-based JD parsing and resume matching</li>
        </ul>

      </div>

      <hr className="border-zinc-300 dark:border-zinc-800" />
    </>
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
