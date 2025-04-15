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
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function BioLink({ viewOnly }: { viewOnly: boolean }) {
  const [editMode, toggleEditMode] = useState<boolean>(false);
  return (
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

      <div className="grid md:grid-cols-3 gap-x-2 gap-y-4">
        <LinkRow
          icon={<Linkedin className="w-4 h-4" />}
          label="LinkedIn"
          prefix="linkedin.com/in/"
          placeholder="your-name"
          value="john-doe"
          editMode={editMode}
        />
        <LinkRow
          icon={<Github className="w-4 h-4" />}
          label="GitHub"
          prefix="github.com/"
          placeholder="username"
          value="johndoe"
          editMode={editMode}
        />
        <LinkRow
          icon={<Globe className="w-4 h-4" />}
          label="Portfolio"
          prefix=""
          placeholder="https://yourdomain.com"
          value="https://johndoe.dev"
          editMode={editMode}
        />
        <LinkRow
          icon={<Twitter className="w-4 h-4" />}
          label="Twitter"
          prefix="twitter.com/"
          placeholder="handle"
          value="johndoe"
          editMode={editMode}
        />
        <LinkRow
          icon={<Mail className="w-4 h-4" />}
          label="Email"
          prefix=""
          placeholder="you@example.com"
          value="john@example.com"
          editMode={editMode}
        />
        <LinkRow
          icon={<Phone className="w-4 h-4" />}
          label="Mobile"
          prefix=""
          placeholder="+919876543210"
          value="+919812345678"
          editMode={editMode}
        />
      </div>
    </div>
  );
}

function LinkRow({ icon, value, prefix, placeholder, editMode }: any) {
  return (
    <div className="flex items-center">
      <Badge className="bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 rounded-sm px-2 py-1 mr-2">
        {icon}
      </Badge>

      {editMode ? (
        <span className="flex items-center flex-1">
          {prefix && (
            <span className="text-sm text-zinc-600 dark:text-zinc-400 whitespace-nowrap font-semibold mr-1">
              {prefix}
            </span>
          )}
          <Input
            type="text"
            placeholder={placeholder}
            defaultValue={value}
            className="text-sm h-8 border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950"
          />
        </span>
      ) : (
        <div className="underline underline-offset-2 cursor-pointer">
          <span>{prefix}</span>
          <span>{value}</span>
        </div>
      )}
    </div>
  );
}
