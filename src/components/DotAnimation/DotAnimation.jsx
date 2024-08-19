import React from "react";
import { motion } from "framer-motion";

// Configuración de la animación para los puntos suspensivos
const dotVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

const DotAnimation = () => {
    return (
        <motion.span
            initial="hidden"
            animate="visible"
            transition={{
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                duration: 2,
            }}
            className="dots"
        >
            {[...Array(3)].map((_, index) => (
                <motion.span
                    key={index}
                    variants={dotVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 0.5,
                        delay: index * 0.4,
                        repeat: Infinity,
                        repeatType: "reverse", // Añadido para que el punto desaparezca después de aparecer
                        repeatDelay: 1,
                    }}
                >
                    .
                </motion.span>
            ))}
        </motion.span>
    );
};

export default DotAnimation;
