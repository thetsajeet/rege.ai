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
import EducationForm from "./EducationForm";
import { useResumeStore } from "@/lib/store";
import { useState } from "react";
import { produce } from "immer";
import { DialogClose } from "@radix-ui/react-dialog";

const EditContent = ({ onDone, addEducation, educationData }: any) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Add Education</DialogTitle>
        <DialogDescription />
      </DialogHeader>
      <EducationForm
        onDone={onDone}
        updateEducation={addEducation}
        educationData={educationData}
      />
    </DialogContent>
  );
};

const DeleteContent = ({ onDone, deleteEducation, educationData }: any) => {
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
                deleteEducation(educationData.id);
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

export default function EducationItem({
  isEditting,
  education,
  editDraftEducation,
  deleteDraftEducation,
}: {
  isEditting: boolean;
  education: EducationItem;
  editDraftEducation?: any;
  deleteDraftEducation?: any;
}) {
  const [modal, setModal] = useState({ open: false, type: null });
  const editEducation = (data: any) => {
    editDraftEducation(data, education.id);
  };
  const handleDeleteEducation = (id: any) => {
    deleteDraftEducation(id);
  };

  const handleModalChange = (open: boolean) => {
    if (!open) {
      setModal({ type: null, open: false });
    }
  };

  const monthNumberToName: Record<string, string> = {
    "0": "Jan",
    "1": "Feb",
    "2": "Mar",
    "3": "Apr",
    "4": "May",
    "5": "Jun",
    "6": "Jul",
    "7": "Aug",
    "8": "Sep",
    "9": "Oct",
    "10": "Nov",
    "11": "Dec",
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
                  addEducation={editEducation}
                  educationData={education}
                />
              )}
              {modal.type === "delete" && (
                <DeleteContent
                  onDone={() => setModal({ open: false, type: null })}
                  deleteEducation={handleDeleteEducation}
                  educationData={education}
                />
              )}
            </>
          )}
        </Dialog>

        <div className="flex justify-between items-start">
          <div className="flex gap-1">
            <span>{education.degree}</span>
            <span>&middot;</span>
            <span>{education.university}</span>
          </div>
          <p className="flex italic gap-1 text-sm text-zinc-500 dark:text-zinc-400 relative">
            <span>{`${monthNumberToName[education.startMonth]}'${education.startYear}`}</span>
            <span>-</span>
            <span>
              {education.isPursuing
                ? "Present"
                : `${monthNumberToName[education.endMonth]}'${education.endYear}`}
            </span>
          </p>
        </div>

        <ul className="my-3 list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
          {education.points.length > 0 ? (
            education.points.map((p: any) => <li key={p}>{p}</li>)
          ) : (
            <span>No highlights added</span>
          )}
        </ul>
      </div>

      <hr className="border-zinc-300 dark:border-zinc-800" />
    </>
  );
}
