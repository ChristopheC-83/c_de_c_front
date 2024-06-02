"use client";

import CardArticle from "@/app/(pages)/projects/components/cardProject";
import CardShare from "@/app/(pages)/share/components/cardProject";

import Loader from "@/app/loading";
import ErrorPage from "@/app/not-found";
import { selectedProjectsType } from "@/helpers/customTypesProjects";
import { useLastArticle } from "@/hooks/useArticles";
import { useLastShare } from "@/hooks/useShares";
import { useLastTuto } from "@/hooks/useTutos";
import { useState } from "react";

export default function Recently() {
  const { data: last_article, isFetching, error } = useLastArticle();
  const { data: last_share } = useLastShare();
  const { data: last_tuto } = useLastTuto();

  console.log(last_article);
  console.log(last_share);
  console.log(last_tuto);

  if (isFetching) return <Loader />;
  if (error) return <ErrorPage />;

  return (
    <div className="container ">
      <h2 className="text-clip  mb-8 mx-auto">Dernièrement...</h2>

      <div className="flex justify-between w-full">
          <CardArticle project={last_article} />
          <CardArticle project={last_tuto} />
          <CardShare share={last_share} />
      </div>

      <div className="flex flex-col md-flex-row"></div>
    </div>
  );
}
