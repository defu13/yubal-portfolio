"use client";
import { AnimatePresence, motion } from "framer-motion";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useEffect } from "react";
import { useLoading } from "@/src/context/LoadingContext";

function Loader({ children }) {
    const { loading, setLoading } = useLoading();
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            <AnimatePresence>
                {loading && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <LoadingSpinner />
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {!loading && (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="hero-fade"></div>
            <div className="hero-noise"></div>
        </>
    );
}

export default Loader;
