import Layout from "@/components/layout";
import ContadorNosotros from "@/components/nosotros/ContadorNosotros";
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
        <section className="relative my-16">
          <div className="absolute z-20 -top-16">
            <Image
              alt={nosotros.data.imagedecorizq.alt}
              src={nosotros.data.imagedecorizq.url}
              width={130}
              height={562}
            />
          </div>
          <div className="absolute z-20 right-0 bottom-0">
            <Image
              alt={nosotros.data.imagedecorder.alt}
              src={nosotros.data.imagedecorder.url}
              width={130}
              height={562}
            />
          </div>
          <div className="w-full h-[510px] relative overflow-hidden">
            <Image
              className="brightness-50"
              alt={nosotros.data.imageorg.alt}
              src={nosotros.data.imageorg.url}
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <div className="absolute left-[18.5%] top-32">
              <p className="font-bold text-[90px] font-harmattan text-[#FFFFFF]">
                NUESTRA
              </p>
              <p className="font-bold text-[90px] font-harmattan text-[#FFFFFF] ml-20">
                ORGANIZACIÓN
              </p>
              <div className="flex gap-5">
                <hr className="h-2 bg-[#F97700] w-[120px] border-0" />
                <hr className="h-2 bg-[#1CB567] w-[35px] border-0" />
              </div>
            </div>
          </div>
        </section>
        <section className="my-16 bg-[#F6F7F6] h-[808px] flex mx-10">
          <div className="basis-1/2 relative mx-10">
            <Image
              className="absolute z-10 w-full h-full"
              alt={nosotros.data.imagehistoriafondo.alt}
              src={nosotros.data.imagehistoriafondo.url}
              width={682}
              height={682}
            />
            <div className="absolute z-20 w-[472px] h-[477.33px] top-[123px] left-16">
              <Image
                className="rounded-[36px] object-cover"
                alt={nosotros.data.imagehistoria1.alt}
                src={nosotros.data.imagehistoria1.url}
                fill
              />
            </div>
            <div className="absolute z-30 w-[363px] h-[360px] right-2 bottom-[46px]">
              <Image
                className="object-cover rounded-[26px]"
                alt={nosotros.data.imagehistoria2.alt}
                src={nosotros.data.imagehistoria2.url}
                fill
                style={{ objectPosition: "50% 80%" }}
              />
            </div>
          </div>
          <div className="basis-1/2">
            <div className="mt-[137px]">
              <span className="font-bold font-harmattan text-[79px] text-[#071837]">
                HISTORIA
              </span>
              <p className="font-bold font-harmattan text-[18px] text-[#666666] w-[550px] text-left">
                It gives us great pleasure to introduce to you the Maatram
                Educational and Charitable Trust. We are a group of friends
                whose ideal in life is to help where we can, how we can and
                whenever we can. This help is focussed towards the poor and the
                needy who live among us within our society and endeavours to
                bring about a change in their life - a &quot;MAATRAM&ldquo;.
                <br />
                <br />
                This is a organisation run by volunteers who are sincere and
                well established professionals and who are interested to see
                that every bit of donations reach the needy and brilliant
                students, without which, they would have perished in the
                darkness of the Social abyss.
                <br /> <br />
                We are extremely gratefull for your kindness and the generosity
                of your donation. With your kind co-operation and support we are
                Locating bright and needy students from the rural areas and
                arranging to give them financial assistance for higher studies.
                Provides food, shelter, clothing and medical aid coupled with
                love and affection for old age People.
              </p>
            </div>
          </div>
        </section>
        <section className="my-4 flex h-[607px]">
          <div className="basis-1/2 ml-[5%]">
            <p className="font-acme font-normal text-[38px] text-[#000000] max-w-[710px]">
              Somos ADRAUNI (Agrupación para la Defensa y Respeto hacia los
              Animales de la Universidad Nacional de Ingeniería), lo conformamos
              alumnos y egresados de todas las facultades de la UNI.
            </p>
            <p className="font-harmattan font-normal text-[30px] text-[#666666] max-w-[683px] mt-[65px]">
              Buscamos darle calidad de vida a los perritos y gatitos que viven
              en el UNI, así como concientizar la tenencia responsable de las
              mascotas.
            </p>
          </div>
          <div className="basis-1/2 flex items-center">
            <p className="font-harmattan font-bold text-[100px] text-[#000000] max-w-[768px]">
              ¿QUIÉNES SOMOS?
            </p>
          </div>
        </section>
        <section className="h-[737px] flex justify-center">
          <div className="h-[492px]">
            <Video video={nosotros.data.videoadra} />
          </div>
        </section>
        <section className="h-[1220px] bg-[#F6F7F6] mx-16 my-20">
          <h1 className="text-center font-harmattan font-bold text-[108px] pt-36 pb-10">
            NUESTRA MISIÓN
          </h1>
          <div className="mt-40 flex justify-evenly">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#1A8FE3] rounded-full opacity-90 w-[90px] h-[98px] flex items-center justify-center">
                <Image
                  alt={nosotros.data.mision1.alt}
                  src={nosotros.data.mision1.url}
                  width={nosotros.data.mision1.dimensions.width}
                  height={nosotros.data.mision1.dimensions.height}
                />
              </div>
              <p className="max-w-[329px] font-plusJakartaSans font-extrabold text-[24px] text-[#353535] text-center">
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
              <p className="max-w-[329px] font-plusJakartaSans font-extrabold text-[24px] text-[#353535] text-center">
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
              <p className="max-w-[356px] font-plusJakartaSans font-extrabold text-[24px] text-[#353535] text-center">
                CONCIENTIZACIÓN SOBRE LA TENENCIA RESPONSABLE
              </p>
            </div>
          </div>
          <div className="mt-40 flex justify-evenly">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#1A8FE3] rounded-full opacity-90 w-[90px] h-[98px] flex items-center justify-center">
                <Image
                  alt={nosotros.data.mision4.alt}
                  src={nosotros.data.mision4.url}
                  width={nosotros.data.mision4.dimensions.width}
                  height={nosotros.data.mision4.dimensions.height}
                />
              </div>
              <p className="max-w-[438px] font-plusJakartaSans font-extrabold text-[24px] text-[#353535] text-center">
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
              <p className="max-w-[312px] font-plusJakartaSans font-extrabold text-[24px] text-[#353535] text-center">
                APOYO EMOCIONAL PARA LOS MIEMBROS
              </p>
            </div>
          </div>
        </section>
        <section className="relative my-32">
          <p className="w-full font-hammersmith font-normal text-[50px] text-[#071837] text-center">
            ¿CUANTOS ANIMALITOS TENEMOS?
          </p>
          <ContadorNosotros />
        </section>
      </main>
    </Layout>
  );
};

export default Page;
