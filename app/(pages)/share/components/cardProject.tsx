import { selectedProjectsType } from "@/helpers/customTypesProjects";
import Link from "next/link";
import he from "he";

type CardProject = {
  share: selectedProjectsType;
};

export default function CardProject({ share }: CardProject) {
  
  return (
    <Link
      href={`/share/${share.id}`}
      className="flex flex-col w-full justify-center lg:justify-start border-2 border-ring rounded-lg bg-card text-card-foreground mt-8 p-1.5 xs:p-2 sm:p-3 md:p-4 customShadow"
    >
      <div className="flex justify-between items-start w-full mb-2 sm:mb-3  md:mb-4">
        <h3 className="text-primary flex-1">{share?.title.toUpperCase()}</h3>
       
      </div>
      <p className="w-full ">{share.pitch && he.decode(share.pitch)}</p>
    </Link>
  );
}
