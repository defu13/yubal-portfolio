// import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/Fonts.css";
import MainComponent from "@/src/components/MainComponent/MainComponent";
import { Analytics } from "@vercel/analytics/react";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Yubal De Fuente",
    description:
        "Este es mi portfolio personal donde se puede encontrar informacion sobre mí, mis proyectos y mis habilidades.",
};

export default function RootLayout({ children }) {
    const setInitialTheme = `
        (function() {
            const savedTheme = localStorage.getItem("theme");
            const html = document.documentElement;
            if (savedTheme === "dark") {
                html.classList.add("dark");
            } else if (savedTheme === "light") {
                html.classList.remove("dark");
            } else {
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                if (prefersDark) {
                    html.classList.add("dark");
                } else {
                    html.classList.remove("dark");
                }
            }
        })();
    `;

    return (
        <html lang="es" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
                <meta name="google-site-verification" content="2OdRUjKrJdbqd57HKMBZiXvXk1lV1TtFIZQCz64Wd5w" />
            </head>
            <body className={`dark:text-neutral-100 dark:bg-[#101010] bg-[#dddddd] text-[#232323]`}>
                <MainComponent>{children}</MainComponent>
                <Analytics />
            </body>
        </html>
    );
}
