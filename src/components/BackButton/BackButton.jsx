"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdArrowBack } from "react-icons/md";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@/src/context/ThemeContext";

function BackButton() {
    const [isHovering, setIsHovering] = useState(false);
    const router = useRouter();
    const {theme} = useTheme();

    const handleBack = () => {
        router.back();
    };

    return (
        <motion.div
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
        >
            <motion.button
                className={`px-5 py-2 rounded-full gap-2 flex items-center text-lg cursor-pointer custom-button ${theme !== "dark" ? "custom-button-moredark" : ""}`}
                onClick={handleBack}
            >
                <motion.div
                    animate={{ x: isHovering ? -6 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    {/* <FontAwesomeIcon icon={faArrowLeft} /> */}
                    <MdArrowBack size="1.4rem" />
                </motion.div>
                <span>Atrás</span>
            </motion.button>
        </motion.div>
    );
}

export default BackButton;
