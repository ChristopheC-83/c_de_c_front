/* eslint-disable react/no-unescaped-entities */
import profil from "@/public/images/profil1.png";
import CommonHero from "@/components/commons/CommonHero";

export default function Hero() {
  return (
    <CommonHero profilSrc={profil.src}>
      {
        <>
          <h2 className="text-clip  mb-8">
            Réflexions sur le code... et le reste !
          </h2>
          <p>Quelques tips de développeur ?</p>
          <p>Quelques astuces qui m'ont bien aidé ?</p>

          <p className="text-end">
            A travers les principales technos à disposition du développement
            web,{" "}
          </p>
          <p className="text-end">Des articles non liées à un langage</p>
          <p className="text-end">et peut-être même pas devant un IDE !?!</p>
          <p className="ml-auto text-end text-clip font-semibold">
            Allons causer ensemble !
          </p>
        </>
      }
    </CommonHero>
  );
}
