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
      <div>rege.ai/thetsajeet</div>
      <div>profile picture</div>
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
