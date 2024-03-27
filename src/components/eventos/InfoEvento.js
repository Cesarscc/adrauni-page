import Image from "next/image";
import React from "react";
import { PrismicRichText } from "@prismicio/react";
import BackInfo from "@/assets/BackInfo";

const InfoEvento = ({ evento, closeModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 animate__animated animate__fadeIn animate__faster z-40">
      <div className="bg-[#FFFFFF] w-full mx-5 h-[98%] p-4 rounded-[75px]">
        <h1 className="text-[65px] text-[#2B2B2E] text-center">
          {evento.titulo}
        </h1>
        <div className="flex justify-center">
          <div className="max-w-[360px] w-full overflow-hidden">
            <Image
              alt={evento.foto.alt}
              src={evento.foto.url}
              width={400}
              height={1024}
              layout="responsive"
            />
          </div>
          <div className="flex flex-col ml-12 gap-10 max-w-[650px]">
            <span className="font-plusJakartaSans text-[20px] text-[#353535] text-left">
              <PrismicRichText field={evento.descripcion} />
            </span>
            <p className="font-plusJakartaSans text-[20px] text-black">
              UBICACIÓN: {evento.ubicacion}
            </p>
            <p className="font-plusJakartaSans text-[20px] text-black">
              FECHA: {evento.fecha.split("-")[2]}/{evento.fecha.split("-")[1]}
            </p>
            <p className="font-rubik text-[20px] text-black">
              HORARIO: {evento.horario}
            </p>
            <p className="font-rubik text-[20px] text-black">
              CONTACTO: {evento.contacto}
            </p>
          </div>
        </div>
        <div className="flex justify-start mt-5 ml-20">
          <button
            className="cursor-pointer w-[44px] h-[44px] flex justify-center items-center bg-[#FFFFFF] rounded-full shadow-xl"
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
