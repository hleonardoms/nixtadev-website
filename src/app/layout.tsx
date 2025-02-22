import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "nixtadev",
  description: "Creando soluciones que nos definan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`antialiased`}>
        <NavBar />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
