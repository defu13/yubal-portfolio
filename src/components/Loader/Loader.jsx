"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function Loader({ children }) {
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowSpinner(false), 1250);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {children}
            <AnimatePresence>
                {showSpinner && (
                    <motion.div
                        key="loader"
                        className="fixed inset-0 z-100 flex items-center justify-center dark:bg-[#101010] bg-[#dddddd]"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <LoadingSpinner />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Loader;