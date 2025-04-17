import toast from "react-hot-toast";
import { CheckCircle, XCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils"; // optional classNames helper

export function showCustomToast(
  type: "success" | "failure" | "info",
  message: string,
) {
  const config = {
    success: {
      icon: <CheckCircle className="text-white w-5 h-5" />,
      bg: "bg-purple-600",
    },
    failure: {
      icon: <XCircle className="text-white w-5 h-5" />,
      bg: "bg-red-600",
    },
    info: {
      icon: <Info className="text-white w-5 h-5" />,
      bg: "bg-zinc-700 text-white",
    },
  }[type];

  toast.custom(
    (t) => (
      <div
        className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-md shadow-lg w-[300px] transition-all transform",
          config.bg,
        )}
      >
        {config.icon}
        <span className="text-sm font-medium">{message}</span>
      </div>
    ),
    { duration: 1500 },
  );
}
