import type { Metadata } from "next";
import "@/app/style/global.css"
import "@/app/style/style.css";


export const metadata: Metadata = {
  title: "CdeC | Accueil",
  description: "Code avec moi pour mettre en pratique ton apprentissage des outils du développement web. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="">{children}</body>
    </html>
  );
}
