import React from 'react'
import Link from 'next/link';
import { IoClose } from "react-icons/io5";

function Sidebar({onClose}:{onClose:any}) {
  
  return (
    <div className="lg:hidden z-10 flex flex-col fixed bg-slate-50 pr- py-2 mr-34  w-[100%] top-0">
      <header className="flex justify-end pt-2 w-full">
        <div className="">
          <button type="button" aria-label="IoClose" onClick={onClose}>
            <IoClose className="text-xl font-bold" />
          </button>
        </div>
      </header>
      <main className="flex items-center justify-center mb-2">
        <ul className="flex flex-col gap-5 text-base items-center">
          <li>
            {" "}
            <Link href="./" className="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-500">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-500">
              Services
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-500">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-500">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="#" className="text-orange-500 hover:text-gray-700">
              Log In
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default Sidebar