import ProjectCard from "../../components/ProjectCard";
import SummaryCard from "../../components/SummaryCard";
import WorkCard from "../../components/WorkCard";
import WrapperCard from "../../components/WrapperCard";
import { projects } from "../../mock/projects";
import { summary } from "../../mock/summary";
import { workExperiences } from "../../mock/workExperience";

export default function Home() {
  return (
    <div class="flex-1 py-2 flex flex-col gap-4">
      <div class="flex items-center justify-center">
        <img
          src="https://avatar.iran.liara.run/public/boy"
          class="w-32 h-32 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
        />
        <div class="ml-20">
          <h3 class="font-bold text-4xl py-1">T S Ajeet</h3>
          <p class="font-medium text-sm">ID: 1234</p>
          <p class="underline text-blue-500">rege.ai/thetsajeet</p>
        </div>
      </div>
      <div>
        <WrapperCard title="Summary">
          <SummaryCard summary={summary} />
        </WrapperCard>
      </div>
      <div>
        <WrapperCard title="Links">
          <div></div>
        </WrapperCard>
      </div>
      <div>
        <WrapperCard title="Work Experience">
          {workExperiences.map((exp: Experience) => (
            <WorkCard exp={exp} />
          ))}
        </WrapperCard>
      </div>
      <div>
        <WrapperCard title="Projects">
          {projects.map((proj: Project) => (
            <ProjectCard proj={proj} />
          ))}
        </WrapperCard>
      </div>
      <div>
        <WrapperCard title="Education">
          <div></div>
        </WrapperCard>
      </div>
      <div>
        <WrapperCard title="Achievements">
          <></>
        </WrapperCard>
      </div>
      <div>
        <WrapperCard title="Certifications">
          <></>
        </WrapperCard>
      </div>
    </div>
  );
}
