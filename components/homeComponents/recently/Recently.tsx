"use client";

import CardArticle from "@/app/(pages)/projects/components/cardProject";
import Loader from "@/app/loading";
import ErrorPage from "@/app/not-found";
import { selectedProjectsType } from "@/helpers/customTypesProjects";
import { useLastProject } from "@/hooks/useApiProjects";
import { useLastShare } from "@/hooks/useApiShares";
import { useLastTuto } from "@/hooks/useApiTutos";
import Link from "next/link";
import { useState } from "react";

export default function Recently() {
  const { data: last_article, isFetching, error } = useLastProject();
  const { data: last_share } = useLastShare();
  const { data: last_tuto } = useLastTuto();

  // console.log(last_article);
  // console.log(last_share);
  // console.log(last_tuto);

  if (isFetching) return <Loader />;
  if (error) return <ErrorPage />;

  const cards = [
    {
      id: 1,
      project: last_article,
      link: "/projects",
      label_link: "Parcourir les projets",
    },
    {
      id: 2,
      project: last_tuto,
      link: "/tutos",
      label_link: "Voir les tutoriels",
    },
    {
      id: 3,
      project: last_share,
      link: "/shares",
      label_link: "Accéder aux articles",
    },
  ];

  return (
    <div className="container ">
      <h2 className="text-clip  mb-8 mx-auto">Dernièrement...</h2>

      <div className="flex justify-between w-full max-lg:flex-col max-lg:gap-y-6">
        {cards.map((card) => (
          <div key={card.id} className="flex flex-col items-center">
            <CardArticle project={card.project} />
            <Link className="mt-3 hover:text-clip" href={card.link}>
              <h3 className="hover:text-primary duration-100">
                {card.label_link}
              </h3>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex flex-col md-flex-row"></div>
    </div>
  );
}
