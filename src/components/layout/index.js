"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Smallnav from "./Smallnav";

const Layout = ({ children, footerdata, navdata }) => {
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
    <>
      {scrollX >= 1024 ? (
        <Navbar navdata={navdata} />
      ) : (
        <Smallnav navdata={navdata} />
      )}
      <div>{children}</div>
      <Footer footerdata={footerdata} />
    </>
  );
};

export default Layout;
