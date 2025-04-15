import { Info } from "../Users";
import { Button, useMatches } from "@mantine/core";
import { Typewriter } from "react-simple-typewriter";
import { useDisclosure } from "@mantine/hooks";
import ResumeViewer from "./ResumeViewer";
import { IconDownload } from "@tabler/icons-react";

type HeaderProps = {
    showHeader: boolean;
};

const About = ({ showHeader }: HeaderProps) => {
    const [opened, { open, close }] = useDisclosure(false);
    const btn = useMatches({
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg'
    });

    return (
        <>
            <section id="About" className="pt-[16vh] px-4 sm:px-8">
                <div
                    className={`lg:pt-[25vh] sm:pt-[24vh] xs:pt-[24vh] flex !mb-20 items-center px-14 overflow-hidden h-fit font-mono sm-mx:px-4 xs-mx:px-2 xs-mx:py-4 justify-around lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-6 bs-mx:items-center bs-mx:text-center bs-mx:mt-${showHeader ? '[70px]' : '[0px]'} bs-mx:pb-0`}
                >
                    <div className="ml-20 w-3/5 flex flex-col lg-mx:gap-3 bs-mx:items-center bs-mx:ml-0 bs-mx:w-full">
                        <div className="text-primaryColor text-3xl lg-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">
                            Hi, I am
                        </div>
                        <div className="text-white text-[4.25rem] font-extrabold whitespace-nowrap lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl xsm-mx:text-[27px]">
                            {Info.name}
                        </div>
                        <div className="text-white text-4xl w-[80%] font-semibold whitespace-nowrap justify-center lg-mx:text-[27px] lg-mx:my-0 sm-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">
                            I am a&nbsp;
                            <span className="text-primaryColor inline-block">
                                <Typewriter
                                    words={Info.skills}
                                    loop={true}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={60}
                                    deleteSpeed={50}
                                    delaySpeed={500}
                                />
                            </span>
                        </div>
                        <div className="text-textColor text-xl text-justify my-8 font-semibold lg-mx:text-base sm-mx:text-sm xs-mx:text-xs bs-mx:text-center bs-mx:px-4 bs-mx:text-justify">
                            {Info.bio}
                        </div>
                        <div className="flex gap-3 bs-mx:justify-center bs-mx:flex-wrap">
                            <Button
                                onClick={open}
                                className="!text-bgColor !w-fit transform transition-all duration-300 hover:scale-105 hover:translate-y-[-5px] hover:shadow-lg"
                                size={btn}
                                variant="filled"
                                color="#64FFDA"
                            >
                                View My Resume
                            </Button>
                            <Button
                                component="a"
                                href="Resume Hitesh.pdf"
                                download={Info.name}
                                className="!text-primaryColor !w-fit transform transition-all duration-300 hover:scale-105 hover:translate-y-[-5px] hover:shadow-lg"
                                size={btn}
                                variant="outline"
                                color="#64FFDA"
                                rightSection={<IconDownload size={20} />}
                            >
                                Download
                            </Button>
                        </div>
                    </div>

                    {/* Hide photo on small screens */}
                    <div className="h-fit flex justify-center items-center bs:mr-12 overflow-hidden rounded-full w-fit -mt-8 ml-8 bs-mx:hidden">
                        <img
                            className="w-[325px] rounded-full shadow-xl lg-mx:w-64 lg-mx:h-64 xsm-mx:w-56 xsm-mx:h-56"
                            src="Photo.jpeg"
                            alt="Profile"
                        />
                    </div>
                </div>
            </section >

            <ResumeViewer opened={opened} close={close} />
        </>
    );
};

export default About;
