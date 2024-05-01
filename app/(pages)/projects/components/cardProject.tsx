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
  };

  return (
    <Card className=" overflow-hidden w-[300px] learnMore flex flex-col justify-between">
      <CardHeader className="text-primary bg-background text-center">
        <CardTitle className="flex justify-between items-center w-full"><div className="grow text-start">{project?.title.toUpperCase()}</div>
        <div className="size-14  sm:size-16 md:size-20 bg-green-50 border border-primary rounded-full relative cursor-pointer customShadow mx-auto w-fit min-w-[60px]">
          <Image
            src={projectImages[project.type as keyof typeof projectImages]}
            alt={project.type}
            fill
            className="object-contain "
          />
        </div></CardTitle>
      </CardHeader>
      <CardContent>
        {project?.thumbnail && (
          <Image
            src={he.decode(String(project?.thumbnail))}
            alt={project?.title}
            width={300}
            height={200}
            className="w-full my-2"
          />
        )}

        <p>{project?.pitch && he.decode(project?.pitch)}</p>
      </CardContent>
      <CardFooter className="text-primary bg-background text-center">
        <Link href={`/projects/${project?.id}`} className="text-center mx-auto">
          <Button size="lg">
            <p className="text-2xl">En voir +</p>
          </Button>
        </Link>
      </CardFooter>
    </Card>

  
  );
}
