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
import { Delete, Minus, MinusCircle, Pencil, Trash } from "lucide-react";
import EditDialog from "@/components/shared/EditDialog";
import SkillForm from "./SkillForm";
import { useResumeStore } from "@/lib/store";
import { useState } from "react";
import { produce } from "immer";
import { DialogClose } from "@radix-ui/react-dialog";
import { Badge } from "@/components/ui/badge";

const DeleteContent = ({ onDone, deleteSkill, skillData }: any) => {
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
                                deleteSkill(skillData.id);
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

export default function SkillItem({
    isEditting,
    skill,
    deleteDraftSkill,
}: {
    isEditting: boolean;
    skill: Skill;
    deleteDraftSkill?: any;
}) {
    const [modal, setModal] = useState({ open: false, type: null });
    const handleDeleteSkill = (id: any) => {
        deleteDraftSkill(id);
    };

    const handleModalChange = (open: boolean) => {
        if (!open) {
            setModal({ type: null, open: false });
        }
    };

    return (
        <div className="contents">
            <Dialog open={modal.open} onOpenChange={handleModalChange} modal={false}>
                <Badge className="overflow-visible relative bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 px-3 py-1 text-sm rounded-none">
                    {isEditting && (
                        <DialogTrigger asChild>
                            <span
                                className="absolute -top-1 -right-2 z-10"
                                onClick={() => setModal({ open: true, type: "delete" })}
                            >
                                <MinusCircle className="size-4 text-red-600" />
                            </span>
                        </DialogTrigger>
                    )}
                    {skill.label}
                </Badge>
                {modal.open && (
                    <div className="fixed inset-0 bg-zinc-900/60 backdrop-blur-sm z-40 pointer-events-none" />
                )}
                {modal.type === "delete" && (
                    <DeleteContent
                        onDone={() => setModal({ open: false, type: null })}
                        deleteSkill={handleDeleteSkill}
                        skillData={skill}
                    />
                )}
            </Dialog>
        </div>
    );
}
