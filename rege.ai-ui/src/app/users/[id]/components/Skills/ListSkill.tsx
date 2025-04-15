import { Badge } from "@/components/ui/badge";

export default function ListSkill() {
  const skills = [
    "React",
    "Angular",
    "Node.js",
    "TypeScript",
    "TailwindCSS",
    "MongoDB",
  ];

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
        Skills
      </h2>
      <hr className="border-zinc-400 dark:border-zinc-700" />

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <Badge
            key={idx}
            className="bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 rounded-sm px-3 py-1 text-sm"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
