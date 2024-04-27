/* eslint-disable react/no-unescaped-entities */
import profil from "@/public/images/profil1.png";
import CommonHero from "@/components/commons/CommonHero";

export default function Hero() {
  return (
    <CommonHero profilSrc={profil.src}>
      {
        <>
          <h2 className="text-clip  mb-8">
            Chaque projet correspond à un niveau !
          </h2>
          <p>
            En suivant un ligne directrice autour d'un projet donné, mettons en
            application votre apprentissage.
          </p>
          <p>Des profs, il y en a beaucoup, et des bons !</p>
          <p>
            Je ne suis là qu'en renfort pour vous aider à mettre en pratique ce
            que vous aurez appris à leur coté !
          </p>
          <p className="text-end">
            A travers les principales technos à disposition du développement
            web,{" "}
          </p>
          <p className="text-end">
            Amusons nous avec un deck de personnages de jeu de rôle !
          </p>
          <p className="text-end">Allons coder ensemble !</p>
        </>
      }
    </CommonHero>
  );
}
