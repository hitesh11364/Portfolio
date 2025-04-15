import { SkillInfo } from "../Users";
import SkillCard from "./SkillCard";

const Skills = () => {
    return (
        <section id="Skills">
            <div className="px-4 sm:px-6 md:px-16 my-10 mx-4 sm:mx-8 md:mx-10 font-mono" id="skills">
                <h1 className="text-2xl xsm:text-3xl sm:text-4xl text-center mb-10 font-bold text-white">
                    <span className="text-primaryColor">03.&nbsp;</span>Skills
                </h1>
                <div className="flex flex-wrap justify-center md:justify-between gap-6">
                    {SkillInfo.map((skill: any, index: number) => (
                        <SkillCard key={index} title={skill.title} skills={skill.skills} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
