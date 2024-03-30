import Image, { StaticImageData } from "next/image"
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import stake from "./../../assets/images/stake.jpg";


export default function News() {
    
    return (
      <section className="py-7 mt-4 max-md:w-full  ">
        <div className="text-center flex flex-col items-center justify-center mb-2 gap-2  max-md:w-full max-md:gap-2 max-md:mb-5">
          <h2 className="text-3xl font-bold max-md:text-2xl">Latest News</h2>
          <p className="w-[400px] max-md:w-full max-md:text-sm max-md:px-2">
            Lorem Ipsum Sit Amet,Consectetur Adipiscing Elit, Bibendum Dis Vel
            Odio Odio Elit Nunc Amet
          </p>
        </div>
        <div className="flex justify-end max-md:hidden ">
          <button
            type="button"
            aria-label="HiArrowLongRight"
            className="px-3 py-1"
          >
            <HiArrowLongLeft className="text-2xl" />
          </button>
          <button
            type="button"
            aria-label="HiArrowLongLeft"
            className="px-3 py-1"
          >
            <HiArrowLongRight className="text-2xl" />
          </button>
        </div>

        <div className=" flex lg:gap-6 lg:flex-nowrap md:flex-wrap md:gap-7 max-md:w-full max-md:flex-col max-md:gap-6 ">
          <DataCards
            title={
              "The Multiple Nutrients of Citrus Meet ,A Powerful Antioxident."
            }
            author={"James Rico Fernadez"}
            date={"29 03 2024"}
            src={stake}
            alt={"Plate of Stake"}
          ></DataCards>
          <DataCards
            title={
              "The Multiple Nutrients of Citrus Meet ,A Powerful Antioxident."
            }
            author={"James Rico Fernadez"}
            date={"29 03 2024"}
            src={stake}
            alt={"Plate of Vegetable"}
          ></DataCards>
        </div>
      </section>
    );
}
function DataCards({ title, author, date, src, alt }: { title: String; author: String; date: String; alt:any; src:StaticImageData}){
    return (
      <div className="flex items-center gap-4 shadow-lg overflow-hidden lg:w-1/2 max-md:flex-col max-md:w-full">
        <div className="w-[25%] scale-125  lg:object-cover max-md:w-full max-md:h-[200px] max-md:overflow-hidden max-md:object-contain">
          <Image src={src} alt={alt} className="w-[100%] " />
        </div>
        <div className="w-[75%] flex flex-col lg-gap-3 md:gap-2 p-4 max-md:py-2 max-md:px-3 max-md:w-full max-md:gap-3 ">
          <header className="flex gap-5 text-yellow-400 max-md:flex max-md:mt-3">
            <p>By {author}</p>
            <p>{date}</p>
          </header>
          <h2 className="xl:text-2xl md:text-lg  font-semibold max-md:text-center">
            {title}
          </h2>
          <p className="text-gray-500 lg:text-sm max-md:text-center">
            Lorem Ipsum Dolor Sit Amet,Consectet Ur Adipiscing Elit. Et Interdum
            Blanditsit Rhoncus,Quis Aliquet Dictumust.
          </p>
          <button
            type="button"
            aria-label="Read More"
            className="text-orange-500 hover:text-gray- lg:text-base md:self-end md:text-sm max-md:mb-3"
          >
            Read More
          </button>
        </div>
      </div>
    );
}