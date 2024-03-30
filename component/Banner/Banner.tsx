import lasagne from "./../../assets/images/lasagne.jpg";

import Image from 'next/image'
export default function Banner() {
    return (
      <div className="flex md:flex-col lg:flex-row lg:justify-between md:justify-center md:items-center lg:gap-20 md:gap-16 lg:mt-20 md:mt-12 max-md:flex-col max-md:p-2 max-md:gap-3 max-md:mb-2">
        <Image src={lasagne} alt="Image of a Lasagne" className="w-[450px]" />
        <div className="flex flex-col  gap-6 ">
          <h2 className="text-3xl font-semibold max-md:text-center max-md:text-2xl  ">
            Meal Can Stong<br></br>You Life Style
          </h2>
          <p className="text-base max-md:p-1 max-md:text-center">
            Lorem IPsum Dsolor Sit Amet,Consecteur Adipiscing Elit.Bibendum Dis
            Vel Odio Odio Elit Nunc Amet Cras Varius.Massa A Sollicitudin
            Malesuada.
          </p>
          <button
            type="button"
            aria-label="Make An Order"
            className="bg-orange-400 text-white text-base hover:bg-white hover:border hover:text-gray-800 lg:w-[170px] md:w-[150px] py-2 rounded-2xl max-md:w-[150px] max-md:self-center"
          >
            Make An Order
          </button>
        </div>
      </div>
    );
}