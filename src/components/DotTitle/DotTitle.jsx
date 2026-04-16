import Dot from "../Dot/Dot";

function DotTitle({ children, className }) {
    return (
        <div className={`flex gap-3 items-center ${className}`}>
            <Dot />
            <p className="neuemontreal-medium dark:text-neutral-500 text-neutral-600">
                {children}
            </p>
        </div>
    );
}

export default DotTitle;
