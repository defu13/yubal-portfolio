import Dot from "../Dot/Dot";

function DotTitle({ children, className }) {
    return (
        <div className={`flex gap-3 items-center ${className}`}>
            <Dot />
            <p className="neuemontreal-medium text-neutral-500">
                {children}
            </p>
        </div>
    );
}

export default DotTitle;
