import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DescriptionText from "../DescriptionText/DescriptionText";

function SkillsDescription({ children, number, title, icon }) {
    return (
        <div className="flex flex-col gap-8 flex-1">
            <p className="neuemontreal-regular text-xs text-neutral-400 hidden md:flex">
                {number}
            </p>
            <hr className="shrink-0 border-none w-full mb-4 bg-neutral-600 h-px" />
            <div className="flex gap-3 items-center">
                <p className="neuemontreal-medium text-lg lg:text-xl flex items-center gap-2">
                    <FontAwesomeIcon icon={icon} />
                    {title}
                </p>
            </div>
            <DescriptionText>
                {children}
            </DescriptionText>
        </div>
    );
}

export default SkillsDescription;
