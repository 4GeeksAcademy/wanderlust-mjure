import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Wanderlust",
  description: "Explorador de experiencias de viaje",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className="app-shell">
          <header className="topbar">
            <nav className="nav">
              <Link href="/" className="brand">
                <span className="brand__mark">◉</span>
                <span>Wanderlust</span>
              </Link>
              <div className="nav__links">
                <Link href="/">Inicio</Link>
                <Link href="/experiences">Experiencias</Link>
                <Link href="/favorites">Favoritos</Link>
                <Link href="/profile">Perfil</Link>
              </div>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
