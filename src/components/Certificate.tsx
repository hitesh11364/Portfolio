import { CertificationInfo } from "../Users";

interface Certification {
    title: string;
    organization: string;
    duration: string;
    logo: string;
    certificateImage: string;
    description: string;
}

const CertificateComponent = () => {
    return (
        <div className="px-4 xsm:px-6 sm:px-8 md:px-10 lg:px-20 xl:px-32 my-10 font-mono" id="Certifications">
            <h1 className="text-2xl xsm:text-3xl sm:text-4xl text-center mb-10 font-bold text-white">
                <span className="text-primaryColor">04.&nbsp;</span>Trainings & Certifications
            </h1>
            <div
                data-aos="fade-up"
                data-aos-duration="800"
                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10"
            >
                {CertificationInfo.map((cert: Certification, index: number) => (
                    <div
                        key={cert.title} // Use a unique key like cert.title if available
                        className="border border-primaryColor p-5 sm:p-6 rounded-2xl shadow-[0_0_20px_4px_#64FFDA80] bg-[#0a192f]"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                            <img
                                src={`/${cert.logo}`} // Fix the image path to public folder
                                alt={`${cert.organization} logo`}
                                className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-full"
                            />
                            <div>
                                <h2 className="text-white text-xl sm:text-2xl font-bold">{cert.title}</h2>
                                <p className="text-textColor text-sm sm:text-base">{cert.organization}</p>
                            </div>
                        </div>
                        <p className="text-textColor text-sm sm:text-base mb-2">{cert.duration}</p>
                        <p className="text-textColor text-sm sm:text-base mb-4 text-justify">{cert.description}</p>
                        <div className="text-center">
                            <a
                                href={`${cert.certificateImage}`} // Fix the path for certificate image
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${cert.title} certificate`}
                                className="inline-block px-4 py-2 border border-primaryColor text-primaryColor rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-primaryColor hover:text-bgColor animate-pulse focus:outline-none"
                            >
                                View Certificate
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CertificateComponent;
