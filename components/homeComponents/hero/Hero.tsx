/* eslint-disable react/no-unescaped-entities */
import profil from "@/public/images/profil1.png";
import CommonHero from "@/components/commons/CommonHero";

export default function Hero() {
  return (
    <CommonHero profilSrc={profil.src}>
      {
        <>
          <h2 className="text-clip  mb-8">Développeur Web</h2>
          <p>
            Je suis à la recherche de la meilleure solution aux problématiques
            rencontrées en embrassant avec enthousiasme de nouvelles
            technologies !
          </p>
          <p className="text-center text-2xl">&</p>
          <p className="text-end">
            J'essaye d'apporter ma petite pierre dans le parcours des étudiants
            en tant que{" "}
            <span className="text-clip  text-nowrap	">Compagnon de Code</span>.
          </p>
        </>
      }
    </CommonHero>
  );
}

