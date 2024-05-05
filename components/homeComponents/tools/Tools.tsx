"use client";

import { toolsList } from "@/datas/toolsList";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/carousel";
import ToolCard from "./components/ToolCard";
import ToolDetails from "./components/ToolDetails";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

export default function Tools() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }) as any
  );

  return (
    <div className="container ">
      <h2 className="text-clip  mb-8 mx-auto">Les Outils</h2>
      <Carousel
        className="w-full "
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-4">
          {toolsList.map((tool) => (
            <CarouselItem
              key={tool.id}
              className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 midflex ml-1 mb-4"
            >
              <ToolCard tool={tool} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="animate-pulse">
          <CarouselPrevious variant="arrow" />
          <CarouselNext variant="arrow" />
        </div>
      </Carousel>
      <ToolDetails />
    </div>
  );
}
