import { useEffect, useState, useCallback } from "react";
import SideBar from "./SideBar";
import { IconHexagonLetterH } from "@tabler/icons-react";
import '../index.css'; // Going up one level from components to src


const links = ["About", "Projects", "Skills", "Certifications", "Contact"];

const navLinks = (col: boolean) => {
    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // Scroll with offset
            window.scrollTo({
                top: element.offsetTop - 49,  // 70px offset from top (adjust as needed)
                behavior: "smooth",
            });
        }
    };

    return links.map((link, index) => (
        <a
            key={link}
            className={`${col ? "flex flex-col items-center" : ""} text-textColor text-lg font-mono hover:text-primaryColor`}
            onClick={() => handleClick(link)}
        >
            <span className="text-primaryColor">0{index + 1}. </span>
            {link}
        </a>
    ));
};

type HeaderProps = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (value: boolean) => void;
};

const Header = ({ isSidebarOpen, setIsSidebarOpen }: HeaderProps) => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = useCallback(() => {
        if (typeof window !== "undefined") {
            if (window.scrollY > lastScrollY && window.scrollY > 70) {
                setShow(false);
            } else {
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        }
    }, [lastScrollY]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlNavbar);
            return () => {
                window.removeEventListener("scroll", controlNavbar);
            };
        }
    }, [controlNavbar]);

    return (
        <>
            {/* Floating Icon */}
            <div
                className={`fixed top-6 left-6 z-[99999] backdrop-blur-sm bg-bgColor/80 p-2 rounded-full shadow-md transition-opacity duration-300 ${show || isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            >
                <IconHexagonLetterH size={50} color="#64FFDA" stroke={1.25} />
            </div>

            {/* Navigation Bar */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 bg-bgColor h-[16vh] px-10 mb-10 dm-mono-regular justify-between items-center flex shadow-lg transition-transform duration-300 
                ${show || isSidebarOpen ? "translate-y-0" : "-translate-y-full"}`}
            >
                {/* Spacer for logo (since actual logo is floated) */}
                <div className="w-[60px]" />

                <div className="md:flex gap-8 hidden">{navLinks(false)}</div>
                <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            </nav>
        </>
    );
};

export default Header;
export { navLinks };
