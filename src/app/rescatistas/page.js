import Layout from "@/components/layout";
import CardRescatista from "@/components/rescatistas/CardRescatista";
import PaginadorCardRescatista from "@/components/rescatistas/PaginadorCardRescatista";
import { createClient } from "@/prismicio";
import Image from "next/image";
import React from "react";

const Page = async () => {
  const client = createClient();

  const footerdata = await client.getSingle("footer");
  const navdata = await client.getSingle("navbar");
  const rescatistas = await client.getSingle("rescatistas");
  return (
    <Layout footerdata={footerdata} navdata={navdata}>
      <section className="relative my-5 xl:my-20">
        <div className="bg-white filter brightness-[0.6] h-[40vw] xl:h-[1025px] flex items-center mx-1 xl:mx-10">
          <div className="grid grid-cols-3 gap-5 h-[40vw] xl:h-[1020px]">
            <Image
              className="inset-0 w-[40vw] h-[40vw] xl:w-full xl:h-full object-cover"
              src={rescatistas.data.portada1.url}
              alt={rescatistas.data.portada1.alt}
              width={500}
              height={1020}
              style={{ objectPosition: "35% 50%" }}
            />
            <Image
              className="inset-0 w-[40vw] h-[40vw] xl:w-full xl:h-full object-cover"
              src={rescatistas.data.portada2.url}
              alt={rescatistas.data.portada2.alt}
              width={500}
              height={590}
            />
            <Image
              className="inset-0 w-[40vw] h-[40vw] xl:w-full xl:h-full object-cover"
              src={rescatistas.data.portada3.url}
              alt={rescatistas.data.portada3.alt}
              width={500}
              height={590}
              style={{ objectPosition: "25% 50%" }}
            />
          </div>
        </div>
        <div className="absolute top-[40%] transform translate-x-[10vw] md:translate-x-[10vw] max-w-[60vw] sm:max-w-[70vw] md:max-w-[80vw] lg:max-w-[85vw] 2xl:max-w-[1310px]">
          <strong className="font-plusJakartaSans font-extrabold text-[3vw] sm:text-[3.5vw] md:text-[4vw] 2xl:text-[68px] text-[#FF9F00]">
            Sé un héroe de patas{" "}
          </strong>
          <strong className="font-plusJakartaSans font-extrabold text-[3vw] sm:text-[3.5vw] md:text-[4vw] 2xl:text-[68px] text-white">
            . Únete a nuestra misión de rescate animal!
          </strong>
        </div>
      </section>
      <section>
        <h1 className="text-center text-[20px] sm:text-[40px] md:text-[60px] xl:text-[80px] font-plusJakartaSans font-extrabold my-10 xl:my-40">
          Conoce a nuestros héroes!
        </h1>
        <div className="my-5 xl:my-32">
          <PaginadorCardRescatista elementos={rescatistas.data.slices2} />
        </div>
      </section>
    </Layout>
  );
};

export default Page;
