function HighlightTitle({
    children,
    color = "#a5d5e3",
}) {
    return (
        <span className={`gloock-regular italic text-shadow-glow tracking-normal`}
        style={{ color: color }}
        >
            {children}
        </span>
    );
}

export default HighlightTitle;
