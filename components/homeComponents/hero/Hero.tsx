/* eslint-disable react/no-unescaped-entities */
import profil from "@/public/images/profil1.png";
import CommonHero from "@/components/commons/CommonHero";

export default function Hero() {
  return (
    <CommonHero profilSrc={profil.src}>
      {
        <>
          <h2 className="text-clip  mb-8">L'apprentissage du Dev Web :</h2>
          <p> - Apprends grâce à des tutos et la documentation.</p>
          <p> - Fais des projets accompagnés.</p>
          <p className="text-clip">Le plus importants : </p>
          <p> - Fais des projets personnels ! Challenge toi !</p>
          
          <p className="text-center text-2xl">&</p>
          <p className="text-end">
            En tant que {" "}
            <span className="text-clip  text-nowrap	">Compagnon de Code</span>, je ferai mon possible pour être à tes côtés sur la seconde partie 😉.
          </p>
        </>
      }
    </CommonHero>
  );
}

