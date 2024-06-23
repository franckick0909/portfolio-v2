import type { Metadata } from "next";
import "./globals.css";
import PageTransition from "./components/pageTransition";
import StairTransition from "./components/stairTransition";


export const metadata: Metadata = {
  title: "Franck Chapelon",
  description: "Franck Chapelon Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StairTransition />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <footer>FOOTER</footer>
      </body>
    </html>
  );
}
