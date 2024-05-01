/* eslint-disable react/no-unescaped-entities */
import { SkillsListType } from "@/helpers/customTypes";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { AiFillPicture } from "react-icons/ai";
import { FaComputer } from "react-icons/fa6";
import { FaFlagCheckered } from "react-icons/fa6";
import { GiThreeFriends } from "react-icons/gi";
import { SiAwsorganizations } from "react-icons/si";

export const dynamicSiteList: SkillsListType[] = [
  {
    id: 1,
    icon: <FaMagnifyingGlassChart />,
    label: "Etude de vos besoins",
    text: (
      <>
        <p>Nous les déterminons ensemble.</p>
        <p>Autant le visuel et les fonctionnalités du site vitrine...</p>
        <p>... que les options du site d'administration</p>
        <p>Je vous fournis une prestation détaillée possible. </p>
        <p>
          Vous validez ou nous modifions, ajustons au plus près de vos besoins..
        </p>
        <br />
        <p className="text-center">
          <b>On détaille au maximum pour un efficacité optimale !</b>
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
        <p>L' accueil : une image ou un carroussel ?</p>
        <p>Les utilisateurs : visiteurs libres ou connectés ?</p>
        <p>Les produits : une liste ou une grille ?</p>
        <br />
        <p className="text-center">
          <b>
            Les possibilités sont presque infinies ! Mais je suis là pour vous
            accompagner !
          </b>
        </p>
      </>
    ),
  },
  {
    id: 99,
    icon: <SiAwsorganizations />,
    label: "Vos besoins de gestion",
    text: (
      <>
        <p>
          Quel est votre coeur de métier qui doit être au centre de votre
          management des données ?
        </p>
        <p>
          Quels affichages (textes, images, vidéos) souhaitez-vous faire évoluer
          avec le temps?
        </p>
        <p>L'accueil : une image ou un carroussel ?</p>
        <p>
          Serez-vous seul maître à bord ?Ou accompagné de collaborateurs ? dans
          ce cas, quelle gestion des droits met-on en place ?{" "}
        </p>
        <p>Les produits : une liste ou une grille ?</p>
        <br />
        <p className="text-center">
          <b>
            Avec votre connaissance métier et mes 15 ans de commerce et 10 ans
            de services, nous allons vous créer un outil de gestion sur-mesure !
          </b>
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
        <p>Tout est cadré !?! C'est à moi de jouer !</p>
        <p>Vous avez des rendus réguliers de l'avancement du projet.</p>
        <p>Vous testez, consolidez, ajustez si besoins sur l'outil de gestion.</p>
        <p>Vous validez le visuel du site client.</p>
        <br />
        <p className="text-center">
          <b>Nous ajustons le cap au fun et à mesure !</b><br/>
          Pas besoin de changement brusque, nous avions préparé votre projet dès le début !
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
        <p>Je vous accompagne dans la prise en main de l'outil.</p>
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
        <p>Vous n'êtes pas qu'un client ! Vous m'avez fait confiance ?</p>
        <p>Je reste disponible ! </p>
        <p>Vos besoins évoluent, vos envies changent... je suis là !</p>
        <br />
        <p className="text-center">
          <b>Une correction ? Une mise à jour ? je serai encore et toujours présent !</b>
        </p>
      </>
    ),
  },
];
