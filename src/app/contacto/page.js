import Layout from "@/components/layout";
import { createClient } from "@/prismicio";
import Image from "next/image";
import React from "react";
import { PrismicRichText } from "@prismicio/react";

const Page = async () => {
  const client = createClient();

  const footerdata = await client.getSingle("footer");
  const navdata = await client.getSingle("navbar");
  const contacto = await client.getSingle("contacto");

  return (
    <Layout footerdata={footerdata} navdata={navdata}>
      <section className="my-20">
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
      </section>
    </Layout>
  );
};

export default Page;
