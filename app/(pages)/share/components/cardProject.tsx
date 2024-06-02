import { selectedProjectsType } from "@/helpers/customTypesProjects";
import Link from "next/link";
import he from "he";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import Image from "next/image";
import { url } from "inspector";
import { Button } from "@/components/shadcn/button";

type CardProject = {
  share: selectedProjectsType;
};
export default function CardProject({ share }: CardProject) {
  return (
    <Card className=" overflow-hidden w-[300px] learnMore flex flex-col justify-between">
      <CardHeader className="text-primary bg-background text-center">
        <CardTitle>{share?.title.toUpperCase()}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={he.decode(String(share?.thumbnail))}
          alt={share?.title}
          width={300}
          height={200}
          className="w-full my-2"
        />

        <p>{share?.pitch && he.decode(share?.pitch)}</p>
      </CardContent>
      <CardFooter className="text-primary bg-background text-center ">
        <Link href={`/share/${share?.id}`} className="text-center mx-auto mb-3" >
          <Button size="lg" ><p className="text-2xl">En voir +</p></Button>
        </Link>
      </CardFooter>
    </Card>
    // <Link
    //   href={`/share/${share.id}`}
    //   className="flex flex-col w-full justify-center lg:justify-start border-2 border-ring rounded-lg bg-card text-card-foreground mt-8 p-1.5 xs:p-2 sm:p-3 md:p-4 customShadow"
    // >
    //   <div className="flex justify-between items-start w-full mb-2 sm:mb-3  md:mb-4">
    //     <h3 className="text-primary flex-1">{share?.title.toUpperCase()}</h3>

    //   </div>
    //   <p className="w-full ">{share.pitch && he.decode(share.pitch)}</p>
    // </Link>
  );
}
