import type { Metadata } from "next";
import "@/app/style/global.css";
import "@/app/style/style.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Toaster } from "sonner";
import ThemeProvider from "@/providers/theme-provider";

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
      <body className="w-full min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <Toaster position="top-center" richColors expand={true} />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
