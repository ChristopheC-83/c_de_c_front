import ComputerLinks from "./components/ComputerLinks";
import ComputerNetworks from "./components/ComputerNetworks";
import MenuSmartphone from "./components/MenuSmartphone";

export default function Header() {
  return (
    <header>
      {/* Menu si écran < 640px de klarge */}
      <div className="container flex justify-end px-6 py-2 md:hidden  hover:text-primary">
        <MenuSmartphone />
      </div>
      {/* Menu si écran > 640px de large */}
      <div className="container md:flex justify-between p-6 hidden ">
        <ComputerLinks />
        {/* <ComputerNetworks /> */}
        
      </div>
    </header>
  );
}
