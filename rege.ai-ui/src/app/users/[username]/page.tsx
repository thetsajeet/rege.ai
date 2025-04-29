"use client";

import { notFound, useParams } from "next/navigation";
import Exp from "./components/Experiences/Experience";
import Certification from "./components/Certifications/Certification";
import Achievement from "./components/Achievements/Achievement";
import BioLinkCard from "./components/Bio/BioLinkCard";
import BioData from "./components/Bio/BioData";
import ListSkill from "./components/Skills/ListSkill";
import Navbar from "@/components/shared/Navbar";
import ListProjects from "./components/Projects/ListProjects";
import ListEducations from "./components/Education/ListEducation";
import { useResumeStore } from "@/lib/store";
import { useEffect, useState } from "react";
import { DEFAULT_RESUME } from "@/lib/constants";

export default function UserPage() {
  const { username } = useParams();
  const loggedInResume = useResumeStore((state) => state.resume);
  const [viewingResume, setViewingResume] = useState<Resume | null>(null);

  useEffect(() => {
    async function fetchResume() {
      if (!username) return notFound();

      if (
        loggedInResume.bio.username === username ||
        loggedInResume.bio.userId === username
      )
        setViewingResume(loggedInResume);
      else {
        try {
          // TODO: Fetch resume
          const res = DEFAULT_RESUME;
          setViewingResume(res);
        } catch (error) { }
      }
    }

    fetchResume();
  }, [username, loggedInResume]);

  if (!viewingResume) return <div>Loading...</div>;

  const canEdit =
    loggedInResume.bio.username === username ||
    loggedInResume.bio.userId === username;

  return (
    <div className="flex flex-col pb-20">
      <div
        className={`container max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col antialiased`}
      >
        <Navbar />
        {/* biodata */}
        <BioData canEdit={canEdit} bio={viewingResume.bio} />
        {/* links */}
        <BioLinkCard canEdit={canEdit} links={viewingResume.links} />
        {/* work experience */}
        <Exp canEdit={canEdit} experiences={viewingResume.experiences} />
        {/* projects */}
        <ListProjects canEdit={canEdit} projects={viewingResume.projects} />
        {/* list skils */}
        <ListSkill canEdit={canEdit} skills={viewingResume.skills} />
        {/* education */}
        <ListEducations canEdit={canEdit} education={viewingResume.education} />
        {/* achievement*/}
        <Achievement
          canEdit={canEdit}
          achievements={viewingResume.achievements}
        />
        {/* certifications*/}
        <Certification
          canEdit={canEdit}
          certifications={viewingResume.certifications}
        />
      </div>
    </div>
  );
}
