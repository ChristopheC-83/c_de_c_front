import { capitalize } from "@/helpers/capitalize";
import { ToolsType } from "@/helpers/customTypes";

type ToolCardProps = {
  tool: ToolsType;
};

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="w-[220px] h-full">
      <div className="w-full h-full min-h-24 border-2 border-ring rounded-lg bg-card text-card-foreground ">
        <div className="flex flex-col justify-between gap-y-4 h-full p-2">
          <div className={`flex items-start justify-between gap-x-3`}>
            <div className={`pt-1 pl-1 text-3xl`}>{tool.icon}</div>
            <h4 className={`text-end`}>
              <u>{capitalize(tool.title)}</u>
            </h4>
          </div>
          <p>{tool.pitch}</p>
        </div>
      </div>
    </div>
  );
}
