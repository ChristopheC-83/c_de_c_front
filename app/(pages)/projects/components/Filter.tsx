import { langagesToChoose } from "@/datas/projects/langagesToChose";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn/tooltip";

export default function Filter() {
  return (
    <div className="container">
      <h2 className="text-center clip mb-8 w-fit mx-auto">
        Choisis ton langage :
      </h2>
      <div className="flex">
        {langagesToChoose.map((langage) => (
          <div
            key={langage.id}
            className="flexMid justify-between w-full px-2 "
          >
            {/* <h4>{langage.name}</h4> */}
            <div className="size-14 xs:size-16 sm:size-20 xs:justify-around sm:justify-evenly bg-green-50 border border-primary rounded-full relative cursor-pointer customShadow">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Image
                      src={langage.logo}
                      alt={langage.name}
                      fill
                      className="object-contain "
                    />
                  </TooltipTrigger>
                  <TooltipContent className="bg-primary">
                    <p className="text-sm text-popover ">{(langage.name).toUpperCase()}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
