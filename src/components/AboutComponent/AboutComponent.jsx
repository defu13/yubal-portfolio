"use client";
import AnimatedEntrance from "@/src/components/AnimatedEntrance/AnimatedEntrance";
import Card from "@/src/components/Card/Card";
import DotTitle from "@/src/components/DotTitle/DotTitle";
import { aboutMeData } from "@/data/data";
import Image from "next/image";
import photo1 from "@/assets/images/photo1.jpg";
import photo2 from "@/assets/images/photo2.jpg";
import photo3 from "@/assets/images/photo3.jpg";
import photo4 from "@/assets/images/photo4.jpg";

function AboutComponent() {
    return (
        <>
            <div className="flex flex-col items-center gap-24 lg:px-24 px-5">
                <div className="flex flex-col gap-8 mt-[20vh] self-start">
                    <AnimatedEntrance>
                        <DotTitle> {aboutMeData.title} </DotTitle>
                    </AnimatedEntrance>
                    <AnimatedEntrance
                        delay={0.2}
                        className="flex flex-col w-full"
                    >
                        {aboutMeData.description}
                    </AnimatedEntrance>
                </div>
                <AnimatedEntrance
                    className="flex flex-col w-full lg:max-w-7xl gap-52"
                    delay={0.4}
                >
                    <div className="flex gap-12 flex-col min-[550px]:flex-row">
                        <div className="flex-1">
                            <Card clickable={false}>
                                <Image
                                    src={photo1}
                                    alt="project image"
                                    className="rounded-2xl"
                                />
                            </Card>
                        </div>
                        <div className="flex-1 dark:text-neutral-400 text-neutral-600 gap-5 text-base flex flex-col">
                            {aboutMeData.text[0].text}
                        </div>
                    </div>
                    <div className="flex gap-12 flex-col-reverse min-[550px]:flex-row">
                        <div className="flex-1 dark:text-neutral-400 text-neutral-600 gap-5 text-base flex flex-col">
                            {aboutMeData.text[1].text}
                        </div>
                        <div className="flex-1">
                            <Card clickable={false}>
                                <Image
                                    src={photo2}
                                    alt="project image"
                                    className="rounded-2xl"
                                />
                            </Card>
                        </div>
                    </div>
                    <div className="flex sm:gap-12 gap-6 flex-col min-[550px]:flex-row">
                        <div className="flex-1">
                            <Card clickable={false}>
                                <Image
                                    src={photo3}
                                    alt="project image"
                                    className="rounded-2xl"
                                />
                            </Card>
                        </div>
                        <div className="flex-1 dark:text-neutral-400 text-neutral-600 gap-5 text-base flex flex-col">
                            {aboutMeData.text[2].text}
                        </div>
                    </div>
                    <div className="flex gap-12 flex-col-reverse min-[550px]:flex-row">
                        <div className="flex-1 dark:text-neutral-400 text-neutral-600 gap-5 text-base flex flex-col">
                            {aboutMeData.text[3].text}
                        </div>
                        <div className="flex-1">
                            <Card clickable={false}>
                                <Image
                                    src={photo4}
                                    alt="project image"
                                    className="rounded-2xl"
                                />
                            </Card>
                        </div>
                    </div>
                </AnimatedEntrance>
            </div>
            {/* <div className="w-full flex justify-center mt-40">🚧 En construcción<DotAnimation/></div> */}
        </>
    );
}

export default AboutComponent;
