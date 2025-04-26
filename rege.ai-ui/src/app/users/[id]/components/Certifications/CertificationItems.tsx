import EditDialog from "@/components/shared/EditDialog";
import { Button } from "@/components/ui/button";
import {
  DialogTitle,
  DialogDescription,
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { Minus, MinusCircle, Pencil, Plus, Trash } from "lucide-react";
import { useState } from "react";
import CertfificationForm from "./CertificationForm";
import Image from "next/image";

// export default function CertificationItem({ cert, editMode }: any) {
//   return (
//     <div className="relative flex items-center gap-4 py-4 pl-2 border">
//       {editMode && (
//         <Button
//           variant="outline"
//           size="icon"
//           className="cursor-pointer absolute top-2 right-2 z-10 size-6 p-1 bg-white dark:bg-zinc-900 shadow-sm rounded-full hover:bg-red-100 dark:hover:bg-red-900 text-red-500"
//         >
//           <Minus className="text-red-500 size-2" />
//         </Button>
//       )}
//       <img
//         src={cert.thumbnail}
//         alt={cert.title}
//         className="w-20 h-16 object-cover rounded-sm border border-zinc-300 dark:border-zinc-700"
//       />
//       <div className="flex-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
//         <div className="font-medium">{cert.title}</div>
//         <div className="text-zinc-500 dark:text-zinc-400">{cert.issuer}</div>
//         <div className="text-xs text-zinc-500 dark:text-zinc-400">
//           Issued: {cert.issued}
//         </div>
//       </div>
//     </div>
//   );
// }

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

const EditContent = ({ onDone, addCertification, certificationData }: any) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Add Certification</DialogTitle>
        <DialogDescription />
        <CertfificationForm
          onDone={onDone}
          updateCertfification={addCertification}
          certificationData={certificationData}
        />
      </DialogHeader>
    </DialogContent>
  );
};

const DeleteContent = ({
  onDone,
  deleteCertification,
  certificationData,
}: any) => {
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
                deleteCertification(certificationData.id);
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

export default function CertificationItem({
  isEditting,
  certification,
  editDraftCertification,
  deleteDraftCertification,
}: {
  isEditting: boolean;
  certification: Certification;
  editDraftCertification?: any;
  deleteDraftCertification?: any;
}) {
  const [modal, setModal] = useState({ open: false, type: null });
  const editCertification = (data: any) => {
    editDraftCertification(data, certification.id);
  };
  const handleDeleteCertification = (id: any) => {
    deleteDraftCertification(id);
  };

  const handleModalChange = (open: boolean) => {
    if (!open) {
      setModal({ type: null, open: false });
    }
  };

  return (
    <>
      <div className="relative flex items-center gap-4 py-4 pl-2 border">
        <Dialog
          open={modal.open}
          onOpenChange={handleModalChange}
          modal={false}
        >
          {isEditting && (
            <>
              <span
                className="absolute -top-1 -right-1 z-10 cursor-pointer"
                onClick={() => setModal({ open: true, type: "delete" })}
              >
                <MinusCircle className="size-5 text-red-600" />
              </span>
              <span
                className="absolute -top-1 -left-1 z-10 cursor-pointer"
                onClick={() => setModal({ open: true, type: "edit" })}
              >
                <Pencil className="size-4 text-yellow-400" />
              </span>
            </>
          )}
          {modal.open && (
            <div className="fixed inset-0 bg-zinc-900/60 backdrop-blur-sm z-40 pointer-events-none" />
          )}
          {modal.type === "edit" && (
            <EditContent
              onDone={() => setModal({ open: false, type: null })}
              addCertification={editCertification}
              certificationData={certification}
            />
          )}
          {modal.type === "delete" && (
            <DeleteContent
              onDone={() => setModal({ open: false, type: null })}
              deleteCertification={handleDeleteCertification}
              certificationData={certification}
            />
          )}
        </Dialog>
        {certification.imageUrl && (
          <div className="relative h-[70px] w-[100px]">
            <Image
              src={certification.imageUrl}
              alt={certification.label}
              className="object-cover rounded-sm border border-zinc-300 dark:border-zinc-700"
              fill
            />
          </div>
        )}
        <div className="flex-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
          <div className="font-medium">{certification.label}</div>
          <div className="text-zinc-500 dark:text-zinc-400">
            {certification.issuedBy}
          </div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            {certification.issuedMonth && certification.issuedYear && (
              <p className="flex italic gap-1 text-sm text-zinc-500 dark:text-zinc-400 relative">
                <span>{`${certification.issuedMonth && monthNumberToName[certification.issuedMonth]}'${certification.issuedYear && certification.issuedYear}`}</span>
              </p>
            )}{" "}
          </div>
        </div>
      </div>
    </>
  );
}
