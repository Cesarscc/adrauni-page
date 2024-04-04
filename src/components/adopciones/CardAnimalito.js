"use client";
import Image from "next/image";
import React, { useState } from "react";
import Info from "./Info";

const CardAnimalito = ({ animalito }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="max-w-[413px] h-auto pb-5 lg:h-[443px] border-[1px] rounded-[20px] bg-[#FCFCFC] shadow-xl">
      <div className="rounded-t-[20px] max-h-[295px] overflow-hidden">
        <Image
          alt={animalito.foto.alt}
          src={animalito.foto.url}
          width={413}
          height={295}
        />
      </div>
      <div className="flex justify-between mx-5 mt-5">
        <p className="font-rubik font-semibold text-[22px] text-[#2B2B2E]">
          {animalito.nombre} ({animalito.sexo})
        </p>
        <p className="font-rubik font-medium text-[22px] text-[#2B2B2E]">
          {animalito.edad}
        </p>
      </div>
      <div className="flex justify-end mr-5 mt-10">
        <button
          onClick={openModal}
          className="bg-[#FF9F00] h-[37px] w-[125px] rounded-2xl text-[#FFFFFF] font-rubik font-semibold"
        >
          Ver
        </button>
      </div>
      {isOpenModal && <Info animalito={animalito} closeModal={closeModal} />}
    </div>
  );
};

export default CardAnimalito;
