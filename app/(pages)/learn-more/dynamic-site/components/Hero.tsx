/* eslint-disable react/no-unescaped-entities */
import profil from "@/public/images/profil1.png";
import CommonHero from "@/components/commons/CommonHero";

export default function Hero() {
  return (
    <CommonHero profilSrc={profil.src}>
      {
        <>
          <h2 className="text-clip mb-8">
            Montrez-vous ce que vous savez faire !
          </h2>
          <p className="w-fit">
            Que vous  proposiez une gamme de produits ou de créations.
          </p>
          <p className="w-fit">
            Si vous avez besoin de mettre à jour votre gamme régulièrement.
          </p>
          <p className="w-fit">
            Un site administrable est la solution !
          </p>
          <p className="w-fit">
           Du 2 en 1 : un site vitrine et un outil de gestion.
          </p>
          <p> - Un site vitrine pour exposer au monde votre proposition.</p>
          <p> - Un site de management pour vos produits, articles, utilisateurs (visiteurs, clients, modérateurs, contributeurs...)</p>
          <br />

          <p className="text-end">Du sur-mesure, ni plus, ni moins !</p>
          <p className="text-end">Chacun des 2 outils est fabriqué pour VOUS et vous uniquement.</p>
          <h3 className="text-center mb-4"><u>Un site à votre image, <br/> Un outil adapté pour une ergonomie maximale.</u></h3>
        </>
      }
    </CommonHero>
  );
}
