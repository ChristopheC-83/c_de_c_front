import type { Metadata } from "next";
import "@/app/style/global.css";
import "@/app/style/style.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "CdeC | Accueil",
  description:
    "Code avec moi pour mettre en pratique ton apprentissage des outils du développement web. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="w-full min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
