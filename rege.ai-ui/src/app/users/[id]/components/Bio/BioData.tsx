"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CalendarIcon, Check, Pencil, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useResumeStore } from "@/lib/store";
import { showCustomToast } from "@/lib/toast";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

export default function BioCard({ viewOnly }: { viewOnly: boolean }) {
  const [editMode, toggleEditMode] = useState<boolean>(false);
  const { resume, updateField } = useResumeStore();
  const { bio } = resume;
  const [initialBioState, _] = useState<Bio>(bio);
  const [bioDraft, setBioDraft] = useState<Bio>(initialBioState);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function saveBioState() {
    showCustomToast("success", "Bio updated!");
    updateField("bio", bioDraft);
    toggleEditMode(false);
  }

  function cancelBioState() {
    setBioDraft(initialBioState);
    showCustomToast("info", "Bio changes are cancelled");
    toggleEditMode(false);
  }

  const handleFileChangeClick = () => {
    fileInputRef.current?.click();
  };

  const handeFileChange = (event: any) => {
    try {
      const file = event.target.files?.[0];
      const allowedFileTypes = ["jpg", "jpeg", "png"];
      const fileTypeSet = new Set(allowedFileTypes);
      if (!file) throw new Error("No file found");

      if (!fileTypeSet.has(file.type.split("/")[1]))
        throw new Error(
          `Only filetypes are ${allowedFileTypes.join(", ")} are accepted.`,
        );

      const reader = new FileReader();
      reader.onloadend = () => {
        setBioDraft((p) => ({ ...p, imageUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    } catch (error) {
      showCustomToast("failure", error.message);
    }
  };

  return (
    <div className="mt-4">
      <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 max-w-screen-xl mx-auto">
        <div className="flex justify-between mb-2">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            Bio
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
                  onClick={saveBioState}
                >
                  <Check className="text-green-500" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="cursor-pointer rounded-full"
                  onClick={cancelBioState}
                >
                  <X className="text-red-600" />
                </Button>
              </span>
            ))}
        </div>
        <hr className="border-zinc-400 dark:border-zinc-700" />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 py-4 max-w-screen-md mx-auto">
          {/* Left Column (Avatar aligned right on larger screens) */}
          <div className="flex justify-center sm:justify-end relative">
            <div
              className={cn(
                "rounded-full p-1 transition-all ring-2 ring-zinc-600",
                editMode &&
                "group cursor-pointer hover:brightness-50 ring-2 ring-purple-500 focus-visible:ring-2 focus-visible:ring-purple-500 focus:outline-none",
              )}
            >
              <Avatar className="size-40">
                <AvatarImage
                  src={editMode ? bioDraft.imageUrl : bio.imageUrl}
                  alt="profile-picture"
                />
                <AvatarFallback>
                  {bio.fullName.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div
                onClick={handleFileChangeClick}
                className={cn(
                  "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition",
                  editMode && "cursor-pointer",
                )}
              >
                {editMode && (
                  <>
                    <Input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      onChange={handeFileChange}
                      className="hidden"
                    />
                    <Button className="rounded-full cursor-pointer">
                      <Pencil className="w-6 h-6 text-zinc-700 brightness-105" />
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right Column (Metadata aligned left on larger screens) */}
          <div className="flex flex-col justify-center items-start space-y-2 text-md text-zinc-700 dark:text-zinc-300">
            <div className="flex items-center gap-2 w-full">
              <span className="shrink-0 font-medium text-zinc-800 dark:text-zinc-100">
                Full name:
              </span>
              {editMode ? (
                <Input
                  type="text"
                  placeholder={"Enter your name"}
                  defaultValue={bio.fullName}
                  className="transition-all text-sm h-8 border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 flex-1 min-w-0"
                  onChange={(e: any) =>
                    setBioDraft((prev: Bio) => ({
                      ...prev,
                      fullName: e.target.value,
                    }))
                  }
                />
              ) : (
                <span className="truncate">{bio.fullName}</span>
              )}
            </div>
            <div className="flex items-center gap-2 w-full">
              <span className="shrink-0 font-medium text-zinc-800 dark:text-zinc-100">
                Profession:
              </span>
              {editMode ? (
                <Input
                  type="text"
                  placeholder={"Enter your profession"}
                  defaultValue={bio.profession}
                  className="text-sm h-8 border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 flex-1 min-w-0"
                  onChange={(e: any) =>
                    setBioDraft((prev: Bio) => ({
                      ...prev,
                      profession: e.target.value,
                    }))
                  }
                />
              ) : (
                <span className="truncate">{bio.profession}</span>
              )}
            </div>
            <div className="flex items-center gap-2 w-full">
              <span className="shrink-0 font-medium text-zinc-800 dark:text-zinc-100">
                Location:
              </span>
              {editMode ? (
                <Input
                  type="text"
                  placeholder={"Enter your location"}
                  defaultValue={bio.location}
                  className="text-sm h-8 border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 flex-1 min-w-0"
                  onChange={(e: any) =>
                    setBioDraft((prev: Bio) => ({
                      ...prev,
                      location: e.target.value,
                    }))
                  }
                />
              ) : (
                <span className="truncate">{bio.location}</span>
              )}
            </div>
            <div className="flex items-center gap-2 w-full">
              <span className="shrink-0 font-medium text-zinc-800 dark:text-zinc-100">
                Date of birth:
              </span>
              {editMode ? (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "text-sm h-8 border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 flex-1 min-w-0",
                      )}
                    >
                      {bioDraft.dob ? (
                        format(bioDraft.dob, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={bioDraft.dob}
                      onSelect={(x) => setBioDraft((p) => ({ ...p, dob: x }))}
                    />
                  </PopoverContent>
                </Popover>
              ) : (
                <span className="truncate">{format(bio.dob, "PPP")}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
