import React from "react";
import styles from "./Globe.module.css";

function Globe() {
    return (
        <div className="flex justify-center items-center relative rounded-full w-[48px] h-[48px] pointer-events-none">
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
