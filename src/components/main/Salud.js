import Image from "next/image";
import React from "react";

const Salud = ({ index }) => {
  return (
    <section className="grid grid-cols-1 md:flex my-32 mx-3">
      <div className="col-span-1 md:basis-1/2 order-2 md:order-1">
        <h1 className="text-[#283B40] text-center md:text-left font-harmattan font-bold text-[50px] lg:text-[64px] tracking-[.065em]">
          SALUD
        </h1>
        <p className="text-[#283B40] text-[25px] lg:text-[35px] font-rubik font-normal text-center md:text-left">
          El 70% de nuestros perritos tienen más de 8 años y algunos de ellos
          requieren chequeos rutinarios para verificar su estado de salud.
        </p>
      </div>
      <div className="col-span-1 relative aspect-square md:basis-1/2 order-1 md:order-2">
        <Image
          className="w-full h-full rounded-full object-cover"
          alt={index.data.imagensalud.alt}
          src={index.data.imagensalud.url}
          fill
        />
      </div>
    </section>
  );
};

export default Salud;
