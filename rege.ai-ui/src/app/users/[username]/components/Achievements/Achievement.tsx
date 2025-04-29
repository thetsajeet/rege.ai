import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, Pencil, Trash, X } from "lucide-react";
import { useState } from "react";
import CustomDialog from "@/components/shared/EditDialog";
import { useResumeStore } from "@/lib/store";
import AchievementForm from "./AchievementForm";
import { produce } from "immer";
import { showCustomToast } from "@/lib/toast";
import AchievementItem from "./AchievementItem";

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

export default function Achievement({
  canEdit,
  achievements,
}: {
  canEdit: boolean;
  achievements: Achievement[];
}) {
  const [editMode, toggleEditMode] = useState(false);
  const { resume, updateField } = useResumeStore();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [initialAchievements, setInitialAchievements] = useState(() =>
    produce(achievements, (draft) => { }),
  );
  const [draftAchievements, setDraftAchievements] = useState(() =>
    produce(initialAchievements, (draft) => { }),
  );

  const addDraftAchievement = (data: any) => {
    setDraftAchievements(
      produce((draft: any) => {
        draft.push(data);
      }),
    );
  };

  const editDraftAchievement = (data: any, id: string) => {
    setDraftAchievements(
      produce((draft: any) => {
        const idx = draft.findIndex((d: any) => d.id === id);
        if (idx !== -1) draft[idx] = data;
      }),
    );
  };

  const deleteDraftAchievement = (id: string) => {
    setDraftAchievements(
      produce((draft: any) => {
        const idx = draft.findIndex((d: any) => d.id === id);
        if (idx !== -1) draft.splice(idx, 1);
      }),
    );
  };

  const saveDraftAchievements = () => {
    updateField("achievements", draftAchievements);
    setInitialAchievements(draftAchievements);
    toggleEditMode(false);
    showCustomToast("success", "Achievement updated");
  };

  const cancelDraftAchievements = () => {
    setDraftAchievements(produce(initialAchievements, (draft) => { }));
    toggleEditMode(false);
    showCustomToast("info", "Achievement changes cancelled");
  };

  return (
    <div className="mt-4">
      <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            Achievements
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
                  onClick={saveDraftAchievements}
                >
                  <Check className="text-green-500" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="cursor-pointer rounded-full"
                  onClick={cancelDraftAchievements}
                >
                  <X className="text-red-600" />
                </Button>
              </span>
            ))}
        </div>

        <hr className="border-zinc-400 dark:border-zinc-700" />

        <div className="space-y-3">
          {draftAchievements.length > 0 ? (
            draftAchievements.map((item, idx) => (
              <AchievementItem
                key={idx}
                achievement={item}
                isEditting={editMode}
                editDraftAchievement={editDraftAchievement}
                deleteDraftAchievement={deleteDraftAchievement}
              />
            ))
          ) : (
            <div>No achievements added.</div>
          )}
        </div>

        {editMode && (
          <Dialog open={modalOpen} onOpenChange={setModalOpen} modal={false}>
            <DialogTrigger asChild>
              <Button className="w-full mt-4 text-white bg-purple-600 hover:bg-purple-700 transition cursor-pointer">
                + Add New Achievement
              </Button>
            </DialogTrigger>
            {modalOpen && (
              <div className="fixed inset-0 bg-zinc-900/60 backdrop-blur-sm z-40 pointer-events-none" />
            )}
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Achievement</DialogTitle>
                <DialogDescription />
                <AchievementForm
                  updateAchievement={addDraftAchievement}
                  onDone={() => setModalOpen(false)}
                />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}
