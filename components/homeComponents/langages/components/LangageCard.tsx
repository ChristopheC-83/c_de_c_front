import { capitalize } from "@/helpers/capitalize";
import { StepsListType } from "@/helpers/customTypes";

type LangageCardProps = {
  langage: StepsListType;
};

export default function LangageCard({ langage }: LangageCardProps) {
  return (
    <div className="w-[230px] h-full">
      <div className="w-full h-full min-h-24 border-2 border-ring rounded-lg bg-card text-card-foreground cursor-grab customShadow">
        <div className="flex flex-col justify-start gap-y-6 h-full p-4">
          <div className="flex flex-col">
            <div className={`flex items-start justify-between gap-x-3`}>
              <div className={`pt-1 pl-1 text-3xl`}>{langage.icon}</div>
              <h4 className={`text-end`}>
                <u>{capitalize(langage.label)}</u>
              </h4>
            </div>
          </div>
          <p className="mb-3">{langage.text}</p>
        </div>
      </div>
    </div>
  );
}
