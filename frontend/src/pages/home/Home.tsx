import WrapperCard from "../../components/WrapperCard";
import { workExperiences } from "../../mock/workExperience";

export default function Home() {
  return (
    <div class="flex-1 py-2 flex flex-col">
      <div>rege.ai/thetsajeet</div>
      <div>profile picture</div>
      <div>summary</div>
      <div>links</div>
      <div>
        <WrapperCard title="Work Experience" items={workExperiences} />
      </div>
      <div>projects</div>
      <div>education</div>
      <div>achievements</div>
      <div>certifications</div>
    </div>
  );
}
