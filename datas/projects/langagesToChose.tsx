import { LangageToChooseType } from "@/helpers/customTypesProjects";
import html_css from "@/public/images/projects/logos/html_css.png";
import javascript from "@/public/images/projects/logos/javascript.png";
import php from "@/public/images/projects/logos/php.png";
import react from "@/public/images/projects/logos/react.png";
import next from "@/public/images/projects/logos/next.png";
import all from "@/public/images/projects/logos/all.png";

export const langagesToChoose:LangageToChooseType[]= [
  {
    id: 0,
    name: "all",
    logo: all,
    pitch: "Tous les projets à portée de mains !.",
  },
  {
    id: 1,
    name: "html_css",
    logo: html_css,
    pitch: "Les langages de base du web. Du contenu et de la mise en forme.",
  },
  {
    id: 2,
    name: "javascript",
    logo: javascript,
    pitch: "Dynamisons nos pages ! Les interactions avec l'utilisateur.",
  },
  {
    id: 3,
    name: "php",
    logo: php,
    pitch: "Organisons notre code et gérons nos données.",
  },
  {
    id: 4,
    name: "react",
    logo: react,
    pitch: "Modernisons nos applications. Action / réaction !",
  },
  {
    id: 5,
    name: "nextjs",
    logo: next,
    pitch: "Un framework pour les gouverner tous !",
  },
];
