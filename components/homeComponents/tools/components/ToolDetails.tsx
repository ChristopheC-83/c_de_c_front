"use client";

import { toolsList } from "@/datas/toolsList";
import { ToolsType } from "@/helpers/customTypes";
import { useToolsStore } from "@/store/ToolsStore";

export default function ToolDetails() {
  const { selectedTool } = useToolsStore();

  const tool: ToolsType | undefined = toolsList.find(
    (tool) => tool.id === selectedTool
  );

  return (
    <div className="flex flex-col lg:flex-row w-full h-full justify-center lg:justify-start border-2 border-ring rounded-lg bg-card text-card-foreground px-3 lg:px-1 mt-8">
      {tool?.title}
    </div>
  );
}
