import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./ui/shared/header/header";
import { FavouritesProvider } from "@/lib/contexts/favourites-context";
import Footer from "./ui/shared/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ODDPODS",
  description: "Podcast search - find podcasts from SR Humor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FavouritesProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </FavouritesProvider>
  );
}
