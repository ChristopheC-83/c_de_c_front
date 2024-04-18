import { SkillsListType } from "@/helpers/customTypes";

type SkillCardProps = {
  skill: SkillsListType;
};

export default function SkillCard({skill}: SkillCardProps) {

  return (
    <div className="w-[94vw] md:max-w-[310px] mx-auto border-2 border-ring p-2 xs:p-3 sm:p-4 flex flex-col gap-y-4 rounded-lg  bg-card text-card-foreground">
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-primary">{skill.icon}</h2><h3 className="text-primary">{skill.label}</h3>
      </div>
      <p>{skill.text}</p>
    </div>
  );
}
