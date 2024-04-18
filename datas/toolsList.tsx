/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import { PortfolioType, ToolsType } from "@/helpers/customTypes";
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
import { SiJavascript } from "react-icons/si";
import { LuNetwork } from "react-icons/lu";
import { VscTools } from "react-icons/vsc";

export const toolsList: ToolsType[] = [
  {
    id: 1,
    title: "html",
    icon: <FaHtml5 />,
    colorItem: "orange-600",
    bg: "neutral-50",
    pitch: "Le contenu de votre site, c'est lui !",
    text: (
      <>
        {" "}
        L'HTML (HyperText Markup Langage) n'est pas du code à proprement parler,
        mais un langage de balisage qui permet de structurer le contenu d'une
        page web. C'est lui qui permet de définir les différents éléments de
        votre site : titres, paragraphes, images, liens, etc. C'est la base de
        tout site web. C'est le document word de votre site à l'état brut.
      </>
    ),
  },
  {
    id: 2,
    title: "css",
    icon: <FaCss3Alt />,
    colorItem: `blue-700`,
    bg: "neutral-50",
    pitch: "La mise en forme de votre site.",
    text: (
      <>
        {" "}
        Le CSS (Cascading Style Sheets) est un langage utilisé pour décrire la
        présentation d'un document écrit en HTML. Il permet de mettre en forme
        les éléments de votre site : couleurs, polices, marges, alignements,
        etc. C'est lui qui va donner du style à votre site, le rendre plus
        attractif et plus agréable à lire. C'est la boîte de crayons ou de
        feutres de votre site.
      </>
    ),
  },
  {
    id: 3,
    title: "sass",
    icon: <SiSass />,
    colorItem: "pink-400",
    bg: "neutral-50",
    pitch: "Le CSS survitaminé !",
    text: (
      <>
        {" "}
        Sass est un préprocesseur CSS qui permet d'écrire du CSS de manière plus
        claire et plus structurée. Il ajoute des fonctionnalités qui ne sont pas
        disponibles en CSS, comme les variables, les mixins, les fonctions, les
        boucles, etc. Cela permet de gagner du temps et de réduire les erreurs.
        Grâce à Sass, on peut découper tout notre CSS et le lier en un seul
        fichier. Nous le retrouverons pour personnaliser les framework comme
        Tailwind et Bootstrap. Sass, c'est le CSS en mieux !
      </>
    ),
  },
  {
    id: 6,
    title: "bootstrap",
    icon: <SiBootstrap />,
    colorItem: "violet-700",
    bg: "neutral-50",
    pitch: "Le framework CSS le plus populaire.",
    text: (
      <>
        {" "}
        Bootstrap est un framework CSS qui permet de créer des sites web
        responsive et mobile-first. Il contient des modèles de conception, des
        composants et des utilitaires prêts à l'emploi qui facilitent la
        création de sites web modernes. C'est un outil très complet et
        personnalisable qui permet de gagner du temps et de produire des sites
        de qualité professionnelle. C'est le couteau suisse du développeur web.
      </>
    ),
  },
  {
    id: 8,
    title: "tailwindcss",
    icon: <SiTailwindcss />,
    colorItem: "sky-500",
    bg: "neutral-50",
    pitch: "Le framework CSS de la libre expression !",
    text: (
      <>
        {" "}
        Tailwind CSS est un framework qui permet de créer des sites web
        personnalisés et modernes. Il utilise une approche utility-first, ce qui
        signifie qu'il fournit des classes utilitaires pour créer des styles
        personnalisés. Cela permet de produire des sites web uniques et
        originaux. C'est un outil très flexible et puissant qui permet de créer
        des designs uniques et innovants. C'est le pinceau de votre site.
      </>
    ),
  },
  {
    id: 15,
    title: "javascript",
    icon: <SiJavascript />,
    colorItem: "yellow-400",
    bg: "neutral-50",
    pitch: "L'interactivité de votre site.",
    text: (
      <>
        {" "}
        Le JavaScript est un langage de programmation qui permet de rendre les
        pages web interactives. Il permet de créer des effets visuels, des
        animations, des jeux, des applications web, etc. C'est lui qui va rendre
        votre site dynamique et réactif. C'est le peintre de votre site.
      </>
    ),
  },
  {
    id: 16,
    title: "react",
    icon: <SiReact />,
    colorItem: "blue-500",
    bg: "neutral-50",
    pitch: "La bibliothèque JavaScript pour créer des interfaces utilisateur.",
    text: (
      <>
        {" "}
        React est une bibliothèque JavaScript qui permet de créer des interfaces
        utilisateur interactives et dynamiques. Elle est utilisée pour
        construire des applications web modernes, des sites web, des
        applications mobiles, des jeux, etc. Elle permet de créer des composants
        réutilisables et de les assembler pour former des interfaces complexes.
        C'est un outil très puissant qui permet de créer des interfaces
        utilisateur de haute qualité. C'est une magnifique boite de Lego !
      </>
    ),
  },
  {
    id: 17,
    title: "nextjs",
    icon: <SiNextdotjs />,
    colorItem: "gray-500",
    bg: "neutral-50",
    pitch: "Le framework React pour les applications web.",
    text: (
      <>
        {" "}
        Next.js est un framework React qui permet de créer des applications web
        modernes et performantes. Il offre de nombreuses fonctionnalités
        avancées, comme le rendu côté serveur, le routage dynamique, la
        génération de pages statiques, etc. Cela permet d'optimiser les
        performances de votre site et d'améliorer l'expérience utilisateur.
        C'est un outil très complet qui permet de créer des applications web de
        haute qualité. C'est la boite de Lego avec éclairage et mécanismes
        intégrés !
      </>
    ),
  },
  {
    id: 20,
    title: "php",
    icon: <SiPhp />,
    colorItem: "indigo-500",
    bg: "neutral-50",
    pitch: "Le langage de programmation côté serveur.",
    text: (
      <>
        {" "}
        PHP est un langage de programmation côté serveur qui est utilisé pour
        créer des sites web dynamiques. Il permet de générer du contenu, de se
        connecter à des bases de données, de gérer des sessions, des cookies,
        etc. C'est un langage très populaire qui est utilisé par de nombreux
        sites web. C'est l'architecte de votre site.
      </>
    ),
  },
  {
    id: 22,
    title: "mvc",
    icon: <LuNetwork />,
    colorItem: "green-500",
    bg: "neutral-50",
    pitch: "L'architecture de votre site coté serveur.",
    text: (
      <>
        {" "}
        Le modèle-vue-contrôleur (MVC) est un modèle d'architecture logicielle
        qui sépare les données, la présentation et la logique de contrôle d'une
        application. Cela permet de rendre l'application plus modulaire, plus
        flexible et plus facile à maintenir. C'est un modèle très populaire qui
        est utilisé par de nombreux frameworks web. C'est le dispatcheur de
        votre site.
      </>
    ),
  },
  {
    id: 30,
    title: "prisma",
    icon: <SiPrisma />,
    colorItem: "purple-500",
    bg: "neutral-50",
    pitch: "L'ORM pour Node.js et TypeScript.",
    text: (
      <>
        {" "}
        Prisma est un ORM (Object-Relational Mapping) qui permet de simplifier
        l'accès aux bases de données dans les applications React et Next. Il
        offre une API intuitive et puissante pour interagir avec les bases de
        données, ce qui permet de gagner du temps et de réduire les erreurs.
        C'est un outil très complet qui permet de gérer les données de votre
        application de manière efficace. C'est le magasinier de votre site.
      </>
    ),
  },
  {
    id: 50,
    title: "Les autres outils",
    icon: <VscTools />,
    colorItem: "neural-800",
    bg: "neutral-50",
    pitch:
      "Les outils pour un site complet sont infinis, en voici quelques uns.",
    text: (
      <>
        <b>Supabase, MongoDB et Firebase</b> pour des bases de données.
        <br />
        <b>Zustand</b> pour la gestion de l'état global d'un projet React/Next.
        <br />
        <b>React Query</b> pour la gestion des données dans React.
        <br />
        <b>Gsap et framer motion</b> pour des animations plus poussées.
        <br />
        <b>NextAuth</b> pour l'authentification dans Next.
        <br />
      </>
    ),
  },
];
