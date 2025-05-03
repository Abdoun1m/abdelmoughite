"use client";

import { Header } from "@/components/Layouts";
import { useLenis } from "@/hooks/Lenis";
import "@/styles/globals.css";

export default function RootLayout({ children }) {
  useLenis();

  return (
    <html lang="en">
      <head>
        <title>
          Abdelmoughite Naoumi • Cybersecurity & Cloud computing Engineer
        </title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
