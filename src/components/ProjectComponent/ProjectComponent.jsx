"use client";
import AnimatedEntrance from "@/src/components/AnimatedEntrance/AnimatedEntrance";
import BackButton from "@/src/components/BackButton/BackButton";
import Card from "@/src/components/Card/Card";
import DescriptionText from "@/src/components/DescriptionText/DescriptionText";
import Title from "@/src/components/Title/Title";
import { useLoading } from "@/src/context/LoadingContext";
import Image from "next/image";
import { useEffect } from "react";

function ProjectComponent({ project }) {
    const { setLoading } = useLoading();

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div className="flex flex-col items-center lg:px-24 px-5 gap-24">
            <div className="flex flex-col gap-8 mt-[15vh] md:self-start items-start">
                <AnimatedEntrance
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <BackButton />
                </AnimatedEntrance>
                <AnimatedEntrance delay={0.2}>
                    <Title>{project.name}</Title>
                </AnimatedEntrance>
                <AnimatedEntrance delay={0.4}>
                    <DescriptionText>{project.description}</DescriptionText>
                </AnimatedEntrance>
            </div>
            <div
                className="hero-project"
                style={{
                    backgroundImage: `radial-gradient(circle farthest-side at 50% 0, ${project.backgroundColor}, #0000)`,
                    opacity: 0.6,
                }}
            ></div>
            <div className="flex flex-col gap-8 w-full max-w-7xl">
                {project.images.map((image, index) => (
                    <Card key={index} className={"overflow-hidden h-auto"}>
                        <Image src={image} alt="project image" />
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default ProjectComponent;
