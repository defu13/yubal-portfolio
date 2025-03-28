function HighlightText({ children, color = "#71CBE5", glow = true, shineHover = false }) {
    return (
        <span
            className={`neuemontreal-medium ${glow ? "text-glow" : ""} ${shineHover ? "shine-hover" : ""}`}
            style={{ color: color }}
        >
            {children}
        </span>
    );
}

export default HighlightText;
