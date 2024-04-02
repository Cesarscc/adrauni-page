import Layout from "@/components/layout";
import ContadorNosotros from "@/components/nosotros/ContadorNosotros";
import Historia from "@/components/nosotros/Historia";
import Portada from "@/components/nosotros/Portada";
import Video from "@/components/nosotros/Video";
import { createClient } from "@/prismicio";
import Image from "next/image";
import React from "react";

const Page = async () => {
  const client = createClient();

  const footerdata = await client.getSingle("footer");
  const navdata = await client.getSingle("navbar");
  const nosotros = await client.getSingle("nosotros");

  return (
    <Layout footerdata={footerdata} navdata={navdata}>
      <main>
        <Portada nosotros={nosotros} />
        <Historia nosotros={nosotros} />
        <section className="my-4 flex flex-col md:flex-row lg:h-[607px]">
          <div className="basis-1/2 flex flex-col justify-center mx-10 lg:mx-0 lg:ml-[5%] order-2 md:order-1">
            <p className="font-acme font-normal text-[15px] sm:text-[20px] md:text-[25px] lg:text-[38px] text-[#000000] w-full md:max-w-[710px]">
              Somos ADRAUNI (Agrupación para la Defensa y Respeto hacia los
              Animales de la Universidad Nacional de Ingeniería), lo conformamos
              alumnos y egresados de todas las facultades de la UNI.
            </p>
            <p className="font-harmattan font-normal text-[10px] sm:text-[18px] md:text-[23px] lg:text-[30px] text-[#666666] w-full md:max-w-[683px] mt-[20px] lg:mt-[65px]">
              Buscamos darle calidad de vida a los perritos y gatitos que viven
              en el UNI, así como concientizar la tenencia responsable de las
              mascotas.
            </p>
          </div>
          <div className="basis-1/2 flex justify-center items-center order-1 md:order-2">
            <p className="font-harmattan font-bold text-[30px] md:text-[50px] lg:text-[100px] text-[#000000] lg:max-w-[768px]">
              ¿QUIÉNES SOMOS?
            </p>
          </div>
        </section>
        <section className="h-[150px] sm:h-[200px] lg:h-[737px] flex justify-center md:mb-32 lg:mb-0">
          <div className="h-[114px] sm:h-[200px] lg:h-[492px]">
            <Video video={nosotros.data.videoadra} />
          </div>
        </section>
        <section className="lg:h-[1220px] bg-[#F6F7F6] mx-5 md:mx-16 my-5 lg:my-20">
          <h1 className="text-center font-harmattan font-bold text-[30px] md:text-[65px] xl:text-[108px] pt-8 md:pt-20 xl:pt-36 sm:pb-10">
            NUESTRA MISIÓN
          </h1>
          <div className="mt-10 lg:mt-40 flex flex-col space-y-10 md:space-y-0 md:flex-row justify-evenly">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#1A8FE3] rounded-full opacity-90 w-[90px] h-[98px] flex items-center justify-center">
                <Image
                  alt={nosotros.data.mision1.alt}
                  src={nosotros.data.mision1.url}
                  width={nosotros.data.mision1.dimensions.width}
                  height={nosotros.data.mision1.dimensions.height}
                />
              </div>
              <p className="max-w-[181px] sm:max-w-[329px] font-plusJakartaSans font-extrabold text-[10px] md:text-[15px] xl:text-[24px] text-[#353535] text-center">
                CUIDADO Y BIENESTAR DE LOS ANIMALES EN LA UNI
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#1A8FE3] rounded-full opacity-90 w-[90px] h-[98px] flex items-center justify-center">
                <Image
                  alt={nosotros.data.mision2.alt}
                  src={nosotros.data.mision2.url}
                  width={nosotros.data.mision2.dimensions.width}
                  height={nosotros.data.mision2.dimensions.height}
                />
              </div>
              <p className="max-w-[181px] sm:max-w-[329px] font-plusJakartaSans font-extrabold text-[10px] md:text-[15px] xl:text-[24px] text-[#353535] text-center">
                PROMOCIÓN DE LA ADOPCIÓN DE ANIMALES
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#1A8FE3] rounded-full opacity-90 w-[90px] h-[98px] flex items-center justify-center">
                <Image
                  alt={nosotros.data.mision3.alt}
                  src={nosotros.data.mision3.url}
                  width={nosotros.data.mision3.dimensions.width}
                  height={nosotros.data.mision3.dimensions.height}
                />
              </div>
              <p className="max-w-[181px] sm:max-w-[356px] font-plusJakartaSans font-extrabold text-[10px] md:text-[15px] xl:text-[24px] text-[#353535] text-center">
                CONCIENTIZACIÓN SOBRE LA TENENCIA RESPONSABLE
              </p>
            </div>
          </div>
          <div className="mt-10 space-y-10 md:space-y-0 pb-10 lg:pb-0 md:mt-16 xl:mt-40 flex flex-col md:flex-row justify-evenly">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#1A8FE3] rounded-full opacity-90 w-[90px] h-[98px] flex items-center justify-center">
                <Image
                  alt={nosotros.data.mision4.alt}
                  src={nosotros.data.mision4.url}
                  width={nosotros.data.mision4.dimensions.width}
                  height={nosotros.data.mision4.dimensions.height}
                />
              </div>
              <p className="max-w-[181px] sm:max-w-[438px] font-plusJakartaSans font-extrabold text-[10px] md:text-[15px] xl:text-[24px] text-[#353535] text-center">
                RECAUDACIÓN DE FONDOS Y RECURSOS
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#1A8FE3] rounded-full opacity-90 w-[90px] h-[98px] flex items-center justify-center">
                <Image
                  alt={nosotros.data.mision5.alt}
                  src={nosotros.data.mision5.url}
                  width={nosotros.data.mision5.dimensions.width}
                  height={nosotros.data.mision5.dimensions.height}
                />
              </div>
              <p className="max-w-[181px] sm:max-w-[312px] font-plusJakartaSans font-extrabold text-[10px] md:text-[15px] xl:text-[24px] text-[#353535] text-center">
                APOYO EMOCIONAL PARA LOS MIEMBROS
              </p>
            </div>
          </div>
        </section>
        <section className="relative my-5 lg:my-20 xl:my-32">
          <p className="w-full font-hammersmith font-normal text-[25px] md:text-[40px] lg:text-[50px] text-[#071837] text-center">
            ¿CUANTOS ANIMALITOS TENEMOS?
          </p>
          <ContadorNosotros />
        </section>
      </main>
    </Layout>
  );
};

export default Page;
