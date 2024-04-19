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
          Pour une solution qui vous ressemble.
        </h2>
          <p >Nous resterons dans le domaine du dev web ...</p>
          <p >mais pas forcément que du code !</p>
   
        <p className="text-end">
          Insatiable, je me lance dans l'aventure des vidéos tuto
        </p>
        <p className="text-end">
          tout en continuant mon apprentissage sans fin du développement,{" "}
        </p>
        <p className="text-end">voyons où ça nous mène !!!</p>
      </div>
    </div>
  );
}
