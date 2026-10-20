import React from "react";
import styles from "./Globe.module.css";

function Globe({ width = 48, height = 48, className = "" }) {
    return (
        <div
            className={`${styles.root} flex justify-center items-center relative rounded-full pointer-events-none ${className}`}
            style={{ width, height }}
        >
            <div className={styles.globe}>
                <div className={styles.globe_wrap}>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                    <div className={styles.circle_hor}></div>
                    <div className={styles.circle_hor_middle}></div>
                </div>
            </div>
        </div>
    );
}

export default Globe;