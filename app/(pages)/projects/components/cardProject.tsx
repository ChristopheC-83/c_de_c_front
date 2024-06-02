import { selectedProjectsType } from "@/helpers/customTypesProjects";
import Link from "next/link";
import Image from "next/image";
import he from "he";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import html_css from "@/public/images/projects/logos/html_css.png";
import javascript from "@/public/images/projects/logos/javascript.png";
import php from "@/public/images/projects/logos/php.png";
import react from "@/public/images/projects/logos/react.png";
import nextjs from "@/public/images/projects/logos/next.png";
import tuto from "@/public/images/projects/logos/tuto.png";
import { Button } from "@/components/shadcn/button";

type CardProject = {
  project: selectedProjectsType;
};

export default function CardProject({ project }: CardProject) {
  const projectImages = {
    html_css,
    javascript,
    php,
    react,
    nextjs,
    tuto,
  };

  return (
    <Card className=" overflow-hidden w-[300px] learnMore flex flex-col justify-between">
      <CardHeader className="text-primary bg-background text-center">
        <CardTitle className="flex justify-between items-center w-full h-[90px]">
          <div className="grow text-start">{project?.title.toUpperCase()}</div>
          <div className="w-1/4 mr-3 midFlex">
            <div className="size-14 sm:size-16 md:size-20 bg-green-50 border border-primary rounded-full aspect-square relative cursor-pointer customShadow mx-auto w-fit min-w-[60px] min-h-[60px]">
              <Image
                src={projectImages[project.type as keyof typeof projectImages]}
                alt={project.type}
                fill
                className="object-contain aspect-square"
              />
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {project?.thumbnail && (
          <Image
            src={he.decode(String(project?.thumbnail))}
            alt={project?.title}
            width={300}
            height={200}
            className="w-full my-0"
          />
        )}

        <p className="h-[90px] mt-3">
          {project?.pitch && he.decode(project?.pitch)}
        </p>
      </CardContent>
      <CardFooter className="text-primary bg-background text-center pt-0">
        <Link
          href={`/projects/${project?.id}`}
          className="text-center mx-auto my-3"
        >
          <Button size="lg">
            <p className="text-2xl">
              {project.type === "tuto" ? "Tutoriel Complet" : "Article Complet"}
            </p>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
