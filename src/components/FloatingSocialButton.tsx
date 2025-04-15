import { useState, useEffect } from "react";
import {
    IconMail,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandInstagram,
} from "@tabler/icons-react";

type Props = {
    isSidebarOpen: boolean;
};

const FloatingSocialButton = ({ isSidebarOpen }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    const toggleIcons = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.getElementById("footer");
            if (footer) {
                const footerTop = footer.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                setIsFooterVisible(footerTop < windowHeight - 50);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`md:hidden fixed bottom-6 z-[1050] flex flex-col gap-3 transition-all duration-500 ease-in-out ${isSidebarOpen ? "left-6 items-start" : "right-6 items-end"
                } ${isFooterVisible ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
            {isOpen && (
                <div className="bg-bgColor p-3 rounded-xl shadow-xl border border-primaryColor flex flex-col gap-3">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hiteshkumar11364@gmail.com" target="_blank">
                        <IconMail className="text-primaryColor hover:text-white" size={28} />
                    </a>
                    <a href="https://github.com/hitesh11364" target="_blank" rel="noopener noreferrer">
                        <IconBrandGithub className="text-primaryColor hover:text-white" size={28} />
                    </a>
                    <a href="https://www.linkedin.com/in/hitesh-kumar-singh-820b732b2" target="_blank" rel="noopener noreferrer">
                        <IconBrandLinkedin className="text-primaryColor hover:text-white" size={28} />
                    </a>
                    <a href="https://www.instagram.com/hiteshkumarsingh1" target="_blank" rel="noopener noreferrer">
                        <IconBrandInstagram className="text-primaryColor hover:text-white" size={28} />
                    </a>
                </div>
            )}
            <button
                onClick={toggleIcons}
                className="w-12 h-12 rounded-full bg-primaryColor text-bgColor shadow-lg flex items-center justify-center text-xl font-bold transition-transform transform hover:scale-110"
            >
                {isOpen ? "×" : "+"}
            </button>
        </div>
    );
};

export default FloatingSocialButton;
