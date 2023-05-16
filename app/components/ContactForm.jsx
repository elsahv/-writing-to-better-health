"use client";

import { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { RiMailSendLine } from "react-icons/ri";

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const form = useRef();

  const valuesSchema = Yup.object({
    name: Yup.string()
      .min(3, "min 2 characters")
      .max(32, "max 32 characters")
      .required("please write your name"),
    email: Yup.string()
      .email("invalid email")
      .max(32, "max 32 characters")
      .required("Please write your email"),
    message: Yup.string().required("please write your message"),
  });
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  /*EMAILJS KEYS ----------*/
  const publicID = "wvG3dmQ14bk6j8hBg";
  const templateID = "template_ua2cv0e";
  const serviceID = "service_ut5syhh";

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      validationSchema: valuesSchema,
      initialValues,
      onSubmit: (values, actions) => {
        try {
          emailjs
            .sendForm(serviceID, templateID, form.current, publicID, values)
            .then(() => {
              actions.resetForm();
              setSuccessMessage(true);
              setTimeout(() => setSuccessMessage(false));
              console.log("message sent");
            });
        } catch (error) {
          console.log(error);
        }
      },
    });

  return (
    <form ref={form} onSubmit={handleSubmit} className="flex flex-col">
      {/* //* NAME */}
      <label id="form-label" className="" htmlFor="name">
        {errors.name && touched.name ? (
          <div className="error-msg">{errors.name}</div>
        ) : (
          ""
        )}
      </label>
      <input
        className="border border-black bg-teal-200 my-2 mx-2 p-2 rounded-sm 2xl:w-full lg:w-3/4 md:w-3/4 sm:w-[200px] "
        value={values.name}
        onBlur={handleBlur}
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="enter name"
      />
      {/* //*EMAIL */}
      <label id="form-label" className="" htmlFor="email">
        {errors.email && touched.email ? (
          <div className="error-msg">{errors.email}</div>
        ) : (
          ""
        )}
      </label>
      <input
        className="border border-black bg-teal-200 my-2 mx-2 p-2 rounded-sm 2xl:w-full lg:w-3/4 md:w-3/4 sm:w-[200px] "
        value={values.email}
        onBlur={handleBlur}
        onChange={handleChange}
        type="email"
        name="email"
        placeholder="Enter email"
      />
      {/* //* MESSAGE */}
      <label id="form-label" className="" htmlFor="name">
        {errors.message && touched.message ? (
          <div className="error-msg">{errors.message}</div>
        ) : (
          ""
        )}
      </label>
      <textarea
        className="border border-black bg-teal-200 my-2 mx-2 p-2 2xl:w-full lg:w-3/4 md:w-3/4 sm:w-[200px]"
        value={values.message}
        onBlur={handleBlur}
        onChange={handleChange}
        id="message"
        name="message"
        placeholder="Enter Message"
      />
      {/* BUTTON */}
      <input
        className="border border-black bg-teal-400 w-1/4 mt-5 ml-2 rounded-sm cursor-pointer"
        type="submit"
        value="send"
      />
      {/* //todo figure out */}
      <>
        {successMessage && (
          <div className="flex justify-center align-middle absolute">
            <div className="text-lg mr-1">
              <RiMailSendLine />
            </div>
            Message Sent! You will be contacted within 1 business day
          </div>
        )}
      </>
      {/* //todo end */}
    </form>
  );
};

export default ContactForm;
