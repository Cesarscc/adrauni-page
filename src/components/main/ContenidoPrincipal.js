"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const ContenidoPrincipal = ({ index }) => {
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
    <section className="sm:mx-10 mb-10">
      <div className="w-full grid grid-cols-1 sm:grid-cols-3">
        <div className="relative aspect-[200/127] col-span-1 order-1">
          <div
            className="absolute z-20 w-full h-full inset-0 bg-[#BD9F00] mix-blend-color"
            style={{
              backgroundColor: "#BD9F00",
              backgroundImage: "rgba(0, 0, 0, 0.2)",
            }}
          ></div>
          <Image
            className="inset-0 w-full h-full object-cover"
            alt={index.data.cuadro1.alt}
            src={index.data.cuadro1.url}
            fill
          />
        </div>
        <div className="relative aspect-[200/127] col-span-1 order-2">
          <div
            className="absolute z-20 inset-0 bg-[#475E05] mix-blend-color"
            style={{
              backgroundColor: "#475E05",
              backgroundImage: "rgba(0, 0, 0, 0.2)",
            }}
          ></div>
          <Image
            className="inset-0 w-full h-full object-cover"
            alt={index.data.cuadro2.alt}
            src={index.data.cuadro2.url}
            fill
          />
        </div>
        <div className="relative aspect-[200/127] col-span-1 order-4 sm:order-3">
          <div
            className="absolute z-20 inset-0 bg-[#FFD74A] mix-blend-color"
            style={{
              backgroundColor: "#FFD74A",
              backgroundImage: "rgba(0, 0, 0, 0.2)",
            }}
          ></div>
          <Image
            className="inset-0 w-full h-full object-cover"
            alt={index.data.cuadro3.alt}
            src={index.data.cuadro3.url}
            width={scrollX >= 640 ? 600 : 370}
            height={381}
            style={{ objectPosition: scrollX >= 640 ? "50% 50%" : "30% 50%" }}
          />
        </div>
        <div className="bg-[#9CC264] aspect-[200/127] col-span-1 order-3 sm:order-4">
          <div className="h-full flex flex-col items-center justify-center space-y-8 sm:space-y-2 md:space-y-8">
            <p className="font-extrabold text-[#FFFFFF] text-[15px] sm:text-[1.5vw] xl:text-[28px] text-center font-plusJakartaSans">
              TU GENEROSIDAD NOS PERMITE A CONTINUAR CON LA MISIÓN DE AYUDAR A
              LOS ANIMALITOS
            </p>
            <a
              href="/donaciones"
              className="bg-[#F49606] rounded-[50px] text-[16px] sm:text-[1.5vw] xl:text-[16px] font-bold text-[#FFFFFF] w-[132px] h-[42px] sm:h-[32px] md:h-[42px] flex justify-center items-center font-plusJakartaSans"
            >
              DONAR
            </a>
          </div>
        </div>
        <div className="relative aspect-[200/127] col-span-1 order-5">
          <div
            className="absolute inset-0 bg-[#004B82] mix-blend-color"
            style={{
              backgroundColor: "#004B82",
              backgroundImage: "rgba(0, 0, 0, 0.2)",
            }}
          ></div>
          <Image
            className="inset-0 w-full h-full object-cover"
            alt={index.data.cuadro4.alt}
            src={index.data.cuadro4.url}
            width={scrollX >= 640 ? 600 : 370}
            height={381}
            style={{
              objectPosition:
                scrollX >= 780
                  ? "50% 35%"
                  : scrollX >= 640
                    ? "50% 35%"
                    : "50% 30%",
            }}
          />
        </div>
        <div className="bg-[#E58F57] aspect-[200/127] col-span-1 order-6">
          <div className="h-full flex flex-col items-center justify-center space-y-8 sm:space-y-2 md:space-y-8">
            <p className="font-extrabold text-[#FFFFFF] text-[16px] sm:text-[1.5vw] xl:text-[28px] text-center font-plusJakartaSans">
              MARCA LA DIFERENCIA Y ÚNETE AL EQUIPO PARA DAR AMOR Y CUIDADO A
              LOS QUE NOS NECESITAN
            </p>
            <a
              href="/contacto"
              className="bg-[#39C677] rounded-[50px] text-[16px] sm:text-[1.5vw] xl:text-[16px] font-bold text-[#FFFFFF] flex justify-center items-center w-[197px] h-[42px] sm:h-[32px] md:h-[42px] font-plusJakartaSans"
            >
              CONTÁCTANOS
            </a>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-rows-2 grid-cols-1 sm:grid-cols-3">
        <div className="relative aspect-[200/127] order-3 sm:order-1 col-span-1 sm:row-span-2 sm:col-span-2 overflow-hidden">
          <div
            className="absolute inset-0 bg-[#930000] mix-blend-color"
            style={{
              backgroundColor: "#930000",
              backgroundImage: "rgba(0, 0, 0, 0.2)",
              filter: "brightness(0.8)",
            }}
          ></div>
          <Image
            className="inset-0 w-full h-full object-cover"
            alt={index.data.cuadro5.alt}
            src={index.data.cuadro5.url}
            width={scrollX >= 640 ? 600 : 370}
            height={381}
            style={{ objectPosition: "50% 40%" }}
          />
        </div>
        <div className="relative aspect-[200/127] order-1 sm:order-2 sm:row-span-1 col-span-1">
          <div
            className="absolute inset-0 bg-[#F97700] mix-blend-color"
            style={{
              backgroundColor: "#F97700",
              backgroundImage: "rgba(0, 0, 0, 0.2)",
              filter: "brightness(0.8)",
            }}
          ></div>
          <Image
            className="inset-0 w-full h-full object-cover"
            alt={index.data.cuadro6.alt}
            src={index.data.cuadro6.url}
            width={scrollX >= 640 ? 600 : 370}
            height={381}
            style={{ objectPosition: scrollX >= 640 ? "50% 25%" : "50% 30%" }}
          />
        </div>
        <div className="bg-[#39C677] aspect-[200/127] order-2 sm:order-3 sm:row-span-1 col-span-1">
          <div className="h-full flex flex-col items-center justify-center space-y-8 sm:space-y-2 md:space-y-8">
            <p className="font-extrabold text-[#FFFFFF] text-[15px] sm:text-[1.5vw] xl:text-[28px] text-center font-plusJakartaSans">
              ADOPTAR ES UNA OPORTUNIDAD DE DAR Y RECIBIR AMOR
            </p>
            <a
              href="/adopciones"
              className="bg-[#F49606] flex justify-center items-center text-[16px] sm:text-[1.5vw] xl:text-[16px] rounded-[50px] font-bold text-[#FFFFFF] w-[150px] h-[42px] sm:h-[32px] md:h-[42px] font-plusJakartaSans"
            >
              ADOPTAR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContenidoPrincipal;
