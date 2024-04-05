"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import BackInfo from "@/assets/BackInfo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const InfoCaso = ({ animalito, dataFotos, closeModal }) => {
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

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
    <div className="fixed top-0 left-0 w-full h-full flex items-center md:justify-center bg-black bg-opacity-50 animate__animated animate__fadeIn animate__faster z-40">
      <div
        ref={modalRef}
        className="bg-white mx-2 sm:mx-3 w-[96%] 2xl:w-[1390px] rounded-[16px]"
      >
        <div className="bg-white w-[99%] 2xl:w-[1380px] pb-10 h-[700px] overflow-y-scroll dashboard rounded-[16px]">
          <div className="flex flex-col xl:flex-row mt-10">
            <div className="flex justify-center xl:w-[634px] xl:h-[549px] xl:ml-10 xl:basis-1/2">
              <Image
                className="inset-0 w-[50vw] h-[50vw] xl:w-full xl:h-full object-cover rounded-[16px]"
                alt={animalito.fotoperrito.alt}
                src={animalito.fotoperrito.url}
                width={634}
                height={549}
              />
            </div>
            <div className="mx-5 space-y-5 xl:basis-1/2">
              <div className="flex justify-between mt-5 xl:mt-0">
                <div>
                  <h1 className="text-[20px] sm:text-[30px] md:text-[40px] xl:text-[55px] font-semibold text-[#2B2B2E] text-center xl:text-left">
                    {animalito.nombre}
                  </h1>
                </div>
                <div
                  className={`w-[98px] h-[28px] sm:w-[115px] sm:h-[29px] md:w-[129px] md:h-[30px] lg:w-[150px] lg:h-[31px] ${animalito.encurso ? "bg-[#39C677]" : "bg-[#c67639]"} rounded-[20px] flex items-center justify-center font-plusJakartaSans text-[12px] sm:text-[16px] md:text-[20px] xl:text-[25px] text-white font-extrabold`}
                >
                  {animalito.encurso ? "En Curso" : "Terminado"}
                </div>
              </div>
              <div>
                <p className="font-rubik font-semibold text-[20px] text-black text-left">
                  Historia de rescate:
                </p>
                <div className="text-[10px] sm:text-[12px] md:text-[16px]">
                  <PrismicRichText field={animalito.historia} />
                </div>
              </div>
              <div>
                <p className="font-rubik font-semibold text-[20px] text-black text-left">
                  Sobre mí:
                </p>
                <span className="font-plusJakartaSans font-normal text-[10px] sm:text-[12px] md:text-[20px] text-[#353535]">
                  <PrismicRichText field={animalito.sobremi} />
                </span>
              </div>
              <div>
                <p className="font-rubik font-semibold text-[20px] text-black text-left">
                  Donaciones y apoyo:
                </p>
                <span className="font-plusJakartaSans font-normal text-[10px] sm:text-[12px] md:text-[20px] text-[#353535]">
                  <PrismicRichText field={animalito.donacionesyapoyo} />
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5 xl:mt-20">
            <h2 className="xl:mx-28 font-plusJakartaSans text-center font-extrabold text-[15px] sm:text-[18px] md:text-[20px] mb-10">
              MIS FOTOS
            </h2>
            <div className="mx-10 lg:mx-16 xl:mx-24">
              <Swiper
                cssMode={true}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                mousewheel={true}
                spaceBetween={10}
                keyboard={true}
                slidesPerView={scrollX >= 1024 ? 3 : scrollX >= 768 ? 2 : 1}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="h-[420px] absolute"
              >
                {dataFotos.map((item, ix) => (
                  <SwiperSlide key={ix}>
                    <div className="h-[391px] overflow-hidden rounded-[16px] ">
                      <Image
                        className="w-full h-full md:w-full md:h-full select-none inset-0 rounded-[16px] object-cover"
                        src={item.foto.url}
                        alt={item.foto.alt}
                        width={350}
                        height={350}
                        style={{
                          objectPosition:
                            scrollX >= 768
                              ? "50% 65%"
                              : scrollX >= 640
                                ? "50% 55%"
                                : "50% 65%",
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="flex justify-start mt-10 ml-10">
            <button
              className="cursor-pointer w-[44px] h-[44px] flex justify-center items-center bg-[#FFFFFF] rounded-full"
              onClick={closeModal}
            >
              <BackInfo />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCaso;
