/* eslint-disable react/jsx-key */
import { PortfolioType } from "@/helpers/customTypes";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiReact } from "react-icons/si";import { SiGreensock } from "react-icons/si";
import { SiMysql } from "react-icons/si";


export const portfolioList: PortfolioType[] = [
  {
    id: 1,
    title: "Vélo Expresso",
    imageDestop: "/images/portfolio/portrait_velo_expresso-min.png",
    imageMobile: "/images/portfolio/paysage_velo_expresso-min.png",
    description:
      "Site vitrine pour une entreprise de location de vélos électriques.",
    link: "https://velo-expresso-front.vercel.app/",
    githubFront: "",
    githubBack: "",
    technos: [
      { id: 1, icon: <SiNextdotjs />, label: "nextjs" },
      { id: 2, icon: <SiTailwindcss />, label: "tailwind" },
      { id: 3, icon: <SiPrisma />, label: "prisma" },
      { id: 4, icon: <SiFramer />, label: "framer motion" },
      { id: 5, icon: <SiPhp />, label: "php" },
      { id: 6, icon: <SiMysql />, label: "mysql" },
      { id: 7, icon: <SiBootstrap />, label: "bootstrap" },
      { id: 8, icon: <SiSass />, label: "sass" },
      { id: 9, icon: <FaCss3Alt />, label: "css" },
      { id: 10, icon: <FaHtml5 />, label: "html" },
    ],
    more: "Ce projet part d'une idée de site vitrine, réactif lors de la navigation. NextJS s'est imposé évidemment. Mais dès le début de la réflexion, nous nous sommes rendu compte que le propriétaire du magasin aurait besoin d'un outil d'administration pour les vélos, tarifs, prestations... Nous avons donc décidé de faire un second site en php pour la gestion des données. J'en ai profité pour mettre en place tout ce que j'avais pu apprendre juqu'à présent. Prisma pour la gestion de la base de données, framer motion pour les animations, bootstrap pour le design. Un projet complet et très formateur.",
  },
  {
    id: 2,
    title: "Un poseur de cuisines",
    imageDestop: "/images/portfolio/portrait_cuisines-min.png",
    imageMobile: "/images/portfolio/paysage_cuisines-min.png",
    description: "Site vitrine pour un artisan poseur de cuisines.",
    link: "https://christophe-cuisine.fr/",
    githubFront: "",
    githubBack: "",
    technos:  [
      { id: 1, icon: <SiReact />, label: "react" },
      { id: 2, icon: <SiGreensock />, label: "greensock" },
      { id: 3, icon: <SiSass />, label: "sass" },
      { id: 4, icon: <FaCss3Alt />, label: "css" },
      { id: 5, icon: <FaHtml5 />, label: "html" },
    ],
    more: "Ce projet est un site vitrine pour un artisan.Pour moi même en fait 😅 !  Je passe de la conception de cuisisnes à la conception de site et outils web. Développé en React et statique, l'idée était d'être simple et sobre dans la réalisation pour un lisibilité maximale. Ce n'était pas prévu, mais cette production m'a ramené plus de clients que nécessaire !",
  },
  {
    id: 3,
    title: "un blog",
    imageDestop: "/images/portfolio/portrait_blog-min.png",
    imageMobile: "/images/portfolio/paysage_blog-min.png",
    description: "Un blog pour partager mes expériences et mes projets.",
    link: "https://blog.barpat.fun/",
    githubFront: "",
    githubBack: "",
    technos: [
      { id: 1, icon: <SiPhp />, label: "php" },
      { id: 2, icon: <SiMysql />, label: "mysql" },
      { id: 3, icon: <SiBootstrap />, label: "bootstrap" },
      { id: 4, icon: <SiSass />, label: "sass" },
      { id: 5, icon: <FaCss3Alt />, label: "css" },
      { id: 6, icon: <FaHtml5 />, label: "html" },
    ],
    more: "Dans le cadre d'une formation, nous devions exploiter php et une architecture MVC. J'ai donc décidé de créer un blog pour partager mes expériences et mes projets. J'ai utilisé bootstrap pour le design et php pour la gestion des données. Les articles sont stockés dans une base de données MySQL. L'administrateur a accés à un tableau de bord pour la gestion des articles, des utilisateurs. Il peut écrire, modifier, supprimer les articles. Il peut aussi gérer les utilisateurs, les rôles, les droits. Un projet complet pour une formation complète.",
  },
  {
    id: 4,
    title: "Mon CV en ligne",
    imageDestop: "/images/portfolio/portrait_barpat-min.png",
    imageMobile: "/images/portfolio/paysage_barpat-min.png",
    description: "Mon CV en ligne, pour m'amuser avec React.",
    link: "https://barpat.fun/",
    githubFront: "",
    githubBack: "",
    technos: [
      { id: 1, icon: <SiReact />, label: "react" },
      { id: 2, icon: <SiGreensock />, label: "greensock" },
      { id: 3, icon: <SiSass />, label: "sass" },
      { id: 4, icon: <FaCss3Alt />, label: "css" },
      { id: 5, icon: <FaHtml5 />, label: "html" },
    ],
    more: "Parce que c'est à travers des projets perso qu'on apprend le plus lors de notre formation, j'ai réalisé un site de présentation. Pas un CV des plus sérieux, mais un site qui me ressemble. J'ai utilisé React pour la dynamique et sass pour le design. J'ai aussi utilisé des animations pour rendre le site plus vivant. La librairie GSAP est vraiment complète pour ce genre de projet. Pour finir, l'API de contexte de React m'a permis de gérer l'état global du site.",
  },
];
