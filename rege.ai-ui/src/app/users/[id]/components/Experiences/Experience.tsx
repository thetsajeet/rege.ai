"use client";

import { Button } from "@/components/ui/button";
import { Check, Cross, Pencil, X } from "lucide-react";
import ExperienceItem from "./ExperienceItem";
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
import ExperienceForm from "./ExperienceForm";
import { useResumeStore } from "@/lib/store";
import { produce } from "immer";

export default function Exp({ viewOnly }: { viewOnly: boolean }) {
  const [editMode, toggleEditMode] = useState<boolean>(false);
  const { resume, updateField } = useResumeStore();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { experiences } = resume;
  const [initialExperiencesState, setInitialExperiencesState] = useState(() =>
    produce(experiences, (draft) => {}),
  );

  const [expDraft, setExpDraft] = useState(() =>
    produce(initialExperiencesState, (draft) => {}),
  );

  const addExperience = (data: any) => {
    setExpDraft(
      produce((draft: any) => {
        draft.push(data);
      }),
    );
  };

  const saveExpState = () => {
    updateField("experiences", expDraft);
    setInitialExperiencesState(expDraft);
    toggleEditMode(false);
  };

  const cancelExpState = () => {
    setExpDraft(produce(initialExperiencesState, (draft) => {}));
    toggleEditMode(false);
  };

  return (
    <div className="mt-4">
      <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            Experience
          </h2>
          {viewOnly &&
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
                  onClick={saveExpState}
                >
                  <Check className="text-green-500" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="cursor-pointer rounded-full"
                  onClick={cancelExpState}
                >
                  <X className="text-red-600" />
                </Button>
              </span>
            ))}
        </div>

        <hr className="border-zinc-400 dark:border-zinc-700" />

        <div className="space-y-6">
          {expDraft.map((item: any, key: any) => (
            <ExperienceItem key={key} isEditting={editMode} />
          ))}
        </div>

        {editMode && (
          <Dialog open={modalOpen} onOpenChange={setModalOpen} modal={false}>
            <DialogTrigger asChild>
              <Button className="w-full mt-4 text-white bg-purple-600 hover:bg-purple-700 transition cursor-pointer">
                + Add New Experience
              </Button>
            </DialogTrigger>
            {modalOpen && (
              <div className="fixed inset-0 bg-zinc-900/60 backdrop-blur-sm z-40 pointer-events-none" />
            )}
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Experience</DialogTitle>
                <DialogDescription />
              </DialogHeader>
              <ExperienceForm
                onDone={() => setModalOpen(false)}
                addExperience={addExperience}
              />
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}
