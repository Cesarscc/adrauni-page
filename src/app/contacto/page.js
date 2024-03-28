import Layout from "@/components/layout";
import { createClient } from "@/prismicio";
import Image from "next/image";
import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Mail from "@/assets/Mail";
import Phone from "@/assets/Phone";
import Facebook from "@/assets/Facebook";
import Instagram from "@/assets/Instagram";

const Page = async () => {
  const client = createClient();

  const footerdata = await client.getSingle("footer");
  const navdata = await client.getSingle("navbar");
  const contacto = await client.getSingle("contacto");

  return (
    <Layout footerdata={footerdata} navdata={navdata}>
      <section className="relative my-20">
        <div className="bg-white filter brightness-[0.6] h-[691px] flex items-center">
          <div className="grid grid-cols-3 gap-5 h-[590px]">
            <Image
              className="inset-0 w-full h-full object-cover"
              src={contacto.data.portada1.url}
              alt={contacto.data.portada1.alt}
              width={500}
              height={590}
              style={{ objectPosition: "35% 50%" }}
            />
            <Image
              className="inset-0 w-full h-full object-cover"
              src={contacto.data.portada2.url}
              alt={contacto.data.portada2.alt}
              width={500}
              height={590}
            />
            <Image
              className="inset-0 w-full h-full object-cover"
              src={contacto.data.portada3.url}
              alt={contacto.data.portada3.alt}
              width={500}
              height={590}
              style={{ objectPosition: "25% 50%" }}
            />
          </div>
        </div>
        <div className="absolute top-[40%] transform translate-x-[8%] max-w-[1310px]">
          <strong className="font-plusJakartaSans font-extrabold text-[68px] text-white">
            Comunicate con nosotros para crear{" "}
          </strong>
          <strong className="font-plusJakartaSans font-extrabold text-[68px] text-[#FF9F00]">
            un mundo mejor para los animalitos!
          </strong>
        </div>
      </section>
      <section className="my-44">
        <h1 className="my-40 text-center font-plusJakartaSans font-extrabold text-[80px] text-[#FF9F00]">
          CONTÁCTANOS
        </h1>
        <div className="flex">
          <div className="basis-1/2">
            <Image
              className="inset-0 w-full h-full object-cover"
              src={contacto.data.contactofoto.url}
              alt={contacto.data.contactofoto.alt}
              width={847}
              height={827}
              style={{ objectPosition: "60% 50%" }}
            />
          </div>
          <div className="bg-[#D3E4F6] h-[828px] basis-1/2">
            <h2 className="font-plusJakartaSans font-extrabold text-[68px] text-center text-black w-[862px] my-28">
              ¿Tienes alguna pregunta?
            </h2>
            <div className="flex justify-around items-center mt-32">
              <div className="flex flex-col gap-20">
                <div className="flex ml-10 items-center gap-5">
                  <p>
                    <Mail />
                  </p>
                  <p className="text-[20px] font-poppins font-medium">
                    <a href="mailto:adrauni@gmail.com">adrauni@gmail.com</a>
                  </p>
                </div>
                <div className="flex items-center pl-5 div-custom-contacto w-[451px] h-[78px] border-[3px] border-[#F49606] rounded-[16px]">
                  <p>
                    <Phone />
                  </p>
                  <p className="ml-5 font-poppins font-medium text-[20px] text-white">
                    +123 456 789
                  </p>
                </div>
              </div>
              <div className="flex gap-5 mt-20">
                <a href="https://www.facebook.com/adrauni" target="_blank">
                  <Facebook />
                </a>
                <a href="https://www.instagram.com/adrauni/" target="_blank">
                  <Instagram />
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
