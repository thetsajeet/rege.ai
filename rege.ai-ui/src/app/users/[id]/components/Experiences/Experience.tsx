"use client";

import { Button } from "@/components/ui/button";
import { Check, Cross, Pencil, X } from "lucide-react";
import ExperienceItem from "./ExperienceItem";
import { useState } from "react";
import CustomDialog from "@/components/shared/EditDialog";
import {
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import ExperienceForm from "./ExperienceForm";

export default function Exp() {
  const [editMode, toggleEditMode] = useState<boolean>(false);

  return (
    <div className="mt-4">
      <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            Experience
          </h2>
          {!editMode ? (
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer rounded-full"
              onClick={() => toggleEditMode(true)}
            >
              <Pencil className="text-purple-600" />
            </Button>
          ) : (
            <span className="flex justify-end gap-2">
              <Button
                variant="outline"
                size="icon"
                className="cursor-pointer rounded-full"
                onClick={() => toggleEditMode(false)}
              >
                <Check className="text-green-500" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="cursor-pointer rounded-full"
                onClick={() => toggleEditMode(false)}
              >
                <X className="text-red-600" />
              </Button>
            </span>
          )}
        </div>

        <hr className="border-zinc-400 dark:border-zinc-700" />

        <div className="space-y-6">
          {[1, 2].map((item: any, key: any) => (
            <ExperienceItem key={key} isEditting={editMode} />
          ))}
        </div>

        {editMode && (
          <CustomDialog
            trigger={
              <Button className="w-full mt-4 text-white bg-purple-600 hover:bg-purple-700 transition cursor-pointer">
                + Add New Experience
              </Button>
            }
            content={
              <DialogHeader>
                <DialogTitle>Add a new experience</DialogTitle>
                <DialogDescription />
                <div className="mt-2">
                  <ExperienceForm />
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
        )}
      </div>
    </div>
  );
}
