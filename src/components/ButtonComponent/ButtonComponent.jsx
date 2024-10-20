import React from "react";
import styles from "./ButtonComponent.module.css";
import Magnetic from "../Magnetic/Magnetic";
import Link from "next/link";

function ButtonComponent({
    href,
    children,
    linkClassName,
    buttonClassName,
    padding = "py-3 px-4",
    rounded = "rounded-3xl",
}) {
    return (
        <Magnetic>
            <Link href={href} className={`flex ${linkClassName}`}>
                <div
                    className={`flex items-center justify-center text-glow ${rounded} ${padding} ${buttonClassName} ${styles.moreProjectsButton}`}
                >
                    {children}
                </div>
            </Link>
        </Magnetic>
    );
}

export default ButtonComponent;
