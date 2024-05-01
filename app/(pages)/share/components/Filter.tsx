"use client";

import { useState } from "react";
import CardProject from "./cardProject";
import { useShares } from "@/hooks/useShares";
import Loader from "@/app/loading";
import ErrorPage from "@/app/not-found";
import { selectedProjectsType } from "@/helpers/customTypesProjects";

export default function Filter() {
  const { data: shares, isFetching, error } = useShares();
  const articles: selectedProjectsType[] = shares?.articles;

  if (isFetching) return <Loader />;
  if (error) return <ErrorPage />;

  return (
    <div className="container">
      <h2 className="text-clip  mb-8 w-fit mx-auto">
        Mes dernières pensées...
      </h2>
      <div className="flex w-fit mx-auto flex-wrap gap-3 justify-center">
        {articles?.map((share) => (
          <CardProject key={share.id} share={share} />
        ))}
      </div>
    </div>
  );
}
