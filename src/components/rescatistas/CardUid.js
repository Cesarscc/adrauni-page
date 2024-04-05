"use client";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import PaginadorCasos from "./PaginadorCasos";

const CardUid = ({ rescatistas }) => {
  const [indice, setIndice] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("indice");
    if (storedData) {
      setIndice(storedData);
    }
  }, []);

  return (
    <>
      <section>
        <div className="mx-16">
          <h1 className="w-full text-left font-plusJakartaSans font-extrabold text-[15px] sm:text-[25px] md:text-[35px] lg:text-[45px] xl:text-[55px] 2xl:text-[60px] text-[#FF9F00]">
            Informate más acerca de los rescatistas y como apoyarlos.
          </h1>
        </div>
        {indice ? (
          <div className="w-full xl:h-[1000px] 2xl:h-[1100px] p-0.5 mt-5 md:mt-10 lg:mt-20 2xl:mt-28">
            <div className="bg-white h-full">
              <div className="flex flex-col xl:flex-row">
                <div className="xl:basis-[45%] flex justify-center items-center xl:h-[645px]">
                  <div className="w-[58vw] h-[58vw] xl:w-[579px] xl:h-[579px] bg-white border-[1px] border-[rgba(73,73,73,0.35)] rounded-[14px] lg:rounded-[46px] shadow-custom">
                    <div className="flex justify-center items-center h-full">
                      <Image
                        className="w-[47vw] h-[47vw] lg:w-[432px] lg:h-[400px] object-cover"
                        src={
                          rescatistas.data.slices2[indice].primary.fotoprofile
                            .url
                        }
                        alt={
                          rescatistas.data.slices2[indice].primary.fotoprofile
                            .alt
                        }
                        width={432}
                        height={400}
                      />
                    </div>
                  </div>
                </div>
                <div className="xl:basis-[55%]">
                  <div className="flex flex-col space-y-4 lg:space-y-10 xl:space-y-5 2xl:space-y-10 w-full">
                    <div className="mt-5 lg:mt-10">
                      <h1 className="text-black font-inter font-bold text-[12px] sm:text-[24px] md:text-[32px] lg:text-[45px] text-center">
                        {rescatistas.data.slices2[indice].primary.nombre}
                      </h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 xl:gap-5 2xl:gap-20 ml-[10vw] xl:ml-10">
                      <div>
                        <p className="text-black font-inter font-bold text-[12px] sm:text-[20px] md:text-[30px] lg:text-[45px]">
                          Descripción:
                        </p>
                        <span className="text-[8px] sm:text-[15px] md:text-[17px] lg:text-[20px] font-plusJakartaSans">
                          <PrismicRichText
                            field={
                              rescatistas.data.slices2[indice].primary
                                .descripcion
                            }
                          />
                        </span>
                      </div>
                      <div>
                        <p className="text-black font-inter font-bold text-[12px] sm:text-[20px] md:text-[30px] lg:text-[45px]">
                          Contacto:
                        </p>
                        <p className="font-harmattan text-[10px] sm:text-[20px] md:text-[25px] lg:text-[30px] lg:pl-5">
                          {rescatistas.data.slices2[indice].primary.celular}
                        </p>
                      </div>
                      <div className="flex justify-between md:hidden mr-5">
                        <div>
                          <p className="text-black font-inter font-bold text-[12px] sm:text-[20px] lg:text-[45px]">
                            Cuenta bancaria:
                          </p>
                          <span className="text-[10px] sm:text-[20px] lg:text-[30px] font-harmattan">
                            <PrismicRichText
                              field={
                                rescatistas.data.slices2[indice].primary
                                  .cuentabancaria
                              }
                            />
                          </span>
                        </div>
                        <div className="pr-0 -mt-10">
                          <Image
                            className="w-[35vw] h-[35vw] lg:h-[350px] object-cover"
                            src={
                              rescatistas.data.slices2[indice].primary.yapeqr
                                .url
                            }
                            alt={
                              rescatistas.data.slices2[indice].primary.yapeqr
                                .alt
                            }
                            width={350}
                            height={350}
                          />
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <p className="text-black font-inter font-bold text-[12px] sm:text-[20px] md:text-[25px] lg:text-[45px]">
                          Cuenta bancaria:
                        </p>
                        <span className="text-[10px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-harmattan">
                          <PrismicRichText
                            field={
                              rescatistas.data.slices2[indice].primary
                                .cuentabancaria
                            }
                          />
                        </span>
                      </div>
                      <div className="hidden md:block pr-0 -mt-10 xl:mt-0">
                        <Image
                          className="w-[35vw] h-[35vw] lg:w-[350px] lg:h-[350px] object-cover"
                          src={
                            rescatistas.data.slices2[indice].primary.yapeqr.url
                          }
                          alt={
                            rescatistas.data.slices2[indice].primary.yapeqr.alt
                          }
                          width={350}
                          height={350}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <p className="text-center font-extrabold font-plusJakartaSans text-[20px]">
              Cargando...
            </p>
          </>
        )}
      </section>
      <section className="mt-10 xl:mt-0">
        {indice ? (
          <>
            <h1 className="font-plusJakartaSans font-extrabold text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-center">
              Casos de rescates: Transformando vidas
            </h1>
            <div>
              <PaginadorCasos
                elementos={rescatistas.data.slices3[indice].items}
                dataFotos={rescatistas.data.slices4[indice].items}
              />
            </div>
          </>
        ) : (
          <></>
        )}
      </section>
    </>
  );
};

export default CardUid;
