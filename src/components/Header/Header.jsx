"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, mobileNavigation } from "@/data/data";
import { AnimatePresence, motion } from "motion/react";
import { useIsMobile } from "@/src/hooks/useIsMobile";
import { Squash as Hamburger } from "hamburger-react";
import ChangeThemeComponent from "../ChangeThemeComponent/ChangeThemeComponent";
import { socialLinks } from "@/data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
    const pathname = usePathname();
    const [isHovering, setIsHovering] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useIsMobile();

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const sidebar = {
        open: {
            clipPath: `circle(${1000 * 2 + 200}px at 100% 0)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2,
            },
        },
        closed: {
            clipPath: "circle(0px at 100% 0)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                delay: 0.25,
            },
        },
    };

    const variants = {
        open: {
            transition: { staggerChildren: 0.08, delayChildren: 0.25 },
        },
        closed: {
            transition: { staggerChildren: 0.08, staggerDirection: -1 },
        },
    };

    const menuItemVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: {
                    stiffness: 250,
                    damping: 15,
                    type: "spring",
                },
            },
        },
        closed: {
            y: -50,
            opacity: 0,
            transition: {
                y: { stiffness: 250, damping: 15, type: "spring" },
                duration: 0.1,
            },
        },
    };

    return (
        <header
            className={`justify-between items-center pointer-events-none text-sm ${styles.header}`}
        >
            <div className={`${styles.header_background}`}></div>
            <div className="flex flex-row gap-4 items-center z-10">
                {!isMobile && <ChangeThemeComponent />}
                <Link href="/" className="hidden sm:block pointer-events-auto">
                    <div
                        className={`${styles.logo} justify-center items-center custom-button px-2 pt-[3px] pb-[3px] rounded-lg pointer-events-auto cursor-pointer shine-hover flex`}
                    >
                        <p className={`${styles.copyright}`}>©</p>
                        <div className={styles.name}>
                            <p className={styles.codeBy}>Code by</p>
                            <p className={styles.yubal}>Yubal</p>
                            <p className={styles.defuente}>De Fuente</p>
                        </div>
                    </div>
                </Link>
            </div>
            {isMobile ? (
                <>
                    <motion.nav
                        animate={isOpen ? "open" : "closed"}
                        initial={false}
                        transition={{ duration: 0.5 }}
                        className={`fixed inset-0 z-50 w-full ${
                            isOpen
                                ? "pointer-events-auto"
                                : "pointer-events-none"
                        }`}
                    >
                        <motion.div
                            className={`absolute inset-0 right-0 w-full ${styles.sidebar}`}
                            variants={sidebar}
                        />
                        <motion.ul
                            variants={variants}
                            className="absolute grid w-full px-6 py-28 max-h-screen overflow-y-auto bottom-0"
                        >
                            {mobileNavigation.map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={menuItemVariants}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={toggleOpen}
                                        className={`flex justify-between text-3xl py-6 ${
                                            styles.menu_element
                                        } ${
                                            !isHovering &&
                                            pathname === item.href
                                                ? styles.active
                                                : ""
                                        }`}
                                        style={{
                                            pointerEvents: isOpen
                                                ? "auto"
                                                : "none",
                                        }}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div className="text-neutral-100 jetbrainsmono-regular whitespace-nowrap text-3xl flex gap-6 items-center">
                                            <div
                                                className={styles.dot_mobile}
                                            ></div>
                                            {item.name}
                                        </div>
                                    </Link>
                                </motion.li>
                            ))}
                            <motion.li variants={menuItemVariants}>
                                <hr className="mt-8 shrink-0 border-none w-full bg-neutral-600 h-px" />
                            </motion.li>
                            <motion.li variants={menuItemVariants}>
                                <Link
                                    href={socialLinks[1].link}
                                    target="_blank"
                                    className="flex ml-9 jetbrainsmono-regular whitespace-nowrap shine-hover text-neutral-100 text-3xl py-6"
                                >
                                    {socialLinks[1].name}
                                </Link>
                            </motion.li>
                        </motion.ul>
                        <div className="flex justify-between items-center p-5">
                            <AnimatePresence>
                                <motion.div
                                    className="pointer-events-auto"
                                    variants={menuItemVariants}
                                >
                                    <ChangeThemeComponent size={1.35} />
                                </motion.div>
                            </AnimatePresence>
                            <div className="text-neutral-100 pointer-events-auto">
                                <Hamburger
                                    toggled={isOpen}
                                    toggle={toggleOpen}
                                    rounded
                                    label="Show menu"
                                />
                            </div>
                        </div>
                    </motion.nav>
                </>
            ) : (
                <nav className="flex pointer-events-auto gap-4">
                    <div className="flex">
                        {navigation.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={`jetbrainsmono-regular whitespace-nowrap custom-button px-3 py-[3px] shine-hover ${
                                    styles.menu_element
                                } ${
                                    !isHovering && pathname === item.href
                                        ? styles.active
                                        : ""
                                } ${index === 0 ? "rounded-l-lg" : ""} ${
                                    index === navigation.length - 1
                                        ? "rounded-r-lg"
                                        : ""
                                }`}
                                style={
                                    index !== navigation.length - 1
                                        ? { borderRight: "0" }
                                        : {}
                                }
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                {item.name}
                                <div className={styles.dot}></div>
                            </Link>
                        ))}
                    </div>
                    <div className="self-center">
                        <a
                            href={socialLinks[1].link}
                            target="_blank"
                            className="max-md:hidden text-neutral-100 p-1.5 shine-hover custom-button rounded-lg flex items-center justify-center"
                        >
                            {/* {socialLinks[1].name} */}
                            <FontAwesomeIcon
                                icon={faLinkedinIn}
                            />
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
}
