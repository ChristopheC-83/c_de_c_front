"use client";

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
import CardProject from "./cardProject";
import { useArticles } from "@/hooks/useArticles";

export default function Filter() {
  const [langage, setLangage] = useState("all");
  const [selectedProjects, setSelectedProjects] = useState(allProjects);

  const {data: projects, isFetching, error} = useArticles();
  const articles = projects?.articles;
  const types = projects?.types

  console.log(articles, types)




  function handleSelectedProjects(langage: string) {

    if (langage === "all") {
      setLangage("all");
      setSelectedProjects(allProjects);
      return 
    }
    setLangage(langage)
    setSelectedProjects(
      allProjects.filter((project) => project.type === langage)
    );
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
            onClick={() => handleSelectedProjects(langage.name)}
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
                    <p className="text-sm text-popover ">
                      {langage.name.toUpperCase()}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-center clip mb-8 w-fit mx-auto">
         {langage === "all" ? "Tous les projets !" : `Projets en ${langage.toUpperCase()}`}
        </h2>
        {selectedProjects.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
