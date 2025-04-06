import { JSX } from "solid-js";

export default function WrapperCard({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}) {
  return (
    <div class="flex flex-col">
      <div class="mx-2 text-start pl-4 py-2 font-bold text-2xl text-gray-300 dark:text-gray-800 dark:bg-white border dark:border-gray-200 shadow-sm bg-gray-800 border-gray-700 cursor-default">
        {title}
      </div>
      <div class="flex flex-col">{children}</div>
    </div>
  );
}
