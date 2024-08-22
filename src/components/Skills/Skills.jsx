import { Tooltip } from "@nextui-org/tooltip";
import DotTitle from "../DotTitle/DotTitle";
import SkillsDescription from "../SkillsDescription/SkillsDescription";
import Title from "../Title/Title";
import { skillsData } from "@/data/data";
import Image from "next/image";
import DotAnimation from "../DotAnimation/DotAnimation";


function Skills() {
    return (
        <div className="flex flex-col p-5 pt-0 gap-20 self-center lg:px-24 min-h-[100vh] justify-center" id="skills">
            <div className="flex flex-col gap-8 self-start">
                <DotTitle>Habilidades</DotTitle>
                <Title>Puedo ayudarte con<DotAnimation/></Title>
            </div>
            <div className="flex md:flex-row flex-col gap-20">
                {skillsData.map((skill, index) => (
                    <div key={index} className="flex flex-col flex-1 gap-12">
                        <SkillsDescription
                            number={skill.number}
                            title={skill.title}
                            icon={skill.icon}
                        >
                            {skill.description}
                        </SkillsDescription>
                        <div className="flex gap-8">
                            {skill.skills.map((icon, index) => (
                                <div key={index}>
                                    <Tooltip
                                        placement="top"
                                        content={icon.name}
                                        className="font-bold neuemontreal-medium text-sm p-2 rounded-3xl bg-neutral-400 text-neutral-900"
                                    >
                                        <Image
                                            src={icon.icon}
                                            width={40}
                                            alt="skill icon"
                                            className="invert"
                                        />
                                    </Tooltip>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
