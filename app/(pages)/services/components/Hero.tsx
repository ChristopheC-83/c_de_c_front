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
        className="rounded-full object-contain border-2 border-ring bg-gradient-to-bl from-teal-400 to-indigo-300 shadow"
      />
    </div>

      <div className="w-full md:w-full mx-auto h-fit border-2 border-ring p-2 xs:p-3 sm:p-4 flex flex-col gap-y-4 rounded-lg bg-card text-card-foreground">
        <h2 className="text-center clip mb-8">Pour une solution qui vous ressemble.</h2>
        <div className="flex flex-col items-center w-fit">
          <p className="w-fit">
            En partant de zéro
          </p>
          <p className="w-fit">OU</p>
          <p className="w-fit">En améliorant votre site existant,</p>
        </div>
        <p className="text-end">Nous trouverons la solution pour optimiser votre image digitale.</p>
        <p className="text-end">Du visuel, à la navigation en passant par l'administration et le référencement.</p>
      </div>
    </div>
  );
}