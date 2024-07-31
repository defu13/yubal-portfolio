"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import Magnetic from "../Magnetic/Magnetic";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const pathname = usePathname();
    console.log(pathname);
    const navigation = [
        { name: "Home", href: "/" },
        { name: "Proyectos", href: "/proyectos" },
        { name: "Sobre mí", href: "/sobremi" },
        { name: "Contacto", href: "/contacto" },
    ];

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <header className={styles.header}>
            <Magnetic>
                <Link href="/">
                    <div className={styles.logo}>
                        <p className={styles.copyright}>©</p>
                        <div className={styles.name}>
                            <p className={styles.codeBy}>Code by</p>
                            <p className={styles.yubal}>Yubal</p>
                            <p className={styles.defuente}>De Fuente</p>
                        </div>
                    </div>
                </Link>
            </Magnetic>
            <div className="flex gap-10">
                {navigation.map((item, index) => (
                    <Magnetic key={index}>
                        <Link
                            href={item.href}
                            className={`text-slate-50 jetbrainsmono-regular ${
                                styles.menu_element
                            } ${
                                !isHovering && pathname === item.href
                                    ? styles.active
                                    : ""
                            }`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {item.name}
                            <div className={styles.dot}></div>
                        </Link>
                    </Magnetic>
                ))}
            </div>
        </header>
    );
}
