import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoAdra from "/public/images/logoAdra.png";
const Navbar = () => {
  return (
    <nav className="flex h-24 text-2xl text-[#FFFFFF] font-poppins w-full">
      <div className="w-[162px] h-fit">
        <Link href={"/"}>
          <Image src={logoAdra} alt="Logo" width={160} height={127} />
        </Link>
      </div>
      <div className="bg-[#FF9F00] flex items-center justify-around w-full mt-8">
        <Link
          href={"/nosotros"}
          className="hover:text-gray-400 hover:transition-all cursor-pointer grow-underline text-2xl"
        >
          NOSOTROS
        </Link>
        <Link
          href={"/adopciones"}
          className="hover:text-gray-400 hover:transition-all cursor-pointer grow-underline text-2xl"
        >
          ADOPCIONES
        </Link>
        <Link
          href={"/donaciones"}
          className="hover:text-gray-400 hover:transition-all cursor-pointer grow-underline text-2xl"
        >
          DONACIONES
        </Link>
        <Link
          href={"/eventos"}
          className="hover:text-gray-400 hover:transition-all cursor-pointer grow-underline text-2xl"
        >
          EVENTOS
        </Link>
        <Link
          href={"/contacto"}
          className="hover:text-gray-400 hover:transition-all cursor-pointer grow-underline text-2xl"
        >
          CONTACTO
        </Link>
        <Link
          href={"/rescatistas"}
          className="hover:text-gray-400 hover:transition-all cursor-pointer grow-underline text-2xl"
        >
          RESCATISTAS
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
