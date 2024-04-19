/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import profil from "@/public/images/profil1.png";

export default function Hero() {
  return (
    <div className="container flex flex-col md:flex-row-reverse sm:justify-between md:items-start sm:items-center gap-8">
      <div className="flex justify-center sm:justify-start sm:items-start ">
        <Image
          src={profil}
          alt="christophe c."
          width={250}
          height={250}
          className="rounded-full object-contain border-2 border-ring bg-gradient-to-bl from-teal-400 to-indigo-300 shadow mt-7 customShadow"
        />
      </div>

      <div className="w-full md:w-3/4 mx-auto h-fit border-2 border-ring p-2 xs:p-3 sm:p-4 flex flex-col gap-y-4 rounded-lg bg-card text-card-foreground customShadow">
        <h2 className="text-center clip mb-8">Développeur Web</h2>
        <p>
          Je suis à la recherche de la meilleure solution aux problématiques
          rencontrées en embrassant avec enthousiasme de nouvelles technologies !
        </p>
        <p className="text-center text-2xl">&</p>
        <p className="text-end">
          J'essaye d'apporter ma petite pierre dans le parcours des étudiants en
          tant que <span className="clip text-nowrap	">Compagnon de Code</span>.
        </p>
      </div>
    </div>
  );
}
