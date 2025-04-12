import AboutComponent from "@/src/components/AboutComponent/AboutComponent";

export const metadata = {
    title: "Sobre mí",
    description:
        "Soy Yubal De Fuente, desarrollador front-end y diseñador gráfico apasionado por crear experiencias visuales únicas. Descubre más sobre mi trayectoria y lo que me inspira a seguir aprendiendo y creciendo.",
};

export default function About() {
    return (
        <section>
            <AboutComponent />
        </section>
    );
}
