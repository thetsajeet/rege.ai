import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LinkPreview } from "@/components/ui/link-preview";
import { Trash } from "lucide-react";
import { JSX } from "react";

interface BioLinkProps {
    bioLink: BioLink;
    icon: JSX.Element;
    placeholder: string;
    editMode: boolean;
    updateLinkItem: (data: any) => void;
    deleteLinkItem?: (id: string) => void;
}

export default function BioLinkItem({
    icon,
    bioLink,
    placeholder,
    editMode,
    updateLinkItem,
    deleteLinkItem,
}: BioLinkProps) {
    const previewUrl =
        "https://" + (bioLink.prefix?.length ? bioLink.prefix : "") + bioLink.value;
    console.log(previewUrl);
    return (
        <div className="flex items-center">
            <Button
                variant="outline"
                size="sm"
                className="cursor-pointer text-zinc-800 dark:text-zinc-100 rounded-sm mr-2 p-[8px]"
            >
                {icon}
            </Button>

            {editMode ? (
                <span className="flex items-center flex-1">
                    {bioLink.prefix && (
                        <span className="text-sm text-zinc-600 dark:text-zinc-400 whitespace-nowrap font-semibold mr-1">
                            {bioLink.prefix}
                        </span>
                    )}
                    <Input
                        type="text"
                        placeholder={placeholder}
                        value={bioLink.value}
                        className="text-sm h-8 border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950"
                        onChange={(e) => {
                            updateLinkItem({ ...bioLink, value: e.target.value });
                        }}
                    />
                </span>
            ) : (
                <div className="underline underline-offset-2 cursor-pointer">
                    <LinkPreview
                        target="_blank"
                        url={previewUrl}
                        className="font-bold underline"
                    >
                        <span>{bioLink.prefix}</span>
                        <span>{bioLink.value}</span>
                    </LinkPreview>
                </div>
            )}

            {editMode && bioLink.label === "Custom" && (
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => deleteLinkItem(bioLink.id)}
                    className="cursor-pointer text-zinc-800 dark:text-zinc-100 rounded-sm ml-2 p-[8px]"
                >
                    <Trash className="text-red-600 w-4 h-4" />
                </Button>
            )}
        </div>
    );
}
