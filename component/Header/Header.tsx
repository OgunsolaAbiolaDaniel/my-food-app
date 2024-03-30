"use client";

import React from "react";
import Image from "next/image";
import logo from "./../../assets/images/logo.png";
import { FaBars } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";



function Header() {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }
  return (
    <div className=" max-md:py-6 max-md:px-2 max-md:justify-around  lg:justify-evenly md:items-center flex lg:items-center xl:justify-evenly md:py-7 lg:py-8 lg:px-2 md:pt-4 md:justify-around min-[320px]:w-[100%] max-md:w-[100%]">
      <div className="xl:text-xl flex items-center ">
        <Image src={logo} alt="" className="w-12" />
        <h1 className="font-bold max-md:hidden">Food Door</h1>
      </div>
      <nav className="flex lg:gap-7 lg:text-sm lg:ml-2">
        <ul className="flex xl:gap-6 lg:gap-4 lg:pt-2 text-gray-600 max-lg:hidden lg:flex ">
          <li className="text-orange-500 hover:underline active:text-orange-500">
            Home
          </li>
          <li className="hover:text-orange-500 hover:underline active:text-orange-500">
            About Us
          </li>
          <li className="hover:text-orange-500 hover:underline active:text-orange-500">
            Services
          </li>
          <li className="hover:text-orange-500 hover:underline active:text-orange-500">
            Blog
          </li>
          <li className="hover:text-orange-500 hover:underline active:text-orange-500">
            Contact Us
          </li>
        </ul>
        <div className="max-md:justify-center max-md:items-center ">
          <input
            type="search"
            className="border-2 hover:border-gray-500 active:outline-none active:border active:border-gray-500 max-md:py-1 max-md:px-2 text-sm lg:px-3 xl:py-2 lg:py-1 rounded-2xl border-gray-600 lg:w-[200px] md:py-1 px-2  "
            name=""
            id=""
            placeholder="Search Food"
          />
          <button
            aria-label="IoIosSearch"
            type="button"
            className=" max-md:right-7 max-md:top-1 xl:right-8 xl:top-[6px] md:right-8  lg: relative md:top-[5px] lg:right-8"
          >
            <IoIosSearch className="text-2xl  text-gray-500 max-md:text-xl" />
          </button>
        </div>
      </nav>
      <div className="flex gap-2">
        <button
          type="button"
          aria-label="Log In"
          className=" hover:bg-white hover:border hover:text-gray-800 max-md:hidden border xl:px-6 xl:py-2 rounded-3xl md:px-5 md:py-1 bg-orange-500 text-white"
        >
          Log In
        </button>
        <button
          type="button"
          aria-label="FaBars"
          className="rounded-full p-1 md:visible lg:hidden"
          onClick={handleShow}
        >
          <FaBars className="text-xl text-gray-800 " />
        </button>
      </div>
      {show ? <Sidebar onClose={handleClose} /> : null}
    </div>
  );
}

export default Header;
