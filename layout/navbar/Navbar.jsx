"use client";
import React, { Fragment, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { DiTechcrunch } from "react-icons/di";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbBulbFilled } from "react-icons/tb";

import MobileNavbar from "./SidebarMobile";
import { NavbarMenu } from "./NavbarItems";
import NavbarMobile from "./NavbarMobile";

import { ThemeContext } from "@/context/themeContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { setThemeFun, theme } = useContext(ThemeContext);

  // Logic for Navbar Hide and Show on scrolling behaviour
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;


      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      // Cleanup: Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      {/* Desktop Header */}
      <div
        className='w-full h-[70px]  px-8 bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(0,0,0,0.8)] backdrop-filter backdrop-blur-lg hidden md:flex justify-between items-center gap-4 shadow-sm shadow-gray-300 dark:shadow-gray-800 fixed z-10 transition-all duration-500'
        style={{ top: 0 }}
      >
        {/* Name Logo */}
        <p className='text-white-400 flex'>
          <span className='text-lg font-bold'>Sonika</span>
        </p>
        <div className='h-full flex gap-4'>
          {/* Navbar Links */}
          {NavbarMenu.map((navbar) => (
            <Link
              className={"text-[#c72c6c] dark:text-[#ffc300] font-semibold"}
              href={navbar.link}
              key={navbar.name}
            >
              <div className='h-full pb-1 hover:pb-0 px-2 flex items-center hover:border-b-4  border-[#c72c6c] dark:border-[#ffc300] transition-all'>
                {navbar.name}
              </div>
            </Link>
          ))}
        </div>
        {/* Toggle Theme button */}
        <div className='flex items-center gap-4'>
          <button
            className='text-xl text-[#c72c6c] dark:text-[#ffc300] hover:scale-110'
            onClick={setThemeFun}
          >
            {theme === "dark" ? (
              <TbBulbFilled />
            ) : (
              <BsFillLightningChargeFill />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <NavbarMobile
        setShowMenu={setShowMenu}
        setThemeFun={setThemeFun}
        showMenu={showMenu}
        theme={theme}
        top="0"
      />

      {/* SideMenu For Mobile Screen */}
      <MobileNavbar setShowMenu={setShowMenu} showMenu={showMenu} />
    </Fragment>
  );
};

export default Navbar;
