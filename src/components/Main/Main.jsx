"use client";
import { LoadingProvider } from "@/src/context/LoadingContext";
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Main({ children }) {
    return (
        <LoadingProvider>
            <Loader>
                <Header />
                <main>{children}</main>
                <Footer />
            </Loader>
        </LoadingProvider>
    );
}

export default Main;
