import { Avatar } from "@mantine/core";

const SkillBadge = (skills: string[]) => {
    return skills.map((skill: string, index: number) => (
        <div
            key={index}
            className="flex items-center gap-2 border border-textColor rounded-2xl py-2 px-3"
        >
            <Avatar
                className="!w-[22px] !h-[22px] !p-[2px] sm:!w-[24px] sm:!h-[24px]"
                variant="transparent"
                radius="xs"
                src={`Icons/${skill}.png`}
            />
            <span className="text-textColor text-sm sm:text-base font-medium">{skill}</span>
        </div>
    ));
};

const SkillCard = (props: any) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="w-full sm:w-[47%] md:w-[48%] shadow-[0_0_10px_0_#64FFDA50] rounded-2xl border border-primaryColor p-5"
        >
            <div className="text-xl xsm:text-2xl sm:text-3xl mb-4 text-white text-center font-bold">
                {props.title}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
                {SkillBadge(props.skills)}
            </div>
        </div>
    );
};

export default SkillCard;
