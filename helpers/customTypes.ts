export type Props = { params: { slug: string } };
export type NavlinksType = { id: number; href: string; label: string };
export type SocialLinksType = {
  id: number;
  icon: JSX.Element;
  label: string;
  href: string;
  toolTipText?: string;
};
export type SkillsListType = {
  id: number;
  icon: JSX.Element;
  label: string;
  text: string;
  
};
export type PortfolioType = {
  id:number;
  title: string;
  imageDestop: string;
  imageMobile: string;
  description: string;
  link: string;
  githubFront: string;
  githubBack: string;
  technos: { id: number; icon: JSX.Element; label: string }[];
  more: JSX.Element;
  
}

export type ToolsType = {
  id: number;
  title : string;
  icon: JSX.Element;
  colorItem: string;
  bg: string;
  pitch: string;
  text: JSX.Element;
};