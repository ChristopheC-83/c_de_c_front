/* eslint-disable react/no-unescaped-entities */
import { selectedProjectsType } from "@/helpers/customTypesProjects";
import html_css from "@/public/images/projects/logos/html_css.png";
import javascript from "@/public/images/projects/logos/javascript.png";
import php from "@/public/images/projects/logos/php.png";
import react from "@/public/images/projects/logos/react.png";
import nextjs from "@/public/images/projects/logos/next.png";

export const allProjects: selectedProjectsType[] = [
  {
    id: 1,
    title: "Nos premières cartes en html / css",
    type: "html_css",
    icon: html_css,
    text: (
      <>
        Un premier projet pour consolider les bases du html et du css. <br />
        Nous utiliserons ici flexbox sous plusieurs formes pour être à l'aise
        avec cet outil. <br />
      </>
    ),
    img: "https://i.ytimg.com/an_webp/Cb9aj3ZrBnk/mqdefault_6s.webp?du=3000&sqp=CKD9jLEG&rs=AOn4CLAc6xtGO3GKQ4EyXg6AtKbCq_jqyg",
  },
  {
    id: 2,
    title: "Rendons notre projet responsive",
    type: "html_css",
    icon: html_css,
    text: (
      <>
        Reprenons notre 1er projet pour le rendre responsive. <br />
      </>
    ),
  },
  {
    id: 3,
    title: "Dynamisons notre projet",
    type: "javascript",
    icon: javascript,
    text: (
      <>
        Un petit de JS et tout prend vie !<br />
      </>
    ),
  },
  {
    id: 4,
    title: "Optimisons notre code avec un tableau et DRY",
    type: "javascript",
    icon: javascript,
    text: (
      <>
        Qd nos données sont dans un tableau, bouclons dessus pour en ajouter à
        la volée facilement !<br />
      </>
    ),
  },
  {
    id: 5,
    title: "Découpons notre code pour une meilleure lisibilité",
    type: "php",
    icon: php,
    text: (
      <>
        Il n'est pas fait spécialement pour ça, mais php permet de commencer à
        structurer nos projets.
        <br />
      </>
    ),
  },
  {
    id: 6,
    title: "Gérons nos données avec php",
    type: "php",
    icon: php,
    text: (
      <>
        Et le célèbre CRUD devient facile !<br />
      </>
    ),
  },
  {
    id: 7,
    title: "Une architecture optimisée et scalable : le MVC",
    type: "php",
    icon: php,
    text: (
      <>
        Un peu de poo pour beaucoup d'organisation !<br />
      </>
    ),
  },
  {
    id: 8,
    title: "Des composants pour une application plus modulaire",
    type: "react",
    icon: react,
    text: (
      <>
        Des données, une fonction map(), des composants, C'est facile !<br />
      </>
    ),
  },
  {
    id: 9,
    title: "UseState",
    type: "react",
    icon: react,
    text: (
      <>
        Pour un application dynamique.
        <br />
      </>
    ),
  },
  {
    id: 10,
    title: "La cerise sur le gateau : le routing avec NextJs",
    type: "nextjs",
    icon: nextjs,
    text: (
      <>
        Facile à mettre en place
        <br />
      </>
    ),
  },
  {
    id: 11,
    title: "Prisma et supabase pour une gestion de données optimale",
    type: "nextjs",
    icon: nextjs,
    text: (
      <>
        Pour une application fullstack
        <br />
      </>
    ),
  },
];
