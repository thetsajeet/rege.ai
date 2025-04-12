import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="w-full px-4 py-4 border-b border-zinc-800">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <div className="text-sm font-medium text-white">Home</div>
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1 text-sm">
            <Badge className="bg-zinc-800 text-white px-2 py-0.5 rounded-sm">
              rege.ai
            </Badge>
            <span className="text-zinc-400">/john_doe</span>
          </div>
          <div className="w-12" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full px-4 py-20">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <span className="inline-block bg-zinc-800 text-zinc-200 px-3 py-1 rounded-full text-sm font-medium">
              rege.ai
            </span>
            <h1 className="text-5xl font-semibold leading-tight text-white">
              Your resume. Rebuilt by AI.
            </h1>
            <p className="text-zinc-400 text-lg max-w-md mx-auto lg:mx-0">
              Store your career highlights once. Generate a fresh resume every
              time, tailored to any job description — instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-md font-medium text-white">
                Get Started
              </button>
              <button className="bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-md font-medium text-zinc-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 hidden lg:flex justify-center">
            <div className="w-[360px] h-[280px] bg-zinc-800 rounded-xl border border-zinc-700 flex items-center justify-center text-zinc-500 text-sm">
              [ AI Resume Preview ]
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="w-full px-4 py-20 border-t border-zinc-800">
        <div className="max-w-screen-md mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold">Watch Rege.ai in Action</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            See how quickly and easily you can generate a tailored resume using
            your stored career highlights.
          </p>
          <div className="w-full aspect-video bg-zinc-800 rounded-xl border border-zinc-700 flex items-center justify-center text-zinc-500">
            [ Video Placeholder ]
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full px-4 py-20 border-t border-zinc-800">
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
      <section className="w-full px-4 py-20 border-t border-zinc-800">
        <div className="max-w-screen-md mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold">
            Start building your AI-powered resume now
          </h2>
          <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-md font-medium text-white">
            Get Started for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-4 py-10 border-t border-zinc-800 text-center text-zinc-500 text-sm">
        © 2025 rege.ai. All rights reserved.
      </footer>
    </div>
  );
}
