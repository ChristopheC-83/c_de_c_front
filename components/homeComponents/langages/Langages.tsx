"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/carousel";
import { langagesList } from "@/datas/langagesList";
import LangageCard from "./components/LangageCard";

export default function Langages() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }) as any
  );

  return (
    <div className="container ">
      <h2 className="text-clip  mb-16 mx-auto">
        Les langages que nous utiliserons ensemble.
      </h2>
      <Carousel
        className="w-full "
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-4">
          {langagesList.map((langage) => (
            <CarouselItem
              key={langage.id}
              className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 midflex mb-4"
            >
              <LangageCard langage={langage} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="animate-pulse">
          <CarouselPrevious variant="arrow" />
          <CarouselNext variant="arrow" />
        </div>
      </Carousel>
    </div>
  );
}
