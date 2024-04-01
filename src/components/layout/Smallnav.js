"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const Smallnav = ({ navdata }) => {
  const [scrollX, setScrollX] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrollX(document.documentElement.clientWidth);
    };
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("resize", handleScroll);
    };
  }, [scrollX]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const closeSidebar = (e) => {
      if (
        !sidebarRef.current.contains(e.target) &&
        !openSidebarButtonRef.current.contains(e.target)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("click", closeSidebar);

    return () => {
      document.removeEventListener("click", closeSidebar);
    };
  }, [isSidebarOpen]);

  const toggleSidebar = (e) => {
    e.stopPropagation();
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarRef = useRef(null);
  const openSidebarButtonRef = useRef(null);

  return (
    <div className="flex overflow-hidden bg-white">
      <div
        className={`absolute z-50 bg-[#FF9F00] text-white w-[75%] min-h-screen overflow-y-auto transition-transform transform ${
          isSidebarOpen ? "" : "-translate-x-full"
        } ease-in-out duration-300`}
        ref={sidebarRef}
        id="sidebar"
      >
        <div className="p-10">
          <h1 className="text-[40px] font-semibold">Adrauni UNI</h1>
          <ul className="mt-16 space-y-8 font-poppins text-[24px] sm:text-[30px]">
            <li className="mb-2">
              <a href="/nosotros" className="block ">
                NOSOTROS
              </a>
            </li>
            <li className="mb-2">
              <a href="/adopciones" className="block ">
                ADOPCIONES
              </a>
            </li>
            <li className="mb-2">
              <a href="/donaciones" className="block ">
                DONACIONES
              </a>
            </li>
            <li className="mb-2">
              <a href="/eventos" className="block ">
                EVENTOS
              </a>
            </li>
            <li className="mb-2">
              <a href="/contacto" className="block ">
                CONTACTOS
              </a>
            </li>
            <li className="mb-2">
              <a href="/rescatistas" className="block ">
                RESCATISTAS
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden ml-8 mr-2">
        <div className="bg-white shadow">
          <div className="container mx-auto">
            <div className="flex justify-between items-center py-4 px-2">
              <div>
                <button
                  className="text-gray-500 hover:text-gray-600"
                  onClick={toggleSidebar}
                  ref={openSidebarButtonRef}
                  id="open-sidebar"
                >
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="#F97700"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="aspect-[200/122]">
                <a href="/" className="">
                  <Image
                    className="w-full h-full"
                    src={navdata.data.logo.url}
                    alt={navdata.data.logo.alt}
                    height={scrollX >= 768 ? 110 : 65}
                    width={scrollX >= 768 ? 86 : 51}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smallnav;
