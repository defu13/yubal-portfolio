import { useEffect, useState } from "react";

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(true);
    useEffect(() => {
        setIsMobile(window.innerWidth < 640);
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return isMobile;
}