import Image from "next/image";
import React from "react";
import { PrismicRichText } from "@prismicio/react";
import BackInfo from "@/assets/BackInfo";

const InfoEvento = ({ evento, closeModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 animate__animated animate__fadeIn animate__faster z-40">
      <div className="bg-[#FFFFFF] w-full mx-5 h-[98%] p-4 rounded-[75px]">
        <h1 className="text-[65px] text-[#2B2B2E] text-center hidden lg:block">
          {evento.titulo}
        </h1>
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="flex justify-center lg:max-w-[360px] lg:w-full overflow-hidden">
            <Image
              className="w-[258px] h-[340px] sm:w-[280px] sm:h-[362px] md:w-[300px] md:h-[382px] lg:w-[25vw] lg:h-[40vw] xl:w-full xl:h-full mt-10"
              alt={evento.foto.alt}
              src={evento.foto.url}
              width={400}
              height={1024}
            />
          </div>
          <h1 className="text-[20px] sm:text-[25px] md:text-[35px] text-[#2B2B2E] text-center my-5 md:my-3 lg:hidden">
            {evento.titulo}
          </h1>
          <div className="flex flex-col ml-5 sm:ml-3 md:ml-[10%] lg:ml-12 gap-3 md:gap-4 lg:gap-10 lg:max-w-[650px] lg:mt-10">
            <span className="font-plusJakartaSans text-[10px] sm:text-[15px] md:text-[20px] text-[#353535] text-left">
              <PrismicRichText field={evento.descripcion} />
            </span>
            <div className="flex lg:flex-col mt-2 gap-5 sm:gap-3 lg:gap-12">
              <p className="font-plusJakartaSans text-[10px] sm:text-[13px] md:text-[14px] lg:text-[20px] text-black">
                UBICACIÓN: {evento.ubicacion}
              </p>
              <p className="font-plusJakartaSans text-[10px] sm:text-[13px] md:text-[14px] lg:text-[20px] text-black">
                FECHA: {evento.fecha.split("-")[2]}/{evento.fecha.split("-")[1]}
              </p>
              <p className="font-rubik text-[10px] sm:text-[13px] md:text-[14px] lg:text-[20px] text-black">
                HORARIO: {evento.horario}
              </p>
              <p className="font-rubik text-[10px] sm:text-[13px] md:text-[14px] lg:text-[20px] text-black">
                CONTACTO: {evento.contacto}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-start mt-5 sm:mt-8 md:mt-4 lg:mt-4 xl:-mt-10 ml-5 md:ml-[10%] lg:ml-[5%] xl:ml-3 2xl:ml-20">
          <button
            className="cursor-pointer w-[25px] h-[25px] xl:w-[44px] xl:h-[44px] flex justify-center items-center bg-[#FFFFFF] rounded-full shadow-xl"
            onClick={closeModal}
          >
            <BackInfo />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoEvento;
