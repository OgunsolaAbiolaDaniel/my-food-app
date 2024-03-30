import lasagne from "./../../assets/images/lasagne.jpg";
import Image from 'next/image';

export default function SecBanner() {
  return (
    <div className="flex md:flex-col lg:flex-row lg:justify-between md:justify-center md:items-center lg:gap-20 md:gap-16 lg:mt-20 md:mt-12 max-md:flex-col max-md:p-2 max-md:gap-3 max-md:mb-2">
      <div className="flex flex-col  gap-6 ">
        <h2 className="text-3xl font-semibold max-md:text-center max-md:text-2xl">
          Lets Know<br></br>About Our Shop
        </h2>
        <p className="text-base max-md:text-center">
          Lorem IPsum Dsolor Sit Amet,Consecteur Adipiscing Elit.Bibendum Dis
          Vel Odio Odio Elit Nunc Amet Cras Varius.Massa A Sollicitudin
          Malesuada.
        </p>
        <button
          type="button"
          aria-label="About Us"
          className="bg-orange-400 text-white text-base lg:w-[120px] md:w-[150px] hover:bg-white hover:border hover:text-gray-800 py-2 rounded-2xl max-md:w-[120px] max-md:self-center"
        >
          About Us
        </button>
      </div>
      <Image src={lasagne} alt="Image of a Lasagne" className="w-[450px]" />
    </div>
  );
}