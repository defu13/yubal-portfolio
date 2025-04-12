// import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/Fonts.css";
import MainComponent from "@/src/components/MainComponent/MainComponent";
import { Analytics } from "@vercel/analytics/react";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: {
        default: "Yubal De Fuente - Portfolio",
        template: "%s | Yubal De Fuente - Portfolio",
    },
    description:
        "Portfolio personal de Yubal De Fuente, desarrollador front-end y diseñador gráfico. Aquí podrás encontrar informacion sobre mí, mis experiencias y mis habilidades.",
    keywords: [
        "Yubal De Fuente",
        "Yubal",
        "portfolio",
        "desarrollador",
        "diseñador",
        "frontend",
        "diseño web",
        "desarrollo web",
        "diseño gráfico",
        "React",
        "Next.js",
        "proyectos",
    ],
    author: "Yubal De Fuente",
    openGraph: {
        siteName: "Yubal De Fuente",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/author.jpg`,
                width: 1200,
                height: 1200,
                alt: "Yubal De Fuente - Portfolio",
            },
        ],
    },
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
                <meta
                    name="google-site-verification"
                    content="2OdRUjKrJdbqd57HKMBZiXvXk1lV1TtFIZQCz64Wd5w"
                />
            </head>
            <body
                className={`dark:text-neutral-100 dark:bg-[#101010] bg-[#dddddd] text-[#232323]`}
            >
                <MainComponent>{children}</MainComponent>
                <Analytics />
            </body>
        </html>
    );
}
