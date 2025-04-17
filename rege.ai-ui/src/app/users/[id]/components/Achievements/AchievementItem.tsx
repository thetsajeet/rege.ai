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
import AchievementForm from "./AchievementForm";
import { useResumeStore } from "@/lib/store";
import { useState } from "react";
import { produce } from "immer";
import { DialogClose } from "@radix-ui/react-dialog";

const EditContent = ({ onDone, addAchievement, achievementData }: any) => {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add Achievement</DialogTitle>
                <DialogDescription />
            </DialogHeader>
            <AchievementForm
                onDone={onDone}
                updateAchievement={addAchievement}
                achievementData={achievementData}
            />
        </DialogContent>
    );
};

const DeleteContent = ({ onDone, deleteAchievement, achievementData }: any) => {
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
                                deleteAchievement(achievementData.id);
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

export default function AchievementItem({
    isEditting,
    achievement,
    editDraftAchievement,
    deleteDraftAchievement,
}: {
    isEditting: boolean;
    achievement: Achievement;
    editDraftAchievement?: any;
    deleteDraftAchievement?: any;
}) {
    const [modal, setModal] = useState({ open: false, type: null });
    const editAchievement = (data: any) => {
        editDraftAchievement(data, achievement.id);
    };
    const handleDeleteAchievement = (id: any) => {
        deleteDraftAchievement(id);
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
                                    addAchievement={editAchievement}
                                    achievementData={achievement}
                                />
                            )}
                            {modal.type === "delete" && (
                                <DeleteContent
                                    onDone={() => setModal({ open: false, type: null })}
                                    deleteAchievement={handleDeleteAchievement}
                                    achievementData={achievement}
                                />
                            )}
                        </>
                    )}
                </Dialog>

                <div className="flex justify-between items-start">
                    <div className="flex gap-1">
                        <span>{achievement.text}</span>
                    </div>
                    {achievement.month && achievement.year && (
                        <p className="flex italic gap-1 text-sm text-zinc-500 dark:text-zinc-400 relative">
                            <span>{`${achievement.month && monthNumberToName[achievement.month]}'${achievement.year && achievement.year}`}</span>
                        </p>
                    )}
                </div>
            </div>
            <hr className="border-zinc-300 dark:border-zinc-800" />
        </>
    );
}
