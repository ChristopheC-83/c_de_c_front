

import Spacing from "@/components/Spacing";
import Hero from "@/components/homeComponents/hero/Hero";
import Skills from "@/components/homeComponents/skills/Skills";
import Title from "@/components/title/Title";
import Tools from "@/components/homeComponents/tools/Tools";
import Portfolio from "@/components/homeComponents/portfolio/Portfolio";
import Langages from "@/components/homeComponents/langages/Langages";
import Recently from "@/components/homeComponents/recently/Recently";


export default function Home() {
  return (
    <main className="p-1 xs:p-2 sm:p-3 md:p-4">
      {/* <div className="w-full flex flex-col p-12 bg-white">
        <div className="flex gap-1 text-white">
          <div className="h-12 w-12       bg-popover">pop</div>
          <div className="h-12 w-12       bg-card">card</div>
          <div className="h-12 w-12       bg-background">bg</div>
          <div className="h-12 w-12       bg-muted">m</div>
          <div className="h-12 w-12       bg- "> </div>
          <div className="h-12 w-12       bg-primary">1</div>
          <div className="h-12 w-12       bg-secondary">2</div>
          <div className="h-12 w-12       bg-accent">accent</div>
          <div className="h-12 w-12       bg-destructive">del</div>
          <div className="h-12 w-12       bg-ring">ring</div>
        </div>
        <div className="flex gap-1 text-black my-1">
          <div className="h-12 w-12       bg-popover-foreground">pop</div>
          <div className="h-12 w-12       bg-card-foreground">card</div>
          <div className="h-12 w-12       bg-foreground">fr</div>
          <div className="h-12 w-12       bg-muted-foreground">m</div>
          <div className="h-12 w-12       bg-input">input</div>
          <div className="h-12 w-12       bg-primary-foreground">1</div>
          <div className="h-12 w-12       bg-secondary-foreground">2</div>
          <div className="h-12 w-12       bg-accent-foreground">accent</div>
          <div className="h-12 w-12       bg-destructive-foreground">del</div>
          <div className="h-12 w-12       bg-ring">ring</div>
        </div>
      </div> */}
      <Spacing />
      <Title title="Compagnon de Code" subtitle="Consolidez vos Connaissances !" />
      <Spacing />
      <Hero />
      <Spacing />
      <Recently/>
      <Spacing />
      <Langages/>
      {/* <Spacing />
      <Skills />
      <Spacing />
      <Portfolio /> */}
      <Spacing />
      <Tools/>
    </main>
  );
}
