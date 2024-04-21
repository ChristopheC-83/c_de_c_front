/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import profil from "@/public/images/profil1.png";

export default function Hero() {
  return (
    <div className="container flex flex-col md:flex-row-reverse justify-center sm:justify-between md:items-start sm:items-center gap-8">
    <div className="flex justify-center sm:justify-start sm:items-start">
      <Image
        src={profil}
        alt="christophe c."
        width={250}
        height={250}
        className="rounded-full object-contain border-2 border-ring bg-gradient-to-bl from-teal-400 to-indigo-300 shadow mt-7 customShadow"
      />
    </div>

    <div className="w-full md:w-3/4 mx-auto h-fit border-2 border-ring p-2 xs:p-3 sm:p-4 flex flex-col gap-y-4 rounded-lg bg-card text-card-foreground customShadow">
        <h2 className="text-center clip mb-8">
          Réflexion sur code, et le reste !
        </h2>
          <p >Quelques tips de développeur ?</p>
          <p >Quelques astuces qui m'ont bien aidé ?</p>
   
        <p className="text-end">
          Des vidéos non liées à un langage
        </p>
        <p className="text-end">
          et put-être même pas devant un IDE !?!
        </p>
      </div>
    </div>
  );
}
