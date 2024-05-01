/* eslint-disable react/no-unescaped-entities */
import profil from "@/public/images/profil1.png";
import CommonHero from "@/components/commons/CommonHero";

export default function Hero() {
  return (
    <CommonHero profilSrc={profil.src}>
      {
        <>
          <h2 className="text-clip  mb-8">
            Montrez-vous sous votre meilleur jour !
          </h2>
          <p className="w-fit">
            La grande majorité de vos clients (potentiels ?) vont au quotidien
            sur internet !
          </p>
          <p className="w-fit">
            Tout comme vous ! Ils cherchent, lisent les avis, comparent !
          </p>
          <p className="w-fit">
            <b><u>Sortez du lot</u></b> avec un site rapide et entièrement
            personnalisé !
          </p>
          <p className="w-fit">
            Un site reconnaissable au premier coup d'oeil !
          </p>
          <br />

          <p className="text-end">Ici, pas de site pré-fabriqué !</p>
          <p className="text-end">Un site unique conçu avec soin.</p>
          <h3 className="text-center mb-4"><u>Un site à votre image.</u></h3>
        </>
      }
    </CommonHero>
  );
}
