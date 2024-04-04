"use client";
import Search from "@/assets/Search";
import React, { useState } from "react";
import PaginadorEvento from "./PaginadorEvento";

const BuscadorEvento = ({ data }) => {
  const arrayData = [...data[0].items];
  const [arrayfilter, setArrayFilter] = useState(arrayData);

  const [inputValue, setInputValue] = useState("");

  const handleEvents = () => {
    setArrayFilter(arrayData);
  };

  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setArrayFilter(
      arrayData.filter((item) =>
        item.titulo.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
    setInputValue(""); // Limpiar el input después de enviar los datos
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick(); // Llama a la función que maneja el clic en el botón
    }
  };

  return (
    <>
      <div className="relative flex justify-center h-[70px]">
        <button
          className="w-[193px] h-[32px] lg:h-[70px] bg-[#F49606] flex justify-center items-center"
          onClick={handleEvents}
        >
          <p className="font-inter font-bold text-[10px] md:text-[25px]">
            EVENTOS
          </p>
        </button>

        <input
          className="bg-[#F8F8F8] w-[730px] h-[32px] lg:h-[70px] text-center font-inter font-normal text-[10px] md:text-[14px] outline-none"
          type="text"
          placeholder="Escribe aquí el evento "
          value={inputValue}
          onChange={handleChangeInput}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={handleClick}
          className="relative bg-[#F49606] w-[107px] h-[32px] lg:h-[70px] text-[10px] md:text-[14px] text-white flex items-center justify-evenly rounded-[7px]"
        >
          <p className="">
            <Search />
          </p>
          Buscar
        </button>
      </div>
      <section className="my-10 lg:my-28">
        <PaginadorEvento elementos={arrayfilter} />
      </section>
    </>
  );
};

export default BuscadorEvento;
