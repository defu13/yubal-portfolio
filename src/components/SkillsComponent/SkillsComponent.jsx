import { Tooltip } from "@nextui-org/tooltip";
import DotTitle from "../DotTitle/DotTitle";
import SkillsDescription from "../SkillsDescription/SkillsDescription";
import Title from "../Title/Title";
import { skillsData } from "@/data/data";
import Image from "next/image";
import DotAnimation from "../DotAnimation/DotAnimation";
import { useIsMobile } from "@/src/hooks/useIsMobile";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";

function SkillsComponent() {
    const isMobile = useIsMobile();

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
                    <div key={index} className="flex flex-col flex-1 gap-12">
                        <SkillsDescription
                            number={skill.number}
                            title={skill.title}
                            icon={skill.icon}
                        >
                            {skill.description}
                        </SkillsDescription>
                        <div className="flex gap-8 flex-wrap">
                            {skill.skills.map((icon, index) => (
                                <div key={index}>
                                    {isMobile ? (
                                        <Popover placement="top">
                                            <PopoverTrigger>
                                                <Image
                                                    src={icon.icon}
                                                    width={40}
                                                    alt="skill icon"
                                                    className="invert"
                                                />
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <div className="p-2 rounded-xl bg-neutral-100">
                                                    <div className="text-sm font-bold neuemontreal-medium text-[#101010]">
                                                        {icon.name}
                                                    </div>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    ) : (
                                        <Tooltip
                                            placement="top"
                                            content={icon.name}
                                            className="font-bold neuemontreal-medium text-sm p-2 rounded-xl bg-neutral-100 text-[#101010]"
                                        >
                                            <Image
                                                src={icon.icon}
                                                width={40}
                                                alt="skill icon"
                                                className="invert"
                                            />
                                        </Tooltip>
                                    )}
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
