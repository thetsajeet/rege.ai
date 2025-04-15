"use client";

import {
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import {
  Dialog,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "../ui/dialog";

export default function EditDialog({
  trigger,
  content,
  close,
}: {
  trigger: ReactElement<any>;
  content: ReactNode;
  close?: ReactNode;
}) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen} modal={false}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      {modalOpen && (
        <div className="fixed inset-0 bg-zinc-900/60 backdrop-blur-sm z-40 pointer-events-none" />
      )}
      <DialogContent>
        <>
          {content}
          {close && (
            <DialogFooter>
              <DialogClose asChild>{close}</DialogClose>
            </DialogFooter>
          )}
        </>
      </DialogContent>
    </Dialog>
  );
}
