"use client";
import DotTitle from "../DotTitle/DotTitle";
import SkillsDescription from "../SkillsDescription/SkillsDescription";
import Title from "../Title/Title";
import { skillsData } from "@/data/data";
import DotAnimation from "../DotAnimation/DotAnimation";
import TechLoop from "../TechLoop/TechLoop";
import { motion } from "motion/react";

function SkillsComponent() {

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col pt-0 gap-20"
            id="skills"
        >
            <div className="flex flex-col gap-8 self-start">
                <div className="flex w-full items-center">
                    <DotTitle>Habilidades</DotTitle>
                </div>
                <Title>
                    Puedo ayudarte con
                    <DotAnimation />
                </Title>
            </div>
            <div className="flex md:flex-row flex-col gap-20">
                {skillsData.map((skill, index) => (
                    <div key={index} className={`flex flex-col flex-1 gap-12 `}>
                        <SkillsDescription
                            number={skill.number}
                            title={skill.title}
                            icon={skill.icon}
                        >
                            {skill.description}
                        </SkillsDescription>
                        {/* <div className="flex gap-3 flex-wrap">
                            {skill.skills.map((icon, index) => (
                                <div
                                    key={index}
                                    className="py-1.5 px-2 gap-1 rounded-full flex items-center justify-center border border-[#f2f2f233]"
                                    style={{
                                        backgroundColor: icon.color,
                                    }}
                                >
                                    <Image
                                        src={icon.icon}
                                        width={25}
                                        alt="skill icon"
                                        className="max-h-4"
                                    />
                                    <span className="text-sm text-neutral-100">
                                        {icon.name}
                                    </span>
                                </div>
                            ))}
                        </div> */}
                    </div>
                ))}
            </div>
            <div className="w-full min-w-0 max-w-full overflow-hidden py-16 [contain:inline-size]">
                <TechLoop />
            </div>
        </motion.div>
    );
}

export default SkillsComponent;
