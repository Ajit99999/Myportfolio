import { useState } from "react";
import emailjs from "@emailjs/browser";

const useSendEmail = () => {
    const [statusVal, setStatusVal] = useState("");
    const [errorVal, setErrorVal] = useState("");

    const SendEmail = async (formDetails) => {
        try {
            setErrorVal("");
            const response = await emailjs.send(
                import.meta.env.VITE_SERVICE_KEY,
                import.meta.env.VITE_TEMPLATE_KEY,
                formDetails,
                import.meta.env.VITE_ACCESS_KEY
            );
            console.log(response.status);
            setStatusVal(response.text);
        } catch (err) {
            setErrorVal(err.text);
        }
    };

    return {
        statusVal,
        errorVal,
        SendEmail,
    };
};

export default useSendEmail;
