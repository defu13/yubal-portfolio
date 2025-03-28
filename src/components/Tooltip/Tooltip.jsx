"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Tooltip({
    children,
    content,
    placement = "top",
    showArrow = true,
    className = "",
}) {
    const [showTooltip, setShowTooltip] = useState(false);

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
                        className={`-translate-x-1/2 absolute z-10 whitespace-nowrap items-center pointer-events-none ${className}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 0.1 } }}
                        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.14 } }}
                        transition={{ type: "spring" }}
                        style={{
                            top: placement === "top" ? "-40px" : "auto",
                            bottom: placement === "bottom" ? "-40px" : "auto",
                            left: "50%",
                        }}
                    >
                        {showArrow && (
                            <div
                                className="absolute w-2 h-2 bg-neutral-900 border-b border-r border-neutral-600 z-20"
                                style={{
                                    top: placement === "top" ? "86%" : "auto",
                                    bottom:
                                        placement === "bottom"
                                            ? "86%"
                                            : "auto",
                                    left: "50%",
                                    transform: "translateX(-50%) rotate(45deg)",
                                }}
                            ></div>
                        )}
                        <div className="p-1.5 rounded-xl bg-neutral-900 border border-neutral-600">
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
