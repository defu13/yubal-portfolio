function HighlightText({ children, color = "#71CBE5" }) {
    return (
        <span className="neuemontreal-medium text-glow"
        style={{ color: color }}
        >
            {children}
        </span>
    );
}

export default HighlightText;
