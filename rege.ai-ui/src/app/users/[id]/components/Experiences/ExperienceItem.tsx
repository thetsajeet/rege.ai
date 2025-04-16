"use client";

import { Button } from "@/components/ui/button";
import {
  DialogTitle,
  DialogDescription,
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";
import { Delete, Pencil, Trash } from "lucide-react";
import EditDialog from "@/components/shared/EditDialog";
import ExperienceForm from "./ExperienceForm";
import { ExperienceItem as ExpItem, useResumeStore } from "@/lib/store";
import { useState } from "react";
import { produce } from "immer";
import { DialogClose } from "@radix-ui/react-dialog";

const EditContent = ({ onDone, addExperience, experienceData }: any) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Add Experience</DialogTitle>
        <DialogDescription />
      </DialogHeader>
      <ExperienceForm
        onDone={onDone}
        addExperience={addExperience}
        experienceData={experienceData}
      />
    </DialogContent>
  );
};
const DeleteContent = ({ onDone, deleteExperience, experienceData }: any) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogDescription />
        <DialogClose asChild>
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              className="cursor-pointer"
              onClick={onDone}
            >
              Cancel
            </Button>
            <Button
              className="cursor-pointer"
              variant="destructive"
              onClick={() => {
                deleteExperience(experienceData.id);
                onDone();
              }}
            >
              Remove
            </Button>
          </div>
        </DialogClose>
      </DialogHeader>
    </DialogContent>
  );
};

export default function ExperienceItem({
  isEditting,
  experience,
  editDraftExperience,
  deleteDraftExperience,
}: {
  isEditting: boolean;
  experience: ExpItem;
  editDraftExperience?: any;
  deleteDraftExperience?: any;
}) {
  const [modal, setModal] = useState({ open: false, type: null });
  const editExperience = (data: any) => {
    editDraftExperience(data, experience.id);
  };
  const handleDeleteExperience = (id: any) => {
    deleteDraftExperience(id);
  };

  const handleModalChange = (open: boolean) => {
    if (!open) {
      setModal({ type: null, open: false });
    }
  };

  return (
    <>
      <div className="space-y-1">
        <Dialog
          open={modal.open}
          onOpenChange={handleModalChange}
          modal={false}
        >
          {isEditting && (
            <>
              <DialogTrigger asChild>
                <div className="flex justify-start items-center gap-2 relative">
                  <Pencil
                    className="size-4 text-yellow-400 cursor-pointer"
                    onClick={() => setModal({ type: "edit", open: true })}
                  />
                  <Trash
                    className="size-4 text-red-500 cursor-pointer"
                    onClick={() => setModal({ type: "delete", open: true })}
                  />
                </div>
              </DialogTrigger>
              {modal.open && (
                <div className="fixed inset-0 bg-zinc-900/60 backdrop-blur-sm z-40 pointer-events-none" />
              )}
              {modal.type === "edit" && (
                <EditContent
                  onDone={() => setModal({ open: false, type: null })}
                  addExperience={editExperience}
                  experienceData={experience}
                />
              )}
              {modal.type === "delete" && (
                <DeleteContent
                  onDone={() => setModal({ open: false, type: null })}
                  deleteExperience={handleDeleteExperience}
                  experienceData={experience}
                />
              )}
            </>
          )}
        </Dialog>

        <div className="flex justify-between items-start">
          <div className="flex gap-1">
            <span>{experience.role}</span>
            <span>&middot;</span>
            <span>{experience.company}</span>
          </div>
          <p className="flex italic gap-1 text-sm text-zinc-500 dark:text-zinc-400 relative">
            <span>{experience.startDate}</span>
            <span>-</span>
            <span>
              {experience.isWorkingHere ? "Present" : experience.endDate}
            </span>
          </p>
        </div>

        <ul className="my-3 list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
          {experience.points.map((p: any) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>

      <hr className="border-zinc-300 dark:border-zinc-800" />
    </>
  );
}
