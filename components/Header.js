import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  FaCartPlus,
  FaHeart,
  FaList,
  FaMapMarkerAlt,
  FaSearch,
  FaUserCircle,
} from 'react-icons/fa';
import { mainMenu } from '../pages/api/mode';
import Logo from '../assets/Logo.png';
import Logo2 from '../assets/images/icons/Logo.png';

import Cart from './view/shop-page/cart';
import CartMobilePopOver from './view/shop-page/cart-mobile';
import ControlThemeButton from './Theme';

const Header = (props) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [totalCartItem, setTotalCartItem] = useState(0);

  const handleSidebarOpen = (condition) => {
    setIsCardOpen(condition);
  };

  return (
    <div className=" fixed top-0 z-50 w-full bg-white from-gradient-two to-gradient-one text-secondary dark:bg-gradient-to-r dark:text-white ">
      <nav className="container flex items-center justify-between  py-4  ">
        <div className="hidden  dark:block">
          <Link href="/">
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
          </Link>
        </div>
        <div flex-auto>
          <Image
            width={70}
            className="dark:hidden lg:hidden"
            src={Logo2}
            alt="book01"
          />
        </div>
        <div className="flex-auto">
          <div className="mb-3 hidden items-center  justify-between lg:flex">
            <div>
              <Image
                width={70}
                className="dark:hidden"
                src={Logo2}
                alt="book01"
              />
            </div>
            <div className="relative flex w-5/12 ">
              <span className="absolute left-4 top-3 text-lg text-gray-400">
                <FaSearch />
              </span>

              <input
                type="text"
                placeholder="Search"
                className="w-full border border-r-0 border-primary py-2 pl-12 pr-3 text-primary focus:border-secondary-light focus:outline-none focus:ring-0"
              />
              <button className=" bg-primary px-8 font-roboto text-sm uppercase text-white  transition hover:border  hover:border-primary hover:bg-transparent hover:bg-secondary  hover:text-white dark:hover:bg-white  dark:hover:text-primary">
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
                    <div className="font-bold text-rose-600">Location</div>
                    <div className="text-xs text-secondary dark:text-white">
                      Chittagong
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-span-1 px-3">
                <div className="flex items-center gap-1">
                  <div>
                    <FaUserCircle size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-rose-600">Contact </div>
                    <div className="text-xs   text-secondary dark:text-white">
                      +8801811275653
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-span-1  gap-1 px-3">
                {/* <div
                  className="relative"
                  onClick={() => {
                    handleSidebarOpen(true);
                  }}
                >
                  <FaCartPlus size={24} />
                  <span className="absolute -right-2 -top-1 h-4 w-4 rounded-full bg-rose-500 text-center text-xs">
                    1
                  </span>
                </div> */}
                <div>
                  <CartMobilePopOver />
                </div>
              </div>
              <div className="grid-span-1 flex items-center justify-center gap-1 ">
                <button>
                  <div className="relative">
                    <FaHeart className="" size={24} />
                    <span className="absolute -right-2 -top-1 h-4 w-4 rounded-full border border-secondary bg-primary  text-center text-xs text-white dark:border-white ">
                      2
                    </span>
                  </div>
                </button>

                {/* <div className="relative">
                  <FaHeart
                    className="fill-white stroke-primary stroke-[2rem]"
                    size={24}
                  />
                  <span className="absolute -right-2 -top-1 h-4 w-4 rounded-full border border-secondary bg-primary  text-center text-xs text-white dark:border-white ">
                    1
                  </span>
                </div> */}
              </div>
            </div>
          </div>

          {/* main Menu */}
          <div className="flex w-full items-center justify-end from-[#4f085c] to-[#3c0030] dark:to-[#3c0030]/5 lg:bg-gradient-to-l">
            <div className="hidden justify-end divide-x divide-purple-800 text-sm lg:flex">
              {mainMenu.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="hover:white group  relative  py-2 px-3 text-white "
                  >
                    <Link href={item.link}>
                      <>{item.name}</>
                    </Link>
                    <span
                      hidden={!item.subItem.length}
                      className="absolute left-0 top-full hidden w-48 divide-y divide-rose-400 bg-secondary px-2 opacity-0 shadow-lg shadow-primary   transition duration-700 group-hover:block group-hover:opacity-100"
                    >
                      {item.subItem.map((sub, index) => (
                        <div
                          className="p-2  hover:text-primary"
                          key={index + 1}
                        >
                          <Link href={sub.link}>{sub.name}</Link>
                        </div>
                      ))}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center">
              <button
                onClick={() => {
                  handleSidebarOpen(true);
                }}
                className="hover:white relative   p-2   hover:bg-rose-900 hover:text-white  lg:hidden "
              >
                <FaCartPlus size={24} />
                <span className="absolute -right-1 top-0 h-5 w-5 rounded-full border border-white bg-rose-500 text-center text-xs">
                  {totalCartItem}
                </span>
              </button>
              <button className="hover:white group  relative ml-2 bg-rose-600 p-3 text-rose-200 hover:bg-rose-600 hover:text-white ">
                <div className="flex items-center">
                  <span className="mr-1 font-roboto text-xs uppercase">
                    All Category
                  </span>
                  <FaList />
                </div>

                <div className="absolute top-full right-0 hidden w-full divide-y bg-white px-1 font-roboto text-xs uppercase text-secondary opacity-0 shadow shadow-secondary transition duration-300 group-hover:block group-hover:opacity-100 dark:divide-primary dark:bg-secondary dark:text-white dark:shadow-primary">
                  <Link
                    href="#"
                    className="flex items-center justify-end py-2 px-3 hover:text-primary"
                  >
                    Men
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center justify-end py-2 px-3 hover:text-primary"
                  >
                    Women
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center justify-end py-2 px-3 hover:text-primary"
                  >
                    Mobile
                  </Link>
                </div>
              </button>
              {/* <div className="w-24">
                <ControlThemeButton />
              </div> */}
            </div>
          </div>
        </div>
      </nav>
      <Cart
        handleSidebarOpen={handleSidebarOpen}
        setTotalCartItem={setTotalCartItem}
        isCardOpen={isCardOpen}
      />
    </div>
  );
};

export default Header;
