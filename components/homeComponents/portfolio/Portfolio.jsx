import { portfolioList } from "@/datas/portfolioList";
import PageCard from "./components/PageCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/carousel";
import { Card, CardContent } from "@/components/shadcn/card";

export default function Portfolio() {
  return (
    <div className="container">
      <h2 className="text-center clip mb-8 w-fit mx-auto">Porfolio</h2>
      <Carousel
        className="w-full max-w-xs"
        opts={{
          // align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {portfolioList.map((page) => (
            <CarouselItem key={page.id}>
              <PageCard page={page} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
