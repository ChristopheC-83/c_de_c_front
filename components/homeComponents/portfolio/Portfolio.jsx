import { portfolioList } from "@/datas/portfolioList";
import PageCard from "./components/PageCard";

export default function Portfolio() {
  return (
    <div className="container  ">
      <h2 className="text-center clip mb-8">Porfolio</h2>

      <div className="flex flex-col gap-8">
        {portfolioList.map((page) => (
          <PageCard key={page.id} page={page} />
        ))}
      </div>
    </div>
  );
}
