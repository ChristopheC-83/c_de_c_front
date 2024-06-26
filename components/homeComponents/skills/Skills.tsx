import { skillsList } from "@/datas/skillsList";
import SkillCard from "./components/SkillCard";

export default function Skills() {
  return (
    <div className="container ">
      <h2 className="text-clip  mb-8 mx-auto">Compétences</h2>

      <div className="flex flex-wrap gap-8 justify-between">
        {skillsList.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}
