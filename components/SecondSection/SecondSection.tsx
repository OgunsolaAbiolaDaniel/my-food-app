import FrenchFries from "./../../assets/images/frenchfries.jpg";
import SeaFood from "./../../assets/images/Seafood.jpg";
import CardMenu from "../CardMenu/CardMenu";
import Chainies from "./../../assets/images/chainies-curry.jpg";
import Burger from "./../../assets/images/burger.jpg";
import Banner from "../Banner/Banner";
import SecBanner from "../SecBanner/SecBanner";
import { ReactNode } from "react";
import AppContainer from "../AppContainer/AppContainer";

export default function SecondSection() {
  return (
    <AppContainer>
      <div className="flex flex-col gap-2 max-md:w-full">
        <h1 className="text-4xl  mt-20 font-bold max-md:text-xl max-md:self-center max-md:text-center max-md:mt-10">
          Choose Your<br></br> Favourite Dishes
        </h1>
        <nav className="flex items-center lg:justify-end gap-10 md:justify-center max-md:grid max-md:grid-cols-2 max-md:gap-1 max-md:px-8">
          <Button>Starters</Button>
          <Button>Dishes</Button>
          <Button>Deserts</Button>
          <Button>Drinks</Button>
        </nav>
        <div className="lg:flex justify-between gap-5 my-5  md:grid md:gap-7 md:grid-cols-2 md:grid-rows-2 max-md:flex-col max-md:p-4 max-md:gap-6 max-md:flex  ">
          <CardMenu price={15.0} name={"French Fries"} pics={FrenchFries} />
          <CardMenu price={18.0} name={"Chainies Curry "} pics={Chainies} />
          <CardMenu price={13.0} name={"Chicken Burger"} pics={Burger} />
          <CardMenu price={20.0} name={"Delicious Seafood"} pics={SeaFood} />
        </div>
      </div>
      <Banner />
      <SecBanner />
    </AppContainer>
  );
}

export function Button({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label=""
      className="active:bg-white hover:bg-white my-3 w-24 text-gray-700 py-2 px-4 active:rounded-lg hover:rounded-lg  hover:shadow-lg active:shadow-lg"
    >
      {children}
    </button>
  );
}
