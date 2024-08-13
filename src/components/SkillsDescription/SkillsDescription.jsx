import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SkillsDescription({ children, number, title, icon }) {
    return (
        <div className="flex flex-col gap-8 flex-1">
            <p className="neuemontreal-regular text-xs text-neutral-400 hidden md:flex">
                {number}
            </p>
            <hr className="shrink-0 border-none w-full mb-4 bg-neutral-400 h-px" />
            <div className="flex gap-3 items-center">
                <p className="neuemontreal-medium text-lg lg:text-xl flex items-center gap-2">
                    <FontAwesomeIcon icon={icon} />
                    {title}
                </p>
            </div>
            <p className="neuemontreal-regular text-base lg:text-lg text-neutral-400">
                {children}
            </p>
        </div>
    );
}

export default SkillsDescription;
