"use client";

import CardProject from "@/app/(pages)/projects/components/cardProject";
import CardTuto from "@/app/(pages)/tutos/components/cardProject";
import CardShare from "@/app/(pages)/shares/components/cardProject";
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



  return (
    <div className="container ">
      <h2 className="text-clip  mb-8 mx-auto">Dernièrement...</h2>

      <div className="flex justify-between w-full max-lg:flex-col max-lg:gap-y-6">
        <div className="flex flex-col items-center">
          <CardProject project={last_article} />
          <Link className="mt-3 hover:text-clip" href="/projects">
            <h3 className="hover:text-primary duration-100">
              Parcourir les projets
            </h3>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <CardTuto project={last_tuto} />
          <Link className="mt-3 hover:text-clip" href="/tutos">
            <h3 className="hover:text-primary duration-100">
              Voir les tutoriels
            </h3>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <CardShare project={last_share} />
          <Link className="mt-3 hover:text-clip" href="/shares">
            <h3 className="hover:text-primary duration-100">
              Accéder aux articles
            </h3>
          </Link>
        </div>
      </div>

      <div className="flex flex-col md-flex-row"></div>
    </div>
  );
}
