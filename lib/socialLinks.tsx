import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";import { IoLogoCodepen } from "react-icons/io";

import { SocialLinksType } from "@/helpers/customTypes";
import { FaCodepen } from "react-icons/fa6";

export const socialLinks: SocialLinksType[] = [
  {
    id: 1,
    label: "Github",
    href: "https://github.com/ChristopheC-83",
    icon: <FaGithub />,
  },
  {
    id: 2,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/christophe-chiappetta-b3623b262/",
    icon: <SiLinkedin />,
  },
  // {
  //   id: 3,
  //   label: "Twitter",
  //   href: "https://twitter.com/83ChristopheC",
  //   icon: <RiTwitterXLine />,
  // },
  {
    id: 4,
    label: "CodePen",
    href: "https://codepen.io/ChristopheC-83",
    icon: <IoLogoCodepen />,
  },
];
