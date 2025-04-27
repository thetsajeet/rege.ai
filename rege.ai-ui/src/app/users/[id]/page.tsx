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

export default function UserPage() {
  const { id } = useParams();

  if (id === null || id === undefined) notFound();

  const viewOnly = id === "2";

  return (
    <div className="flex flex-col pb-20">
      <Navbar />
      {/* biodata */}
      <BioData viewOnly={viewOnly} />
      {/* links */}
      <BioLinkCard viewOnly={viewOnly} />
      {/* work experience */}
      <Exp viewOnly={viewOnly} />
      {/* projects */}
      <ListProjects viewOnly={viewOnly} />
      {/* list skils */}
      <ListSkill viewOnly={viewOnly} />
      {/* education */}
      <ListEducations viewOnly={viewOnly} />
      {/* achievement*/}
      <Achievement viewOnly={viewOnly} />
      {/* certifications*/}
      <Certification viewOnly={viewOnly} />
    </div>
  );
}
