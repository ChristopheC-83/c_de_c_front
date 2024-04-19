import { StaticImageData } from "next/image";

export type LangageToChooseType = {
  id: number;
  name: string;
  logo: string | StaticImageData;
  pitch: string;
};
