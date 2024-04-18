/* eslint-disable react/no-unescaped-entities */
import { TbCircle1Filled } from "react-icons/tb";
import { TbCircle2Filled } from "react-icons/tb";
import { TbCircle3Filled } from "react-icons/tb";
import { TbCircle4Filled } from "react-icons/tb";
import { TbCircle5Filled } from "react-icons/tb";
import { TbCircle6Filled } from "react-icons/tb";

import { StepsListType } from "@/helpers/customTypes";

export const stepsList: StepsListType[] = [
  {
    id: 1,
    icon: <TbCircle1Filled />,
    label: "La découverte",
    text: (
      <>
        De quoi avezvous besoin ? <br />
        Le savez-vous seulement ?<br />
        Ensemble déterminons l'outil digital qui répondra le mieux à vos
        besoins.
        <br />
        Un site virine pour exposer vos produits? Votre savoir faire?
        <br />
        Un site administrable pour gérer votre contenu (produits, articles de
        blog...)? <br />
        La refonte de votre site vieillissant ?<br />
        Je vous accompagne avec mon expérience pour un résultat qui vous
        ressemble.
      </>
    ),
  },
  {
    id: 2,
    icon: <TbCircle2Filled />,
    label: "La proposition",
    text: (
      <>
        A la suite de notre échange, je vous propose une/des solutions adaptées
        à vos besoins.
        <br />
        En fonction de votre budget, de vos attentes, je vous propose un devis
        détaillé. <br />
        Vous avez des questions ? <br />
        Des modifications à apporter ?<br /> N'hésitez pas ! Je suis à votre
        écoute.
        <br />
        Le but est de cadrer au mieux pour éviter les surprises une fois le
        projet lancé.
        <br />
      </>
    ),
  },
  {
    id: 3,
    icon: <TbCircle3Filled />,
    label: "L'accord",
    text: (
      <>
        Quand tout nous semble bon, nous signons un contrat.
        <br />
        Il est important pour vous comme pour moi de cadrer les choses. <br />
        Dès le versement d'un premier acompte, je commence à travailler sur
        votre projet.
      </>
    ),
  },

  {
    id: 4,
    icon: <TbCircle4Filled />,
    label: "Le développement",
    text: (
      <>
        Je vous fait un point régulier avec démonstration à l'appui.
        <br />
        Ces points intermédiaires permettent de valider ensemble l'avancée du
        projet.
        <br />
        S'il faut un peu corriger la trajectoire, c'est le moment !<br />
        (Différencions correction de trajectoire et changement de cap !)
        <br />
        Si le projet est conséquent, nous aurons établi ensemble un second accompte.
      </>
    ),
  },
  {
    id: 5,
    icon: <TbCircle5Filled />,
    label: "La livraison",
    text: (
      <>
        Nous aurons déterminé ensemble les critères de validation du projet.
        <br />
        Nous aurons programmé la charge de la mise en ligne.
        <br />
        Je vous fournis un document de prise en main de votre site, une vidéo si nécessaire, les codes d'accès s'il y a lieu.
        <br />
        Et c'est parti !<br />
        Votre site est en ligne !<br />
        Mais pas de soucis, je ne serai jamais très loin.
      </>
    ),
  },
];
