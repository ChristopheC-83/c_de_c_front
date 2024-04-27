/* eslint-disable react/no-unescaped-entities */

import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import { SkillsListType } from "@/helpers/customTypes";


export const usedTechnosList: SkillsListType[] = [
  {
    id: 1,
    icon: <SiNextdotjs/>,
    label: " NextJS",
    text: (
      <>Pour un site rapide, agréable pour vos visiteurs !<br/> Cet outil, dérivé de la technologie de Facebook, n'en est pas à sa première version et est très performant.<br/> Sa modularité en fait un outil de choix pour qui pense à l'évolution de son image digitale. <br/><br/><b>C'est fluide, c'est beau, c'est NextJS !</b> 
      </>
    ),
  },
  {
    id: 3,
    icon: <FaPhp/>,
    label: "PHP / MVC",
    text: (
      <>Parce que la majorité des sites internet sont basés dessus, on dira qu'on peut lui faire confiance ! <br/>Au niveau de la sécurité de vos données ou des possibilités d'administration qu'il offre, PHP est un incontournable. <br/><br/><b>L'architecture MVC permettra un maintien, une évolution</b> et une maintenance plus aisée de votre site.
      </>
    ),
  },
];