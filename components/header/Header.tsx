import ComputerLinks from "./components/ComputerLinks";
import ComputerNetworks from "./components/ComputerNetworks";

export default function Header() {
  return (
    <header>
      <div className="container flex justify-around p-6">
        <ComputerLinks />
        <ComputerNetworks />
      </div>
    </header>
  );
}
