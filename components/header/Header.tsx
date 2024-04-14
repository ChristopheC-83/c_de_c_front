import ComputerLinks from "./components/ComputerLinks";
import ComputerNetworks from "./components/ComputerNetworks";
import MenuSmartphone from "./components/MenuSmartphone";

export default function Header() {
  return (
    <header>
      {/* Menu si écran < 640px de klarge */}
      <div className="container flex justify-end px-6 py-2 sm:hidden ">
        <MenuSmartphone />
      </div>
      {/* Menu si écran > 640px de large */}
      <div className="container sm:flex justify-around p-6 hidden ">
        <ComputerLinks />
        <ComputerNetworks />
      </div>
    </header>
  );
}
