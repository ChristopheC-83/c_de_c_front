/* eslint-disable react/no-unescaped-entities */
import { StepsListType } from "@/helpers/customTypes";

import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";


export const langagesList: StepsListType[] = [
  {
    id: 1,
    icon: <FaHtml5/>,
    label: "HTML",
    text: (
      <>Structurer nos sites Web avec des balises spécifiques.
      </>
    ),
  },
  {
    id: 2,
    icon: <FaCss3Alt/>,
    label: "CSS",
    text: (
      <>Styliser la présentation et la mise en page de nos projets.
      </>
    ),
  },
  {
    id: 3,
    icon: <TbBrandJavascript/>,
    label: "Javascript",
    text: (
      <>Créer de l'interactivité et dynamiser l'expérience utilisateur.
      </>
    ),
  },
  {
    id: 4,
    icon: <FaPhp/>,
    label: "PHP",
    text: (
      <>Manipuler nos données (CRUD) et organiser le code.
      </>
    ),
  },
  {
    id: 5,
    icon: <FaReact/>,
    label: "React",
    text: (
      <>Rendre nos sites rapides, réactifs et notre code modulable.
      </>
    ),
  },
  {
    id: 6,
    icon: <SiNextdotjs/>,
    label: "Nextjs",
    text: (
      <>Le framework Fullstack de Vercel basé sur React.
      </>
    ),
  },
];