import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "nixtadev_",
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
