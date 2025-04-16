"use client";

import { notFound, useParams } from "next/navigation";
import Exp from "./components/Experiences/Experience";
import Certification from "./components/Certifications/Certification";
import Achievement from "./components/Achievements/Achievement";
import BioLink from "./components/Bio/BioLink";
import BioData from "./components/Bio/BioData";
import ListSkill from "./components/Skills/ListSkill";
import Navbar from "@/components/shared/Navbar";
import ListProjects from "./components/Projects/ListProjects";

export default function UserPage() {
  const { id } = useParams();

  if (id === null || id === undefined) notFound();

  const viewOnly = id === "2";

  return (
    <div className="flex flex-col pb-20">
      <div>
        <Navbar />
      </div>
      {/* biodata */}
      <div className="mt-4">
        <BioData viewOnly={viewOnly} />
      </div>
      {/* links */}
      <div className="mt-4">
        <BioLink viewOnly={viewOnly} />
      </div>
      {/* work experience */}
      <Exp viewOnly={viewOnly} />
      {/* projects */}
      <ListProjects viewOnly={viewOnly} />
      {/*  <div className="mt-4">
        <ListSkill viewOnly={viewOnly} />
      </div>
      <div className="mt-4">
        <Education viewOnly={viewOnly} />
      </div>
      <div className="mt-4">
        <Achievement viewOnly={viewOnly} />
      </div>
      <div className="mt-4">
        <Certification viewOnly={viewOnly} />
      </div> */}
    </div>
  );
}
