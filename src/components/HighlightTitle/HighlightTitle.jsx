function HighlightTitle({
    children,
    className,
    glow = true,
    monocrome = false,
}) {
    const color = monocrome ? "" : "dark:text-[#7dc7db] text-[#2b535e]";
    return (
        <span className={`${color} gloock-regular italic tracking-normal ${glow ? "text-glow": ""} ${className}`}
            
        >
            {children}
        </span>
    );
}

export default HighlightTitle;
