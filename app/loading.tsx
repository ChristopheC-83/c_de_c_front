import { TfiReload } from "react-icons/tfi";

export default function Loader() {
  return (
    <div className="w-full min-h-screen p-16">
      <TfiReload className="mx-auto font-bold text-primary text-7xl animate-spin scale-[-1]" />
    </div>
  );
}
