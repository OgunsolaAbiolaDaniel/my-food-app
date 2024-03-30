import Image from "next/image";
import logo from "./../../assets/images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import classes from "./footer.module.css";
import AppContainer from "../AppContainer/AppContainer";

export default function Footer() {
  return (
    <AppContainer containerClasss="bg-orange-200">
      <div className="flex md:justify-between md:items-center pt-7 pb-8 lg:gap-14 md:gap-10 md:w-full max-md:w-full max-md:text-sm max-md:flex-col max-md:gap-5 ">
        <FirstFooterSec />
        <MenuFooter />
        <SecMenuFooter />
        <Socials />
      </div>
    </AppContainer>
  );
}
export function FirstFooterSec() {
  return (
    <div className="flex flex-col w-96 self-start max-md:w-full max-md:">
      <div className="flex lg:flex-row md:items-center md:flex-col">
        <Image
          src={logo}
          alt="logo"
          className="lg:w-[70px] md:w-[50px] max-md:w-[50px]"
        />
        <h2 className="lg:text-2xl md:text-base font-semibold  max-md:text-base max-md:items-center">
          Food door
        </h2>
      </div>
      <p className="lg:text-sm md:text-xs max-md:text-sm">
        Lorem Ipsum dolor sit amet, consecteteur adipiscing Lacus consequat sit
        blandit ipsum arcu.Dus id massa sit bibendum id massa sagittis.
      </p>
    </div>
  );
}
export function MenuFooter() {
  return (
    <div className="flex flex-col gap-3 self-start max-md:text-sm">
      <h2 className="xl:text-xl lg:text-lg font-semibold">Menu</h2>
      <ul className="list-none text-slate-700">
        <li className="hover:text-orange-500 hover:underline">About</li>
        <li className="hover:text-orange-500 hover:underline">Service</li>
        <li className="hover:text-orange-500 hover:underline">Contact</li>
        <li className="hover:text-orange-500 hover:underline">Blog</li>
        <li className="hover:text-orange-500 hover:underline">Blog post</li>
      </ul>
    </div>
  );
}

export function SecMenuFooter() {
  return (
    <div className="flex flex-col gap-4 self-start">
      <h2 className="xl:text-xl lg:text-lg font-semibold">Company</h2>
      <ul className="list-none text-slate-700">
        <li className="hover:text-orange-500 underline">Privacy Policy</li>
        <li className="hover:text-orange-500 hover:underline">Terms Of Use</li>
        <li className="hover:text-orange-500 hover:underline">Help</li>
        <li className="hover:text-orange-500 hover:underline">Contact</li>
      </ul>
    </div>
  );
}
export function Socials() {
  return (
    <div className="flex flex-col xl:gap-3 md:gap-3 lg:gap-3 md:w-auto md:h-auto self-start max-md:gap-2 ">
      <h2 className="xl:text-xl md:text-lg font-medium">Get In Touch</h2>
      <div className="flex justify-center items-center">
        <input
          type="email"
          className="rounded-2xl xl:w-[250px] xl:py-2 lg:py-1  md:py-1 md:px-2 max-md:py-1 px-2"
          placeholder="Email Address"
          name=""
          id=""
        />
        <button
          type="button"
          aria-label="Submit"
          className="bg-orange-500 max-md:relative hover:bg-none hover:text-gray-800 max-md:right-[70px] max-md:px-3 max-md:py-1 text-white lg:text- lg:px-4 lg:py-1 md:py-2 md:px-3 rounded-2xl md:relative md:text-sm lg:right-[80px] xl:right-[86px] md:right-[70px] "
        >
          Submit
        </button>
      </div>
      <div className="lg:flex max-md:flex max-md:gap-3 max-md:px-2 max-md:py-1 lg:justify-center lg:gap-5 md:mt-2 md:flex  md:gap-2">
        <FaFacebook className="text-blue-600" />
        <RiTwitterXFill className="text-black" />
        <FaInstagram className={classes.fine} />
        <AiFillLinkedin className="text-sky-500" />
      </div>
    </div>
  );
}
