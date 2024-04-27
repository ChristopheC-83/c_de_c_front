/* eslint-disable react/no-unescaped-entities */
import { PriceListType } from "@/helpers/customTypes";

export const priceList: PriceListType[] = [
  {
    id: 1,
    price: "A partir de 900 € HT",
    price2: "pour 3 pages ",
    label: "Un site vitrine pour s'exposer.",
    text: (
      <>
        Montrer ce que vous savez faire ! <br />
        Faites vous connaitre et <b>augmentez votre chiffre d'affaire</b> !{" "}
        <br />
        Un site vitrine pour<b> exposer vos services et vos réalisations.</b>
        <br />
        Un site moderne, <b>adaptable et optimisé</b> pour les ordinateurs,
        tablettes et smartphones.
        <br />
      </>
    ),
    link:"/learn-more/static-site",
  },
  {
    id: 2,
    price: "A partir de 2500 € HT",
    price2: "puis fonction de la taille.",
    label: "Un projet administrable pour le gérer.",
    text: (
      <>
        Gérer votre business en toute autonomie avec cette suite.
        <br />
        Un site vitrine pour<b> booster votre CA</b> en mettant en avant votre
        business.
        <br />
        Un site back-office pour
        <b> gérer vos données (articles, prestations, clients...)</b> .<br />
        Les 2 sont liés ! <br />
        Une proposition dans le back alimente instantannéement le site vitrine !
        <br />
        <b>Restez à jour !</b>
      </>
    ),
    link:"/learn-more/dynamic-site",
  },
  {
    id: 3,
    price: "A déterminer...",
    price2: "450€/jour environ",
    label: "Une refonte ? Contactez-moi !",
    text: (
      <>
        Vous avez déjà un site mais il est <b>obsolète</b> ?<br />
        Vous avez besoin de le <b>moderniser</b> ?<br />
        Vous avez besoin de le <b>mettre à jour</b> ?<br />
        Vous avez besoin de le <b>rendre administrable</b> ?<br />
        Contactez-moi pour une étude de votre projet !<br />
      </>
    ),
    link:"/learn-more/remake-site",
  },
];
