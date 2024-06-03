import Spacing from "@/components/Spacing";
import Title from "@/components/title/Title";
import Hero from "./components/Hero";
import Filter from "./components/Filter";

export default function Projects() {
  return (
    <main className="p-1 xs:p-2 sm:p-3 md:p-4">
      <Spacing />
      <Title title="Compagnon de Code" subtitle="Creusons une notion ensemble !" />
      <Spacing />
      <Hero/>
      <Spacing />
      <Filter />
      <Spacing />
      
    </main>
  );
}
