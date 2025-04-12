import NotFoundComponent from "@/src/components/NotFoundComponent/NotFoundComponent";

export const metadata = {
    title: "Ups, esta página no existe.",
    description:
        "Vaya!, Parece que te has perdido. La página que buscas no existe, puedes volver a la página principal y seguir explorando.",
};

function notFound() {
    return <NotFoundComponent />;
}

export default notFound;
