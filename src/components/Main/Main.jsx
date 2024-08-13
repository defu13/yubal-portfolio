"use client";
import { LoadingProvider } from "@/src/context/LoadingContext";
import Loader from "../Loader/Loader";

function Main({ children }) {
    return (
        <LoadingProvider>
            <Loader>
                <main>{children}</main>
            </Loader>
        </LoadingProvider>
    );
}

export default Main;
