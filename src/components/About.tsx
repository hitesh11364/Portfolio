import { useEffect, useState } from "react";
import { Info } from "../Users";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Typewriter } from "react-simple-typewriter";
import ResumeViewer from "./ResumeViewer";
import { IconDownload } from "@tabler/icons-react";

type HeaderProps = {
    showHeader: boolean;
};

const About = ({ showHeader }: HeaderProps) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    return (
        <>
            <section
                id="About"
                className={`relative px-4 sm:px-8 mt-[16vh] lg:mt-0 !bg-bgColor ${isMobile ? "h-screen pt-[18vh]" : ""
                    }`}
            >
                <div
                    className={`
                         font-mono h-fit overflow-hidden flex items-center justify-around px-14 mb-20 lg:pt-[25vh]
                          sm:pt-[22vh]
                          xs:pt-[20vh]
                         xsm-mx:pt-[16vh]
                         bs-mx:pt-[14vh]
                         lg-mx:justify-between
                         md-mx:px-6
                         sm-mx:px-4
                         xs-mx:px-2 xs-mx:py-4
                         bs-mx:flex-wrap bs-mx:flex-col-reverse
                         bs-mx:!overflow-visible bs-mx:gap-6
                         bs-mx:items-center bs-mx:text-center
                         ${showHeader ? "bs-mx:mt-[70px]" : "bs-mx:mt-0"}
                         bs-mx:pb-0
        `}
                >
                    {/* Text section */}
                    <div className="ml-20 w-3/5 flex flex-col lg-mx:gap-3 bs-mx:items-center bs-mx:ml-0 bs-mx:w-full">
                        <div className="text-primaryColor text-3xl lg-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">
                            Hi, I am
                        </div>
                        <div className="text-white text-[4.25rem] font-extrabold whitespace-nowrap lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl xsm-mx:text-[27px]">
                            {Info.name}
                        </div>
                        <div className="text-white text-4xl sm:text-2xl xs:text-xl xsm:text-lg font-semibold flex flex-wrap items-center gap-2">
                            <span className="whitespace-nowrap">I'm a</span>
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

                        <div className="text-textColor text-xl my-8 font-semibold lg-mx:text-base sm-mx:text-sm xs-mx:text-xs bs-mx:text-center bs-mx:px-4">
                            {Info.bio}
                        </div>

                        <div className="flex gap-3 bs-mx:justify-center bs-mx:flex-nowrap">
                            <Button
                                onClick={open}
                                className="!text-bgColor !w-fit px-6 py-3 text-sm sm:text-base bs-mx:text-lg transform transition-all duration-300 hover:scale-105 hover:translate-y-[-5px] hover:shadow-lg"
                                variant="filled"
                                color="#64FFDA"
                            >
                                View My Resume
                            </Button>
                            <Button
                                component="a"
                                href="Resume Hitesh.pdf"
                                download={Info.name}
                                className="!text-primaryColor !w-fit px-6 py-3 text-sm sm:text-base bs-mx:text-lg transform transition-all duration-300 hover:scale-105 hover:translate-y-[-5px] hover:shadow-lg"
                                variant="outline"
                                color="#64FFDA"
                                rightSection={<IconDownload size={20} />}
                            >
                                Download
                            </Button>
                        </div>
                    </div>

                    {/* Profile image - hidden on mobile */}
                    <div className="h-fit flex justify-center items-center bs:mr-12 overflow-hidden rounded-full w-fit -mt-8 ml-8 bs-mx:hidden">
                        <img
                            className="w-[325px] rounded-full shadow-xl lg-mx:w-64 lg-mx:h-64 xsm-mx:w-56 xsm-mx:h-56"
                            src="Photo.jpeg"
                            alt="Profile"
                        />
                    </div>
                </div>
            </section>

            <ResumeViewer opened={opened} close={close} />
        </>
    );
};

export default About;
