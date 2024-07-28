import { HeroSectionImage } from "@/constants/svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <main className="flex flex-col justify-around sm:justify-start items-center text-center font-DM x-3">
      <h1 className="text-4xl md:text-[50px] lg:text-[60px] font-semibold leading-[40px] md:leading-[60px] my-10 max-w-[1024px]">
      Empowering <span className="bg-gradient-to-r from-lightBlue to-deepBlue bg-clip-text text-transparent mx-2"> Women</span>  through <span className="bg-gradient-to-r from-lightBlue to-deepBlue bg-clip-text text-transparent mx-2"> Blockchain</span> Education
      </h1>
      <span className="text-black font-medium my-[10px] max-w-[1024px]">
      At Ledger Lady, we believe in the transformative power of blockchain technology and its ability to shape the future. Our mission is to introduce women to the world of blockchain, providing education and resources that extend beyond Bitcoin. We offer a diverse curriculum covering various aspects of blockchain technology, including cryptocurrencies, smart contracts, decentralized finance, and more.
      </span>
      <Image src={HeroSectionImage} alt="" />
    </main>
  );
};

export default HeroSection;
