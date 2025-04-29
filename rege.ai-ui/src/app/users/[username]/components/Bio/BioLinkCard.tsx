import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Check,
    Github,
    Globe,
    Linkedin,
    Mail,
    Pencil,
    Phone,
    Twitter,
    X,
} from "lucide-react";
import { JSX, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useResumeStore } from "@/lib/store";
import { produce } from "immer";
import { showCustomToast } from "@/lib/toast";
import BioLinkItem from "./BioLink";

const linkPlaceholdersMap: Record<string, string> = {
    LinkedIn: "your-name",
    GitHub: "username",
    Portfolio: "https://yourdomain.com",
    Twitter: "handle",
    Custom: "enter your url",
};

const linkIconsMap: Record<string, JSX.Element> = {
    LinkedIn: <Linkedin className="w-4 h-4" />,
    GitHub: <Github className="w-4 h-4" />,
    Portfolio: <Globe className="w-4 h-4" />,
    Twitter: <Twitter className="w-4 h-4" />,
    Custom: <Globe className="w-4 h-4" />,
};

export default function BioLinkCard({
    canEdit,
    links,
}: {
    canEdit: boolean;
    links: BioLink[];
}) {
    const [editMode, toggleEditMode] = useState<boolean>(false);
    const { resume, updateField } = useResumeStore();
    const [initialLinks, setInitialLinks] = useState(() =>
        produce(links, (draft) => { }),
    );
    const [draftlinks, setDraftlinks] = useState(() =>
        produce(initialLinks, (draft) => { }),
    );

    const addDraftLink = () => {
        setDraftlinks(
            produce((draft: BioLink[]) => {
                draft.push({
                    id: Date.now().toString() + (Math.random() * 1000).toString(),
                    value: "",
                    label: "Custom",
                    prefix: "",
                });
            }),
        );
    };

    const deleteDraftLink = (id: string) => {
        setDraftlinks(
            produce((draft: BioLink[]) => {
                console.log(draft);
                const idx = draft.findIndex((d: any) => d.id === id);
                if (idx === -1 || draft[idx].label !== "Custom") return;
                draft.splice(idx, 1);
            }),
        );
    };

    const editDraftLinks = (data: BioLink) => {
        setDraftlinks(
            produce((draft: BioLink[]) => {
                const idx = draft.findIndex((d) => d.id === data.id);
                if (idx !== -1) draft[idx] = data;
            }),
        );
    };

    const saveDraftlinks = () => {
        const toSaveDraftLinks = draftlinks.filter((item) => {
            if (item.label !== "Custom") return true;
            return item.value.length > 0;
        });
        console.log(toSaveDraftLinks);
        setDraftlinks(toSaveDraftLinks);
        updateField("links", toSaveDraftLinks);
        setInitialLinks(draftlinks);
        toggleEditMode(false);
        showCustomToast("success", "Link updated");
    };

    const cancelDraftlinks = () => {
        setDraftlinks(produce(initialLinks, (draft) => { }));
        toggleEditMode(false);
        showCustomToast("info", "Link changes cancelled");
    };

    return (
        <div className="mt-4 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
            <div className="flex justify-between">
                <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
                    Links
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
                                onClick={saveDraftlinks}
                            >
                                <Check className="text-green-500" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="cursor-pointer rounded-full"
                                onClick={cancelDraftlinks}
                            >
                                <X className="text-red-600" />
                            </Button>
                        </span>
                    ))}
            </div>

            <hr className="border-zinc-400 dark:border-zinc-700" />

            <div>
                {!editMode &&
                    !draftlinks.filter((item) => item.value.length).length && (
                        <span>No links added</span>
                    )}
            </div>

            <div className="grid md:grid-cols-3 gap-x-2 gap-y-4">
                {editMode &&
                    draftlinks.map((item: BioLink) => (
                        <BioLinkItem
                            key={item.id}
                            bioLink={item}
                            editMode={editMode}
                            icon={linkIconsMap[item.label]}
                            placeholder={linkPlaceholdersMap[item.label]}
                            updateLinkItem={editDraftLinks}
                            deleteLinkItem={deleteDraftLink}
                        />
                    ))}
                {!editMode &&
                    draftlinks.map((item: BioLink) =>
                        item.value ? (
                            <BioLinkItem
                                key={item.id}
                                bioLink={item}
                                editMode={editMode}
                                icon={linkIconsMap[item.label]}
                                placeholder={linkPlaceholdersMap[item.label]}
                                updateLinkItem={editDraftLinks}
                            />
                        ) : null,
                    )}
                {editMode && (
                    <Button
                        onClick={addDraftLink}
                        className="w-full text-white bg-purple-600 hover:bg-purple-700 transition cursor-pointer"
                    >
                        + Add Custom Link
                    </Button>
                )}
            </div>
        </div>
    );
}
