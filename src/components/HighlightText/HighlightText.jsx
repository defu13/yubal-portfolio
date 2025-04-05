function HighlightText({ children, className, color = "", glow = true, shineHover = false }) {
    return (
        <span
            className={`dark:text-[#71CBE5] text-[#4f9cb1] neuemontreal-medium ${glow ? "text-glow" : ""} ${shineHover ? "shine-hover" : ""} ${className}`}
            style={{color: color}}
        >
            {children}
        </span>
    );
}

export default HighlightText;
