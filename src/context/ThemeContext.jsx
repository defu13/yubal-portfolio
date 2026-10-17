"use client";
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

const STORAGE_KEY = "theme"; // misma clave que usa el script del layout
const DEFAULT_PREFERENCE = "dark";
const DARK_QUERY = "(prefers-color-scheme: dark)";
const VALID_PREFERENCES = ["dark", "light", "system"];

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    // preference: lo que eligió el usuario ("dark" | "light" | "system")
    // resolvedTheme: el tema real aplicado ("dark" | "light")
    const [preference, setPreference] = useState(DEFAULT_PREFERENCE);
    const [resolvedTheme, setResolvedTheme] = useState("dark");
    const [ready, setReady] = useState(false);

    // 1. Leer la preferencia guardada (solo en el cliente)
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (VALID_PREFERENCES.includes(saved)) setPreference(saved);
        setReady(true);
    }, []);

    // 2. Aplicar el tema y seguir al sistema si la preferencia es "system"
    useEffect(() => {
        if (!ready) return;

        const apply = () => {
            const resolved =
                preference === "system"
                    ? window.matchMedia(DARK_QUERY).matches
                        ? "dark"
                        : "light"
                    : preference;
            document.documentElement.classList.toggle("dark", resolved === "dark");
            setResolvedTheme(resolved);
        };

        apply();

        if (preference !== "system") return;
        const mq = window.matchMedia(DARK_QUERY);
        mq.addEventListener("change", apply);
        return () => mq.removeEventListener("change", apply);
    }, [preference, ready]);

    // 3. Cambiar y persistir la preferencia
    const setTheme = useCallback((value) => {
        if (!VALID_PREFERENCES.includes(value)) return;
        setPreference(value);
        localStorage.setItem(STORAGE_KEY, value);
    }, []);

    const value = useMemo(
        () => ({ theme: resolvedTheme, preference, setTheme }),
        [resolvedTheme, preference, setTheme]
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme debe usarse dentro de <ThemeProvider>");
    }
    return context;
}