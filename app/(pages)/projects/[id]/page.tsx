"use client";
import Loader from "@/app/loading";
import ErrorPage from "@/app/not-found";
import { selectedProjectsType } from "@/helpers/customTypesProjects";
import { useArticles } from "@/hooks/useArticles";

export default function OneProject({ params }: { params: { id: number } }) {
  const { id } = params;

  const { data: projects, isFetching, error } = useArticles();
  const articles: selectedProjectsType[] = projects?.articles.filter(
    (article: { id: number }) => article.id === id
  );
  if (isFetching) return <Loader />;
  if (error) return <ErrorPage />;
  
  return <div>Projet {id}</div>;
}
