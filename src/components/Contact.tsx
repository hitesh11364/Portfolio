import { useState } from "react";
import FloatingInput from "./FloatingInput";
import { IconArrowRight, IconCheck, IconLoader } from "@tabler/icons-react";
import { validateForm } from "./Validation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";

const Contact = () => {
    const form = {
        name: "",
        email: "",
        phone: "",
        message: "",
    };

    const [formData, setFormData] = useState<{ [key: string]: string }>(form);
    const [formError, setFormError] = useState<{ [key: string]: string }>(form);
    const [submitState, setSubmitState] = useState<"idle" | "sending" | "sent">("idle");

    const handleBlur = (id: string, value: string) => {
        const errorMsg = validateForm(id, value);
        setFormError((prev) => ({ ...prev, [id]: errorMsg }));
    };

    const handleChange = (id: string, value: string) => {
        setFormData({ ...formData, [id]: value });
        setFormError({ ...formError, [id]: validateForm(id, value) });
    };

    const handleSubmit = async () => {
        let valid = true;
        let newFormError: { [key: string]: string } = {};

        for (let key in formData) {
            const error = validateForm(key, formData[key]);
            if (error.length > 0) {
                newFormError[key] = error;
                valid = false;
            }
        }

        setFormError(newFormError);

        if (valid) {
            setSubmitState("sending");
            try {
                await addDoc(collection(db, "portfolio"), formData);
                setSubmitState("sent");
                setFormData(form);

                // Reset to idle state after 2 seconds
                setTimeout(() => {
                    setSubmitState("idle");
                }, 2000);
            } catch (error) {
                setSubmitState("idle");
                console.error("Error sending data: ", error);
            }
        } else {
            setSubmitState("idle"); // reset to idle if validation fails
        }
    };

    return (
        <div className="font-mono px-4 xsm:px-6 sm:px-8 md:px-10 lg:px-20 xl:px-32 my-10" id="Contact">
            <h1 className="text-4xl sm:text-3xl xs:text-2xl text-center mb-10 font-bold text-white">
                <span className="text-primaryColor">05.&nbsp;</span>Contact
            </h1>

            <div
                data-aos="flip-left"
                data-aos-duration="800"
                className="w-full max-w-3xl sm:max-w-2xl xs:max-w-md xsm:max-w-full mx-auto shadow-[0_0_10px_0_#64FFDA] flex flex-col gap-6 border border-primaryColor rounded-3xl p-8 sm:p-6 xs:p-4 xsm:p-4"
            >
                <div className="text-3xl sm:text-2xl xs:text-xl text-white font-semibold text-center">
                    Let's Connect
                </div>

                <FloatingInput
                    id="name"
                    name="Full Name"
                    value={formData.name}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    error={formError.name}
                    disabled={submitState === "sending"}
                />
                <FloatingInput
                    id="email"
                    name="Email Address"
                    value={formData.email}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    error={formError.email}
                    disabled={submitState === "sending"}
                />
                <FloatingInput
                    id="phone"
                    name="Contact Number"
                    value={formData.phone}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    error={formError.phone}
                    disabled={submitState === "sending"}
                />
                <FloatingInput
                    id="message"
                    name="Your Message"
                    value={formData.message}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    error={formError.message}
                    disabled={submitState === "sending"}
                />

                <button
                    className={`w-full text-lg sm:text-base font-bold px-6 py-3 rounded-lg transition-all duration-300 transform
                        ${submitState === "sending"
                            ? "bg-blue-500 text-white scale-95 shadow-inner"
                            : submitState === "sent"
                                ? "bg-green-500 text-white scale-105 shadow-lg"
                                : "bg-primaryColor text-bgColor hover:scale-105 hover:shadow-[0_0_10px_#64FFDA]"}
                    `}
                    onClick={handleSubmit}
                    disabled={submitState === "sending"}
                >
                    {submitState === "sending" ? (
                        <span className="flex items-center justify-center gap-2 animate-pulse">
                            <IconLoader className="animate-spin" size={20} />
                            Sending...
                        </span>
                    ) : submitState === "sent" ? (
                        <span className="flex items-center justify-center gap-2">
                            Sent Successfully <IconCheck size={20} />
                        </span>
                    ) : (
                        <span className="flex items-center justify-center gap-2">
                            Send <IconArrowRight size={20} />
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Contact;
