import Image from "next/image";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="mt-[50px] 2xl:h-screen" id="contact">
    <div className="grid 2xl:grid-cols-2 lg:grid-cols-1 mt-5 mb-5 ">
    
    <div className="pt-[55px] 2xl:pl-[105px] mx-5 px-5 md:p-2">
          <h2 className="text-xl my-1">
            What do you think of this site so far?
          </h2>
          <p>
            {"I'd"} love to hear your feedback! If you are hiring any web
            developers, {"I'd"} really love to hear from ya!
          </p>

          <p> 
            Simply fill out the contact form, or email me at
            <a
                className="underline pl-2"
                href="mailto:devdesignsbyelsa@gmail.com"
              >
                devdesignsbyelsa@gmail.com
              </a>
          </p>  
          </div>
      <section className="border-l-2 border-black-500">
        <div className="pt-5 mt-5 2xl:mx-[150px] lg:mx-[100px] md:mx-[50px] sm:mx-5">
          <h2 className="text-2xl pb-4">Contact</h2>
        <ContactForm />
        </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;