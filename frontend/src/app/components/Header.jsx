"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// icons
import { IoIosSearch } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { TbCreditCardRefund } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <div className="bg-[#D8C4B6] p-9 pb-6 shadow-lg rounded-b-3xl mx-12">
        <div className="mx-auto">
          <container className="flex flex-col items-center justify-between text-black md:flex-row">
            {/* Left side */}
            <div>
              <Link
                href="/"
                className="text-2xl font-semibold tracking-wide text-black">
                Online Store
              </Link>
            </div>
            {/* Quick Icons for Services */}
            <div className="flex items-center justify-between gap-2 md:gap-2">
              <Link
                className={
                  pathname == "/"
                    ? "-translate-y-0.5 duration-100 bg-black bg-opacity-30 p-2 rounded"
                    : "hover:-translate-y-0.5 duration-100 hover:bg-black hover:bg-opacity-10 p-1 rounded"
                }
                href="/">
                <IoIosSearch size="25" />
              </Link>

              <Link
                className={
                  pathname == "/about"
                    ? "-translate-y-0.5 duration-100 bg-black bg-opacity-30 p-2 rounded"
                    : "hover:-translate-y-0.5 duration-100 hover:bg-black hover:bg-opacity-10 p-1 rounded"
                }
                href="/about">
                <GoPerson size="25" />
              </Link>

              <Link
                className={
                  pathname == "/services"
                    ? "-translate-y-0.5 duration-100 bg-black bg-opacity-30 p-2 rounded"
                    : "hover:-translate-y-0.5 duration-100 hover:bg-black hover:bg-opacity-10 p-1 rounded"
                }
                href="/services">
                <IoBagOutline size="25" />
              </Link>

              <Link
                className={
                  pathname == "/favorites"
                    ? "-translate-y-0.5 duration-100 bg-black bg-opacity-30 p-2 rounded"
                    : "hover:-translate-y-0.5 duration-100 hover:bg-black hover:bg-opacity-10 p-1 rounded"
                }
                href="/favorites">
                <IoIosHeartEmpty size="25" />
              </Link>
            </div>
          </container>
        </div>
        {/* Links for pages */}
        <div className="border border-blue-900 my-5 border-b mx-auto"></div>
        <container className="flex flex-col justify-evenly items-center space-y-4 mx-auto md:flex-row md:space-y-0 uppercase font-semibold">
          <a>Home</a>
          <a>Store</a>
          <a>Accessories</a>
          <a>Brand</a>
          <a>Pages</a>
          <a>About Us</a>
          <a>News</a>
          <a>Contact Us</a>
        </container>
        <div className="border border-blue-900 my-5 border-b"></div>
        <container className="flex flex-col justify-evenly items-center space-y-4 mx-auto md:flex-row md:space-y-0">
          <label className="flex justify-center items-center gap-1">
            <TbTruckDelivery size="25" color="blue" />
            Fast Delivery
          </label>
          <label className="flex justify-center items-center gap-1">
            <TbCreditCardRefund size="25" color="blue" />
            Refund 100%
          </label>
          <label className="flex justify-center items-center gap-1">
            <RiCustomerService2Line size="25" color="blue" />
            Customer Serivce
          </label>
        </container>
      </div>
    </>
  );
};

export default Header;
