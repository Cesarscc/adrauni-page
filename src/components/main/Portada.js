"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Portada = ({ index }) => {
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
    <section className="relative flex mt-10 mb-10 sm:mt-0">
      <div className="relative sm:basis-1/2 md:basis-2/5">
        <div className="flex justify-center">
          <Image
            className="absolute sm:mt-[46px]"
            alt={index.data.portada.alt}
            src={index.data.portada.url}
            width={
              scrollX >= 1536
                ? 450
                : scrollX >= 1280
                  ? 370
                  : scrollX >= 1024
                    ? 300
                    : scrollX >= 768
                      ? 240
                      : scrollX >= 640
                        ? 240
                        : 174
            }
            height={scrollX >= 1536 ? 680 : scrollX >= 1280 ? 550 : 290}
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/4 sm:translate-y-0 md:-translate-y-1/4">
          <Image
            alt={index.data.logoportada.alt}
            src={index.data.logoportada.url}
            width={
              scrollX >= 1536
                ? 181
                : scrollX >= 1280
                  ? 150
                  : scrollX >= 1024
                    ? 130
                    : scrollX >= 768
                      ? 70
                      : scrollX >= 640
                        ? 60
                        : 45
            }
            height={scrollX >= 1536 ? 143 : scrollX >= 1280 ? 120 : 100}
          />
        </div>
        <Image
          className="-left-[140px]"
          alt={index.data.formvector.alt}
          src={index.data.formvector.url}
          width={scrollX >= 768 ? 798 : scrollX >= 640 ? 400 : 229}
          height={783}
        />
      </div>
      <div className="sm:basis-1/2 md:basis-3/5 max-w-[185px] sm:max-w-[330px] md:max-w-[450px] lg:max-w-[600px] xl:max-w-[710px] 2xl:max-w-[1042px] max-h-[246px] absolute right-0 top-[90px] sm:top-[150px] md:top-[160px] xl:top-[250px] md:mr-[2%] lg:mr-[5%] 2xl:mr-0">
        <strong className="text-[15px] sm:text-[25px] md:text-[30px] lg:text-[45px] xl:text-[50px] 2xl:text-[65px] font-plusJakartaSans font-extrabold">
          Cuidando a los peludos de la UNI y{" "}
        </strong>
        <strong className="text-[#F49606] text-[15px] sm:text-[25px] md:text-[30px] lg:text-[45px] xl:text-[50px] 2xl:text-[65px] font-plusJakartaSans font-extrabold">
          Promoviendo la tendencia Responsable.
        </strong>
      </div>
    </section>
  );
};

export default Portada;
