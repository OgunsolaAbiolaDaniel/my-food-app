import Pic from "./../../assets/images/pexelshand.jpg";
import { IoIosArrowRoundDown } from "react-icons/io";
import Image from "next/image";
import AppContainer from "../AppContainer/AppContainer";

export default function UpperSection() {
  return (
    <AppContainer containerClasss="!pr-0">
      <div className="max-md:w-[100%] max-md:px-1 flex lg:justify-between max-md:flex-col lg:flex-row">
        <div className="max-md:flex-col max-md:w-full max-md:mt-10 max-md:w-12/12 w-6/12 mt-20 flex flex-col justify-between gap-6 ">
          <div className="max-md:flex max-md:flex-col max-md:gap-2">
            <h3 className="text-orange-500 md:text-lg sm:text-sm max-md:text-sm">
              Hurrah...!!!
            </h3>
            <h1 className=" max-md:text-3xl xl:text-6xl font-bold md:text-4xl lg:text-5xl">
              A Little Joy With{" "}
              <span className="text-orange-500">Delicious</span> Food
            </h1>
          </div>

          <p className="max-md:text-sm  md:text-base text-gray-800">
            Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper
            malesuada proin libero nunc consequat interdum varius sit amet
            mattis vulputate enim nulla.
          </p>
          <div className="flex md:gap-4 lg:gap-6 md:mt-6 max-md:px-2 max-md:gap-7">
            <button
              aria-label=" Order Now"
              type="button"
              className=" max-md:py-1 max-md:px-2 max-md:rounded-xl max-md:text-base border lg:px-6 md:py-2 md:px-4 bg-orange-500 hover:bg-slate-50 hover:text-black text-white md:rounded-3xl"
            >
              Order Now
            </button>
            <button
              type="button"
              aria-label=" about-us"
              className=" max-md:py-1 max-md:px-2 max-md:rounded-xl border md:px-4 lg:px-6 md:py-2  md:rounded-3xl hover:bg-orange-500 hover:text-white"
            >
              About Us
            </button>
          </div>
          <IoIosArrowRoundDown className="max-md:self-center max-md:text-2xl max-md:mt-0 md:text-6xl text-gray-800 lg:text-right md:self-end lg:mt-9" />
        </div>

        <div className="block w-[550px] h-[550px] max-md:w-screen max-md:object-fill max-md:h-[300px] max-md:overflow-hidden ">
          <Image
            src={Pic}
            alt=""
            className="max-md:w-full lg:w-full lg:h-[550px] md:h-[450px] object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </AppContainer>
  );
}
