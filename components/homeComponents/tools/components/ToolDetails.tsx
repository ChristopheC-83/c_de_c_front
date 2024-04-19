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
    <div className="flex flex-col w-full justify-center lg:justify-start border-2 border-ring rounded-lg bg-card text-card-foreground mt-8 p-1.5 xs:p-2 sm:p-3 md:p-4 customShadow">
      <div className="flex justify-between items-center w-full mb-2 sm:mb-3  md:mb-4">
        <h3 className="text-primary">{tool?.title.toUpperCase()}</h3>
        <div className="text-primary text-4xl xs:text-5xl sm:text-6xl md:text-7xl">{tool?.icon}</div>
      </div>
      <p className="w-full sm:w-10/12 sm:mx-auto md:w-8/12">{tool?.text}</p>
      <p className="text-primary my-3"><u>En résumé :</u></p>
      <h4 className="text-center mb-4">{tool?.pitch}</h4>
    </div>
  );
}
