"use client";
import React, { useState } from "react";
import CardAnimalito from "./CardAnimalito";
import FlechaIzq from "@/assets/FlechaIzq";
import FlechaDer from "@/assets/FlechaDer";

const PaginadorCasos = ({ elementos, dataFotos }) => {
  const [paginaActual, setPaginaActual] = useState(1);

  const elementosPorPagina = 6;

  // Calcular índices de los elementos que se mostrarán en la página actual
  const indiceInicial = (paginaActual - 1) * elementosPorPagina;
  const indiceFinal = paginaActual * elementosPorPagina;
  const elementosPaginaActual = elementos.slice(indiceInicial, indiceFinal);

  // Manejar evento de avanzar página
  const avanzarPagina = () => {
    if (paginaActual < Math.ceil(elementos.length / elementosPorPagina)) {
      setPaginaActual(paginaActual + 1);
    }
  };

  // Manejar evento de retroceder página
  const retrocederPagina = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  return (
    <div className="my-10 md:mx-5 xl:mx-5 2xl:mx-24 xl:my-40">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10">
        {elementosPaginaActual.map((animalito, index) => (
          <div className="" key={index}>
            <CardAnimalito animalito={animalito} dataFotos={dataFotos} />
          </div>
        ))}
      </div>
      <p className="font-rubik font-semibold text-[36px] text-[#000000] brightness-50 text-right mr-20 mt-14">
        {paginaActual}
      </p>
      <div className="flex justify-end mr-16 mt-10">
        <div className="flex gap-3">
          <button
            onClick={retrocederPagina}
            disabled={paginaActual === 1}
            className="bg-[#D9D9D9] w-[87px] h-[87px] rounded-full flex justify-center items-center"
          >
            <FlechaIzq />
          </button>
          <button
            onClick={avanzarPagina}
            disabled={
              paginaActual === Math.ceil(elementos.length / elementosPorPagina)
            }
            className="bg-[#D9D9D9] w-[87px] h-[87px] rounded-full flex justify-center items-center"
          >
            <FlechaDer />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginadorCasos;
