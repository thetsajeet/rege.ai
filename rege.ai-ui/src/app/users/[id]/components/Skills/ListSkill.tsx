import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, Pencil, PlusCircle, X } from "lucide-react";
import { useState } from "react";

export default function ListSkill({ viewOnly }: { viewOnly: boolean }) {
  const skills = [
    "React",
    "Angular",
    "Node.js",
    "TypeScript",
    "TailwindCSS",
    "MongoDB",
  ];
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editMode, toggleEditMode] = useState(false);
  const saveDraftSkills = () => {
    toggleEditMode(false);
  };
  const cancelDraftSkills = () => {
    toggleEditMode(false);
  };

  return (
    <div className="mt-4">
      <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            Skills
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
                  onClick={saveDraftSkills}
                >
                  <Check className="text-green-500" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="cursor-pointer rounded-full"
                  onClick={cancelDraftSkills}
                >
                  <X className="text-red-600" />
                </Button>
              </span>
            ))}
        </div>
        <hr className="border-zinc-400 dark:border-zinc-700" />

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <Badge
              key={idx}
              className="bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 rounded-sm px-3 py-1 text-sm"
            >
              {skill}
            </Badge>
          ))}
          {editMode && (
            <Dialog open={modalOpen} onOpenChange={setModalOpen} modal={false}>
              <DialogTrigger asChild>
                <Button className="w-12 text-white bg-purple-600 hover:bg-purple-700 transition cursor-pointer">
                  <PlusCircle />
                </Button>
              </DialogTrigger>
              {modalOpen && (
                <div className="fixed inset-0 bg-zinc-900/60 backdrop-blur-sm z-40 pointer-events-none" />
              )}
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Skill</DialogTitle>
                  <DialogDescription />
                </DialogHeader>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
}
