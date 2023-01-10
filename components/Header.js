import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import {
  Fa500Px,
  FaBars,
  FaCartPlus,
  FaHeart,
  FaLocationArrow,
  FaMapMarked,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaMapPin,
  FaMapSigns,
  FaSearch,
  FaUserCircle,
} from 'react-icons/fa';
import { VscGlobe } from 'react-icons/vsc';
import { navMenu, primaryMenu } from '../pages/api/mode';
import Logo from '../assets/Logo.png';

const Header = () => {
  const handleMenuCollapse = (menuId, authButtonId) => {
    const menu = document.getElementById(menuId);
    const findClassList = Object.values(menu?.classList).find(
      (s) => s === 'hidden'
    );
    console.log(JSON.stringify(Object.values(menu?.classList), null, 2));
    if (findClassList !== undefined) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  };

  return (
    <div className=" fixed w-full top-0 bg-gradient-to-r to-[#32003B] from-[#3E002F] z-50 ">
      <nav className="flex items-center container justify-between  py-4  ">
        <div className="flex-auto">
          <Image
            width={250}
            className="hidden lg:block"
            src={Logo}
            alt="book01"
          />
          <Image
            width={100}
            className="block lg:hidden"
            src={Logo}
            alt="book01"
          />
        </div>
        <div className="flex-auto">
          <div className="hidden lg:flex items-center  justify-between mb-3">
            <div className="w-5/12 flex relative ">
              <span className="absolute left-4 top-3 text-lg text-gray-400">
                <FaSearch />
              </span>

              <input
                type="text"
                placeholder="Search"
                className="w-full border text-rose-800 border-rose-700 border-r-0 pl-12 py-2 pr-3  focus:outline-none"
              />
              <button className=" font-roboto uppercase text-sm bg-rose-700 text-white px-8  hover:bg-transparent hover:text-rose-700 transition">
                Search
              </button>
            </div>
            <div className="grid grid-cols-4 gap-1 divide-x divide-purple-800">
              <div className="grid-span-1 px-3">
                <div className="flex items-center gap-1">
                  <div>
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <div className="text-rose-600 font-bold">Location</div>
                    <div className="text-xs text-white">Chittagong</div>
                  </div>
                </div>
              </div>
              <div className="grid-span-1 px-3">
                <div className="flex items-center gap-1">
                  <div>
                    <FaUserCircle size={24} />
                  </div>
                  <div>
                    <div className="text-rose-600 font-bold">Contact </div>
                    <div className="text-xs  text-white">+8801811275653</div>
                  </div>
                </div>
              </div>
              <div className="grid-span-1 px-3 flex items-center justify-center gap-1">
                <div className="relative">
                  <FaCartPlus size={24} />
                  <span className="absolute text-xs -right-2 -top-1 h-4 w-4 text-center rounded-full bg-rose-500">
                    1
                  </span>
                </div>
              </div>
              <div className="grid-span-1 px-3 flex items-center justify-center gap-1">
                <div className="relative">
                  <FaHeart size={24} />
                  <span className="absolute text-xs -right-2 -top-1 h-4 w-4 text-center rounded-full bg-rose-500">
                    1
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* main Menu */}
          <div className="w-full flex justify-end items-center lg:bg-gradient-to-l from-[#4f085c] to-[#3c0030]">
            <div className="text-sm hidden lg:flex justify-end divide-x divide-purple-800">
              {navMenu.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.link}
                    className="inline-block  text-white hover:text-white  px-5"
                  >
                    {item.mainItem}
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center">
              <button className="relative lg:hidden   text-rose-200  hover:text-white hover:white hover:bg-rose-900  p-2 ">
                <FaCartPlus size={24} />
                <span className="absolute text-xs text-center right-0 top-1 h-4 w-4 rounded-full bg-rose-500">
                  1
                </span>
              </button>
              <button className="   bg-rose-600 text-rose-200  hover:text-white hover:white hover:bg-rose-600 ml-2 p-3 relative group ">
                <div className="flex items-center">
                  <span className="mr-1 uppercase font-roboto text-xs">
                    All Category
                  </span>
                  <FaBars />
                </div>

                <div className="absolute uppercase font-roboto text-xs top-full w-full right-0 hidden group-hover:block opacity-0 group-hover:opacity-100 bg-rose-600 transition duration-300 divide-y divide-dashed divide-rose-400">
                  <Link
                    href="#"
                    className="py-1 px-3 flex items-center justify-end hover:bg-secondary-light"
                  >
                    T-Shirt
                  </Link>
                  <Link
                    href="#"
                    className="py-1 px-3 flex items-center justify-end hover:bg-secondary-light"
                  >
                    T-Shirt
                  </Link>
                  <Link
                    href="#"
                    className="py-1 px-3 flex items-center justify-end hover:bg-secondary-light"
                  >
                    Pant
                  </Link>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
