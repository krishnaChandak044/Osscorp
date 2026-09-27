import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Osscorp | Onshore & Offshore Technical Services",
  description: "Over 30 years of experience in offshore services, security surveillance, solar power and renewable energy solutions. Discover the Osscorp standard.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
