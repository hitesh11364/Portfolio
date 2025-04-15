import { Info } from "../Users";

const Footer = () => {
    return (
        <div
            id="footer" // 👈 Added this line
            className="mx-4 sm:mx-10 md:mx-20 lg:mx-36 mt-20 mb-10 font-mono flex flex-col gap-2 items-center text-center"
        >
            <div className="text-2xl sm:text-3xl text-primaryColor font-semibold">{Info.name}</div>
            <div className="text-sm sm:text-base text-textColor">
                Copyright &copy; {new Date().getFullYear()} {Info.name} | All Rights Reserved
            </div>
        </div>
    );
};

export default Footer;