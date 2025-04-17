"use client";

import { Button } from "@/components/ui/button";
import { Check, Cross, Pencil, X } from "lucide-react";
import ProjectItem from "./ProjectItem";
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
import ProjectForm from "./ProjectForm";
import { useResumeStore } from "@/lib/store";
import { produce } from "immer";
import { showCustomToast } from "@/lib/toast";

export default function ListProjects({ viewOnly }: { viewOnly: boolean }) {
  const [editMode, toggleEditMode] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { resume, updateField } = useResumeStore();
  const { projects } = resume;
  const [initialProjects, setInitialProjects] = useState(() =>
    produce(projects, (draft) => {}),
  );
  const [draftProjects, setDraftProjects] = useState(() =>
    produce(initialProjects, (draft) => {}),
  );

  const addDraftProject = (data: any) => {
    setDraftProjects(
      produce((draft: any) => {
        draft.push(data);
      }),
    );
  };

  const editDraftProject = (data: any, id: string) => {
    setDraftProjects(
      produce((draft: any) => {
        const idx = draft.findIndex((d: any) => d.id === id);
        if (idx !== -1) draft[idx] = data;
      }),
    );
  };

  const deleteDraftProject = (id: string) => {
    setDraftProjects(
      produce((draft: any) => {
        const idx = draft.findIndex((d: any) => d.id === id);
        if (idx !== -1) draft.splice(idx, 1);
      }),
    );
  };

  const saveDraftProjects = () => {
    updateField("projects", draftProjects);
    setInitialProjects(draftProjects);
    toggleEditMode(false);
    showCustomToast("success", "project updated");
  };

  const cancelDraftProjects = () => {
    setDraftProjects(produce(initialProjects, (draft) => {}));
    toggleEditMode(false);
    showCustomToast("info", "project changes cancelled");
  };

  return (
    <div className="mt-4">
      <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            Projects
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
                  onClick={saveDraftProjects}
                >
                  <Check className="text-green-500" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="cursor-pointer rounded-full"
                  onClick={cancelDraftProjects}
                >
                  <X className="text-red-600" />
                </Button>
              </span>
            ))}
        </div>

        <hr className="border-zinc-400 dark:border-zinc-700" />

        <div className="space-y-6">
          {draftProjects.length > 0 ? (
            draftProjects.map((item: any, key: any) => (
              <ProjectItem
                project={item}
                key={key}
                isEditting={editMode}
                editDraftProject={editDraftProject}
                deleteDraftProject={deleteDraftProject}
              />
            ))
          ) : (
            <div>No project added.</div>
          )}
        </div>

        {editMode && (
          <Dialog open={modalOpen} onOpenChange={setModalOpen} modal={false}>
            <DialogTrigger asChild>
              <Button className="w-full mt-4 text-white bg-purple-600 hover:bg-purple-700 transition cursor-pointer">
                + Add New project
              </Button>
            </DialogTrigger>
            {modalOpen && (
              <div className="fixed inset-0 bg-zinc-900/60 backdrop-blur-sm z-40 pointer-events-none" />
            )}
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add project</DialogTitle>
                <DialogDescription />
              </DialogHeader>
              <ProjectForm
                onDone={() => setModalOpen(false)}
                updateProject={addDraftProject}
              />
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}
