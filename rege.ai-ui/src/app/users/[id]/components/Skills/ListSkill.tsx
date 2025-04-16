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
import SkillForm from "./SkillForm";
import SkillItem from "./SkillItem";
import { useResumeStore } from "@/lib/store";
import { produce } from "immer";
import { showCustomToast } from "@/lib/toast";

export default function ListSkill({ viewOnly }: { viewOnly: boolean }) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editMode, toggleEditMode] = useState(false);
  const { resume, updateField } = useResumeStore();
  const { skills } = resume;

  const [initialSkills, setInitialSkills] = useState(() =>
    produce(skills, (draft) => { }),
  );
  const [draftSkills, setDraftSkills] = useState(() =>
    produce(initialSkills, (draft) => { }),
  );

  const addDraftSkill = (data: any) => {
    setDraftSkills(
      produce((draft: any) => {
        draft.push(data);
      }),
    );
  };

  const deleteDraftSkill = (id: string) => {
    setDraftSkills(
      produce((draft: any) => {
        const idx = draft.findIndex((d: any) => d.id === id);
        if (idx !== -1) draft.splice(idx, 1);
      }),
    );
  };

  const saveDraftSkills = () => {
    updateField("skills", draftSkills);
    setInitialSkills(draftSkills);
    toggleEditMode(false);
    showCustomToast("success", "Skill updated");
  };

  const cancelDraftSkills = () => {
    setDraftSkills(produce(initialSkills, (draft) => { }));
    toggleEditMode(false);
    showCustomToast("info", "Skill changes cancelled");
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
          {draftSkills.length > 0 ? (
            draftSkills.map((skill, idx) => (
              <SkillItem
                key={idx}
                skill={skill}
                isEditting={editMode}
                deleteDraftSkill={deleteDraftSkill}
              />
            ))
          ) : !editMode ? (
            <div className="w-full">No skill added.</div>
          ) : null}
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
                  <SkillForm
                    onDone={() => setModalOpen(false)}
                    updateSkill={addDraftSkill}
                  />
                </DialogHeader>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
}
