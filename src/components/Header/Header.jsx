"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import Magnetic from "../Magnetic/Magnetic";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/data";

export default function Header() {
    const pathname = usePathname();

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const backdropGradient = {
        backdropFilter: "blur(15px)",
        maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
    };

    const backdropNoGradient = {
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #f2f2f21a"
    };

    return (
        <header
            className={`justify-center sm:justify-between ${styles.header}`}
        >
            {/* <div
                className="h-full w-full absolute top-0 left-0 z-[-1]"
                style={backdropNoGradient}
            ></div> */}
            <div className="h-[150px] w-full absolute top-0 left-0 z-[-1]"
            style={{backgroundImage: "linear-gradient(#00000080, #0000)"}}></div>
            <Magnetic>
                <Link href="/" className="hidden sm:block">
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
                            className={`text-slate-50 jetbrainsmono-regular whitespace-nowrap ${
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
