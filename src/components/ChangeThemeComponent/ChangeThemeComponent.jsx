import React, { use, useEffect, useRef, useState } from "react";
import { delay, motion } from "framer-motion";
import {
    MdBrightnessHigh,
    MdDarkMode,
    MdDevices,
    MdKeyboardArrowDown,
} from "react-icons/md";
import { AnimatePresence } from "framer-motion";
import { useTheme } from "@/src/context/ThemeContext";

function ChangeThemeComponent({ size = 1 }) {
    const {setTheme} = useTheme(); // Importa el contexto del tema
    const [activeTheme, setActiveTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            return savedTheme;
        } else {
            // localStorage.setItem("theme", "system"); // Establece el tema por defecto en "sistema"
            // const prefersDarkScheme = window.matchMedia(
            //     "(prefers-color-scheme: dark)"
            // ).matches;
            // return prefersDarkScheme ? "system" : "dark";
            localStorage.setItem("theme", "dark"); // Establece el tema por defecto en "oscuro"
            return "dark";
        }
    });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const themes = [
        { id: "dark", icon: <MdDarkMode />, label: "Oscuro" },
        { id: "light", icon: <MdBrightnessHigh />, label: "Claro" },
        { id: "system", icon: <MdDevices />, label: "Sistema" },
    ];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleThemeChange = (themeId) => {
        setActiveTheme(themeId);
        localStorage.setItem("theme", themeId); // Guarda el tema en el localStorage
        const theme =
        themeId === "system"
            ? window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light"
            : themeId;
        setTheme(theme); // Actualiza el contexto del tema
        setIsDropdownOpen(false);
    };

    const activeThemeIcon =
        activeTheme === "system" ? (
            window.matchMedia("(prefers-color-scheme: dark)").matches ? (
                <MdDarkMode /> // Icono del tema oscuro si el sistema está en modo oscuro
            ) : (
                <MdBrightnessHigh />
            ) // Icono del tema claro si el sistema está en modo claro
        ) : (
            themes.find((theme) => theme.id === activeTheme)?.icon
        );

    const dropDownVariants = {
        hidden: {
            opacity: 0,
            scale: 0.95,
            y: -5,
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
            y: -5,
            transition: {
                duration: 0.1,
                ease: "easeInOut",
            },
        },
    };

    const dropdownRef = useRef(null);

    useEffect(() => {
        setTheme(activeTheme);

        // Cierra el dropdown al hacer clic fuera
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const [isHoveringThemeButton, setIsHoveringThemeButton] = useState(false);

    useEffect(() => {
        if (activeTheme === "dark") {
            document.querySelector("html").classList.add("dark");
        } else if (activeTheme === "light") {
            document.querySelector("html").classList.remove("dark");
        } else if (activeTheme === "system") {
            const prefersDarkScheme = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            if (prefersDarkScheme) {
                document.querySelector("html").classList.add("dark");
            } else {
                document.querySelector("html").classList.remove("dark");
            }
        }
    }, [activeTheme]);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                className="flex justify-center items-center p-1.5 rounded-xl pointer-events-auto cursor-pointer shine-hover text-neutral-100 custom-button"
                style={{ fontSize: `${18 * size}px` }}
                onClick={toggleDropdown}
            >
                {activeThemeIcon}
                <motion.div
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{
                        duration: 0.7,
                        bounce: 0.5,
                        type: "spring",
                        ease: "easeInOut",
                    }}
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
                        {themes.map((theme, index) => (
                            <motion.button
                                key={theme.id}
                                className={`p-1.5 pointer-events-auto custom-button text-glow cursor-pointer flex items-center gap-2 ${
                                    index === 0 ? "rounded-t-xl" : ""
                                } ${
                                    index === themes.length - 1
                                        ? "rounded-b-xl"
                                        : ""
                                }`}
                                style={
                                    index === 0 || index === 1
                                        ? { borderBottom: "0" }
                                        : {}
                                }
                                onClick={() => handleThemeChange(theme.id)}
                                onMouseEnter={() =>
                                    setIsHoveringThemeButton(theme.id)
                                }
                                onMouseLeave={() =>
                                    setIsHoveringThemeButton(null)
                                }
                            >
                                <span
                                    className="flex gap-1.5 items-center justify-center text-neutral-100"
                                    style={{ fontSize: `${18 * size}px` }}
                                >
                                    <motion.div
                                        animate={
                                            isHoveringThemeButton === theme.id
                                                ? {
                                                      rotate: [0, -10, 10, 0],
                                                  }
                                                : { rotate: 0 }
                                        }
                                        transition={{ duration: 0.3 }}
                                    >
                                        {theme.icon}
                                    </motion.div>
                                    <span
                                        style={{ fontSize: `${14 * size}px` }}
                                    >
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
