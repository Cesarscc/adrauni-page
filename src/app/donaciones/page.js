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
      <section className="max-h-[939px] flex my-24">
        <div className="relative">
          <Image
            className="inset-0 w-full h-full object-cover"
            alt={donaciones.data.fondocirculos.alt}
            src={donaciones.data.fondocirculos.url}
            width={994}
            height={939}
          />
          <div className="absolute top-20 transform translate-x-1/2">
            <p className="font-plusJakartaSans font-extrabold text-[#353535] text-[70px]">
              Donar es hacer la
            </p>
            <p className="font-plusJakartaSans font-extrabold text-[#FFBD59] opacity-[0.8353] text-[70px]">
              Diferencia.
            </p>
            <div className="max-w-[581px] mt-24">
              <PrismicRichText field={donaciones.data.textportada} />
            </div>
          </div>
        </div>
        <div className="relative">
          <div>
            <Image
              className="transform -translate-x-[15%] translate-y-[10%]"
              src={donaciones.data.formvectorgato.url}
              alt={donaciones.data.formvectorgato.alt}
              width={626}
              height={611}
            />
          </div>
          <div className="absolute top-0">
            <Image
              src={donaciones.data.gatoportada.url}
              alt={donaciones.data.gatoportada.alt}
              width={400}
              height={700}
            />
          </div>
        </div>
      </section>
      <section>
        <h1 className="font-plusJakartaSans font-extrabold text-[60px] text-[#FF9F00] text-center">
          TRANSFERENCIAS BANCARIAS
        </h1>
        <div className="flex my-40 mx-5">
          <div className="basis-1/2 flex flex-col items-center">
            <div className="max-w-[791] max-h-[785] overflow-hidden">
              <Image
                src={donaciones.data.yapeicono.url}
                alt={donaciones.data.yapeicono.alt}
                width={236}
                height={214}
              />
            </div>
            <p className="font-harmattan text-[75px] text-black">
              Yape: 949 771 031
            </p>
          </div>
          <div className="basis-1/2">
            <div className="max-w-[791] max-h-[785] overflow-hidden">
              <Image
                src={donaciones.data.yapeqr.url}
                alt={donaciones.data.yapeqr.alt}
                width={791}
                height={785}
              />
            </div>
            <p className="font-plusJakartaSans font-extrabold text-[65px] text-[#353535] text-left">
              ESCANEA EL QR Y HAZ TUS DONACIONES!
            </p>
          </div>
        </div>
      </section>
      <section className="h-[842px] flex items-center mx-4 border-[1px] border-[#F49606]">
        <div>
          <Image
            src={donaciones.data.logobcp.url}
            alt={donaciones.data.logobcp.alt}
            width={480}
            height={224}
          />
        </div>
        <div className="ml-40 mt-10">
          <p className="font-harmattan text-[60px] text-black">
            BCP: 19172767079097
          </p>
          <p className="font-harmattan text-[60px] text-black">
            CCI: 00219117276707909758
          </p>
        </div>
      </section>
      <section className="h-[805px] w-full mt-32">
        <h1 className="font-plusJakartaSans font-extrabold text-[75px] text-[#FF9F00] text-center">
          También nos puedes donar:
        </h1>
        <div className="flex justify-around items-center mt-36 h-[479px] mx-4 border-[1px] border-[#F49606]">
          <div>
            <Image
              src={donaciones.data.donacion1.url}
              alt={donaciones.data.donacion1.alt}
              width={189}
              height={189}
            />
            <p className="font-harmattan text-[45px] text-black text-center">
              Comida
            </p>
          </div>
          <div>
            <Image
              src={donaciones.data.donacion2.url}
              alt={donaciones.data.donacion2.alt}
              width={189}
              height={189}
            />
            <p className="font-harmattan text-[45px] text-black text-center">
              Medicamentos
            </p>
          </div>
          <div className="flex flex-col items-center mt-20">
            <Image
              src={donaciones.data.donacion3.url}
              alt={donaciones.data.donacion3.alt}
              width={189}
              height={189}
            />
            <p className="max-w-[500px] font-harmattan text-[45px] text-black text-center">
              Elementos de descanso para las mascotas
            </p>
          </div>
          <div className="flex flex-col mt-10">
            <div className="flex">
              <Image
                src={donaciones.data.donacion4.url}
                alt={donaciones.data.donacion4.alt}
                width={142}
                height={142}
              />
              <Image
                src={donaciones.data.donacion5.url}
                alt={donaciones.data.donacion5.alt}
                width={142}
                height={142}
              />
            </div>
            <div>
              <p className="font-harmattan text-[45px] text-black text-center">
                Articulos varios
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[595px] bg-[#F49606] flex flex-col justify-center items-center gap-14">
        <p className="font-harmattan text-[60px] text-white">
          Consultas acerca de las donaciones contactar con:
        </p>
        <p className="font-harmattan text-[60px] text-white">
          Angelly Liseth Llamocca Torres
        </p>
        <p className="font-harmattan text-[60px] text-white">
          Contacto: 983449774
        </p>
      </section>
      <section className="mt-24 mb-44">
        <div className="flex justify-center">
          <h1 className="font-plusJakartaSans font-extrabold text-[68px] text-black text-center max-w-[1110px]">
            ¿Cómo se usan todas las donanciones que ingresan?
          </h1>
        </div>
        <div className="flex mt-36 mx-10">
          <div className="basis-1/2">
            <Image
              src={donaciones.data.grafica.url}
              alt={donaciones.data.grafica.alt}
              width={750}
              height={573}
            />
          </div>
          <div className="flex flex-col space-y-20 basis-1/2">
            <p className="font-plusJakartaSans font-semibold text-[25px]">
              Alimento: Es toda la comida de perro y gato, aquí se incluye
              comida especila de algunos perritos viejos con problemas renales,
              la cual es necesaria para mantener un buen estado de salud.
            </p>
            <p className="font-plusJakartaSans font-semibold text-[25px]">
              Veterinaria: Las visitas médicas, así como exámenes médicos
              (rutinarios o de emergencia), cirugías, etc.{" "}
            </p>
            <p className="font-plusJakartaSans font-semibold text-[25px]">
              Medicinas: Algunos de nuestros perritos requieren de medicina de
              manera vitalicia por problemas crónicos.
            </p>
            <p className="font-plusJakartaSans font-semibold text-[25px]">
              Higiene: Son antipulgas, shampoo, etc.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Page;
