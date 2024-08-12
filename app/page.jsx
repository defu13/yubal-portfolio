"use client";
import styles from "./Home.module.css";
import MainSection from "@/src/components/MainSection/MainSection";
import HomeFirstSection from "@/src/components/HomeFirstSection/HomeFirstSection";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/src/components/LoadingSpinner/LoadingSpinner";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
    const [loading, setLoading] = useState(true);
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
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <main
                            className={`flex flex-col items-center justify-between ${styles.main}`}
                        >
                            <MainSection />
                            <HomeFirstSection />
                        </main>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="hero-fade"></div>
            <div className="hero-noise"></div>
        </>
    );
}
