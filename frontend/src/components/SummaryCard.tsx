export default function SummaryCard({ summary }: { summary: string }) {
  return (
    <div class="flex flex-col items-start text-start mx-2 p-6 bg-white border border-gray-200 shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      {summary}
    </div>
  );
}
