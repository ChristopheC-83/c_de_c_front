import Spacing from "@/components/Spacing";
import Title from "@/components/title/Title";
import Hero from "./components/Hero";
import Technos from "./components/Technos";
import Prices from "./components/Prices";
import Steps from "./components/Steps";
import Waranty from "./components/Waranty";

export default function Services() {
  return (
    <main className="p-1 xs:p-2 sm:p-3 md:p-4">
      <Spacing />
      <Title title="Les Services" subtitle="Au plus proche de vos besoins." />
      <Spacing />
      <Hero />
      <Spacing />
      <Technos />
      <Spacing />
      <Steps/>
      <Spacing />
      <Prices/>
      <Spacing />
      <Waranty/>

    </main>
  );
}
