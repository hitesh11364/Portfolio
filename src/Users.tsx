const Info = {
    name: "Hitesh Kumar Singh",
    skills: ["Full-Stack Developer", "Software Engineer"],
    bio: "A Software Engineering Student and Full-Stack Developer passionate about crafting efficient and scalable web applications. My expertise lies in TypeScript, JavaScript, and React, with a strong foundation in C, C++, and Python."
}

const ProjectInfo = [
    {
        title: "Edumentor",
        desc: "P.I.T.S. is an innovative AI-powered platform designed to provide a personalized learning experience. By leveraging advanced AI technologies, the system tailors study plans, interactive quizzes, and real-time chat support to help users master various subjects. Key features include personalized study plans, interactive quizzes, AI-driven chat assistance, efficient study material ingestion, and slide generation with narration, making learning more engaging and effective.",
        image: "/Edumentor.PNG",
        live: false,
        technologies: ["AI", "Machine Learning", "React", "Streamlit", "Google Slides API", "OpenAI API"],
        github: "https://github.com/hitesh11364/Edumentor",
        link: "https://github.com/hitesh11364/Edumentor"

    },
    {
        title: "Spotify Clone",
        desc: "As part of learning to code, I built a responsive and user-friendly Spotify clone to showcase my front-end development skills. The project replicates core music playback features such as play, pause, next, previous, and seek functionality. It also displays the currently playing song along with album artwork in a dedicated 'Now Playing' section. Through this project, I gained hands-on experience with designing clean user interfaces, implementing interactive features with JavaScript, and using version control tools like Git and GitHub for collaboration and code management.",
        image: "spotify.png",
        live: true,
        technologies: ["HTML", "CSS", "Javascript"],
        link: "https://spotify-clone-javascript.netlify.app/",
        github: "https://github.com/hitesh11364/Spotify-Clone"
    },
    {
        title: "Flipkart Clone",
        desc: "A frontend clone of the Flipkart e-commerce website built using HTML and CSS. The project replicates the layout and design of the original site. Currently a work in progress — JavaScript functionality will be added to enhance interactivity and dynamic features.",
        image: "flipkart.jpeg",
        live: true,
        technologies: ["HTML", "CSS"],
        link: "https://hitesh11364.github.io/Flipkart-Clone/",
        github: "https://github.com/hitesh11364/Flipkart-Clone"
    },
]

const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Redux", "Tailwind CSS", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Node JS", "Express JS", "MySQL", "MongoDB", "Firebase"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass"]
    }
]


const CertificationInfo = [
    {
        title: "AWS (Cloud Computing)",
        organization: "SHAPEMYSKILLS BY DUCAT, Lucknow, India",
        duration: "Jul 2024 - Aug 2024",
        logo: "download.png",
        certificateImage: "/shape.png",
        description:
            "Gained hands-on knowledge of core AWS services including EC2, S3, IAM, and Lambda. Learned to design scalable, secure, and cost-effective cloud infrastructure solutions following industry best practices."
    },
    {
        title: "Full Stack Development",
        organization: "IIT Kanpur, Virtual",
        duration: "Aug 2022 - Oct 2022",
        logo: "logo2.png",
        certificateImage: "/iit.png",
        description:
            "Completed a certification program focused on web technologies including HTML5, CSS3, JavaScript, Bootstrap, PHP, and MySQL. Gained practical experience in building responsive and dynamic full-stack web applications."
    }
];


export { Info, ProjectInfo, SkillInfo, CertificationInfo }