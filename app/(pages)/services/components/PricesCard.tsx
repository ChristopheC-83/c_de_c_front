import { SkillsListType } from "@/helpers/customTypes";

type SkillCardProps = {
    techno: SkillsListType;
};

export default function PricesCard({techno}: SkillCardProps) {

  return (
    <div className="w-full mx-auto border-2 border-ring p-2 xs:p-3 sm:p-4 flex flex-col gap-y-4 rounded-lg  bg-card text-card-foreground">
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-primary">{techno.icon}</h2><h3 className="text-primary">{techno.label}</h3>
      </div>
      <p>{techno.text}</p>
    </div>
  );
}