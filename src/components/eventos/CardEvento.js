"use client";
import Image from "next/image";
import React, { useState } from "react";
import ArrowInfo from "@/assets/ArrowInfo";
import { PrismicRichText } from "@prismicio/react";
import InfoEvento from "./InfoEvento";

const CardEvento = ({ evento }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="max-w-[300px] h-[410px] lg:max-w-[500px] lg:h-[821px] border-[1px] bg-[#FF9F00] shadow-xl relative">
      <div className="absolute z-20 right-0 w-[70px] h-[94px] md:w-[100px] lg:w-[156px] md:h-[110px] lg:h-[172px] bg-black opacity-[0.76]">
        <p className="text-[15px] md:text-[25px] xl:text-[45px] text-white text-center mt-8 lg:mt-16">
          {evento.fecha.split("-")[2]}/{evento.fecha.split("-")[1]}
        </p>
      </div>
      <div className="max-h-[229px] lg:max-h-[500px] overflow-hidden mx-5 mt-5">
        <Image
          alt={evento.foto.alt}
          src={evento.foto.url}
          width={480}
          height={500}
        />
      </div>
      <p className="font-rubik font-semibold text-[20px] md:text-[22px] text-[#2B2B2E] text-center mt-5 md:mt-1 lg:mt-5">
        {evento.titulo}
      </p>
      <div className="font-plusJakartaSans text-[10px] md:text-[12px] xl:text-[20px] mx-5 text-[#353535] text-left mt-5 md:mt-1 lg:mt-5">
        <PrismicRichText field={evento.descripcion} />
      </div>
      <div className="flex justify-end mr-2 lg:mr-5 lg:mt-2">
        <button
          onClick={openModal}
          className="bg-[#FF9F00] h-[20px] w-[20px] md:h-[36px] md:w-[36px] rounded-2xl text-[#FFFFFF] font-rubik font-semibold"
        >
          <ArrowInfo />
        </button>
      </div>
      {isOpenModal && <InfoEvento evento={evento} closeModal={closeModal} />}
    </div>
  );
};

export default CardEvento;
