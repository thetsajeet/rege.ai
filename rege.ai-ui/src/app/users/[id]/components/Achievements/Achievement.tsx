import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Check, Pencil, Trash, X } from "lucide-react";
import { useState } from "react";
import CustomDialog from "@/components/shared/EditDialog";

export default function Achievement() {
  const [editMode, toggleEditMode] = useState(false);
  const achievements = [
    {
      title: 'won "Best Innovation Award"',
      event: "Hackfest 2024",
      month: "Mar 2024",
    },
    {
      title: 'won "Top 10 Finalist"',
      event: "DevCon India",
      month: "Jan 2024",
    },
    { title: 'won "Design Champion"', event: "UI Jam", month: "Nov 2023" },
  ];

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
          Achievements
        </h2>
        {!editMode ? (
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
        )}
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
                <Trash className="text-red-500 size-4 cursor-pointer" />
              )}
              {item.title} in <span className="italic">{item.event}</span>
            </span>
            <span className="text-md italic text-zinc-500 dark:text-zinc-400">
              {item.month}
            </span>
          </div>
        ))}
      </div>

      {editMode && (
        <CustomDialog
          trigger={
            <Button className="w-full text-white bg-purple-600 hover:bg-purple-700 transition cursor-pointer">
              + Add New Achievement
            </Button>
          }
          content={
            <DialogHeader>
              <DialogTitle>Add a new achievement</DialogTitle>
              <DialogDescription />
              <div className="mt-2"></div>
            </DialogHeader>
          }
          close={
            <div className="flex justify-start gap-2">
              <Button variant="outline" className="cursor-pointer">
                Cancel
              </Button>
              <Button className="cursor-pointer text-white bg-purple-600 hover:bg-purple-700">
                Save
              </Button>
            </div>
          }
        />
      )}
    </div>
  );
}
