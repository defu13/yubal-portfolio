import MyProjectsComponent from "@/src/components/MyProjectsComponent/MyProjectsComponent";

export const metadata = {
    title: "Proyectos",
    description:
        "Descubre mis proyectos y trabajos realizados como desarrollador front-end y diseñador gráfico.",
};

export default function Myprojects() {
    return (
        <section>
            <MyProjectsComponent />
        </section>
    );
}
