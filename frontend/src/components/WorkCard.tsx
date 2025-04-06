export default function WorkCard({ exp }: { exp: Experience }) {
  return (
    <div class="flex flex-col items-start mx-2 p-6 bg-white border border-gray-200 shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div class="w-full flex justify-between">
        <span class="flex flex-row items-center gap-2">
          <h5 class="text-xl font-semibold dark:text-white">{exp.role}</h5>|
          <h5 class="text-lg dark:text-white">{exp.organization}</h5>|
          <h5 class="text-lg dark:text-white">{exp.location}</h5>
        </span>
        <span class="italic">{exp.duration}</span>
      </div>
      <ul class="w-full flex flex-col items-start list-inside list-disc">
        {exp.notes.map((note: any) => (
          <li>{note}</li>
        ))}
      </ul>
    </div>
  );
}
