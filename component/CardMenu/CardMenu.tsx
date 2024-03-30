import { FaRegHeart } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
export default function CardMenu({ price, name, pics }: { price: ReactNode; name: String; pics:StaticImageData } ){
  return (
    <div className="flex flex-col rounded-xl overflow-hidden shadow-lg ">
      <div className="w-[300px] overflow-hidden">
        <Image
          src={pics}
          alt=""
          className=" w-[400px] hover:ease-in-out hover:scale-125  transition-all delay-150 duration-300 ease-in-out"
        />
      </div>
      <button
        type="button"
        aria-label="FaRegHeart"
        className="bg-white xl:bottom-[190px] p-2 text-gray-700 rounded-full  lg:left-36 lg:w-fit lg:relative xl:left-60 md:relative md:left-[230px]  md:w-fit md:bottom-48 max-md:relative max-md:left-[230px] max-md:bottom-48 max-md:max-w-fit hover:bg-red-400 hover:text-white"
      >
        <FaRegHeart className="text-lg" />
      </button>
      <div className="px-5 flex flex-col gap-2 mb-2">
        <h2 className="font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">
          Lorem Ipsum Dolor Sit Amet.Co Ec Tetur Adipiscing Elit Bibu
        </p>
        <div className="flex justify-between text-lg items-center ">
          <p className="text-xs">Calories🔥</p>
          <p className="text-orange-500">€{price}.00</p>
        </div>
      </div>
    </div>
  );
}
