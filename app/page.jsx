"use client";
import styles from "./Home.module.css";
import MainSection from "@/src/components/MainSection/MainSection";
import HomeSection from "@/src/components/HomeSection/HomeSection";
import { useLoading } from "@/src/context/LoadingContext";
import { useEffect } from "react";

export default function Home() {
    return (
        <>
            <div
                className={`flex flex-col items-center justify-between ${styles.main}`}
            >
                <MainSection />
                <HomeSection />
            </div>
        </>
    );
}
