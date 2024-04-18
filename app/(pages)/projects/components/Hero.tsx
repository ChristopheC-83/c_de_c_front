/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import profil from "@/public/images/profil1.png";

export default function Hero() {
  return (
    <div className="container flex flex-col md:flex-row-reverse justify-center sm:justify-between md:items-start sm:items-center gap-8">
      <div className="flex sm:justify-start sm:items-start">
        <Image
          src={profil}
          alt="christophe c."
          width={250}
          height={250}
          className="rounded-full object-contain border-2 border-ring bg-gradient-to-bl from-teal-400 to-indigo-300 shadow mt-7"
        />
      </div>

    <div className="w-full md:w-3/4 mx-auto h-fit border-2 border-ring p-2 xs:p-3 sm:p-4 flex flex-col gap-y-4 rounded-lg bg-card text-card-foreground">
        <h2 className="text-center clip mb-8">
          Chaque projet correspond à un niveau !
        </h2>
        <div className="flex flex-col items-start w-fit">
          <p className="w-fit">
            En suivant un ligne directrice autour d'un projet donné, mettons en
            application votre apprentissage.
          </p>
          <p>Des profs, il y en a beaucoup, et des bons !</p>
          <p>
            Je ne suis là qu'en renfort pour vous aider à mettre en pratique ce
            que vous aurez appris à leur coté !
          </p>
        </div>
        <p className="text-end">
          A travers les principales technos à disposition du développement web,{" "}
        </p>
        <p className="text-end">
          Amusons nous avec un deck de personnages de jeu de rôle !
        </p>
        <p className="text-end">
          Allons coder ensemble !
        </p>
      </div>
    </div>
  );
}
