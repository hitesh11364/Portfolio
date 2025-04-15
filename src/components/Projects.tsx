import { useState, useEffect } from "react";
import { ProjectInfo } from "../Users";
import ProjectCard from "./ProjectCard";



const Projects = () => {
    const [showMore, setShowMore] = useState(false);
    const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const visibleProjects = showMore || !isMobile ? ProjectInfo : ProjectInfo.slice(0, 2);

    return (
        <section id="Projects">
            <div className="px-4 sm:px-8 md:px-16 my-10 mx-4 sm:mx-10 font-mono">
                <h1 className="text-2xl xsm:text-3xl sm:text-4xl text-center mb-10 font-bold text-white">
                    <span className="text-primaryColor">02.&nbsp;</span>Projects
                </h1>

                <div className="flex flex-wrap justify-center md:justify-between gap-6">
                    {visibleProjects.map((project: any, index: number) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            desc={project.desc}
                            image={project.image}
                            live={project.live}
                            link={project.link}
                            github={project.github}
                            technologies={project.technologies}
                        />
                    ))}
                </div>

                {/* Show All / Show Less button only on small screens */}
                <div className="mt-3 text-center md:hidden">
                    {ProjectInfo.length > 2 && (
                        <button
                            onClick={() => setShowMore(prev => !prev)}
                            className="px-4 py-2 text-sm font-semibold text-primaryColor border border-primaryColor rounded-lg bg-[#0a192f] shadow-[inset_0px_0px_0px_1px_#64FFDA50] hover:bg-primaryColor hover:text-bgColor transition-all duration-300"
                        >
                            {showMore ? "Show Less" : "Show All"}
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;
