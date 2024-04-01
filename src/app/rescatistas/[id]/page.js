import Layout from "@/components/layout";
import CardRescatista from "@/components/rescatistas/CardRescatista";
import CardUid from "@/components/rescatistas/CardUid";
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
      <section className="relative my-20">
        <div className="bg-white filter brightness-[0.6] h-[1025px] flex items-center mx-10">
          <div className="grid grid-cols-3 gap-5 h-[1020px]">
            <Image
              className="inset-0 w-full h-full object-cover"
              src={rescatistas.data.portada1.url}
              alt={rescatistas.data.portada1.alt}
              width={500}
              height={1020}
              style={{ objectPosition: "35% 50%" }}
            />
            <Image
              className="inset-0 w-full h-full object-cover"
              src={rescatistas.data.portada2.url}
              alt={rescatistas.data.portada2.alt}
              width={500}
              height={590}
            />
            <Image
              className="inset-0 w-full h-full object-cover"
              src={rescatistas.data.portada3.url}
              alt={rescatistas.data.portada3.alt}
              width={500}
              height={590}
              style={{ objectPosition: "25% 50%" }}
            />
          </div>
        </div>
        <div className="absolute top-[40%] transform translate-x-[8%] max-w-[1310px]">
          <strong className="font-plusJakartaSans font-extrabold text-[68px] text-[#FF9F00]">
            Sé un héroe de patas{" "}
          </strong>
          <strong className="font-plusJakartaSans font-extrabold text-[68px] text-white">
            . Únete a nuestra misión de rescate animal!
          </strong>
        </div>
      </section>
      <section>
        <CardUid rescatistas={rescatistas} />
      </section>
    </Layout>
  );
};

export default Page;
