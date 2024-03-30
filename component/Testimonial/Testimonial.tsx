import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import ProfileA from "./../../assets/images/pr1.jpg";
import ProfileB from "./../../assets/images/pr2.jpg";
import Image, { StaticImageData } from "next/image";
export default function Testimonial() {
  return (
    <section className="lg:py-7 lg:mt-4 md:mt-5 max-md:w-full">
      <div className="text-center flex flex-col items-center justify-center mb-2 gap-2 max-md:w-full">
        <h2 className="text-3xl font-bold max-md:text-2xl">Testimonial</h2>
        <p className="w-[400px] max-md:w-full max-md:text-sm max-md:px-3 max-md:py-2">
          Lorem Ipsum Sit Amet,Consectetur Adipiscing Elit, Bibendum Dis Vel
          Odio Odio Elit Nunc Amet
        </p>
      </div>
      <div className="flex justify-end max-md:hidden ">
        <button
          aria-label="HiArrowLongLeft"
          type="button"
          className="px-3 py-1"
        >
          <HiArrowLongLeft className="text-2xl" />
        </button>
        <button
          aria-label="HiArrowLongLeft"
          type="button"
          className="px-3 py-1"
        >
          <HiArrowLongRight className="text-2xl" />
        </button>
      </div>
      <div className="flex lg:justify-between lg:gap-6 md:flex-col lg:flex-row md:mb-3 lg:mb-0  max-md:w-full max-md:flex-col max-md:px-4 md:gap-2 ">
        <UserCard
          user={"Wade Warren"}
          src={ProfileA}
          alt={"User testimonial image"}
        />
        <UserCard
          user={"Albert Flores"}
          src={ProfileB}
          alt={"User testimonial image"}
        />
        <UserCard
          user={"Esther Howard"}
          src={ProfileA}
          alt={"User testimonial image"}
        />
      </div>
    </section>
  );
}
export function UserCard({ user, src, alt }: { user: String; src:StaticImageData; alt:any }) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 md:items-center md:justify-center">
        <div className="bg-black p-1 rounded-full shadow-2xl relative top-16 ">
          <Image src={src} alt={alt} className="w-[100px] rounded-full" />
        </div>
        <div className="flex flex-col shadow-2xl gap-6 pt-20 py-5 mb-4 bg-gray-50 rounded-xl px-4 lg:w-[100%] md:w-[350px]">
          <div className="flex flex-col  items-center gap-5 ">
            <h2 className="xl:text-2xl lg:text-xl font-semibold">{user}</h2>
            <p className="xl:text-lg text-center max-md:text-sm  hover:text-orange-500">
              Lorem Ipsum Sit Amet,Consectetur Adipiscing Elit, Bibendum Dis Vel
              Odio Odio Elit Nunc Amet Cras Varius.Massa A Sollicitudin Malesu
              Ada Odio Elit Nunc Massa.
            </p>
          </div>
          <div className="flex justify-between items-center mb-2 gap max-md:text-sm max-md:px-3">
            <p>Head of LLC</p>
            <p className="flex items-center">
              <FaStar className="text-lg text-orange-500" />
              (4.8)
            </p>
          </div>
        </div>
      </div>
    );
}
