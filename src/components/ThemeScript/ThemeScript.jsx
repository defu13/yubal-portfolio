
const themeScript = `
(function () {
    try {
        var saved = localStorage.getItem("theme");
        var isLight =
            saved === "light" ||
            (saved === "system" &&
                !window.matchMedia("(prefers-color-scheme: dark)").matches);
        if (isLight) document.documentElement.classList.remove("dark");
    } catch (e) {}
})();
`;

export default function ThemeScript() {
    return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}