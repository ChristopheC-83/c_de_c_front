import { skillsList } from "@/datas/skillsList";
import SkillCard from "./components/SkillCard";

export default function Skills() {
  return (
    <div className="container">
      <h2 className="text-center clip my-8">Compétences</h2>

      {skillsList.map((skill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  );
}
