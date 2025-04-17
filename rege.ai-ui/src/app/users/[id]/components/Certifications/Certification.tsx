import { useState } from "react";
import CertificationItems from "./CertificationItems";
import { Button } from "@/components/ui/button";
import { Check, Pencil, PlusCircle, X } from "lucide-react";
import { useResumeStore } from "@/lib/store";
import { produce } from "immer";
import { showCustomToast } from "@/lib/toast";
import CertificationItem from "./CertificationItems";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CertfificationForm from "./CertificationForm";

export default function Certification({ viewOnly }: { viewOnly: boolean }) {
  const [editMode, toggleEditMode] = useState(false);
  const { resume, updateField } = useResumeStore();
  const [modalOpen, setModalOpen] = useState(false);
  const { certifications } = resume;
  const [initialCertifications, setInitialCertifications] = useState(() =>
    produce(certifications, (draft) => {}),
  );
  const [draftCertifications, setDraftCertifications] = useState(() =>
    produce(initialCertifications, (draft) => {}),
  );

  const addDraftCertification = (data: any) => {
    setDraftCertifications(
      produce((draft: any) => {
        draft.push(data);
      }),
    );
  };

  const editDraftCertification = (data: any, id: string) => {
    setDraftCertifications(
      produce((draft: any) => {
        const idx = draft.findIndex((d: any) => d.id === id);
        if (idx !== -1) draft[idx] = data;
      }),
    );
  };

  const deleteDraftCertification = (id: string) => {
    setDraftCertifications(
      produce((draft: any) => {
        const idx = draft.findIndex((d: any) => d.id === id);
        if (idx !== -1) draft.splice(idx, 1);
      }),
    );
  };

  const saveDraftCertifications = () => {
    updateField("certifications", draftCertifications);
    setInitialCertifications(draftCertifications);
    toggleEditMode(false);
    showCustomToast("success", "Certification updated");
  };

  const cancelDraftCertifications = () => {
    setDraftCertifications(produce(initialCertifications, (draft) => {}));
    toggleEditMode(false);
    showCustomToast("info", "Certification changes cancelled");
  };

  return (
    <div className="mt-4">
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
                  onClick={saveDraftCertifications}
                >
                  <Check className="text-green-500" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="cursor-pointer rounded-full"
                  onClick={cancelDraftCertifications}
                >
                  <X className="text-red-600" />
                </Button>
              </span>
            ))}
        </div>

        <hr className="border-zinc-400 dark:border-zinc-700" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {draftCertifications.length > 0 ? (
            draftCertifications.map((item, idx) => (
              <CertificationItem
                key={idx}
                certification={item}
                isEditting={editMode}
                editDraftCertification={editDraftCertification}
                deleteDraftCertification={deleteDraftCertification}
              />
            ))
          ) : (
            <div>No certification added.</div>
          )}
        </div>
        {editMode && (
          <Dialog open={modalOpen} onOpenChange={setModalOpen} modal={false}>
            <DialogTrigger asChild>
              <Button className="w-full h-full text-white bg-purple-600 hover:bg-purple-700 transition cursor-pointer">
                <PlusCircle /> Add New Certification
              </Button>
            </DialogTrigger>
            {modalOpen && (
              <div className="fixed inset-0 bg-zinc-900/60 backdrop-blur-sm z-40 pointer-events-none" />
            )}
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Certification</DialogTitle>
                <DialogDescription />
                <CertfificationForm
                  onDone={() => setModalOpen(false)}
                  updateCertfification={addDraftCertification}
                />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}
