/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import profil from "@/public/images/profil1.png";

export default function Hero() {
  return (
    <div className="container flex flex-col md:flex-row-reverse justify-center sm:justify-between sm:items-center gap-8">
      <div className="flex items-center justify-center sm:justify-end">
        <Image
          src={profil}
          alt="christophe c."
          width={250}
          height={250}
          className="rounded-full object-contain border-2 border-ring bg-gradient-to-bl from-indigo-700 to-slate-700 shadow"
        />
      </div>
      <div className="w-full md:w-3/4 mx-auto h-fit border-2 border-ring p-1.5 xs:p-2 sm:p-3 flex flex-col gap-y-8 rounded">
       <p className="text-center">Parce que je prends du plaisir à apprendre... et dans les 2 sens du terme !</p>
       <p>Je suis à la recherche de la meilleure solution aux problématiques rencontrées en embrassant avec enthosiasme de nouvelles technos !</p>
       <p>J'apporte ma petite pierre dans le parcours des étudiants en tant que Compagnon de Code.</p>

      </div>
    </div>
  );
}
