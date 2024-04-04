import Layout from "@/components/layout";
import { createClient } from "@/prismicio";
import Image from "next/image";
import React from "react";
import { PrismicRichText } from "@prismicio/react";

const Page = async () => {
  const client = createClient();

  const footerdata = await client.getSingle("footer");
  const navdata = await client.getSingle("navbar");
  const donaciones = await client.getSingle("donaciones");

  return (
    <Layout footerdata={footerdata} navdata={navdata}>
      <section className="lg:max-h-[939px] flex my-10 md:my-20 lg:my-24">
        <div className="relative">
          <Image
            className="inset-0 w-full h-full object-cover"
            alt={donaciones.data.fondocirculos.alt}
            src={donaciones.data.fondocirculos.url}
            width={994}
            height={939}
          />
          <div className="absolute top-5 lg:top-20 transform xl:translate-x-[15%] 2xl:translate-x-[20%] ">
            <p className="font-plusJakartaSans font-extrabold text-[#353535] text-[25px] sm:text-[6.5vw] xl:text-[70px] pl-1 xl:pl-0">
              Donar es hacer la
            </p>
            <p className="font-plusJakartaSans font-extrabold text-[#FFBD59] opacity-[0.8353] text-[25px] sm:text-[6.5vw] xl:text-[70px] pl-1 xl:pl-0">
              Diferencia.
            </p>
            <div className="max-w-[581px] text-[10px] sm:text-[2.5vw] lg:text-[24px] mt-10 lg:mt-24 pl-1">
              <PrismicRichText field={donaciones.data.textportada} />
            </div>
          </div>
        </div>
        <div className="relative">
          <div>
            <Image
              className="transform lg:-translate-x-[15%] translate-y-[10%]"
              src={donaciones.data.formvectorgato.url}
              alt={donaciones.data.formvectorgato.alt}
              width={626}
              height={611}
            />
          </div>
          <div className="absolute left-8 sm:left-0 top-0">
            <Image
              className="w-[40vw] h-[60vw] sm:w-auto sm:h-auto"
              src={donaciones.data.gatoportada.url}
              alt={donaciones.data.gatoportada.alt}
              width={400}
              height={700}
            />
          </div>
        </div>
      </section>
      <section className="lg:h-[1700px] flex flex-col items-center mx-1 lg:mx-4 border-[1px] border-[#F49606] py-5 lg:py-20">
        <h1 className="font-plusJakartaSans font-extrabold text-[25px] lg:text-[60px] text-[#FF9F00] text-center">
          TRANSFERENCIAS BANCARIAS
        </h1>
        <div className="flex justify-between my-20 lg:my-40 w-full">
          <div className="basis-1/2 flex flex-col justify-center items-center">
            <div className="w-[25vw] h-[25vw] lg:max-w-[791] lg:max-h-[785] overflow-hidden">
              <Image
                src={donaciones.data.yapeicono.url}
                alt={donaciones.data.yapeicono.alt}
                width={236}
                height={214}
              />
            </div>
            <p className="font-harmattan text-[15px] sm:text-[3vw] 2xl:text-[75px] text-black">
              Yape: 949 771 031
            </p>
          </div>
          <div className="basis-1/2">
            <div className="w-[45vw] h-[45vw] lg:max-w-[791] lg:max-h-[785] overflow-hidden">
              <Image
                src={donaciones.data.yapeqr.url}
                alt={donaciones.data.yapeqr.alt}
                width={791}
                height={785}
              />
            </div>
            <p className="font-plusJakartaSans font-extrabold text-[10px] sm:text-[2.5vw] 2xl:text-[65px] text-[#353535] text-center">
              ESCANEA EL QR Y HAZ TUS DONACIONES!
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <Image
              className="w-[35vw] h-[28vw]"
              src={donaciones.data.logobcp.url}
              alt={donaciones.data.logobcp.alt}
              width={480}
              height={224}
            />
          </div>
          <div className="ml-5 mt-[7vw] lg:ml-40 ">
            <p className="font-harmattan text-[15px] sm:text-[3.5vw] xl:text-[60px] text-black">
              BCP: 19172767079097
            </p>
            <p className="font-harmattan text-[15px] sm:text-[3.5vw] xl:text-[60px] text-black">
              CCI: 00219117276707909758
            </p>
          </div>
        </div>
      </section>
      <section className="py-5 lg:h-[805px] w-full mt-32">
        <h1 className="font-plusJakartaSans font-extrabold text-[25px] sm:text-[5vw] xl:text-[75px] text-[#FF9F00] text-center">
          También nos puedes donar:
        </h1>
        <div className="flex flex-col lg:flex-row gap-9 lg:gap-5 xl:gap-9 justify-around items-center pt-9 mt-10 lg:mt-36 lg:h-[479px] mx-4 border-[1px] border-[#F49606]">
          <div>
            <Image
              className="w-[25vw] h-[25vw] lg:w-[10vw] lg:h-[10vw]"
              src={donaciones.data.donacion1.url}
              alt={donaciones.data.donacion1.alt}
              width={189}
              height={189}
            />
            <p className="font-harmattan text-[20px] sm:text-[30px] xl:text-[45px] text-black text-center">
              Comida
            </p>
          </div>
          <div>
            <Image
              className="w-[25vw] h-[25vw] lg:w-[10vw] lg:h-[10vw]"
              src={donaciones.data.donacion2.url}
              alt={donaciones.data.donacion2.alt}
              width={189}
              height={189}
            />
            <p className="font-harmattan text-[20px] sm:text-[30px] xl:text-[45px] text-black text-center">
              Medicamentos
            </p>
          </div>
          <div className="flex flex-col items-center mt-8 lg:mt-20">
            <Image
              className="w-[25vw] h-[25vw] lg:w-[10vw] lg:h-[10vw]"
              src={donaciones.data.donacion3.url}
              alt={donaciones.data.donacion3.alt}
              width={189}
              height={189}
            />
            <p className="lg:max-w-[250px] xl:max-w-[500px] font-harmattan text-[20px] sm:text-[30px] xl:text-[45px] text-black text-center">
              Elementos de descanso para las mascotas
            </p>
          </div>
          <div className="flex flex-col mt-8 lg:mt-10">
            <div className="flex">
              <Image
                className="w-[25vw] h-[25vw] lg:w-[10vw] lg:h-[10vw]"
                src={donaciones.data.donacion4.url}
                alt={donaciones.data.donacion4.alt}
                width={142}
                height={142}
              />
              <Image
                className="w-[25vw] h-[25vw] lg:w-[10vw] lg:h-[10vw]"
                src={donaciones.data.donacion5.url}
                alt={donaciones.data.donacion5.alt}
                width={142}
                height={142}
              />
            </div>
            <div>
              <p className="font-harmattan text-[20px] sm:text-[30px] xl:text-[45px] text-black text-center">
                Articulos varios
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 sm:py-16 md:py-20 lg:h-[595px] bg-[#F49606] flex flex-col justify-center items-center gap-14">
        <p className="font-harmattan text-[19px] sm:text-[25px] md:text-[35px] lg:text-[50px] xl:text-[60px] text-white">
          Consultas acerca de las donaciones contactar con:
        </p>
        <p className="font-harmattan text-[19px] sm:text-[25px] md:text-[35px] lg:text-[50px] xl:text-[60px] text-white">
          Angelly Liseth Llamocca Torres
        </p>
        <p className="font-harmattan text-[19px] sm:text-[25px] md:text-[35px] lg:text-[50px] xl:text-[60px] text-white">
          Contacto: 983449774
        </p>
      </section>
      <section className="mt-24 mb-20 lg:mb-44">
        <div className="flex justify-center">
          <h1 className="font-plusJakartaSans font-extrabold text-[25px] sm:text-[35px] md:text-[45px] lg:text-[68px] text-black text-center max-w-[1110px]">
            ¿Cómo se usan todas las donanciones que ingresan?
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row mt-10 lg:mt-36 mx-10 lg:mx-5 xl:mx-10">
          <div className="w-full xl:basis-2/3">
            <Image
              src={donaciones.data.grafica.url}
              alt={donaciones.data.grafica.alt}
              width={750}
              height={573}
            />
          </div>
          <div className="flex flex-col space-y-5 lg:space-y-10 xl:space-y-20 basis-1/2 xl:basis-1/3 lg:mt-[5vw] xl:mt-0">
            <p className="font-plusJakartaSans font-semibold text-[10px] sm:text-[15px] md:text-[21px] lg:text-[17px] xl:text-[25px]">
              Alimento: Es toda la comida de perro y gato, aquí se incluye
              comida especila de algunos perritos viejos con problemas renales,
              la cual es necesaria para mantener un buen estado de salud.
            </p>
            <p className="font-plusJakartaSans font-semibold text-[10px] sm:text-[15px] md:text-[21px] lg:text-[17px] xl:text-[25px]">
              Veterinaria: Las visitas médicas, así como exámenes médicos
              (rutinarios o de emergencia), cirugías, etc.{" "}
            </p>
            <p className="font-plusJakartaSans font-semibold text-[10px] sm:text-[15px] md:text-[21px] lg:text-[17px] xl:text-[25px]">
              Medicinas: Algunos de nuestros perritos requieren de medicina de
              manera vitalicia por problemas crónicos.
            </p>
            <p className="font-plusJakartaSans font-semibold text-[10px] sm:text-[15px] md:text-[21px] lg:text-[17px] xl:text-[25px]">
              Higiene: Son antipulgas, shampoo, etc.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Page;
