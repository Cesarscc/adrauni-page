"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { PrismicRichText } from "@prismicio/react";

const Info = ({ animalito, closeModal }) => {
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
      <div
        ref={modalRef}
        className="bg-[#C1CCE9] w-full mx-5 h-[98%] p-4 rounded-[75px]"
      >
        <h1 className="text-[70px] font-semibold text-[#2B2B2E] text-center">
          {animalito.nombre}
        </h1>
        <div className="flex justify-between">
          <div className="w-[430px] h-[300px] overflow-hidden ml-10">
            <Image
              className="inset-0 w-full h-full object-cover rounded-[16px]"
              alt={animalito.foto.alt}
              src={animalito.foto.url}
              width={528}
              height={433}
            />
          </div>
          <div className="grid grid-cols-2 mr-36 gap-16">
            <p className="font-rubik font-semibold text-[30px] text-black">
              SEXO: {animalito.sexo.toUpperCase()}
            </p>
            <p className="font-rubik font-semibold text-[30px] text-black">
              TAMAÑO: {animalito.tamanhio}
            </p>
            <p className="font-rubik font-semibold text-[30px] text-black">
              EDAD: {animalito.edad}
            </p>
            <p className="font-rubik font-semibold text-[30px] text-black">
              ESTERILIZACIÓN: {animalito.esterilizacion ? "SÍ" : "NO"}
            </p>
            <p className="font-rubik font-semibold text-[30px] text-black">
              LUGAR: {animalito.lugar}
            </p>
            <p className="font-rubik font-semibold text-[30px] text-black">
              PESO: {animalito.peso}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1 ml-10 mt-5">
          <h2 className="font-semibold font-rubik text-[20px] text-black text-left">
            VACUNAS
          </h2>
          <span className="font-semibold font-rubik text-[20px] text-black text-left">
            <PrismicRichText field={animalito.vacunas} />
          </span>
          <h2 className="font-semibold font-rubik text-[20px] text-black text-left">
            DESCRIPCIÓN
          </h2>
          <span className="font-semibold font-rubik text-[20px] text-black text-left">
            <PrismicRichText field={animalito.descripcion} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Info;
