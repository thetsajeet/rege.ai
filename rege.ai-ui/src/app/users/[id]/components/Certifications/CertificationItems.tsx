import EditDialog from "@/components/shared/EditDialog";
import { Button } from "@/components/ui/button";
import {
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { Minus, Pencil, Plus } from "lucide-react";

function CertificationItem({ cert, editMode }: any) {
  return (
    <div className="relative flex items-center gap-4 py-4 pl-2 border">
      {editMode && (
        <Button
          variant="outline"
          size="icon"
          className="cursor-pointer absolute top-2 right-2 z-10 size-6 p-1 bg-white dark:bg-zinc-900 shadow-sm rounded-full hover:bg-red-100 dark:hover:bg-red-900 text-red-500"
        >
          <Minus className="text-red-500 size-2" />
        </Button>
      )}
      <img
        src={cert.thumbnail}
        alt={cert.title}
        className="w-20 h-16 object-cover rounded-sm border border-zinc-300 dark:border-zinc-700"
      />
      <div className="flex-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
        <div className="font-medium">{cert.title}</div>
        <div className="text-zinc-500 dark:text-zinc-400">{cert.issuer}</div>
        <div className="text-xs text-zinc-500 dark:text-zinc-400">
          Issued: {cert.issued}
        </div>
      </div>
    </div>
  );
}

export default function CertificationItems({
  certifications,
  editMode,
}: {
  certifications: any[];
  editMode: boolean;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {certifications.map((cert, idx) => (
        <CertificationItem key={idx} cert={cert} editMode={editMode} />
      ))}

      {editMode && (
        <EditDialog
          trigger={
            <button className="cursor-pointer flex items-center justify-center py-4 pl-2 border border-dashed border-zinc-300 dark:border-zinc-700 bg-[radial-gradient(circle,_rgba(0,0,0,0.03)_1px,_transparent_1px)] [background-size:16px_16px] hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
              <Plus className="text-purple-500" />
            </button>
          }
          content={
            <DialogHeader>
              <DialogTitle>Editing exp-1</DialogTitle>
              <DialogDescription />
              <div className="mt-2">add cert</div>
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
