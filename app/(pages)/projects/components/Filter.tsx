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
  const [articlesSelected, setArticlesSelected] = useState<
    selectedProjectsType[]
  >(projects?.articles || []);


  // nous avons les langages en dur dans le fichier langagesToChose.ts
  const [langage, setLangage] = useState("all");

  // console.log(articles);

  // on change le langage en fonction du choix de l'utilisateur
  function handleSelectedProjects(langage: string) {
    setLangage(langage);
    if (langage === "all") {
      setArticlesSelected(projects?.articles);
      return;
    }
    const articlesChoosen = projects?.articles.filter(
      (article: selectedProjectsType) => article.type === langage
    );
    setArticlesSelected(articlesChoosen);
    return;
  }

  let result;

  if (articlesSelected.length == 0 && langage != "all") {
    result = (
      <>
        <p className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl text-center text-primary mt-4 sm:mt-6 md:mt-8">
          Pas de projet pour le moment
        </p>
        <p className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl text-center text-primary">
          Mais ça va venir 😉
        </p>
      </>
    );
  }
  if (articlesSelected.length == 0 && langage === "all") {
    result = (
      <div className="flex w-fit mx-auto flex-wrap gap-5 justify-center">
        {articles?.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    );
  }
  if (articlesSelected.length > 0) {
    result = (
      <div className="flex w-fit mx-auto flex-wrap gap-5 justify-center">
        {articlesSelected.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    );

  }

  if (isFetching) return <Loader />;
  if (error) return <ErrorPage />;
  // choix du retour sous les langages



  return (
    <div className="container">
      <h2 className="text-clip  mb-8 w-fit mx-auto">
        Choisis ton langage :
      </h2>
      <div className="flex flex-wrap justify-between md:justify-around lg:justify-evenly w-full gap-4 mb-4 xs:mb-6 sm:mb-8 md:mb-10">
        {/* Affichage des différents langages */}
        {langagesToChoose.map((langage) => (
          <div
            key={langage.id}
            className="flexMid justify-between px-2 "
            onClick={() => handleSelectedProjects(langage.name)}
          >
            <div className="size-14  sm:size-16 md:size-20 bg-green-50 border border-primary rounded-full relative cursor-pointer customShadow mx-auto mb-6 learnMore">
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
      {result}
    </div>
  );
}
