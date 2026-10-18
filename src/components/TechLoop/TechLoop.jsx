"use client";
import LogoLoop from "@/src/components/ui/LogoLoop";
import { skillsData } from "@/data/data";

// Une las habilidades de las tres categorías en una sola lista de logos
const logos = skillsData.flatMap((category) =>
    category.skills.map(({ name, icon }) => ({
        // Un import estático de Next es un objeto { src, width, height }
        src: typeof icon === "string" ? icon : icon.src,
        alt: name,
        title: name,
    })),
);

function TechLoop() {
    return (
        <div className="relative h-16 w-full min-w-0 overflow-hidden contain-[inline-size]">
            <LogoLoop
                logos={logos}
                speed={80}
                direction="left"
                logoHeight={40}
                gap={60}
                hoverSpeed={0}
                scaleOnHover={false}
                fadeOut
                fadeOutWidth={0.12}
                ariaLabel="Tecnologías y programas que utilizo en mi trabajo"
            />
        </div>
    );
}

export default TechLoop;
