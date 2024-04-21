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
import CardProject from "./cardProject";
import { useArticles } from "@/hooks/useArticles";
import Loader from "@/app/loading";
import ErrorPage from "@/app/not-found";
import { selectedProjectsType } from "@/helpers/customTypesProjects";

export default function Filter() {
  // on récupère les articles de la DB
  const { data: projects, isFetching, error } = useArticles();
  const articles: selectedProjectsType[] = projects?.articles;

  // nous avons les langages en dur dans le fichier langagesToChose.ts
  const [langage, setLangage] = useState("all");

  // console.log(articles);

  // on change le langage en fonction du choix de l'utilisateur
  function handleSelectedProjects(langage: string) {
    setLangage(langage);
  }

  if (isFetching) return <Loader />;
  if (error) return <ErrorPage />;

  return (
    <div className="container">
      <h2 className="text-center clip mb-8 w-fit mx-auto">
        Choisis ton langage :
      </h2>
      <div className="flex flex-wrap justify-between md:justify-around lg:justify-evenly w-full gap-4">
        {/* Affichage des différents langages */}
        {langagesToChoose.map((langage) => (
          <div
            key={langage.id}
            className="flexMid justify-between px-2 "
            onClick={() => handleSelectedProjects(langage.name)}
          >
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

      {/* affichage des projets en fonction des choix de l'utilisateur */}
      <div className="mt-8">
        <h2 className="text-center clip mb-8 w-fit mx-auto">
          {langage === "all"
            ? "Tous les projets !!!"
            : `Projets en ${langage.toUpperCase()}`}
        </h2>

        {/* {langage === "all"
          ? articles &&
            articles.map((project) => (
              <CardProject key={project.id} project={project} />
            ))
          : articles &&
            articles
              .filter((article: { type: string }) => article.type === langage)
              .map((project) => (
                <CardProject key={project.id} project={project} />
              ))} */}
      </div>
    </div>
  );
}
