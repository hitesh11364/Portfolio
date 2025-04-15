import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

const Social = () => {
    const socialLinks = [
        { link: "https://github.com/hitesh11364", icon: IconBrandGithub },
        { link: "https://www.linkedin.com/in/hitesh-kumar-singh-820b732b2", icon: IconBrandLinkedin },
        { link: "https://www.instagram.com/hiteshkumarsingh1", icon: IconBrandInstagram },
    ];

    const socialIcons = socialLinks.map((socialLink, index) => (
        <a
            key={index}
            href={socialLink.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-lg hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out"
        >
            <div data-aos="fade-up-left" data-aos-duration="800">
                <socialLink.icon className="-rotate-90" size={30} />
            </div>
        </a>
    ));

    return (
        <div
            className="md-mx:hidden flex text-textColor items-center gap-8 fixed bottom-40 rotate-90"
            style={{ left: "-6.5rem", zIndex: 25 }}
        >
            {socialIcons}
            <hr className="border-[2px] w-40 rounded-full bg-textColor border-textColor" />
        </div>
    );
};

export default Social;
