export type Props = { params: { slug: string } };
export type NavlinksType = { id: number; href: string; label: string };
export type SocialLinksType = {
  id: number;
  icon: JSX.Element;
  label: string;
  href: string;
  toolTipText?: string;
};
