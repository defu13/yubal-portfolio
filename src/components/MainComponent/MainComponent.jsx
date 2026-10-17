"use client";
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ThemeProvider } from "@/src/context/ThemeContext";

function MainComponent({ children }) {
    return (
            <ThemeProvider>
                <Loader>
                    <Header />
                    <main className="pb-32 border-b-2 dark:border-neutral-800 border-neutral-500">
                        {children}
                    </main>
                    <Footer />
                </Loader>
            </ThemeProvider>
    );
}

export default MainComponent;
