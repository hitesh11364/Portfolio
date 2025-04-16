import { useEffect, useRef, useState } from "react";
import VantaDots from "vanta/dist/vanta.dots.min";
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
    const vantaRef = useRef<HTMLDivElement>(null);
    const vantaEffectRef = useRef<any>(null);

    // Detect screen size
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    // Apply Vanta only for small screens
    useEffect(() => {
        if (isMobile && vantaRef.current && !vantaEffectRef.current) {
            vantaEffectRef.current = VantaDots({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                minHeight: 200.0,
                minWidth: 200.0,
                scale: 1.0,
                scaleMobile: 1.0,
                color: "#8892B0",
                backgroundColor: "#112240",
                showLines: false // Only show dots, no lines
            });
        }

        // Cleanup Vanta effect on component unmount or screen resize
        return () => {
            if (vantaEffectRef.current) {
                vantaEffectRef.current.destroy();
                vantaEffectRef.current = null;
            }
        };
    }, [isMobile]);

    return (
        <>
            {/* Vanta background container (mobile only) */}
            {isMobile && (
                <div
                    ref={vantaRef}
                    className="absolute top-0 left-0 w-full h-full z-[-1]"
                ></div>
            )}

            <section
                id="About"
                className="relative px-4 sm:px-8 mt-0 min-h-screen flex justify-center items-center bg-primaryColor sm:min-h-[100vh]"
            >
                <div
                    className={`font-mono h-full w-full flex flex-col items-center justify-center text-center px-14 mb-20
                    lg:pt-[25vh]
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
                    bs-mx:pb-0`}
                >
                    {/* Text section */}
                    <div className="w-full flex flex-col items-center gap-4">
                        <div className="text-primaryColor text-3xl lg-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg font-semibold">
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

                        <div className="flex gap-3 justify-center">
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
                    <div className="mt-10 h-fit flex justify-center items-center bs:mr-12 overflow-hidden rounded-full w-60 shadow-2xl hidden sm:block">
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
