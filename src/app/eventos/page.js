import Layout from "@/components/layout";
import { createClient } from "@/prismicio";
import Image from "next/image";
import React from "react";
import { PrismicRichText } from "@prismicio/react";
import BuscadorEvento from "@/components/eventos/BuscadorEventos";

const Page = async () => {
  const client = createClient();

  const footerdata = await client.getSingle("footer");
  const navdata = await client.getSingle("navbar");
  const eventos = await client.getSingle("eventos");

  return (
    <Layout footerdata={footerdata} navdata={navdata}>
      <section className="relative my-20">
        <div className="bg-white brightness-[0.40] flex gap-5 mx-5">
          <Image
            src={eventos.data.portada1.url}
            alt={eventos.data.portada1.alt}
            width={500}
            height={765}
            layout="responsive"
          />
          <Image
            src={eventos.data.portada2.url}
            alt={eventos.data.portada2.alt}
            width={500}
            height={765}
            layout="responsive"
          />
          <Image
            src={eventos.data.portada3.url}
            alt={eventos.data.portada3.alt}
            width={500}
            height={765}
            layout="responsive"
          />
        </div>
        <div className="absolute top-0 transform translate-x-[10%] translate-y-72 text-center max-w-[1300px]">
          <strong className="font-inter font-black text-[70px] text-white">
            Eventos especiales para los{" "}
          </strong>
          <strong className="font-inter font-black text-[70px] text-[#F49606]">
            amantes de los animalitos!
          </strong>
        </div>
      </section>
      <section>
        <BuscadorEvento data={eventos.data.slices} />
      </section>
    </Layout>
  );
};

export default Page;
