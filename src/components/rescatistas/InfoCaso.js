import Image from "next/image";
import React, { useEffect, useRef } from "react";
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

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 animate__animated animate__fadeIn animate__faster z-40">
      <div ref={modalRef} className="bg-white w-[1390px] rounded-[16px]">
        <div className="bg-white w-[1380px] pb-10 h-[700px] overflow-y-scroll dashboard rounded-[16px]">
          <div className="flex mt-10">
            <div className="w-[634px] h-[549px] ml-10 basis-1/2">
              <Image
                className="inset-0 w-full h-full object-cover rounded-[16px]"
                alt={animalito.fotoperrito.alt}
                src={animalito.fotoperrito.url}
                width={634}
                height={549}
              />
            </div>
            <div className="mx-5 space-y-5 basis-1/2">
              <div>
                <h1 className="text-[55px] font-semibold text-[#2B2B2E] text-left">
                  {animalito.nombre}
                </h1>
              </div>
              <div>
                <p className="font-rubik font-semibold text-[20px] text-black text-left">
                  Historia de rescate:
                </p>
                <PrismicRichText field={animalito.historia} />
              </div>
              <div>
                <p className="font-rubik font-semibold text-[20px] text-black text-left">
                  Sobre mí:
                </p>
                <span className="font-plusJakartaSans font-normal text-[20px] text-[#353535]">
                  <PrismicRichText field={animalito.sobremi} />
                </span>
              </div>
              <div>
                <p className="font-rubik font-semibold text-[20px] text-black text-left">
                  Donaciones y apoyo:
                </p>
                <span className="font-plusJakartaSans font-normal text-[20px] text-[#353535]">
                  <PrismicRichText field={animalito.donacionesyapoyo} />
                </span>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <h2 className="mx-28 font-plusJakartaSans font-extrabold text-[20px] mb-10">
              MIS FOTOS
            </h2>
            <div className="mx-24">
              <Swiper
                cssMode={true}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                mousewheel={true}
                spaceBetween={10}
                keyboard={true}
                slidesPerView={3}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="h-[420px] absolute"
              >
                {dataFotos.map((item, ix) => (
                  <SwiperSlide key={ix}>
                    <div className="h-[391px]  overflow-hidden rounded-[16px] ">
                      <Image
                        className="w-full h-full select-none inset-0 rounded-[16px] object-cover"
                        src={item.foto.url}
                        alt={item.foto.alt}
                        width={350}
                        height={350}
                        style={{ objectPosition: "50% 65%" }}
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
