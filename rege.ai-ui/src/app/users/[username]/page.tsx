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
import { useAuthStore } from "@/lib/authStore";

export default function UserPage() {
  const { username } = useParams();
  const { initResume, resume } = useResumeStore();
  const [viewingResume, setViewingResume] = useState<Resume | null>(null);
  const [canEdit, setCanEdit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [start, toggleStart] = useState<boolean>(true);

  useEffect(() => {
    async function fetchResume() {
      if (!username) return notFound();

      setLoading(true);

      try {
        const userJSON = localStorage.getItem(username as string);
        const userDetails = userJSON ? JSON.parse(userJSON) : null;
        const isOwner = !!userDetails?.token;

        // Show resume from store if already present
        if (resume?.username === username) {
          setViewingResume(resume);
          setCanEdit(isOwner);
          setLoading(false);
          toggleStart(false);
          return;
        }

        // Otherwise fetch from API
        const response = await fetch(
          `http://localhost:8000/api/v1/users/${username}`,
        );
        if (!response.ok) throw new Error("Failed to fetch resume");

        const data = await response.json();

        console.log("call2");
        setViewingResume({ ...data, bio: { ...data.bio, email: data.email } });
        setCanEdit(isOwner);
        if (isOwner)
          initResume({ ...data, bio: { ...data.bio, email: data.email } });
        setLoading(false);
        toggleStart(false);
      } catch (err) {
        console.log("call3");
        setLoading(false);
        toggleStart(false);
      }
    }

    fetchResume();
  }, [username]);

  if (start || loading) return <div className="text-center">Loading...</div>;
  if (!loading && !viewingResume) return notFound();

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
