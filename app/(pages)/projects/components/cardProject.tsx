import { selectedProjectsType } from "@/helpers/customTypesProjects";
import Image from "next/image";

type CardProject = {
  project: selectedProjectsType;
};

export default function CardProject({ project }: CardProject) {
 

  return (
    <div className="flex flex-col w-full justify-center lg:justify-start border-2 border-ring rounded-lg bg-card text-card-foreground mt-8 p-1.5 xs:p-2 sm:p-3 md:p-4 customShadow">
      <div className="flex justify-between items-start w-full mb-2 sm:mb-3  md:mb-4">
        <h3 className="text-primary flex-1">{project?.title.toUpperCase()}</h3>
        <div className="size-14  sm:size-16 md:size-20 bg-green-50 border border-primary rounded-full relative cursor-pointer customShadow mx-auto">
          <Image
            src={project.icon}
            alt={project.type}
            fill
            className="object-contain "
          />
        </div>
      </div>
      <p className="w-full ">{project?.text}</p>
    </div>
  );
}
