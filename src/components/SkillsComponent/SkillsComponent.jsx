import DotTitle from "../DotTitle/DotTitle";
import SkillsDescription from "../SkillsDescription/SkillsDescription";
import Title from "../Title/Title";
import { skillsData } from "@/data/data";
import Image from "next/image";
import DotAnimation from "../DotAnimation/DotAnimation";
import { useIsMobile } from "@/src/hooks/useIsMobile";
import Tooltip from "../Tooltip/Tooltip";
import Card from "../Card/Card";

function SkillsComponent() {
    const isMobile = useIsMobile();
    const cardStyles =
        "border border-neutral-400 rounded-3xl bg-neutral-900 p-6";

    return (
        <div
            className="flex flex-col pt-0 gap-20 self-center min-h-[100vh] justify-center"
            id="skills"
        >
            <div className="flex flex-col gap-8 self-start">
                <DotTitle>Habilidades</DotTitle>
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
                        <div className="flex gap-3 flex-wrap">
                            {skill.skills.map((icon, index) => (
                                <div key={index}>
                                    <div className="py-1.5 px-2 gap-1 rounded-full flex items-center justify-center"
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
                                        <span className="text-sm text-neutral-100">{icon.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsComponent;
