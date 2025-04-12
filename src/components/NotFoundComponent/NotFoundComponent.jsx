"use client";
import ButtonComponent from "@/src/components/ButtonComponent/ButtonComponent";
import { useTheme } from "@/src/context/ThemeContext";

function NotFoundComponent() {
    const { theme } = useTheme();

    return (
        <div className="h-[100vh] flex items-center justify-center">
            <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                    <div className="border-r dark:border-neutral-50 border-[#232323] text-2xl pr-8 py-4 flex items-center">
                        404
                    </div>
                    <div className="flex flex-col items-center gap-8 justify-center">
                        <p>Ups, esta página no existe.</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <ButtonComponent
                        buttonClassName={`${
                            theme !== "dark" ? "custom-button-moredark" : ""
                        }`}
                        href={"/"}
                    >
                        Página principal
                    </ButtonComponent>
                </div>
            </div>
        </div>
    );
}

export default NotFoundComponent;
