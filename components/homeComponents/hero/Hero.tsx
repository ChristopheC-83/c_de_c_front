/* eslint-disable react/no-unescaped-entities */
import AvatarPerso from "@/components/Avatar/AvatarPerso";
import Image from "next/image";


export default function Hero() {
  return (
    <div className="container flex flex-col md:flex-row-reverse justify-center sm:justify-between sm:items-center gap-8">
      <AvatarPerso  />

      <div className="w-full md:w-3/4 mx-auto h-fit border-2 border-ring p-2 xs:p-3 sm:p-4 flex flex-col gap-y-4 rounded-lg bg-card text-card-foreground">
        <h2 className="text-center clip mb-8">Développeur Web</h2>
        <p>
          Je suis à la recherche de la meilleure solution aux problématiques
          rencontrées en embrassant avec enthousiasme de nouvelles technos !
        </p>
        <p className="text-center">&</p>
        <p>
          J'essaye d'apporter ma petite pierre dans le parcours des étudiants en
          tant que <span className="clip">Compagnon de Code</span>.
        </p>
      </div>
    </div>
  );
}