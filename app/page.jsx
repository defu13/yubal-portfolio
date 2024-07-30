"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [number, setNumber] = useState(1);
    const increment = () => {
        setNumber((prevNumber) => prevNumber + 1);
    };
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <h1>hello world</h1>
        </main>
    );
}