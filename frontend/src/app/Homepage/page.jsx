"use client";
import { React, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import pillows from "../../../public/img/beanbag.png";
import { TbLoader } from "react-icons/tb";
// icons
import { ImSpinner3 } from "react-icons/im";

function page() {
  const [size, SetSize] = useState();
  return (
    <>
      <container className="grid p-9 grid-cols 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center items-center mt-10">
        <div className="relative h-[500px] w-72"
          >
          <Image
            src={pillows}
            alt="chair"
            className={`drop-shadow-2xl object-scale-down group transform duration-300 w-72 ${
          size ? "h-[100%]" : "h-96"
              }`} />
          <div className={`flex flex-col mt-3
          ${size && "hidden"}`}>
            <label className="font-semibold">
              this is item name
            </label>
            <label className="text-yellow-500 font-bold">35$</label>
            <span>
              here are some stars
            </span>
          </div>
          <div className={`flex flex-col justify-evenly items-start text-left p-10 bg-black absolute top-0 inset-0 opacity-0 hover:opacity-80 h-[100%] transform duration-300`}
          onMouseEnter={() => { SetSize(true) }}
          onMouseLeave={() => { SetSize(false) }}>
            <span className="text-white">This is a title</span>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              veniam atque quas accusantium, iste ratione non voluptas at
              officiis ad culpa, nisi eum? Ullam saepe odit provident voluptatem
              perferendis obcaecati.
            </p>
            <Link className="py-2 px-4 border border-white text-white font-semibold  hover:bg-white hover:text-black transform duration-200 hover:-translate-y-0.5"
            href="/"> View Details </Link>
          </div>
        </div>

        {/* <div className="relative h-[500px] w-72">
          <Image
            src={danish}
            alt="chair"
            className="object-scale-down group shadow-xl transform duration-300 bg-white w-72 h-96"
          />
        </div>
        <div className="relative h-[500px] w-72">
          <Image
            src={danish}
            alt="chair"
            className="object-scale-down group shadow-xl transform duration-300 bg-white w-72 h-96"
          />
        </div>
        <div className="relative h-[500px] w-72">
          <Image
            src={danish}
            alt="chair"
            className="object-scale-down group shadow-xl transform duration-300 bg-white w-72 h-96"
          />
        </div>
        <div className="relative h-[500px] w-72">
          <Image
            src={danish}
            alt="chair"
            className="object-scale-down group shadow-xl transform duration-300 bg-white w-72 h-96"
          />
        </div> */}
      </container>
    </>
  );
}

export default page;
