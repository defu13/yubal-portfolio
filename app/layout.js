import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/Fonts.css";
import Header from "@/src/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Yubal de Fuente",
    description:
        "Este es mi portfolio personal donde se puede encontrar informacion sobre mi, mis proyectos y mis habilidades.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
