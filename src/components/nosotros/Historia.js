"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Historia = ({ nosotros }) => {
  const [scrollX, setScrollX] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrollX(document.documentElement.clientWidth);
    };
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("resize", handleScroll);
    };
  }, [scrollX]);

  return (
    <section className="my-16 bg-[#F6F7F6] lg:h-[808px] flex flex-col lg:flex-row mx-3 sm:mx-10">
      <div className="basis-full lg:basis-1/2 flex relative mt-10 lg:mt-0 mx-4 sm:mx-12 md:mx-24 lg:mx-10 h-full">
        <div className="w-full h-[161px] sm:h-[280px] lg:h-full">
          <Image
            className="absolute z-10 lg:top-[30%] xl:top-0 w-[214px] h-[161px] sm:w-[300px] sm:h-[280px] lg:w-[45vw] lg:h-[45vh] xl:w-full xl:h-full object-cover xl:object-contain"
            alt={nosotros.data.imagehistoriafondo.alt}
            src={nosotros.data.imagehistoriafondo.url}
            width={scrollX >= 780 ? 682 : scrollX >= 640 ? 300 : 214}
            height={scrollX >= 780 ? 682 : scrollX >= 640 ? 280 : 161}
          />
          <div className="absolute z-20 w-[139px] h-[116px] sm:w-[180px] sm:h-[180px] lg:w-[20vw] lg:h-[20vw] xl:w-[472px] xl:h-[477.33px] top-[25px] sm:top-[40px] lg:top-[280px] xl:top-[123px] left-4 lg:left-[12%] xl:left-16">
            <Image
              className="rounded-[17px] lg:rounded-[36px] object-cover"
              alt={nosotros.data.imagehistoria1.alt}
              src={nosotros.data.imagehistoria1.url}
              fill
            />
          </div>
          <div className="absolute z-30 w-[103px] h-[103px] sm:w-[150px] sm:h-[150px] lg:w-[17vw] lg:h-[17vw] xl:w-[363px] xl:h-[360px] right-2 -bottom-4 sm:bottom-3 left-24 sm:left-28 lg:left-[42%] xl:left-auto lg:bottom-64 xl:bottom-[46px]">
            <Image
              className="object-cover rounded-[8px] lg:rounded-[26px]"
              alt={nosotros.data.imagehistoria2.alt}
              src={nosotros.data.imagehistoria2.url}
              fill
              style={{ objectPosition: "50% 80%" }}
            />
          </div>
        </div>
        <div className="flex items-center">
          <h1 className="font-bold font-harmattan text-[30px] sm:text-[45px] md:text-[55px] text-[#071837] lg:hidden">
            HISTORIA
          </h1>
        </div>
      </div>
      <div className="lg:basis-1/2">
        <div className="mt-[40px] lg:mt-[137px] mb-[30px] lg:mb-0">
          <span className="font-bold font-harmattan text-[30px] lg:text-[79px] text-[#071837] hidden lg:block">
            HISTORIA
          </span>
          <div className="flex justify-center lg:justify-normal">
            <p className="font-bold font-harmattan text-[9px] sm:text-[13px] md:text-[16px] lg:text-[18px] text-[#666666] w-[349px] sm:w-[450px] md:w-[500px] lg:w-[550px] text-left">
              It gives us great pleasure to introduce to you the Maatram
              Educational and Charitable Trust. We are a group of friends whose
              ideal in life is to help where we can, how we can and whenever we
              can. This help is focussed towards the poor and the needy who live
              among us within our society and endeavours to bring about a change
              in their life - a &quot;MAATRAM&ldquo;.
              <br />
              <br />
              This is a organisation run by volunteers who are sincere and well
              established professionals and who are interested to see that every
              bit of donations reach the needy and brilliant students, without
              which, they would have perished in the darkness of the Social
              abyss.
              <br /> <br />
              We are extremely gratefull for your kindness and the generosity of
              your donation. With your kind co-operation and support we are
              Locating bright and needy students from the rural areas and
              arranging to give them financial assistance for higher studies.
              Provides food, shelter, clothing and medical aid coupled with love
              and affection for old age People.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Historia;
