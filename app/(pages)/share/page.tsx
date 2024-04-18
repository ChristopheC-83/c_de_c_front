import Spacing from "@/components/Spacing";
import Title from "@/components/title/Title";
import Hero from "./components/Hero";

export default function Share() {
  return (
    <main className="p-1 xs:p-2 sm:p-3 md:p-4">
      <Spacing />
      <Title title="Mes patages de trucs et astuces" subtitle="Des vidéos de code... et autres !" />
      <Spacing />
      <Hero />
      <Spacing />
    </main>
  );
}
