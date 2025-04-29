import { WavyBackground } from "@/components/ui/wavy-background";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`container mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col antialiased`}
    >
      <WavyBackground className="w-full">
        <div className="my-auto shadow-input mx-auto w-full max-w-md bg-white p-4 rounded-md md:p-8 dark:bg-black border-2 border-zinc-700">
          <h2 className="text-2xl font-extrabold text-neutral-800 dark:text-neutral-200">
            Welcome to rege.ai
          </h2>
          <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
            Provide us a few details to get started.
          </p>
          {children}
        </div>
      </WavyBackground>
    </div>
  );
}
