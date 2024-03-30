import { TbTruckDelivery } from "react-icons/tb";
import AppContainer from "../AppContainer/AppContainer";
import { ReactNode } from "react";

export default function InnerSection() {
  return (
    <AppContainer>
      <div className=" max-md:flex-col max-md:w-full border-2 border-black py-12 lg:px-10 rounded-2xl flex lg:flex-row  justify-between mt-16 gap-6 md:flex-col md:items-center">
        <Word title={"Good Quality Food"}>
          {" "}
          <TbTruckDelivery className="bg-yellow-400 text-4xl text-gray-700 w-15 h-15 rounded-full p-2 " />
        </Word>
        <Word title={"Good Quality Food"}>
          {" "}
          <TbTruckDelivery className="bg-yellow-400 text-4xl text-gray-700 w-15 h-15 rounded-full p-2 " />
        </Word>
        <Word title={"Fast Delivery Service"}>
          {" "}
          <TbTruckDelivery className="bg-yellow-400 text-4xl text-gray-700 w-15 h-15 rounded-full p-2 " />
        </Word>
      </div>
    </AppContainer>
  );
}

export function Word({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-3 w-[350px] items-center max-md:px-6 max-md:w-full ">
      {children}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-500 text-center max-md:text-sm">
        Ac tincidunt vitae semper quis lectus nulla at volutpat diam ut
        venenatis tellus in metus vulputate eu scelerisque felis
      </p>
    </div>
  );
}
