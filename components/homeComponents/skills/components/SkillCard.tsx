import { SkillsListType } from "@/helpers/customTypes";

type SkillCardProps = {
  skill: SkillsListType;
};

export default function SkillCard({skill}: SkillCardProps) {

  return (
    <div>
      <h1>{skill.label}</h1>
    </div>
  );
}
