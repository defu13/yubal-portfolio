"use client";
import { LoadingProvider } from "@/src/context/LoadingContext";
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function MainComponent({ children }) {
    return (
        <LoadingProvider>
            <Loader>
                <Header />
                <main className="pb-32 border-b-[2px] border-neutral-800">{children}</main>
                <Footer />
            </Loader>
        </LoadingProvider>
    );
}

export default MainComponent;
