import { Button } from "@/components/ui/button";
import {
  Dialog,
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

export default function Achievement({ viewOnly }: { viewOnly: boolean }) {
  const [editMode, toggleEditMode] = useState(false);
  const { resume, updateField } = useResumeStore();
  const { achievements } = resume;
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="mt-4">
      <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            Achievements
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
            ))}
        </div>

        <hr className="border-zinc-400 dark:border-zinc-700" />

        <div className="space-y-3 divide-y">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center text-sm text-zinc-700 dark:text-zinc-300 py-1"
            >
              <span className="flex items-center gap-1">
                {editMode && (
                  <>
                    <Pencil className="text-yellow-500 size-4 cursor-pointer" />
                    <Trash className="text-red-500 size-4 cursor-pointer" />
                  </>
                )}
                {item.text}
              </span>
              <p className="flex italic gap-1 text-sm text-zinc-500 dark:text-zinc-400 relative">
                <span>{`${monthNumberToName[item.month]}'${item.year}`}</span>
              </p>
            </div>
          ))}
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
                  updateAchievement={() => { }}
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
