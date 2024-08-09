"use client";
import styles from "./Home.module.css";
import MainSection from "@/src/components/MainSection/MainSection";
import HomeFirstSection from "@/src/components/HomeFirstSection/HomeFirstSection";

export default function Home() {
    

    return (
        <>
            <main
                className={`flex flex-col items-center justify-between ${styles.main}`}
            >
                <MainSection />
                <HomeFirstSection />
            </main>
            <div className="hero-fade"></div>
            <div className="hero-noise"></div>
        </>
    );
}
