const Mail = () => {
    return (
        <div
            className="md-mx:hidden flex text-textColor items-center gap-10 fixed bottom-32 -right-40 rotate-90"
            style={{ zIndex: 25 }}
        >
            <div data-aos="fade-down-left" data-aos-duration="800">
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hiteshkumar11364@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-lg hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out"
                >
                    hiteshkumar11364@gmail.com
                </a>
            </div>
            <hr className="border-[2px] w-40 rounded-full bg-textColor border-textColor" />
        </div>
    );
};

export default Mail;
