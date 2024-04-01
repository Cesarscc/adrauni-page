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
          <h1 className="w-full text-left font-plusJakartaSans font-extrabold text-[60px] text-[#FF9F00]">
            Informate más acerca de los rescatistas y como apoyarlos.
          </h1>
        </div>
        {indice ? (
          <div className="w-full h-[1100px] p-0.5 mt-28">
            <div className="bg-white h-full">
              <div className="flex">
                <div className="basis-[45%] flex justify-center items-center h-[645px]">
                  <div className="w-[579px] h-[579px] bg-white border-[1px] border-[rgba(73,73,73,0.35)] rounded-[46px] shadow-custom">
                    <div className="flex justify-center items-center h-full">
                      <Image
                        className="h-[400px] object-cover"
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
                <div className="basis-[55%]">
                  <div className="flex flex-col space-y-10 w-full">
                    <div className="mt-10">
                      <h1 className="text-black font-inter font-bold text-[45px] text-center">
                        {rescatistas.data.slices2[indice].primary.nombre}
                      </h1>
                    </div>
                    <div className="grid grid-cols-2 gap-20">
                      <div>
                        <p className="text-black font-inter font-bold text-[45px]">
                          Descripción:
                        </p>
                        <span className="text-[20px] font-plusJakartaSans">
                          <PrismicRichText
                            field={
                              rescatistas.data.slices2[indice].primary
                                .descripcion
                            }
                          />
                        </span>
                      </div>
                      <div>
                        <p className="text-black font-inter font-bold text-[45px]">
                          Contacto:
                        </p>
                        <p className="font-harmattan text-[30px] pl-5">
                          {rescatistas.data.slices2[indice].primary.celular}
                        </p>
                      </div>
                      <div>
                        <p className="text-black font-inter font-bold text-[45px]">
                          Cuenta bancaria:
                        </p>
                        <span className="text-[30px] font-harmattan">
                          <PrismicRichText
                            field={
                              rescatistas.data.slices2[indice].primary
                                .cuentabancaria
                            }
                          />
                        </span>
                      </div>
                      <div className="pr-0">
                        <Image
                          className="h-[350px] object-cover"
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
            <p>Cargando...</p>
          </>
        )}
      </section>
      <section>
        <h1 className="font-plusJakartaSans font-extrabold text-[60px] text-center">
          Casos de rescates: Transformando vidas
        </h1>
        {indice ? (
          <>
            <div>
              <PaginadorCasos
                elementos={rescatistas.data.slices3[indice].items}
                dataFotos={rescatistas.data.slices4[indice].items}
              />
            </div>
          </>
        ) : (
          <p>Cargando</p>
        )}
      </section>
    </>
  );
};

export default CardUid;
