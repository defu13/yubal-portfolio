"use client";

import { useEffect, useState } from "react";
import styles from "./AsciiFlash.module.css";

const FLASH_CHARACTERS = [
    ".",
    ":",
    "*",
    "+",
    "X",
    "*",
    "+",
    ":",
    ".",
    " ",
    " ",
    " ",
];

export default function AsciiFlash({
    color = "#917AFF",
    size = "1rem",
    delay = 0,
    top = "0%",
    left = "0%",
}) {
    const [charIndex, setCharIndex] = useState(-Math.floor(delay / 100));

    useEffect(() => {
        const interval = setInterval(() => {
            setCharIndex((prev) => (prev + 1) % FLASH_CHARACTERS.length);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <span
            className={styles.flash}
            style={{
                color,
                fontSize: size,
                animationDelay: `${delay}ms`,
                position: "absolute",
                top,
                left,
            }}
        >
            {FLASH_CHARACTERS[charIndex]}
        </span>
    );
}
