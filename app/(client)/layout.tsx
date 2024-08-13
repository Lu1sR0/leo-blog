import type { Metadata } from "next";
import { Inter, Fira_Code ,Arvo } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";
import { Provider } from "../utils/Provider";

//const inter = Inter({ subsets: ["latin"] });
const Arvore = Arvo({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  keywords: ["Blog", "Jogos", "Filmes", "Recomendações","Reviews","Opinião","Geek","Nerd","Anime","Cinema","Artigos"],
  openGraph: {
    images: '/film-projector-svgrepo-com.svg',
  },
  icons: {
    icon: '/film-projector-svgrepo-com.svg', // /public path
  },
  title: "Diário Cinéfilo",
  description:
    "o diário cinéfilo é um site onde você pode encontrar reviews de filmes,séries e jogos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
      </head>
      <body
        className={`${Arvore.className} h-full bg-amber-50 text-indigo-950 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-purple-500`}
      >
        <Provider>
          <Navbar />
          <main className="mx-auto max-w-5xl px-6">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
