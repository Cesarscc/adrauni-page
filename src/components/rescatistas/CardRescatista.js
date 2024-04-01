import Image from "next/image";
import React from "react";
import { PrismicRichText } from "@prismicio/react";

const CardRescatista = ({ cardData, indice }) => {
  const handleClick = () => {
    localStorage.setItem("indice", JSON.stringify(indice));
  };

  return (
    <div className="bg-gradient-to-b from-[#FEDC48] to bg-[#1CB567] p-0.5 shadow-xl w-[1390px] h-[645px]">
      <div className="bg-white h-full">
        <div className="flex">
          <div className="basis-1/2 flex justify-center items-center h-[645px]">
            <div className="w-[483px] h-[579px] bg-white border-[1px] border-[rgba(73,73,73,0.35)] rounded-[46px] shadow-custom">
              <div className="flex justify-center items-center h-full">
                <Image
                  className="h-[400px] object-cover"
                  src={cardData.primary.fotoprofile.url}
                  alt={cardData.primary.fotoprofile.alt}
                  width={432}
                  height={400}
                />
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <div className="flex flex-col space-y-16 max-w-[677px]">
              <div className="mt-10">
                <h1 className="text-black font-inter font-bold text-[25px] text-center">
                  {cardData.primary.nombre}
                </h1>
              </div>
              <div>
                <p className="text-black font-inter font-bold text-[25px]">
                  Descripción:
                </p>
                <span>
                  <PrismicRichText field={cardData.primary.descripcion} />
                </span>
              </div>
              <div>
                <p className="text-black font-inter font-bold text-[25px]">
                  Contacto:
                </p>
                <p>{cardData.primary.celular}</p>
              </div>
              <div>
                <p className="text-black font-inter font-bold text-[25px]">
                  Cuenta bancaria:
                </p>
                <span>
                  <PrismicRichText field={cardData.primary.cuentabancaria} />
                </span>
              </div>
            </div>
            <div className="flex justify-end mr-8 mt-5">
              <a
                onClick={handleClick}
                href={`/rescatistas/${cardData.primary.uid}`}
                className="font-acme text-[18px] text-white w-[162px] h-[48px] bg-[#FEBF48] rounded-[60px] flex items-center justify-center"
              >
                Ver Casos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRescatista;
