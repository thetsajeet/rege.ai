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
import ProjectForm from "./ProjectForm";
import { useResumeStore } from "@/lib/store";
import { useState } from "react";
import { produce } from "immer";
import { DialogClose } from "@radix-ui/react-dialog";

const EditContent = ({ onDone, addProject, projectData }: any) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Add Project</DialogTitle>
        <DialogDescription />
      </DialogHeader>
      <ProjectForm
        onDone={onDone}
        updateProject={addProject}
        projectData={projectData}
      />
    </DialogContent>
  );
};

const DeleteContent = ({ onDone, deleteProject, projectData }: any) => {
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
                deleteProject(projectData.id);
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

export default function ProjectItem({
  isEditting,
  project,
  editDraftProject,
  deleteDraftProject,
}: {
  isEditting: boolean;
  project: ProjectItem;
  editDraftProject?: any;
  deleteDraftProject?: any;
}) {
  const [modal, setModal] = useState({ open: false, type: null });

  const editProject = (data: any) => {
    editDraftProject(data, project.id);
  };
  const handleDeleteProject = (id: any) => {
    deleteDraftProject(id);
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
                  addProject={editProject}
                  projectData={project}
                />
              )}
              {modal.type === "delete" && (
                <DeleteContent
                  onDone={() => setModal({ open: false, type: null })}
                  deleteProject={handleDeleteProject}
                  projectData={project}
                />
              )}
            </>
          )}
        </Dialog>

        <div className="flex justify-between items-start">
          <div className="flex gap-1">
            <span>{project.title}</span>
            {/*TODO: Add links*/}
          </div>
        </div>

        <ul className="my-3 list-disc list-inside space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
          {project.points.length > 0 ? (
            project.points.map((p: any) => <li key={p}>{p}</li>)
          ) : (
            <span>No highlights added</span>
          )}
        </ul>
      </div>

      <hr className="border-zinc-300 dark:border-zinc-800" />
    </>
  );
}
