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
    <div className="max-w-[500px] h-[821px] border-[1px] bg-[#FF9F00] shadow-xl relative">
      <div className="absolute z-20 right-0 w-[156px] h-[172px] bg-black opacity-[0.76]">
        <p className="text-[45px] text-white text-center mt-16">
          {evento.fecha.split("-")[2]}/{evento.fecha.split("-")[1]}
        </p>
      </div>
      <div className="max-h-[500px] overflow-hidden mx-5 mt-5">
        <Image
          alt={evento.foto.alt}
          src={evento.foto.url}
          width={480}
          height={500}
        />
      </div>
      <p className="font-rubik font-semibold text-[22px] text-[#2B2B2E] text-center mt-5">
        {evento.titulo}
      </p>
      <div className="font-plusJakartaSans text-[20px] w-[420px] text-[#353535] text-center mt-5">
        <PrismicRichText field={evento.descripcion} />
      </div>
      <div className="flex justify-end mr-5 mt-2">
        <button
          onClick={openModal}
          className="bg-[#FF9F00] h-[36px] w-[36px] rounded-2xl text-[#FFFFFF] font-rubik font-semibold"
        >
          <ArrowInfo />
        </button>
      </div>
      {isOpenModal && <InfoEvento evento={evento} closeModal={closeModal} />}
    </div>
  );
};

export default CardEvento;
