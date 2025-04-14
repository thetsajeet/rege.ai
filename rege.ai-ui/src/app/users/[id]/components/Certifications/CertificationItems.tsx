import { Plus } from "lucide-react";

function CertificationItem({ cert }: any) {
  return (
    <div className="flex items-center gap-4 py-4 pl-2 border">
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

function AddCertificationItem() {
  return (
    <div className="flex items-center justify-center py-4 pl-2 border border-dashed">
      <Plus />
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
        <CertificationItem key={idx} cert={cert} />
      ))}

      {editMode && <AddCertificationItem />}
    </div>
  );
}
