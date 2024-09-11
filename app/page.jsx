"use client";
import styles from "./Home.module.css";
import MainSection from "@/src/components/MainSection/MainSection";
import HomeSection from "@/src/components/HomeSection/HomeSection";

export default function Home() {
    return (
        <>
            <div
                className={`flex flex-col items-center justify-between sm:gap-0 gap-24 ${styles.main}`}
            >
                <MainSection />
                <HomeSection />
            </div>
        </>
    );
}
