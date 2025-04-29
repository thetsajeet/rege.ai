"use client";

import { Button } from "@/components/ui/button";
import { Check, Cross, Pencil, X } from "lucide-react";
import EducationItem from "./EducationItem";
import { useEffect, useState } from "react";
import CustomDialog from "@/components/shared/EditDialog";
import {
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogDescription,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";
import EducationForm from "./EducationForm";
import { useResumeStore } from "@/lib/store";
import { produce } from "immer";
import { showCustomToast } from "@/lib/toast";

export default function ListEducations({
  canEdit,
  education,
}: {
  canEdit: boolean;
  education: EducationItem[];
}) {
  const [editMode, toggleEditMode] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { resume, updateField } = useResumeStore();
  const [initialEducations, setInitialEducations] = useState(() =>
    produce(education, (draft) => { }),
  );
  const [draftEducations, setDraftEducations] = useState(() =>
    produce(initialEducations, (draft) => { }),
  );

  const addDraftEducation = (data: any) => {
    setDraftEducations(
      produce((draft: any) => {
        draft.push(data);
      }),
    );
  };

  const editDraftEducation = (data: any, id: string) => {
    setDraftEducations(
      produce((draft: any) => {
        const idx = draft.findIndex((d: any) => d.id === id);
        if (idx !== -1) draft[idx] = data;
      }),
    );
  };

  const deleteDraftEducation = (id: string) => {
    setDraftEducations(
      produce((draft: any) => {
        const idx = draft.findIndex((d: any) => d.id === id);
        if (idx !== -1) draft.splice(idx, 1);
      }),
    );
  };

  const saveDraftEducations = () => {
    updateField("education", draftEducations);
    setInitialEducations(draftEducations);
    toggleEditMode(false);
    showCustomToast("success", "Education updated");
  };

  const cancelDraftEducations = () => {
    setDraftEducations(produce(initialEducations, (draft) => { }));
    toggleEditMode(false);
    showCustomToast("info", "Education changes cancelled");
  };

  return (
    <div className="mt-4">
      <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            Education
          </h2>
          {canEdit &&
            (!editMode ? (
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
                  onClick={saveDraftEducations}
                >
                  <Check className="text-green-500" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="cursor-pointer rounded-full"
                  onClick={cancelDraftEducations}
                >
                  <X className="text-red-600" />
                </Button>
              </span>
            ))}
        </div>

        <hr className="border-zinc-400 dark:border-zinc-700" />

        <div className="space-y-6">
          {draftEducations.length > 0 ? (
            draftEducations.map((item: any, key: any) => (
              <EducationItem
                education={item}
                key={key}
                isEditting={editMode}
                editDraftEducation={editDraftEducation}
                deleteDraftEducation={deleteDraftEducation}
              />
            ))
          ) : (
            <div>No education added.</div>
          )}
        </div>

        {editMode && (
          <Dialog open={modalOpen} onOpenChange={setModalOpen} modal={false}>
            <DialogTrigger asChild>
              <Button className="w-full mt-4 text-white bg-purple-600 hover:bg-purple-700 transition cursor-pointer">
                + Add New Education
              </Button>
            </DialogTrigger>
            {modalOpen && (
              <div className="fixed inset-0 bg-zinc-900/60 backdrop-blur-sm z-40 pointer-events-none" />
            )}
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Education</DialogTitle>
                <DialogDescription />
              </DialogHeader>
              <EducationForm
                onDone={() => setModalOpen(false)}
                updateEducation={addDraftEducation}
              />
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}
