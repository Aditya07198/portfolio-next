import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: `${site.name} | ${site.role}`,
  description: `${site.role} — ${site.tagline}`,
  keywords: ["Full-Stack", "Angular", "React", "Node.js", "Java", "Azure", "Portfolio"],
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description: `${site.role} — ${site.tagline}`
  },
  icons: {
    icon: {url: "/LOGO_ADITYA.png", sizes: "60x60"},       // normal tab icon
    shortcut: {url: "/LOGO_ADITYA.png", sizes: "60x60"}   // bookmark icon
  },
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
