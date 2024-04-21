import Spacing from "@/components/Spacing";
import Title from "@/components/title/Title";
import Hero from "./components/Hero";
import Filter from "./components/Filter";

export default function Share() {
  return (
    <main className="p-1 xs:p-2 sm:p-3 md:p-4">
      <Spacing />
      <Title title="Mes partages de trucs et astuces" subtitle="Des vidéos ? du code ? ... ou autre !" />
      <Spacing />
      <Hero />
      <Spacing />
      <Filter/>
      <Spacing />
    </main>
  );
}
