import { useForm } from "react-hook-form";

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

export default function EditCertificationItems() {
  const { control, register } = useForm({
    defaultValues: {
      certs: [
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
      ],
    },
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormProvider)
      name: "certs", // unique name for your Field Array
    },
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {fields.map((field: any, index: any) => (
        <input
          key={field.id} // important to include key with field's id
          {...register(`certs.${index}`)}
        />
      ))}
    </div>
  );
}
