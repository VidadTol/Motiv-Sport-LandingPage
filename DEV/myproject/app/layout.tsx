import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Motiv Sport - Connectez-vous avec des passionnés de sport",
  description: "Découvrez Motiv Sport, l'application qui connecte les passionnés de sport. Trouvez des partenaires, rejoignez des groupes et participez à des événements sportifs près de chez vous.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col font-sans`}>
        <main className="flex-1 flex flex-col">{children}</main>
         <footer className="w-full bg-white/40 backdrop-blur-md text-green-500 p-4 text-center">
          <p>All right reserved - Motiv Sport © 2025</p>
        </footer>
      </body>
    </html>
  );
}
