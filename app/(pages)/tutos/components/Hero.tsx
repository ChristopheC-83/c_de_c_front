/* eslint-disable react/no-unescaped-entities */
import profil from "@/public/images/profil1.png";
import CommonHero from "@/components/commons/CommonHero";

export default function Hero() {
  return (
    <CommonHero profilSrc={profil.src}>
      {
        <>
          <h2 className="text-clip  mb-8">
            Des notions pour compléter les projets !
          </h2>
          <p>
            Les projets ne peuvent pas englober TOUTES les notions d'un langage.
          </p>
          <p>Ajoutons des articles/vidéos complémentaires, ça ne fera pas de mal !</p>
          
          <p className="text-end">
           Je reste disponible aux demandes d'informations,
          </p>
          <p className="text-end">
            Pour vous proposer ce dont VOUS avez besoin.
          </p>
          <p className="ml-auto text-end text-clip font-semibold">Allons creuser ensemble !</p>
        </>
      }
    </CommonHero> 
  );
}
