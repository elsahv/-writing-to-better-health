import Image from "next/image";
import img2 from "../../public/images/self.jpg";

const About = () => {
  return (
    <div className="flex justify-center p-5 h-screen mt-[125px]" id="about">
    <div className="flex">
      <section className="p-5">
        <h2 className="text-2xl">About</h2>
        <p>
          Welcome to Writing to Better Health!! This site is currently a
          work in progress, a comic blog regarding nutrition and mental
          wellness.
        </p>
        <p>
          {"I'm"} Elsa, a web developer who really, really likes food.
        </p>
      </section>
      <div className="p-5 w-96 h-96">
        <Image src={img2} alt="elsa-hovey" className="img" />
      </div>
    </div>
  </div>
  );
};

export default About;