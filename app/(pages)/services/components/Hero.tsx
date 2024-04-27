/* eslint-disable react/no-unescaped-entities */
import profil from "@/public/images/profil1.png";
import CommonHero from "@/components/commons/CommonHero";

export default function Hero() {
  return (
    <CommonHero profilSrc={profil.src}>
      {
        <>
        <h2 className="text-clip  mb-8">
          Pour une solution qui vous ressemble.
        </h2>
        <div className="flex flex-col items-center w-fit">
          <p className="w-fit">En partant de zéro</p>
          <p className="w-fit">OU</p>
          <p className="w-fit">En améliorant votre site existant,</p>
        </div>
        <p className="text-end">
          Nous trouverons la solution pour optimiser votre image digitale.
        </p>
        <p className="text-end">
          Du visuel, à la navigation en passant par l'administration et le
          référencement.
        </p>
        </>
      }
    </CommonHero>
  );
}
