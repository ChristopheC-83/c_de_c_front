import Spacing from "@/components/Spacing";
import Title from "@/components/title/Title";
import Hero from "./components/Hero"
import RoadMap from "./components/RoadMap";
import Video from "./components/Video";

export default function DynamicSite() {
  return (
    <main className="p-1 xs:p-2 sm:p-3 md:p-4">
      <Spacing />
      <Title
        title="Votre savoir-faire mise en avant"
        subtitle="Un site vitrine pour montrer vos produits, vos créations !"
      />
      <Spacing />
      <Hero />
      <Spacing />
      <Video/>
      <Spacing />
      <RoadMap/>
      <Spacing />
    </main>
  );
}
