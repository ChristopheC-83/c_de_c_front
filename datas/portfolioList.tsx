/* eslint-disable react/no-unescaped-entities */
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
import { SiReact } from "react-icons/si";
import { SiGreensock } from "react-icons/si";
import { SiMysql } from "react-icons/si";

export const portfolioList: PortfolioType[] = [
  {
    id: 1,
    title: "Vélo-Expresso",
    imageDestop: "/images/portfolio/portrait_velo_expresso-min.png",
    imageMobile: "/images/portfolio/paysage_velo_expresso-min.png",
    description: "Site vitrine administrable pour un magasin de vélos.",
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
    more: (
      <>
        Un double projet. <br />
        Une partie visible par les clients. Codée en <b>Next.js</b>, nous avons misé
        sur la réactivité et la possibilité d'améliorer le <b>référencement</b> du site
        sur les moteurs de recherche. <br />
        La seconde partie, en <b>php sur une architecture MVC</b>, permet à
        l'administrateur de gérer le contenu : les prestations, les prix, l'ordre
        d'apparition... <br />
        Un <b>projet complet</b> qui m'a permis de travailler sur beaucoup de facettes
        du développement web.
      </>
    ),
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
    technos: [
      { id: 1, icon: <SiReact />, label: "react" },
      { id: 2, icon: <SiGreensock />, label: "greensock" },
      { id: 3, icon: <SiSass />, label: "sass" },
      { id: 4, icon: <FaCss3Alt />, label: "css" },
      { id: 5, icon: <FaHtml5 />, label: "html" },
    ],
    more: (
      <>
        Ce projet est un site vitrine pour un artisan. Moi même en fait 😅 !
        <br />
        Je passe de la pose de cuisines à la conception de sites et d' outils
        web.
        <br />
        Développé en <b>React</b> et avec des données statiques dans une <b>API Context</b>,
        l'idée était d'être simple et sobre dans la réalisation pour un
        lisibilité maximale. <br />
        De légères <b>animations avec GSAP</b> pour une navigation plus agréable.<br/>
        Ce n'était pas prévu, mais cette production m'a ramené plus de clients
        que nécessaire !
      </>
    ),
  },
  {
    id: 3,
    title: "un blog",
    imageDestop: "/images/portfolio/portrait_blog-min.png",
    imageMobile: "/images/portfolio/paysage_blog-min.png",
    description:
      "Un blog pour partager mes expériences, mes projets et mes idées.",
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
    more: (
      <>
        Dans le cadre d'une formation, nous devions exploiter{" "}
        <b>php et une architecture MVC</b>.<br />
        J'ai donc décidé de créer un blog pour partager mes expériences et mes
        projets. <br />
        J'ai utilisé <b>bootstrap</b> pour le design et <b>php</b> pour la gestion des
        données.
        <br /> Les articles sont stockés dans une <b>base de données MySQL</b>.
        <br /> L'administrateur a accés à un tableau de bord pour la gestion des
        articles, des utilisateurs. Il peut écrire, modifier, supprimer les
        articles (le célèbre <b>CRUD</b>). Il peut aussi gérer les utilisateurs, les rôles, les droits.<br/>
        Un projet complet pour une formation complète autour de la <b>
          gestion des
          données
        </b>.
      </>
    ),
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
    more: (
      <>
        {" "}
        Parce que c'est à travers des projets perso qu'on apprend le plus lors
        de notre formation, j'ai réalisé un site de présentation pour m'exercer
        à la manimulation de <b>React</b>.<br />
        Pas un CV des plus sérieux, mais un site qui me ressemble !<br/>J'ai utilisé
        ce <b>framework</b> pour le dynamisme et <b>SASS</b> pour le design.
        <br /> 
        La <b>librairie GSAP</b> est vraiment complète animer un projet web.
        <br /> Pour finir, l'<b>API de contexte</b> de React m'a permis de gérer
        l'état global du site.
      </>
    ),
  },
];
