"use client";
import SkillsComponent from "../SkillsComponent/SkillsComponent";
import LatestProjects from "../LatestProjects/LatestProjects";

function HomeSection() {

    return (
        <div className="flex flex-col gap-16">
            <section className="lg:px-24 px-5 w-full p-24">
                <LatestProjects />
            </section>
            <section className="flex flex-col items-center w-full gap-40 lg:px-24 px-5">
                <SkillsComponent />
            </section>
        </div>
    );
}

export default HomeSection;
