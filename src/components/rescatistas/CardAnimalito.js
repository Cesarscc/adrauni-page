"use client";
import Image from "next/image";
import React, { useState } from "react";
import InfoCaso from "./InfoCaso";

const CardAnimalito = ({ animalito, dataFotos }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="max-w-[413px] w-full h-[443px] border-[1px] rounded-[20px] bg-[#FCFCFC] shadow-xl">
      <div className="rounded-t-[20px] max-h-[295px] h-full overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          alt={animalito.fotoperrito.alt}
          src={animalito.fotoperrito.url}
          width={413}
          height={295}
        />
      </div>
      <div className="flex justify-between mx-5 mt-5">
        <p className="font-rubik font-semibold text-[36px] text-[#2B2B2E]">
          {animalito.nombre}
        </p>
        <p className="font-rubik font-medium text-[20px] text-[#2B2B2E] pt-3">
          {animalito.edad}
        </p>
      </div>
      <div className="flex justify-end mr-5 mt-4">
        <button
          onClick={openModal}
          className="bg-[#44BB77] h-[37px] w-[125px] rounded-2xl text-[#FFFFFF] font-rubik font-semibold"
        >
          VER MÁS
        </button>
      </div>
      {isOpenModal && (
        <InfoCaso
          animalito={animalito}
          dataFotos={dataFotos}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default CardAnimalito;
