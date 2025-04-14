"use client";

import { Button } from "@/components/ui/button";
import {
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { Pencil, Trash } from "lucide-react";
import EditDialog from "@/components/shared/EditDialog";
import ProjectForm from "./ProjectForm";

export default function ExperienceItem({
  isEditting,
}: {
  isEditting: boolean;
}) {
  return (
    <>
      <div className="space-y-1">
        {isEditting && (
          <div className="flex justify-start items-center gap-2 relative">
            <EditDialog
              trigger={
                <Pencil className="size-4 text-yellow-400 cursor-pointer" />
              }
              content={
                <DialogHeader>
                  <DialogTitle>Editing exp-1</DialogTitle>
                  <DialogDescription />
                  <div className="mt-2">
                    <ProjectForm />
                  </div>
                </DialogHeader>
              }
              close={
                <div className="flex justify-start gap-2">
                  <Button variant="outline" className="cursor-pointer">
                    Cancel
                  </Button>
                  <Button className="cursor-pointer text-white bg-purple-600 hover:bg-purple-700">
                    Save
                  </Button>
                </div>
              }
            />
            <EditDialog
              trigger={<Trash className="size-4 text-red-400 cursor-pointer" />}
              content={
                <DialogHeader>
                  <DialogTitle>Are you sure?</DialogTitle>
                  <DialogDescription>
                    🔴 This action cannot be undone
                  </DialogDescription>
                </DialogHeader>
              }
              close={
                <div className="flex justify-start gap-2">
                  <Button variant="outline" className="cursor-pointer">
                    Cancel
                  </Button>
                  <Button variant="destructive" className="cursor-pointer">
                    Delete
                  </Button>
                </div>
              }
            />
          </div>
        )}
        <div className="flex justify-between items-start">
          <div className="flex gap-1">
            <span>sde</span>
            <span>&middot;</span>
            <span>citi</span>
          </div>
          <p className="flex italic gap-1 text-sm text-zinc-500 dark:text-zinc-400 relative">
            <span>Jan 2023</span>
            <span>-</span>
            <span>Jan 2023</span>
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
