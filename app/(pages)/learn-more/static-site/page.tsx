import Spacing from "@/components/Spacing";
import Title from "@/components/title/Title";
import Hero from "./components/Hero"

export default function StaticSite() {
  return (
    <main className="p-1 xs:p-2 sm:p-3 md:p-4">
      <Spacing />
      <Title
        title="Votre expertise mise en avant"
        subtitle="Un site vitrine pour montrer votre savoir-faire !"
      />
      <Spacing />
      <Hero />
      <Spacing />
      
      <Spacing />
    </main>
  );
}
