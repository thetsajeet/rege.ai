"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Check, Pencil, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function BioCard() {
  const [editMode, toggleEditMode] = useState<boolean>(false);

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 max-w-screen-xl mx-auto">
      <div className="flex justify-between mb-2">
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
          Bio
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
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 py-4 max-w-screen-md mx-auto">
        {/* Left Column (Avatar aligned right on larger screens) */}
        <div className="flex justify-center sm:justify-end">
          <div
            className={cn(
              "rounded-full p-1 transition-all",
              editMode &&
                "relative group cursor-pointer hover:brightness-50 hover:ring-2 hover:ring-purple-500 focus-visible:ring-2 focus-visible:ring-purple-500 focus:outline-none",
            )}
          >
            <Avatar className="size-40">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              {editMode && (
                <Pencil className="w-6 h-6 text-black brightness-105" />
              )}
            </div>
          </div>
        </div>

        {/* Right Column (Metadata aligned left on larger screens) */}
        <div className="flex flex-col justify-center items-start space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
          <div className="flex items-center gap-2 w-full">
            <span className="shrink-0 font-medium text-zinc-800 dark:text-zinc-100">
              label:
            </span>
            {editMode ? (
              <Input
                type="text"
                placeholder={""}
                defaultValue={"ajeet"}
                className="text-sm h-8 border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 flex-1 min-w-0"
              />
            ) : (
              <span className="truncate">{"aj"}</span>
            )}
          </div>
          <div className="flex items-center gap-2 w-full">
            <span className="shrink-0 font-medium text-zinc-800 dark:text-zinc-100">
              label:
            </span>
            {editMode ? (
              <Input
                type="text"
                placeholder={""}
                defaultValue={"ajeet"}
                className="text-sm h-8 border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 flex-1 min-w-0"
              />
            ) : (
              <span className="truncate">{"aj"}</span>
            )}
          </div>
          <div className="flex items-center gap-2 w-full">
            <span className="shrink-0 font-medium text-zinc-800 dark:text-zinc-100">
              label:
            </span>
            {editMode ? (
              <Input
                type="text"
                placeholder={""}
                defaultValue={"ajeet"}
                className="text-sm h-8 border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 flex-1 min-w-0"
              />
            ) : (
              <span className="truncate">{"aj"}</span>
            )}
          </div>
          <div className="flex items-center gap-2 w-full">
            <span className="shrink-0 font-medium text-zinc-800 dark:text-zinc-100">
              label:
            </span>
            {editMode ? (
              <Input
                type="text"
                placeholder={""}
                defaultValue={"ajeet"}
                className="text-sm h-8 border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 flex-1 min-w-0"
              />
            ) : (
              <span className="truncate">{"aj"}</span>
            )}
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
