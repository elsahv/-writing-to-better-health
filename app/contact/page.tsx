import Image from "next/image";

const Contact = () => {
  return (
    <div className="mt-[50px] h-screen" id="contact">
    <div className="grid grid-cols-2 mt-5 mb-5 ">
      <div className=" flex justify-center p-[105px]">
        <div className="">
          <h2 className="text-xl my-1">
            What do you think of this site so far?
          </h2>
          <p>
            {"I'd"} love to hear your feedback! If you are hiring any web
            developers, {"I'd"} really love to hear from ya!
          </p>

          <p>
            Simply fill out the contact form, or email me at
            devdesignsbyelsa@gmail.com
          </p>
        </div>
      </div>

      <div className="border-l-2 border-black-500 flex justify-center p-[105px]">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, commodi vero assumenda est quis minus iure? Aspernatur, cupiditate temporibus fuga quia soluta porro facere obcaecati! Recusandae porro magnam exercitationem quisquam.</p>
      </div>
    </div>
  </div>
  );
};

export default Contact;