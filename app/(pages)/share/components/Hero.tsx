/* eslint-disable react/no-unescaped-entities */
import profil from "@/public/images/profil1.png";
import CommonHero from "@/components/commons/CommonHero";

export default function Hero() {
  return (
    <CommonHero profilSrc={profil.src}>
      {
        <> <h2 className="text-clip  mb-8">
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
        </>
      }
    </CommonHero>
  );
}
