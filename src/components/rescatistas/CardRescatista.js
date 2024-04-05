import Image from "next/image";
import React from "react";
import { PrismicRichText } from "@prismicio/react";

const CardRescatista = ({ cardData, indice }) => {
  const handleClick = () => {
    localStorage.setItem("indice", JSON.stringify(indice));
  };

  return (
    <div className="bg-gradient-to-b from-[#FEDC48] to bg-[#1CB567] p-0.5 shadow-xl 2xl:w-[1390px] h-full xl:h-[645px]">
      <div className="bg-white h-full pb-5">
        <div className="flex flex-col lg:flex-row">
          <div className="basis-1/2 flex justify-center items-center h-[645px]">
            <div className="w-[43vw] h-[43vw] lg:w-[483px] lg:h-[579px] bg-white border-[1px] border-[rgba(73,73,73,0.35)] rounded-[16px] xl:rounded-[46px] shadow-custom mt-10 sm:mt-8">
              <div className="flex justify-center items-center h-full">
                <Image
                  className="w-[35vw] h-[35vw] lg:w-[432px] lg:h-[400px] object-cover"
                  src={cardData.primary.fotoprofile.url}
                  alt={cardData.primary.fotoprofile.alt}
                  width={432}
                  height={400}
                />
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <div className="flex flex-col space-y-3 lg:space-y-16 w-full xl:max-w-[677px]">
              <div className="mt-10 sm:mt-5 lg:mt-10">
                <h1 className="text-black font-inter font-bold text-[12px] sm:text-[16px] md:text-[20px] lg:text-[25px] text-center">
                  {cardData.primary.nombre}
                </h1>
              </div>
              <div className="mx-[10vw] md:mx-0 md:ml-[15vw] lg:ml-4 xl:ml-0">
                <p className="text-black font-inter font-bold text-[12px] sm:text-[16px] md:text-[20px] lg:text-[25px]">
                  Descripción:
                </p>
                <span className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
                  <PrismicRichText field={cardData.primary.descripcion} />
                </span>
              </div>
              <div className="mx-[10vw] md:mx-0 md:ml-[15vw] lg:ml-4 xl:ml-0">
                <p className="text-black font-inter font-bold text-[12px] sm:text-[16px] md:text-[20px] lg:text-[25px]">
                  Contacto:
                </p>
                <p className="text-[10px] sm:text-[14px] md:text-[15px] lg:text-[16px]">
                  {cardData.primary.celular}
                </p>
              </div>
              <div className="mx-[10vw] md:mx-0 md:ml-[15vw] lg:ml-4 xl:ml-0">
                <p className="text-black font-inter font-bold text-[12px] sm:text-[16px] md:text-[20px] lg:text-[25px]">
                  Cuenta bancaria:
                </p>
                <span className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
                  <PrismicRichText field={cardData.primary.cuentabancaria} />
                </span>
              </div>
            </div>
            <div className="flex justify-end mr-8 lg:mt-5">
              <a
                onClick={handleClick}
                href={`/rescatistas/${cardData.primary.uid}`}
                className="font-acme text-[10px] sm:text-[14px] md:text-[18px] text-white w-[59px] h-[18px] sm:w-[100px] sm:h-[35px] md:w-[162px] md:h-[48px] bg-[#FEBF48] rounded-[60px] flex items-center justify-center"
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
