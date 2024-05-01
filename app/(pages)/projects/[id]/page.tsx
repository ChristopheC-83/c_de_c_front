"use client";
import Loader from "@/app/loading";
import ErrorPage from "@/app/not-found";
import { selectedProjectsType } from "@/helpers/customTypesProjects";
import { useArticles } from "@/hooks/useArticles";
import he from "he";
import Image from "next/image";
import html_css from "@/public/images/projects/logos/html_css.png";
import javascript from "@/public/images/projects/logos/javascript.png";
import php from "@/public/images/projects/logos/php.png";
import react from "@/public/images/projects/logos/react.png";
import nextjs from "@/public/images/projects/logos/next.png";
import { Button } from "@/components/shadcn/button";

export default function OneProject({ params }: { params: { id: number } }) {
  const { id } = params;

  const { data: projects, isFetching, error } = useArticles();
  const articles: selectedProjectsType[] = projects?.articles;
  const article = articles?.filter(
    (article: { id: number }) => article.id == id
  )[0];

  console.log(article);
  const projectImages = {
    html_css,
    javascript,
    php,
    react,
    nextjs,
  };
  if (isFetching) return <Loader />;
  if (error) return <ErrorPage />;

  return (
    <div className="container">
      <div className="size-14  sm:size-16 md:size-20 bg-green-50 border border-primary rounded-full relative  customShadow mx-auto w-fit min-w-[60px] my-6">
        <Image
          src={projectImages[article?.type as keyof typeof projectImages]}
          alt={article?.type}
          fill
          className="object-contain "
        />
      </div>
      <div
        className="flex flex-col w-full h-full justify-center lg:justify-start border-2 border-ring rounded-lg bg-card text-card-foreground px-3 customShadow mb-5 xs:mb-8 sm:mb-10 md:mb-120
      "
      >
        <h2 className="text-clip mb-8 w-fit mx-auto">{article?.title}</h2>

        <div className="w-full flex justify-between sm:justify-around md:justify-evenly items-center">
          <p className="pl-1 p-2 sm:p-3 md:p-4">
            {article?.pitch && he.decode(article.pitch)}
          </p>
          <Image
            src={he.decode(String(article?.thumbnail))}
            alt={article?.title}
            width={300}
            height={200}
            className="my-2 size-1/5 max-w-52 min-w-36 object-contain rounded-lg mb-3 ratio-square"
          />
        </div>
      </div>
      {article?.text && (
        <div className="flex flex-col lg:flex-row w-full  h-full justify-center lg:justify-start border-2 border-ring rounded-lg bg-card text-card-foreground px-1 customShadow">
          <div
            className="p-4 mx-auto max-w-[900px]"
            dangerouslySetInnerHTML={{
              __html: he.decode(article.text.toString()),
            }}
          />
        </div>
      )}
    </div>
  );
}
