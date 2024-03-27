import Buscador from "@/components/adopciones/Buscador";
import Layout from "@/components/layout";
import { createClient } from "@/prismicio";
import Image from "next/image";
import React from "react";

const Page = async () => {
  const client = createClient();

  const footerdata = await client.getSingle("footer");
  const navdata = await client.getSingle("navbar");
  const adopciones = await client.getSingle("adopciones");

  return (
    <Layout footerdata={footerdata} navdata={navdata}>
      <section className="relative my-20">
        <div className="flex justify-evenly gap-10 h-[810px] filter brightness-[0.47] bg-white">
          <div className="basis-1/2 overflow-hidden">
            <Image
              className="object-contain"
              alt={adopciones.data.portadaizq.alt}
              src={adopciones.data.portadaizq.url}
              width={940}
              height={810}
            />
          </div>
          <div className="basis-1/2 overflow-hidden">
            <Image
              className="object-cover"
              alt={adopciones.data.portadader.alt}
              src={adopciones.data.portadader.url}
              width={940}
              height={810}
            />
          </div>
        </div>
        <div className="absolute top-[33%] left-[10%] max-w-[1190px]">
          <strong className="text-[80px] font-plusJakartaSans font-extrabold text-white">
            Descubre a tu{" "}
          </strong>
          <strong className="text-[80px] font-plusJakartaSans font-extrabold text-[#F49606]">
            compañero ideal
          </strong>
        </div>
      </section>
      <section className="my-32">
        <p className="text-[45px] text-center font-inter font-medium text-[#494949]">
          Juntos, podemos rescatar, rehabilitar y realojar a las mascotas
          necesitadas. Gracias por apoyar nuestra misión de llevar alegría a las
          familias a través de la adopción de mascotas.
        </p>
      </section>
      <section>
        <Buscador
          searchDog={adopciones.data.buscadorperrito}
          searchCat={adopciones.data.buscadorgatito}
          data={adopciones.data.slices}
        />
      </section>
    </Layout>
  );
};

export default Page;
