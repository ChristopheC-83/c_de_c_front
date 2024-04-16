import FooterNetworks from "./components/FooterNetworks";
import LegalAndContact from "./components/LegalAndContact";

export default function Footer() {
  return (
    <div className="w-full bg-card text-card-foreground mt-16 pb-8">
      <div className="w-full h-0.5 bg-ring mb-8 "></div>
      <div className="container">
        <h3 className="clip sm:hidden text-center">Compagnon de Code</h3>
        <div className="w-full h-fit flex flex-col-reverse sm:flex-row">
          <div className="flex flex-1">
            <LegalAndContact />
          </div>
          <div className="flex flex-1">
            <FooterNetworks />
          </div>
        </div>
      </div>
    </div>
  );
}
