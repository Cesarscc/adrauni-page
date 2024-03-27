"use client";
import React, { useState, useEffect, useRef } from "react";

const Smallnav = () => {
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
    <div className="flex overflow-hidden bg-[#5d5d5d]">
      <div
        className={`absolute z-50 bg-[#262626] text-white w-56 min-h-screen overflow-y-auto transition-transform transform ${
          isSidebarOpen ? "" : "-translate-x-full"
        } ease-in-out duration-300`}
        ref={sidebarRef}
        id="sidebar"
      >
        <div className="p-4">
          <h1 className="text-2xl font-semibold">Exam Simulator</h1>
          <ul className="mt-16 space-y-5">
            <li className="mb-2">
              <a href="/documentos" className="block hover:text-[#6d6d6d]">
                Documentos
              </a>
            </li>
            <li className="mb-2">
              <a href="/comentarios" className="block hover:text-[#6d6d6d]">
                Comentarios
              </a>
            </li>
            <li className="mb-2">
              <a href="/temas" className="block hover:text-[#6d6d6d]">
                Temas
              </a>
            </li>
            <li className="mb-2">
              <a href="/examen" className="block hover:text-[#6d6d6d]">
                Exámenes
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden ml-8 mr-2">
        <div className="bg-[#5d5d5d] shadow">
          <div className="container mx-auto">
            <div className="flex justify-between items-center py-4 px-2">
              <a href="/" className="text-xl font-semibold">
                Exam
              </a>
              <button
                className="text-gray-500 hover:text-gray-600"
                onClick={toggleSidebar}
                ref={openSidebarButtonRef}
                id="open-sidebar"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="black"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smallnav;
