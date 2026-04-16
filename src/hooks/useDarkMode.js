import { useEffect, useState } from "react";

export const useDarkMode = () => {
    const [isDark, setIsDark] = useState(false);
    
    useEffect(() => {
        // Función para verificar si está en modo oscuro
        const checkDarkMode = () => {
            const hasDarkClass = 
                document.documentElement.classList.contains("dark")
            setIsDark(hasDarkClass);
        };
        
        // Verificar estado inicial
        checkDarkMode();
        
        // Observar cambios en el documento
        const observer = new MutationObserver(checkDarkMode);
        
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
        
        return () => observer.disconnect();
    }, []);
    
    return isDark;
};