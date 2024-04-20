"use client"

import { langagesToChoose } from "@/datas/projects/langagesToChose";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn/tooltip";
import { useState } from "react";
import { allProjects } from "@/datas/projects/projects";

export default function Filter() {

  const [selectedProjects, setSelectedProjects] = useState(allProjects);

  function handleSelectedProjects(langage: string) {
    if (langage === "all") {
      return setSelectedProjects(allProjects);
    }
    setSelectedProjects(allProjects.filter((project) => project.type === langage));
  }

  return (
    <div className="container">
      <h2 className="text-center clip mb-8 w-fit mx-auto">
        Choisis ton langage :
      </h2>
      <div className="flex flex-wrap justify-between md:justify-around lg:justify-evenly w-full gap-4">
        {langagesToChoose.map((langage) => (
          <div
            key={langage.id}
            className="flexMid justify-between px-2 "
            onClick={()=>handleSelectedProjects(langage.name)}
          >
            {/* <h4>{langage.name}</h4> */}
            <div className="size-14  sm:size-16 md:size-20 bg-green-50 border border-primary rounded-full relative cursor-pointer customShadow mx-auto">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Image
                      src={langage.logo}
                      alt={langage.name}
                      fill
                      className="object-contain "
                    />
                  </TooltipTrigger>
                  <TooltipContent className="bg-primary">
                    <p className="text-sm text-popover ">{(langage.name).toUpperCase()}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <p>Tu vas regarder les projets suivants  : </p>
          {selectedProjects.map((project) => (
            <div key={project.id}>{project.title}</div>
          ))}
      </div>
    </div>
  );
}
