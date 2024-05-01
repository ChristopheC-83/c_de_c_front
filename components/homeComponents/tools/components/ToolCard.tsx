"use client";

import { capitalize } from "@/helpers/capitalize";
import { ToolsType } from "@/helpers/customTypes";
import { useToolsStore } from "@/store/ToolsStore";
import { MdOutlineTouchApp } from "react-icons/md";

type ToolCardProps = {
  tool: ToolsType;
};

export default function ToolCard({ tool }: ToolCardProps) {
  const { setSelectedTool } = useToolsStore();

  function chooseTool(id: number) {
    setSelectedTool(id);
    console.log("id", id);
  }

  return (
    <div className="w-[220px] h-full" onClick={() => chooseTool(tool.id)}>
      <div className="w-full h-full min-h-24 border-2 border-ring rounded-lg bg-card text-card-foreground cursor-grab customShadow">
        <div className="flex flex-col justify-between gap-y-4 h-full p-2">
          <div className="flex flex-col">
            <div className={`flex items-start justify-between gap-x-3`}>
              <div className={`pt-1 pl-1 text-3xl`}>{tool.icon}</div>
              <h4 className={`text-end`}>
                <u>{capitalize(tool.title)}</u>
              </h4>
            </div>
            <h4 className="animate-pulse text-3xl bg-clip w-fit mx-auto my-4  p-2 rounded-full cursor-pointer">
              <MdOutlineTouchApp />
            </h4>
          </div>
          <p>{tool.pitch}</p>
        </div>
      </div>
    </div>
  );
}
