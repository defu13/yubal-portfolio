"use client";
import { LoadingProvider } from "@/src/context/LoadingContext";
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";

function Main({ children }) {
    return (
        <LoadingProvider>
            <Loader>
                <main>{children}</main>
                <Footer />
            </Loader>
        </LoadingProvider>
    );
}

export default Main;
