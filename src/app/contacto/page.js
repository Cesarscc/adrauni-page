import Layout from "@/components/layout";
import { createClient } from "@/prismicio";
import Image from "next/image";
import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Mail from "@/assets/Mail";
import Phone from "@/assets/Phone";
import FbContacto from "@/assets/FbContacto";
import IgContacto from "@/assets/IgContacto";

const Page = async () => {
  const client = createClient();

  const footerdata = await client.getSingle("footer");
  const navdata = await client.getSingle("navbar");
  const contacto = await client.getSingle("contacto");

  return (
    <Layout footerdata={footerdata} navdata={navdata}>
      <section className="relative my-20">
        <div className="bg-white filter brightness-[0.6] h-[42vw] lg:h-[691px] flex items-center">
          <div className="grid grid-cols-3 gap-3 md:gap-5 h-[40vw] lg:h-[590px]">
            <Image
              className="inset-0 w-[40vw] h-[40vw] lg:w-full lg:h-full object-cover"
              src={contacto.data.portada1.url}
              alt={contacto.data.portada1.alt}
              width={500}
              height={590}
              style={{ objectPosition: "35% 50%" }}
            />
            <Image
              className="inset-0 w-[40vw] h-[40vw] lg:w-full lg:h-full object-cover"
              src={contacto.data.portada2.url}
              alt={contacto.data.portada2.alt}
              width={500}
              height={590}
            />
            <Image
              className="inset-0 w-[40vw] h-[40vw] lg:w-full lg:h-full object-cover"
              src={contacto.data.portada3.url}
              alt={contacto.data.portada3.alt}
              width={500}
              height={590}
              style={{ objectPosition: "25% 50%" }}
            />
          </div>
        </div>
        <div className="absolute top-[40%] transform translate-x-[10vw] md:translate-x-[10vw] max-w-[60vw] sm:max-w-[70vw] md:max-w-[80vw] lg:max-w-[85vw] 2xl:max-w-[1310px]">
          <strong className="font-plusJakartaSans font-extrabold text-[3vw] sm:text-[3.5vw] md:text-[4vw] 2xl:text-[68px] text-white">
            Comunicate con nosotros para crear{" "}
          </strong>
          <strong className="font-plusJakartaSans font-extrabold text-[3vw] sm:text-[3.5vw] md:text-[4vw] 2xl:text-[68px] text-[#FF9F00]">
            un mundo mejor para los animalitos!
          </strong>
        </div>
      </section>
      <section className="my-12 lg:my-44">
        <h1 className="my-10 lg:my-40 text-center font-plusJakartaSans font-extrabold text-[25px] sm:text-[40px] md:text-[60px] lg:text-[80px] text-[#FF9F00]">
          CONTÁCTANOS
        </h1>
        <div className="flex">
          <div className="basis-1/2 lg:w-1/2">
            <Image
              className="inset-0 w-[60vw] h-[60vw] lg:w-full lg:h-full object-cover"
              src={contacto.data.contactofoto.url}
              alt={contacto.data.contactofoto.alt}
              width={847}
              height={827}
              style={{ objectPosition: "60% 50%" }}
            />
          </div>
          <div className="bg-[#D3E4F6] lg:h-[828px] basis-1/2">
            <h2 className="font-plusJakartaSans font-extrabold text-[10px] sm:text-[20px] md:text-[40px] lg:text-[68px] text-center text-black 2xl:w-[862px] my-[8vw] md:my-[5vw] lg:my-28">
              ¿Tienes alguna pregunta?
            </h2>
            <div className="flex flex-col 2xl:flex-row md:justify-around items-center mt-[8vw] lg:mt-32">
              <div className="flex flex-col items-center gap-5 lg:gap-20">
                <div className="flex lg:ml-10 items-center gap-5">
                  <p>
                    <Mail />
                  </p>
                  <p className="text-[8px] sm:text-[12px] md:text-[16px] lg:text-[20px] font-poppins font-medium">
                    <a href="mailto:adrauni@gmail.com">adrauni@gmail.com</a>
                  </p>
                </div>
                <div className="flex justify-center items-center lg:pl-5 div-custom-contacto w-[123px] sm:w-[175px] md:w-[220px] lg:w-[451px] lg:h-[78px] border-[3px] border-[#F49606] rounded-[16px]">
                  <p className="">
                    <Phone />
                  </p>
                  <p className="ml-2 lg:ml-5 font-poppins font-medium text-[8px] sm:text-[12px] md:text-[16px] lg:text-[20px] text-white">
                    +123 456 789
                  </p>
                </div>
              </div>
              <div className="flex gap-2 md:gap-5 mt-[10vw] lg:mt-20">
                <a href="https://www.facebook.com/adrauni" target="_blank">
                  <FbContacto />
                </a>
                <a href="https://www.instagram.com/adrauni/" target="_blank">
                  <IgContacto />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Page;
