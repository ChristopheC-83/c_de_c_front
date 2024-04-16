/* eslint-disable react/no-unescaped-entities */
import { PortfolioType } from "@/helpers/customTypes";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn/tooltip";

type PageCardProps = {
  page: PortfolioType;
};

export default function PageCard({ page }: PageCardProps) {
  return (
    <div className="flex flex-col  lg:flex-row w-full h-fit justify-center lg:justify-start border-2 border-ring rounded-lg bg-card text-card-foreground px-3  lg:px-1">
      {/* image pour mobile */}
      <Link
        href={page.link}
        className="w-fit lg:hidden h-fit m-4 rounded-lg overflow-hidden border-2 border-ring shrink-0 mx-auto"
      >
        <Image
          src={page.imageMobile}
          alt={page.title}
          width={450}
          height={300}
          className=""
        />
      </Link>
      {/* image pour pc */}
      <Link
        href={page.link}
        className="hidden lg:block w-fit h-fit m-4 rounded-lg overflow-hidden border-2 border-ring shrink-0"
      >
        <Image
          src={page.imageDestop}
          alt={page.title}
          width={200}
          height={600}
        />
      </Link>

      <div className="flex-1 flex flex-col justify-between p-2 sm:p-3 md:p-4">
        <h2 className="text-center">{page.title}</h2>
        <div>
          <h4 className="mb-3">
            <u>Description : </u>
          </h4>
          <p>{page.description}</p>
        </div>
        <div>
          <h4 className="mb-3">
            <u>Ce que j'ai pu approfondir : </u>
          </h4>
          <p>{page.more}</p>
        </div>
        <div className="mb-6">
          <h4 className="mb-3">
            <u>Les technos utilisées : </u>
          </h4>
          <div className="flex gap-5 flex-wrap w-full">
            {page.technos.map((techno) => (
              <TooltipProvider key={techno.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex  text-3xl text-ring hover:text-muted-foreground">
                      {techno.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm">
                      {techno.label}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
