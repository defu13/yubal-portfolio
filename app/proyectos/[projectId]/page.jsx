import { projectsDetailsData } from "@/data/data";
import AnimatedEntrance from "@/src/components/AnimatedEntrance/AnimatedEntrance";
import BackButton from "@/src/components/BackButton/BackButton";
import Card from "@/src/components/Card/Card";
import DescriptionText from "@/src/components/DescriptionText/DescriptionText";
import Title from "@/src/components/Title/Title";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return projectsDetailsData.map((project) => ({
        projectId: project.id.toString(),
    }));
}

function Proyecto({ params }) {
    const { projectId } = params;
    const project = projectsDetailsData.find(
        (project) => project.id.toString() === projectId
    );

    if (!project) {
        return notFound();
    }
    // const { setLoading } = useLoading();
    // useEffect(() => {
    //     setLoading(false);
    // }, []);

    return (
        <section>
            <div className="flex flex-col items-center p-5 gap-24">
                <div className="flex flex-col gap-8 mt-[15vh] md:self-start md:ml-12 items-start">
                    <AnimatedEntrance
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <BackButton />
                    </AnimatedEntrance>
                    <AnimatedEntrance delay={0.2}>
                        <Title>{project.name}</Title>
                    </AnimatedEntrance>
                    <AnimatedEntrance delay={0.4}>
                        <DescriptionText>{project.description}</DescriptionText>
                    </AnimatedEntrance>
                </div>
                <div
                    className="hero-project"
                    style={{
                        backgroundImage: `radial-gradient(circle farthest-side at 50% 0, ${project.color}, #0000)`,
                        opacity: 0.6,
                    }}
                ></div>
                <div className="flex gap-8">
                    {project.images.map((image, index) => (
                        <Card key={index} className={"overflow-hidden"}>
                            <div className="h-[200px] w-[200px]">
                                <Image 
                                    src={image}
                                    alt="project image"
                                    fill
                                />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Proyecto;
