import type { Metadata } from "next";
import "@/app/style/global.css"
import "@/app/style/style.css";


export const metadata: Metadata = {
  title: "CdeC | Partage",
  description: "Je te partage des tricks de dev web, des petits bouts d'expérience pour te faciliter la vie.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // exemple d'utilisation de layout personnailsé
    // <div className="bg-slate-400 w-full min-h-48">{children}</div>
    <>{children}</>
  );
}
