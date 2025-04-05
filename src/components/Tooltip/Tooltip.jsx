"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Tooltip({
    children,
    content,
    placement = "top",
    showArrow = true,
    className = "",
}) {
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipStyles, setTooltipStyles] = useState({});
    const [isCentered, setIsCentered] = useState(true);
    const tooltipRef = useRef(null);

    const calculatePosition = () => {
        if (tooltipRef.current) {
            const tooltipRect = tooltipRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            const newStyles = {};
            let centered = true;

            // Ajustar horizontalmente si el tooltip se sale por la izquierda o derecha
            if (tooltipRect.left < 0) {
                newStyles.left = "0"; // Alinear al borde izquierdo
                newStyles.transform = "translateX(0)"; // Eliminar el desplazamiento hacia la izquierda
                centered = false; // No centrar
            } else if (tooltipRect.right > viewportWidth) {
                newStyles.left = "auto"; // Alinear al borde derecho
                newStyles.right = "0";
                newStyles.transform = "translateX(0)"; // Eliminar el desplazamiento hacia la derecha
                centered = false; // No centrar
            }

            // Ajustar verticalmente si el tooltip se sale por arriba o abajo
            if (tooltipRect.top < 0) {
                newStyles.top = "100%"; // Mover hacia abajo
                newStyles.bottom = "auto";
            } else if (tooltipRect.bottom > viewportHeight) {
                newStyles.top = "auto";
                newStyles.bottom = "100%"; // Mover hacia arriba
            }

            setTooltipStyles(newStyles);
            setIsCentered(centered);
        }
    };

    useEffect(() => {
        calculatePosition();
    }, [showTooltip]);

    useEffect(() => {
        const handleResize = () => {
            calculatePosition();
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const tooltipVariants = {
        hidden: {
            opacity: 0,
            scale: 0.95,
            y: 5,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                mass: 0.3,
                damping: 9,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            y: 5,
            transition: {
                duration: 0.1,
                ease: "easeInOut",
            },
        },
    };

    const tooltipColors = "dark:text-neutral-100 dark:bg-neutral-900 dark:border-neutral-600 text-[#101010] bg-neutral-200 border-neutral-400";

    return (
        <div
            className="relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            {children}

            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        ref={tooltipRef}
                        className={`${
                            isCentered ? "-translate-x-1/2" : ""
                        } absolute z-10 whitespace-nowrap items-center pointer-events-none ${className}`}
                        variants={tooltipVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        style={{
                            top: placement === "top" ? "-40px" : "auto",
                            bottom: placement === "bottom" ? "-40px" : "auto",
                            left: "50%",
                            ...tooltipStyles,
                        }}
                    >
                        {showArrow && (
                            <div
                                className={`absolute w-2 h-2 border-b border-r z-20 ${tooltipColors}`}
                                style={{
                                    top: placement === "top" ? "86%" : "auto",
                                    bottom:
                                        placement === "bottom" ? "86%" : "auto",
                                    left: isCentered ? "50%" : "20px",
                                    transform: "translateX(-50%) rotate(45deg)",
                                }}
                            ></div>
                        )}
                        <div className={`p-1.5 rounded-xl border ${tooltipColors}`}>
                            <div className="text-xs neuemontreal-medium">
                                {content}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Tooltip;
