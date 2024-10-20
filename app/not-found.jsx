import ButtonComponent from "@/src/components/ButtonComponent/ButtonComponent";
import React from "react";

function notFound() {
    return (
        <div className="h-[100vh] flex items-center justify-center">
            <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                    <div className="border-r border-neutral-50 text-2xl pr-8 py-4 flex items-center">
                        404
                    </div>
                    <div className="flex flex-col items-center gap-8 justify-center">
                        <p>Ups, esta página no existe.</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <ButtonComponent href={"/"}>
                        Página principal
                    </ButtonComponent>
                </div>
            </div>
        </div>
    );
}

export default notFound;
