export default function ProjectCard({ proj }: { proj: Project }) {
  return (
    <div class="flex flex-col items-start mx-2 p-6 bg-white border border-gray-200 shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div class="w-full flex justify-between">
        <span class="flex flex-row items-center gap-2">
          <h5 class="text-xl font-semibold dark:text-white">{proj.title}</h5>
          {proj.refs.map((ref: any) => (
            <a href={ref.url ?? "#"}>
              <h5 class="text-lg dark:text-white">{ref.label ?? ""}</h5>
            </a>
          ))}
        </span>
        <span class="italic">{proj.duration}</span>
      </div>
      <ul class="w-full flex flex-col items-start list-inside list-disc">
        {proj.notes.map((note: any) => (
          <li>{note}</li>
        ))}
      </ul>
    </div>
  );
}
