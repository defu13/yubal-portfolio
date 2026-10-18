"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    MdBrightnessHigh,
    MdDarkMode,
    MdDevices,
    MdKeyboardArrowDown,
} from "react-icons/md";
import { useTheme } from "@/src/context/ThemeContext";
import { useIsMobile } from "@/src/hooks/useIsMobile";

const THEMES = [
    { id: "dark", icon: <MdDarkMode />, label: "Oscuro" },
    { id: "light", icon: <MdBrightnessHigh />, label: "Claro" },
    { id: "system", icon: <MdDevices />, label: "Sistema" },
];

const dropDownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -5 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 400, mass: 0.3, damping: 9 },
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        y: -5,
        transition: { duration: 0.1, ease: "easeInOut" },
    },
};

function ChangeThemeComponent({ size = 1 }) {
    const { theme: resolvedTheme, preference, setTheme } = useTheme();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [hoveredTheme, setHoveredTheme] = useState(null);
    const isMobile = useIsMobile();
    const dropdownRef = useRef(null);

    // Cerrar el dropdown al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleThemeChange = (themeId) => {
        setTheme(themeId);
        setIsDropdownOpen(false);
    };

    const activeIcon =
        preference === "system"
            ? resolvedTheme === "dark"
                ? <MdDarkMode />
                : <MdBrightnessHigh />
            : THEMES.find((t) => t.id === preference)?.icon;

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                className="text-xs sm:text-sm flex justify-center items-center py-[5px] sm:py-[6px] px-[6px] rounded-lg pointer-events-auto cursor-pointer shine-hover text-neutral-100 custom-button"
                // style={{ fontSize: `${isMobile ? 22 : 14 * size}px` }}
                onClick={() => setIsDropdownOpen((open) => !open)}
            >
                {activeIcon}
                <motion.div
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.7, bounce: 0.5, type: "spring" }}
                >
                    <MdKeyboardArrowDown />
                </motion.div>
            </button>

            <AnimatePresence>
                {isDropdownOpen && (
                    <motion.div
                        className="flex flex-col absolute mt-2 rounded-xl z-10 overflow-hidden box-shadow"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropDownVariants}
                    >
                        {THEMES.map((theme, index) => (
                            <motion.button
                                key={theme.id}
                                className={`p-1.5 pointer-events-auto custom-button text-glow cursor-pointer flex items-center gap-2 ${
                                    index === 0 ? "rounded-t-xl" : ""
                                } ${index === THEMES.length - 1 ? "rounded-b-xl" : ""}`}
                                style={
                                    index !== THEMES.length - 1
                                        ? { borderBottom: "0" }
                                        : {}
                                }
                                onClick={() => handleThemeChange(theme.id)}
                                onMouseEnter={() => setHoveredTheme(theme.id)}
                                onMouseLeave={() => setHoveredTheme(null)}
                            >
                                <span
                                    className="flex gap-1.5 items-center justify-center text-neutral-100"
                                    style={{ fontSize: `${18 * size}px` }}
                                >
                                    <motion.div
                                        animate={
                                            hoveredTheme === theme.id
                                                ? { rotate: [0, -10, 10, 0] }
                                                : { rotate: 0 }
                                        }
                                        transition={{ duration: 0.3 }}
                                    >
                                        {theme.icon}
                                    </motion.div>
                                    <span style={{ fontSize: `${14 * size}px` }}>
                                        {theme.label}
                                    </span>
                                </span>
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default ChangeThemeComponent;