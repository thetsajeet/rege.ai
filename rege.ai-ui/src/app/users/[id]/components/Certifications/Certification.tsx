import { useState } from "react";
import CertificationItems from "./CertificationItems";
import { Button } from "@/components/ui/button";
import { Check, Pencil, X } from "lucide-react";

export default function Certification({ viewOnly }: { viewOnly: boolean }) {
  const [editMode, toggleEditMode] = useState(false);
  const certifications = [
    {
      title: "Full-Stack Web Development",
      issuer: "freeCodeCamp",
      issued: "Feb 2024",
      thumbnail: "https://github.com/shadcn.png", // Replace with cert preview
    },
    {
      title: "AI for Everyone",
      issuer: "DeepLearning.AI",
      issued: "Nov 2023",
      thumbnail: "https://github.com/shadcn.png",
    },
    {
      title: "Full-Stack Web Development",
      issuer: "freeCodeCamp",
      issued: "Feb 2024",
      thumbnail: "https://github.com/shadcn.png", // Replace with cert preview
    },
    {
      title: "AI for Everyone",
      issuer: "DeepLearning.AI",
      issued: "Nov 2023",
      thumbnail: "https://github.com/shadcn.png",
    },
    {
      title: "AI for Everyone",
      issuer: "DeepLearning.AI",
      issued: "Nov 2023",
      thumbnail: "https://github.com/shadcn.png",
    },
  ];

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
          Certifications
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

      <CertificationItems certifications={certifications} editMode={editMode} />
    </div>
  );
}
