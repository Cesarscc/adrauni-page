"use client";
import Cat from "@/assets/Cat";
import Dog from "@/assets/Dog";
import Search from "@/assets/Search";
import React, { useEffect, useRef, useState } from "react";
import Paginador from "./Paginador";
import Image from "next/image";

const Buscador = ({ searchDog, searchCat, data }) => {
  const arrayData = [...data[0].items, ...data[1].items];
  const [arrayfilter, setArrayFilter] = useState(arrayData);

  const [opcionSeleccionada, setOpcionSeleccionada] = useState("todos");
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const opciones = ["todos", "perros", "gatos"];

  function filterItems(newValue) {
    let newFilter;
    if (newValue === "perros") {
      newFilter = "dog";
    } else {
      newFilter = "cat";
    }
    setArrayFilter(
      arrayData.filter((array) =>
        newValue === "todos" ? true : array.tipo === newFilter
      )
    );
  }

  const handleChange = (e) => {
    const newValue = e.target.value;
    setOpcionSeleccionada(newValue);
    filterItems(newValue);
  };

  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setArrayFilter(
      arrayData.filter(
        (item) => item.nombre.toLowerCase() === inputValue.toLowerCase()
      )
    );
    setInputValue(""); // Limpiar el input después de enviar los datos
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick(); // Llama a la función que maneja el clic en el botón
    }
  };

  const boxRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    // Agregar el escucha de evento al document
    document.addEventListener("mousedown", handleClickOutside);

    // Eliminar el escucha de evento cuando el componente se desmonte
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handeChangeOpen = (e) => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <div className="relative flex justify-center h-[35px] md:h-[70px]">
        <select
          ref={boxRef}
          className=" cursor-pointer bg-[#F49606] w-[194px] lg:w-[30vw] xl:w-[194px] h-[33px] md:h-[68px] text-center outline-none font-inter font-bold "
          onChange={handleChange}
          onClick={handeChangeOpen}
        >
          <option value="" disabled selected>
            Tipo
          </option>
          {opciones.map((opcion) => (
            <option className="text-black" key={opcion} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>

        <input
          className="bg-[#F8F8F8] w-[650px] xl:w-[730px] h-[35px] md:h-[70px] text-center font-inter font-normal text-[14px] outline-none"
          type="text"
          placeholder="Escribe aquí el nombre "
          value={inputValue}
          onChange={handleChangeInput}
          onKeyPress={handleKeyPress}
        />
        {opcionSeleccionada === "todos" ? (
          <></>
        ) : opcionSeleccionada === "perros" ? (
          <p className="absolute hidden md:block z-20 md:left-[2%] lg:left-[5.5%] xl:left-[17%] top-3 xl:top-4">
            <Dog />
          </p>
        ) : (
          <p className="absolute hidden md:block z-20 md:left-[2%] lg:left-[5.5%] xl:left-[17%] top-3 xl:top-4">
            <Cat />
          </p>
        )}
        <button
          onClick={handleClick}
          className="relative bg-[#F49606] w-[107px] text-[12px] md:text-[14px] text-white flex items-center justify-evenly rounded-[7px]"
        >
          <p className="">
            <Search />
          </p>
          Buscar
        </button>
      </div>
      <section className="my-8 md:my-28">
        <div className="w-full xl:max-w-[1200px] 2xl:max-w-[1290px] h-[50vw] xl:max-h-[444px] relative transform xl:translate-x-[5%] 2xl:translate-x-[10%] mb-16">
          <div className="w-[40vw] h-[40vw] xl:w-[444px] xl:h-[444px] bg-[#C1CCE9] rounded-full flex justify-center items-center">
            {opcionSeleccionada === "perros" ||
            opcionSeleccionada === "todos" ? (
              <Image
                src={searchDog.url}
                alt={searchDog.alt}
                width={370}
                height={376}
              />
            ) : (
              <Image
                src={searchCat.url}
                alt={searchCat.alt}
                width={370}
                height={376}
              />
            )}
          </div>
          <p className="absolute font-rubik font-semibold text-[4vw] xl:text-[55px] 2xl:text-[64px] text-[#283B40] top-[30%] 2xl:top-[28%] transform translate-x-2/3">
            NUESTROS ANIMALITOS
          </p>
          <div className="custom-div xl:w-[800px] 2xl:w-[860px] xl:h-[140px] rounded-[78px] absolute bottom-[30%] xl:bottom-[20%] 2xl:bottom-[18%] transform translate-x-[40%] lg:translate-x-[40%]">
            <p className="ml-5 xl:ml-10 font-rubik text-[3.5vw] xl:text-[32px] 2xl:text-[36px] text-[#283B40] py-3 lg:py-8">
              Conoce a quienes te están esperando
            </p>
          </div>
        </div>
        <Paginador elementos={arrayfilter} />
      </section>
    </>
  );
};

export default Buscador;
