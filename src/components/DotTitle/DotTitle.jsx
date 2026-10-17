import Dot from "../Dot/Dot";

function DotTitle({ children, className }) {
    return (
        <div className={`flex gap-3 items-center ${className}`}>
            <Dot />
            <p className="jetbrainsmono-regular uppercase tracking-[0.3em] opacity-60 text-xs">
                {children}
            </p>
        </div>
    );
}

export default DotTitle;
