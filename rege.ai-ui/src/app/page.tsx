import Orb from "@/components/bits/orb";
import { DotPattern } from "@/components/magicui/dot-pattern";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Badge } from "@/components/ui/badge";
import { LinkPreview } from "@/components/ui/link-preview";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="w-full px-4 py-4 border-b border-zinc-800">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <div className="text-xl font-medium text-white">Rege.ai</div>
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-purple-900 rounded-full p-px text-md font-semibold leading-6 text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(168,85,247,0.6)_0%,rgba(168,85,247,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-md py-0.5 px-4 ring-1 ring-purple-500/20 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-600 hover:to-purple-700 transition-colors duration-300">
              <Link className="contents" href="/users/1">
                <span className="text-white">Get started</span>
                <span>
                  <ArrowRight className="size-4 text-white" />
                </span>
              </Link>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple-400/0 via-purple-400/90 to-purple-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full px-4 py-20">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1 space-y-6 text-center lg:text-left relative">
            <Badge variant="secondary" className="p-2 text-md">
              🟡 rege.ai is under construction
            </Badge>
            {/* <span className="inline-block bg-zinc-800 text-zinc-200 px-3 py-1 rounded-full text-sm font-medium"></span> */}
            <h1 className="text-5xl font-semibold leading-tight text-white">
              Your resume. <br />
              Rebuilt by AI.
            </h1>
            <p className="text-zinc-400 text-lg max-w-md mx-auto lg:mx-0">
              Store your career highlights once. Generate a fresh resume every
              time, tailored to any job description — instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/users/1" className="contents">
                <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-md font-medium text-white cursor-pointer">
                  Get Started
                </button>
                <button className="bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-md font-medium text-zinc-300 cursor-pointer">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-1 hidden lg:flex justify-center">
            <div className="relative w-[360px] h-[280px] bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center text-zinc-500 text-sm">
              <Image
                src="/rege.ai-1.png"
                className="object-cover transition-transform duration-300 hover:scale-110 border-2 border-zinc"
                alt="resume preview"
                fill={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <div className="relative mt-28">
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="Hero Video"
        />
      </div>

      {/* Features Section */}
      <section className="w-full px-4 py-20 mt-24 border-b border-zinc-800">
        <div className="max-w-screen-xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-semibold">Features</h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "Store Once",
                desc: "Keep all your work experience, projects, skills and achievements in one place.",
              },
              {
                title: "Generate On Demand",
                desc: "Upload a job description and get a fresh resume tailored to it — instantly.",
              },
              {
                title: "ATS Friendly",
                desc: "Built to be parsed cleanly by Applicant Tracking Systems.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-zinc-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full h-[500px] relative flex items-center px-4 border-b border-zinc-800">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          )}
        />
        <div className="max-w-screen-md mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold">
            Start building your AI-powered resume now
          </h2>
          <button className="cursor-pointer bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-md font-medium text-white">
            Get Started for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-4 py-10 border-zinc-800 text-center text-zinc-500 text-sm">
        Built with ❤️ by{" "}
        <LinkPreview
          target="_blank"
          url="https:/github.com/thetsajeet"
          className="font-bold underline"
        >
          thetsajeet
        </LinkPreview>
      </footer>
    </div>
  );
}
