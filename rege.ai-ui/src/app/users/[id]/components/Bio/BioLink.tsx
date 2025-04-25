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

const linkPlaceholdersMap: Record<string, string> = {
  LinkedIn: "your-name",
  GitHub: "username",
  Portfolio: "https://yourdomain.com",
  Twitter: "handle",
  Email: "you@example.com",
  Mobile: "+919876543210",
};

const linkIconsMap: Record<string, JSX.Element> = {
  LinkedIn: <Linkedin className="w-4 h-4" />,
  GitHub: <Github className="w-4 h-4" />,
  Portfolio: <Globe className="w-4 h-4" />,
  Twitter: <Twitter className="w-4 h-4" />,
  Email: <Mail className="w-4 h-4" />,
  Mobile: <Phone className="w-4 h-4" />,
};
export default function BioLink({ viewOnly }: { viewOnly: boolean }) {
  const [editMode, toggleEditMode] = useState<boolean>(false);
  const { resume, updateField } = useResumeStore();
  const { links } = resume;
  const [initialLinks, setInitialLinks] = useState(() =>
    produce(links, (draft) => { }),
  );
  const [draftlinks, setDraftlinks] = useState(() =>
    produce(initialLinks, (draft) => { }),
  );

  // TODO: Extend support for add and delete links
  // const addDraftLinks = (data: any) => {
  //   setDraftlinks(
  //     produce((draft: any) => {
  //       draft.push(data);
  //     }),
  //   );
  // };
  // const deleteDraftLinks = (id: string) => {
  //   setDraftlinks(
  //     produce((draft: any) => {
  //       const idx = draft.findIndex((d: any) => d.id === id);
  //       if (idx !== -1) draft.splice(idx, 1);
  //     }),
  //   );
  // };

  const editDraftLinks = (data: Link) => {
    setDraftlinks(
      produce((draft: Link[]) => {
        const idx = draft.findIndex((d) => d.id === data.id);
        if (idx !== -1) draft[idx] = data;
      }),
    );
  };

  const saveDraftlinks = () => {
    updateField("links", draftlinks);
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
    <div className="mt-4">
      <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            Links
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

        <div className="grid md:grid-cols-3 gap-x-2 gap-y-4">
          {draftlinks.map((item) => (
            <BioLinkItem
              key={item.id}
              bioLink={item}
              editMode={editMode}
              icon={linkIconsMap[item.label]}
              placeholder={linkPlaceholdersMap[item.label]}
              updateLinkItem={editDraftLinks}
            />
          ))}
          {draftlinks.length === 0 && <div>No links added.</div>}
        </div>
      </div>
    </div>
  );
}

interface BioLinkItemProps {
  bioLink: Link;
  icon: JSX.Element;
  placeholder: string;
  editMode: boolean;
  updateLinkItem: (data: any) => void;
}

function BioLinkItem({
  bioLink,
  editMode,
  icon,
  placeholder,
  updateLinkItem,
}: BioLinkItemProps) {
  return (
    <div className="flex items-center">
      <Badge className="bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 rounded-sm px-2 py-1 mr-2">
        {icon}
      </Badge>

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
          <span>{bioLink.prefix}</span>
          <span>{bioLink.value}</span>
        </div>
      )}
    </div>
  );
}
