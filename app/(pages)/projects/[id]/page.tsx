"use client";
import Loader from "@/app/loading";
import ErrorPage from "@/app/not-found";
import { selectedProjectsType } from "@/helpers/customTypesProjects";
import { useArticles } from "@/hooks/useArticles";
import he from "he";

export default function OneProject({ params }: { params: { id: number } }) {
  const { id } = params;

  // on récupère les articles de la DB
  const { data: projects, isFetching, error } = useArticles();
  const articles: selectedProjectsType[] = projects?.articles;
  // console.log(articles);
  const article = articles?.filter(
    (article: { id: number }) => article.id == id
  )[0];

  if (isFetching) return <Loader />;
  if (error) return <ErrorPage />;

  return (
    <div className="container">
      {/* totre et pitch sont obligatoires donc forcement présents */}
      <div className="flex flex-col w-full h-full justify-center lg:justify-start border-2 border-ring rounded-lg bg-card text-card-foreground px-3 lg:px-1 customShadow mb-5 xs:mb-8 sm:mb-10 md:mb-120">
        <h2 className="text-center clip mb-8 w-fit mx-auto">
          {article?.title}
        </h2>
        <p className="p-2 sm:p-3 md:p-4">{article.pitch}</p>
      </div>

      {/* Le cadre du texte n'apparait que s'il y en a un */}
      {article?.text && (
          <div className="flex flex-col lg:flex-row w-full h-full justify-center lg:justify-start border-2 border-ring rounded-lg bg-card text-card-foreground px-1 customShadow">
            <div
              className="p-4 mx-auto"
              dangerouslySetInnerHTML={{
                __html: he.decode(article.text.toString()),
              }}
            />
          </div>
        )}
    </div>
  );
}
