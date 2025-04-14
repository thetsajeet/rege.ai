'use client'

import { useState } from "react"
import { Dialog, DialogTitle, DialogTrigger, DialogContent, DialogHeader, DialogDescription } from "../ui/dialog"

export default function EditDialog({trigger, content}: any) {
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    return (
        <Dialog open={modalOpen} onOpenChange={setModalOpen} modal={false}>
            <DialogTrigger asChild>
                {trigger} 
            </DialogTrigger>
            {modalOpen && <div className="fixed inset-0 bg-zinc-900/60 backdrop-blur-sm z-40 pointer-events-none" /> }
            <DialogContent>
                {content}
            </DialogContent>
        </Dialog>
    )  
}
