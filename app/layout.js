import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Portfolio Yubal de Fuente",
    description:
        "Este es mi portfolio personal donde se puede encontrar informacion sobre mi, mis proyectos y mis habilidades.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
