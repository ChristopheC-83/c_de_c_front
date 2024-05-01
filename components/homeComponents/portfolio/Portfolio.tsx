import { portfolioList } from "@/datas/portfolioList";
import PageCard from "./components/PageCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/carousel";

export default function Portfolio() {
  return (
    <div className="container">
      <h2 className="text-clip  mb-8 w-fit mx-auto">Porfolio</h2>
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {portfolioList.map((page) => (
            <CarouselItem key={page.id} className="p-4 ml-1">
              <PageCard page={page} />
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
