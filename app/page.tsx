
import Spacing from "@/components/Spacing";
import Hero from "@/components/homeComponents/hero/Hero";
import Skills from "@/components/homeComponents/skills/Skills";
import Title from "@/components/title/Title";


export default function Home() {
  return (
    <main className="p-1 xs:p-2 sm:p-3 md:p-4">
      <Spacing />
      <Title subtitle="Christophe Chiappetta"/>
      <Spacing />
      <Hero/>
      <Spacing />
      <Skills/>
      
      </main>
  );
}
