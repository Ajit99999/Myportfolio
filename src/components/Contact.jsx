import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useSendEmail from "../hooks/useSendEmail";
import toast, { Toaster } from "react-hot-toast";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  const { SendEmail, statusVal } = useSendEmail();
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      textArea: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .required("Required")
        .min(4, "It should be at least 4 character")
        .trim(),
      email: Yup.string().required("Required").email(),
      textArea: Yup.string().required("Required").trim(),
    }),
    onSubmit: (values) => {
      SendEmail({
        to_name: "ajit",
        from_name: values.userName,
        message: values.textArea,
        reply_to: values.email,
      });

      formik.resetForm({
        values: {
          email: "",
          userName: "",
          textArea: "",
        },
      });
    },
  });
  useEffect(() => {
    if (statusVal === "OK") {
      toast.success("Successfully sent ✅✅✅");
    }
  }, [statusVal]);

  return (
    <section id="contact" className="flex justify-around bg-indigo-200 py-4 max-sm:flex-col items-center gap-8">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col gap-4">
        <p className="text-2xl">Get In Touch With Me</p>

        <p className="text-md">Social Media Handle</p>
        <ul className="flex gap-8">
          <li className="">
            <a
              target={"_blank"}
              className="text-4xl  "
              href="https://www.linkedin.com/in/ajit-sahoo-b347a81ba/"
            >
              {" "}
              <BsLinkedin className="transition ease-in-out delay-150 hover:translate-y-1 hover:scale-125  duration-300"  />{" "}
            </a>{" "}
          </li>
          <li>
            <a
              target={"_blank"}
              className="text-4xl"
              href="https://github.com/Ajit99999"
            >
              {" "}
              <BsGithub  className="transition ease-in-out delay-150 hover:translate-y-1 hover:scale-125  duration-300" />{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              className="text-4xl"
              target={"_blank"}
              href="https://twitter.com/Ajit9797"
            >
              <BsTwitter className="transition ease-in-out delay-150 hover:translate-y-1 hover:scale-125  duration-300" />
            </a>{" "}
          </li>
          <li>
            {" "}
            <a className="text-4xl" href="mailto:sahoo.ajit1234@gmail.com">
              <MdEmail className="transition ease-in-out delay-150 hover:translate-y-1 hover:scale-125  duration-300" />
            </a>{" "}
          </li>
        </ul>
      </div>
      <div>
        <div className="flex flex-row items-center">
          <form onSubmit={formik.handleSubmit}>
            <div className="my-2">
              <input
                id="userName"
                placeholder="Enter your name"
                className={
                  formik.touched.userName && formik.errors.userName
                    ? " border border-red-600 outline-0 px-4 w-72 py-2 rounded-md"
                    : "  border-black outline-0 px-4 w-72 py-2 rounded-md"
                }
                type="text"
                {...formik.getFieldProps("userName")}
              />
              {formik.errors.userName && formik.touched.userName && (
                <p className="text-red-600"> {formik.errors.userName} </p>
              )}
            </div>

            <div className="my-2">
              <input
                className={
                  formik.touched.email && formik.errors.email
                    ? "border border-red-600 outline-0 px-4 w-72 py-2 rounded-md"
                    : " border-black outline-0 px-4 w-72 py-2 rounded-md"
                }
                id="email"
                placeholder="Enter your email"
                type="email"
                {...formik.getFieldProps("email")}
              />
              {formik.errors.email && formik.touched.email && (
                <p className="text-red-600"> {formik.errors.email} </p>
              )}
            </div>

            <div className="my-2">
              <textarea
                className={
                  formik.touched.textArea && formik.errors.textArea
                    ? "border border-red-600 outline-0 px-4 w-72 py-2 rounded-md"
                    : "  border-black outline-0 px-4 w-72 py-2 rounded-md"
                }
                id="textArea"
                {...formik.getFieldProps("textArea")}
                placeholder="Send me message"
              />

              {formik.errors.textArea && formik.touched.textArea && (
                <p className="text-red-600">{formik.errors.textArea}</p>
              )}
            </div>

            <button
              className="border-black  px-8 py-1 bg-white rounded-md"
              type="submit"
            >
              {" "}
              Send{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
