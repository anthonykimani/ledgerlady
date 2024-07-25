import { aboutSource } from "@/helpers/aboutSource";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="flex flex-col items-center font-DM mt-[100px]">
      <div className="max-w-[80%]">
        <h2 className="text-black text-center text-3xl xsm:text-[40px] font-bold my-10 ">
          What We Do
        </h2>
        <h4 className="text-[#596780ab] text-center text-base">
          At Ledger Lady, we empower women with comprehensive knowledge in the
          broader blockchain ecosystem. Our commitment goes beyond Bitcoin to
          include various aspects of blockchain technology. We offer educational
          resources, training programs, and support tailored for women,
          fostering their growth in blockchain and cryptocurrency.
        </h4>
      </div>
      <div className="flex flex-col md:flex-row items-center p-5 md:py-10 xl:px-20 max-w-[80%]">
        <article className="text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-around md:justify-around lg:h-[500px]">
          {aboutSource.map((element, index) => {
            return (
              <div key={index} className="flex flex-col items-center xsm:my-2">
                <Image src={element.icon} alt="wallet" className="my-2" />
                <h3 className="text-black font-semibold text-xl xsm:text-2xl">
                  {element.title}
                </h3>
                <p className="text-[#596780] mt-2 text-center">
                  {element.subtitle}
                </p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default About;
