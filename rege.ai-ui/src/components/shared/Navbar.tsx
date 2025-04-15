import { Home, Link } from "lucide-react";
import { Badge } from "../ui/badge";

export default function Navbar() {
  return (
    <nav className="w-full px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        {/* Left: Home button */}
        <div className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
          <Link href={"/"}>
            <Home className="size-5" />
          </Link>
        </div>

        {/* Center: rege.ai/<username> */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1 text-sm">
          <Badge className="bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 px-2 py-0.5 rounded-sm">
            rege.ai
          </Badge>
          <span className="text-zinc-600 dark:text-zinc-400">
            <span className="mr-1">/</span>
            <span>theaj7</span>
          </span>
        </div>

        {/* Right: Empty to balance flex layout */}
        <div className="w-12" />
      </div>
    </nav>
  );
}
