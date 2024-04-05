"use client";
import React, { useState } from "react";
import FlechaIzq from "@/assets/FlechaIzq";
import FlechaDer from "@/assets/FlechaDer";
import CardRescatista from "./CardRescatista";

const PaginadorCardRescatista = ({ elementos }) => {
  const [paginaActual, setPaginaActual] = useState(1);

  const elementosPorPagina = 4;

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
    <div className="mx-5 xl:mx-24">
      <div className="grid grid-cols-1 gap-10">
        {elementosPaginaActual.map((cardData, index) => (
          <div key={index}>
            <CardRescatista cardData={cardData} indice={index} />
          </div>
        ))}
      </div>
      <p className="font-rubik font-semibold text-[36px] text-[#000000] brightness-50 text-right mr-8 mt-14">
        {paginaActual}
      </p>
      <div className="flex justify-end mt-4">
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

export default PaginadorCardRescatista;
