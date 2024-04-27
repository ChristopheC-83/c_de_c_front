/* eslint-disable react/no-unescaped-entities */
import { SkillsListType } from "@/helpers/customTypes";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { AiFillPicture } from "react-icons/ai";
import { FaComputer } from "react-icons/fa6";
import { FaFlagCheckered } from "react-icons/fa6";
import { GiThreeFriends } from "react-icons/gi";

export const staticSiteList: SkillsListType[] = [
  {
    id: 1,
    icon: <FaMagnifyingGlassChart />,
    label: "Etude de vos besoins",
    text: (
      <>
        <p>Nous les déterminons ensemble.</p>
        <p>Je vous fournis une prestation détaillée. </p>
        <p>Vous validez ou nous modifions.</p>
        <br />
        <p className="text-center">
          <b>C'est un travail d'équipe !</b>
        </p>
      </>
    ),
  },
  {
    id: 2,
    icon: <AiFillPicture />,
    label: "Vos envies graphiques",
    text: (
      <>
        <p>Quel style souhaitez-vous renvoyer ?</p>
        <p>Les images ? Le menu ?</p>
        <p>L'accueil ? une image ou un carroussel ?</p>
        <br />
        <p className="text-center">
          <b>Regardons ça ensemble!</b>
        </p>
      </>
    ),
  },
  {
    id: 3,
    icon: <FaComputer />,
    label: "Le développement",
    text: (
      <>
        <p>Tout est cadré !?!</p>
        <p>C'est à moi de jouer !</p>
        <p>Vous avez des rendus réguliers de l'avancement du projet.</p>
        <br />
        <p className="text-center">
          <b>Nous ajustons le cap au fun et à mesure !</b>
        </p>
      </>
    ),
  },
  {
    id: 4,
    icon: <FaFlagCheckered />,
    label: "Le déploiement",
    text: (
      <>
        <p>On y est !</p>
        <p>Si tout est validé, à votre convenance :</p>
        <p>
          1- Le code vous appartient, libre à vous de l'héberger ou bon vous
          semble.
        </p>
        <p>2- Vous ne faites rien, je le déploie pour vous !</p>
        <br />
        <p className="text-center">
          <b>A vous de montrer ce que vous savez faire au monde entier ! </b>
        </p>
      </>
    ),
  },
  {
    id: 5,
    icon: <GiThreeFriends />,
    label: "Et après ?",
    text: (
      <>
        <p>Vous n'êtes pas qu'un client !</p>
        <p>Vous m'avez fait confiance ?</p>
        <p>Je reste disponible !</p>
        <br />
        <p className="text-center">
          <b>Une correction ? Une mise à jour ? je serai là !</b>
        </p>
      </>
    ),
  },
];
