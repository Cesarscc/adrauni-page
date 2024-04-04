"use client";
import React, { useEffect, useState } from "react";

const Search = () => {
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

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${scrollX >= 768 ? "24" : "16"}`}
      height={`${scrollX >= 768 ? "24" : "16"}`}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.796 15.811L21 21m-3-10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
      ></path>
    </svg>
  );
};

export default Search;
