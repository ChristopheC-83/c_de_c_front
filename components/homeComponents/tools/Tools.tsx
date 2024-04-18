import { toolsList } from "@/datas/toolsList";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/carousel";
import ToolCard from "./components/ToolCard";

export default function Tools() {
  return (
    <div className="container ">
      <h2 className="text-center clip mb-8">Les Outils</h2>
      <Carousel
        className="w-full "
        opts={{
          // align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4">
          {toolsList.map((tool) => (
            <CarouselItem
              key={tool.id}
              className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 midflex "
            >
              <ToolCard tool={tool}  />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="arrow" />
        <CarouselNext variant="arrow" />
      </Carousel>
    </div>
  );
}
