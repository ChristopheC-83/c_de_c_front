/* eslint-disable react/no-unescaped-entities */
import { TbCircle1Filled } from "react-icons/tb";
import { TbCircle2Filled } from "react-icons/tb";
import { TbCircle3Filled } from "react-icons/tb";
import { TbCircle4Filled } from "react-icons/tb";
import { TbCircle5Filled } from "react-icons/tb";
import { TbCircle6Filled } from "react-icons/tb";

import { StepsListType } from "@/helpers/customTypes";

export const WarantyList: StepsListType[] = [
  {
    id: 1,
    label: "Qui es-tu pour avoir ma confiance ?",
    text: (
      <>
        15 ans cadre dans le commerce puis 10 ans dans la prestation de
        services.
        <br />
        Plus que mes métiers, j'ai toujours eu à coeur de satisfaire mes
        clients.
        <br />
        J'ai toujours tenu mes engagements.
        <br />
        Je fais ce que je dis, je dis ce que je fais.
        <br />
        Pas de surprise, des résultats puis un suivi.
        <br />
      </>
    ),
  },
  {
    id: 2,
    label: "Et en cas de problème après la mise en ligne ?",
    text: (
      <>
        Pour ce qui est de la prise en main de votre site, vous aurez une notice
        explicative et je reste disponible pour vous accompagner le cas échéant.
        <br />
        Pendant un mois complet, je corrige (évidemment gratuitement) les bugs éventuels qui
        seraient passés à travers les mailles du filet.
        <br />
      </>
    ),
  },
  {
    id: 3,
    label: "Je souhaite faire évoluer mon site, comment ça se passe ?",
    text: (
      <>
        En fonction de la demande, je vous propose un devis pour les mises à jour.
        <br />
        Familier avec le code, le projet, la prosposition sera adaptée. Nous ne repartons pas de zéro
        <br />
      </>
    ),
  },

  {
    id: 4,
    label: "J'ai besoin d'une évolution constante, d'un suivi, on fait comment ?",
    text: (
      <>
        Pas de soucis !<br/>
        Nous déterminons ensemble la charge de travail mensuelle et mettons en place un abonnement.<br/>
        Vous savez que tous les mois, par exemple, vous avez droit à 1 journée, plus ? moins ? sur votre site pour qu'il s'adapte en permanence à vos besoins.<br/>
        Et si besoin, en cours de route, nous ajusterons.<br/>
        Un contrat c'est bien, un partenariat c'est mieux !<br/>
      </>
    ),
  },
  {
    id: 5,
    label: "Et si d'autres informaticiens doivent accéder au code du site ?",
    text: (
      <>
        Après règlement de la facture, le code vous appartient !<br />
        Quelqu'un doit venir y mettre son nez ?<br />
        J'aurai fait en sorte qu'il soit documenté et facile à comprendre.<br />
        Et en cas de besoin, je reste disponible pour répondre à ses questions.<br />
        Je me répète, votre satisfaction est ma priorité.<br />
      </>
    ),
  },
  {
    id: 6,
    label: "J'ai besoin de toi sur site pendant plusieurs jours.",
    text: (
      <>
        En restant dans ma zone de chalandise, je peux me déplacer avec plaisir.<br />
        Entre Nîmes et Montpellier et de Arles à Alès je suis à votre disposition.<br />
        Soit pour faire un point de vive voix sur votre projet,<br />
        soit pour travailler sur place, potentiellement auprès de votre équipe.<br />
        A l'heure du télétravail, un peu de relation humaine ne fera de mal à personne !<br />
      </>
    ),
  },
];
