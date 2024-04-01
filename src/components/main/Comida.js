import Image from "next/image";
import React from "react";

const Comida = ({ index }) => {
  return (
    <section className="mb-18 grid grid-cols-1 md:flex items-center justify-center p-12 tracking-wider md:mb-48 md:grid-cols-5 md:gap-10 xl:gap-14 xl:p-20">
      <div className="cols-span-1 relative aspect-square md:mb-5 h-full w-full md:basis-1/2">
        <Image
          className="w-full h-full rounded-full shadow-md"
          alt={index.data.imagencomida.alt}
          src={index.data.imagencomida.url}
          fill
          style={{ boxShadow: "0px 0px 16px 0px rgba(0,0,0,0.31)" }}
        />
      </div>
      <div className="cols-span-1 p-5 md:basis-1/2 md:p-10 xl:p-16">
        <h1 className="font-bold text-center md:text-left text-[50px] lg:text-[64px] text-[#283B40] font-harmattan tracking-[.065em]">
          COMIDA
        </h1>
        <p className="font-normal text-[25px] lg:text-[35px] text-[#283B40] font-rubik mt-10 md:mt-5 lg:mt-24">
          La comida es el principal problema para nosotros pues al mes gastamos
          alrededor de:
        </p>
        <ul className="font-normal text-[25px] lg:text-[35px] text-[#283B40] font-rubik mt-12">
          <li>&bull; 310 kg. de comida de perro.</li>
          <li>&bull; 36 kg. de comida de gato. </li>
        </ul>
      </div>
    </section>
  );
};

export default Comida;
