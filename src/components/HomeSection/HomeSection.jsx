"use client";
import HighlightTitle from "../HighlightTitle/HighlightTitle";
import Title from "../Title/Title";
import Slider from "../Slider/Slider";
import Skills from "../Skills/Skills";

function HomeSection() {
    return (
        <section className="flex flex-col items-center w-full sm:gap-10 mt-12">
            <div className="md:self-start md:ml-12 p-5">
                <Title>
                    Una combinación de creatividad y habilidades técnicas es lo
                    necesario para conseguir&nbsp;
                    <HighlightTitle>interfaces únicas.</HighlightTitle>
                </Title>
            </div>
            <Slider />
            <Skills />
            <div className="h-[80vh]"></div>
        </section>
    );
}

export default HomeSection;
