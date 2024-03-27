import Image from "next/image";
import React from "react";
import Facebook from "@/assets/Facebook";
import Instagram from "@/assets/Instagram";
import Message from "@/assets/Message";

const Footer = ({ footerdata }) => {
  return (
    <footer className="h-[856px] bg-[#353535]">
      <div className="grid grid-cols-3">
        <div className="mt-[123px] ml-20 space-y-12 w-full">
          <Image
            src={footerdata.data.logofooter.url}
            alt={footerdata.data.logofooter.alt}
            width={351}
            height={275}
          />
          <p className="text-[20px] text-[#FFFFFF] font-plusJakartaSans">
            Somos ADRAUNI (Agrupación para la Defensa y Respeto hacia los
            Animales de la Universidad Nacional de Ingeniería) lo conformamos
            alumnos y egresados de todas las facultades de la UNI.
          </p>
          <hr className="h-[10px] bg-[#FFFFFF] w-2/3" />
        </div>
        <div className="flex justify-center w-full mt-[198px]">
          <ul className="text-[24px] text-[#FFFFFF] font-poppins">
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
              <a href="#">CONTACTOS</a>
            </li>
            <li className="mb-[30px]">
              <a href="#">RESCATISTAS</a>
            </li>
          </ul>
        </div>
        <div className="mt-[261px]">
          <p className="text-[#FF9F00] text-[20px] font-extrabold font-plusJakartaSans">
            CONTÁCTANOS
          </p>
          <div className="flex items-center gap-11 mt-12">
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
