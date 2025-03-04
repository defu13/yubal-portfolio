import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/Fonts.css";
import MainComponent from "@/src/components/MainComponent/MainComponent";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Yubal de Fuente",
    description:
        "Este es mi portfolio personal donde se puede encontrar informacion sobre mí, mis proyectos y mis habilidades.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={inter.className}>
                <MainComponent>{children}</MainComponent>
                <Analytics />
            </body>
        </html>
    );
}
