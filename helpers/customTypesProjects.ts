import { StaticImageData } from "next/image";

export type LangageToChooseType = {
  id: number;
  name: string;
  logo: string | StaticImageData;
  pitch: string;
};
export type selectedProjectsType = {
  id: number;
  visible: number;
  title: string;
  position : number;
  type : "all" | "html_css" | "javascript" | "php" | "react" | "nextjs";
  // icon : string | StaticImageData;
  // logo?: string | StaticImageData;
  pitch?:string
  text?: JSX.Element;
};
