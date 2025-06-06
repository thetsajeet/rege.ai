import Orb from "@/components/bits/orb";
import { DotPattern } from "@/components/magicui/dot-pattern";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LinkPreview } from "@/components/ui/link-preview";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowRight, Mouse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BentoFeatures from "./BentoFeatures";

export default function Home() {
  return (
    <div
      className={`container max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col antialiased`}
    >
      <div className="bg-zinc-950 text-white">
        {/* Navbar */}
        <nav className="w-full px-4 py-4 border-b border-zinc-800">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between">
            <div className="text-xl font-medium text-white">Rege.ai</div>
            <Link className="contents" href="/login">
              <Button className="group bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-md font-medium text-white cursor-pointer">
                Get Started
                <ArrowRight className="size-4 text-white group-hover:translate-x-1 transform transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="w-full px-4 py-20 my-10">
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
                <Link href="/login" className="contents">
                  <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-md font-medium text-white cursor-pointer">
                    Get Started
                  </button>
                </Link>
                <button className="bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-md font-medium text-zinc-300 cursor-pointer">
                  Learn More
                </button>
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

        <div className="w-full my-30 flex justify-center">
          <span className="border-2 animate-bounce rounded-full p-4 duration-200">
            <Mouse className="inline size-8" />
          </span>
        </div>

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
        <section className="mt-28">
          <BentoFeatures />
        </section>

        {/* Call to Action Section */}
        <section className="w-full mt-28 h-[500px] relative flex items-center px-4 border-b border-zinc-800">
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            )}
          />
          <div className="max-w-screen-md mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold">
              Start building your AI-powered resume now
            </h2>

            <Link href="/login" className="contents">
              <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-md font-medium text-white cursor-pointer">
                Get Started for free
              </button>
            </Link>
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
    </div>
  );
}
