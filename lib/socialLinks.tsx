import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoCodepen } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";

import { SocialLinksType } from "@/helpers/customTypes";
import { FaCodepen } from "react-icons/fa6";

export const socialLinks: SocialLinksType[] = [
  {
    id: 1,
    label: "Github",
    href: "https://github.com/ChristopheC-83",
    icon: <FaGithub />,
    toolTipText: "Voir mes projets sur Github.",
  },
  {
    id: 2,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/christophe-chiappetta-b3623b262/",
    icon: <SiLinkedin />,
    toolTipText: "Me rencontrer sur LinkedIn.",
  },
  // {
  //   id: 3,
  //   label: "Twitter",
  //   href: "https://twitter.com/83ChristopheC",
  //   icon: <RiTwitterXLine />,
  //  toolTipText:"Mon compte Twitter",
  // },
  {
    id: 4,
    label: "CodePen",
    href: "https://codepen.io/ChristopheC-83",
    icon: <IoLogoCodepen />,
    toolTipText: "Mes expériences sur CodePen.",
  },
  // {
  //   id: 5,
  //   label: "YouTube",
  //   href: "https://www.youtube.com/channel/UC4UbjJ99yO0SyDg4n-uWr1A",
  //   icon: <FaYoutube />,
  //   toolTipText: "Mes vidéos explicatives d'accompagnement.",
  // },
];
