import Image from "next/image";
import React from "react";
import Facebook from "@/assets/Facebook";
import Instagram from "@/assets/Instagram";
import Message from "@/assets/Message";

const Footer = ({ footerdata }) => {
  return (
    <footer className="bg-[#353535] mt-20">
      <div className="container m-auto flex flex-wrap lg:grid lg:flex-nowrap lg:grid-cols-3 items-center p-5">
        <div className="w-full sm:w-1/2 lg:w-full space-y-10 lg:flex lg:flex-col lg:justify-center">
          <Image
            src={footerdata.data.logofooter.url}
            alt={footerdata.data.logofooter.alt}
            width={351}
            height={275}
          />
          <p className="text-[14px] md:text-[20px] text-[#FFFFFF] font-plusJakartaSans">
            Somos ADRAUNI (Agrupación para la Defensa y Respeto hacia los
            Animales de la Universidad Nacional de Ingeniería) lo conformamos
            alumnos y egresados de todas las facultades de la UNI.
          </p>
          <hr className="h-[10px] bg-[#FFFFFF] w-2/3" />
        </div>
        <div className="sm:w-1/4 lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-center mt-5 text-left sm:text-center xl:text-left">
          <ul className="md:text-[24px] text-[#FFFFFF] font-poppins">
            <li className="mb-[30px]">
              <a href="/nosotros">NOSOTROS</a>
            </li>
            <li className="mb-[30px]">
              <a href="/adopciones">ADOPCIONES</a>
            </li>
            <li className="mb-[30px]">
              <a href="/donaciones">DONACIONES</a>
            </li>
            <li className="mb-[30px]">
              <a href="/eventos">EVENTOS</a>
            </li>
            <li className="mb-[30px]">
              <a href="/contacto">CONTACTOS</a>
            </li>
            <li className="mb-[30px]">
              <a href="/rescatistas">RESCATISTAS</a>
            </li>
          </ul>
        </div>
        <div className="sm:w-1/4 lg:w-full mb-10 sm:pt-16 xl:pt-0">
          <p className="text-[#FF9F00] text-[20px] text-center lg:text-left font-extrabold font-plusJakartaSans">
            CONTÁCTANOS
          </p>
          <div className="flex flex-row sm:flex-col lg:flex-row items-center gap-8 lg:gap-6 xl:gap-11 mt-12">
            <a href="https://www.facebook.com/adrauni" target="_blank">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/adrauni/" target="_blank">
              <Instagram />
            </a>
            <a href="mailto:adrauni@gmail.com">
              <Message />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
