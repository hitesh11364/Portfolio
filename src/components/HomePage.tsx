import About from "./About";
import Header from "./Header";
import Mail from "./Mail";
import Social from "./Social";
import Projects from "./Projects";
import Skills from "./Skills";
import Certificate from "./Certificate";
import Contact from "./Contact";
import Footer from "./Footer";
import ResumeViewer from "./ResumeViewer";
import FloatingSocialButton from "./FloatingSocialButton";
import Sidebar from "./SideBar";
import { useState } from "react";

const HomePage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <ResumeViewer />
            <Mail />
            <Social />
            <About showHeader={false} />
            <FloatingSocialButton isSidebarOpen={isSidebarOpen} />
            <Projects />
            <Skills />
            <Certificate />
            <Contact />
            <Footer />
        </>
    );
};

export default HomePage;
