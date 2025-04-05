"use client";
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ThemeProvider } from "@/src/context/ThemeContext";
import { LoadingProvider } from "@/src/context/LoadingContext";

function MainComponent({ children }) {
    return (
        <LoadingProvider>
            <ThemeProvider>
                <Loader>
                    <Header />
                    <main className="pb-32 border-b-[1px] dark:border-neutral-800 border-neutral-500">
                        {children}
                    </main>
                    <Footer />
                </Loader>
            </ThemeProvider>
        </LoadingProvider>
    );
}

export default MainComponent;
