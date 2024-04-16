import { SkillsListType } from "@/helpers/customTypes";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";


export const skillsList: SkillsListType[] = [
  {
    id: 1,
    icon: <FaReact/>,
    label: "React / NextJS",
    text: "Pour des sites évolutifs, modulables et réactifs. Next apporte en plus une optimisation de votre classement dans les moteurs de recherche.",
  },
  {
    id: 2,
    icon: <SiTailwindcss/>,
    label: "TailwindCSS",
    text: "Avec ses nombreux outils associés, permet de créer des interfaces modernes et personnalisées.",
  },
  {
    id: 3,
    icon: <FaPhp/>,
    label: "PHP",
    text: "Vieux, certes, mais toujours d'actualité pour des sites dynamiques et sécurisés. PHP permet une administration complète des données de votre site.",
  },
];
 