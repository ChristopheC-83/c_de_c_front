import { selectedProjectsType } from "@/helpers/customTypesProjects";
import Image from "next/image";
import html_css from "@/public/images/projects/logos/html_css.png";
import javascript from "@/public/images/projects/logos/javascript.png";
import php from "@/public/images/projects/logos/php.png";
import react from "@/public/images/projects/logos/react.png";
import nextjs from "@/public/images/projects/logos/next.png";
import Link from "next/link";

import he from "he";
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
    <Link
      href={`/projects/${project.id}`}
      className="flex flex-col w-full justify-center lg:justify-start border-2 border-ring rounded-lg bg-card text-card-foreground mt-8 p-1.5 xs:p-2 sm:p-3 md:p-4 customShadow"
    >
      <div className="flex justify-between items-start w-full mb-2 sm:mb-3  md:mb-4">
        <h3 className="text-primary flex-1">{project?.title.toUpperCase()}</h3>
        <div className="size-14  sm:size-16 md:size-20 bg-green-50 border border-primary rounded-full relative cursor-pointer customShadow mx-auto">
          <Image
            src={projectImages[project.type as keyof typeof projectImages]}
            alt={project.type}
            fill
            className="object-contain "
          />
        </div>
      </div>
      <p className="w-full ">{project.pitch && he.decode(project.pitch)}</p>
    </Link>
  );
}
