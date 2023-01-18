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
import Cart from './view/shop-page/cart';
import CartMobilePopOver from './view/shop-page/cart-mobile';

const Header = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [totalCartItem, setTotalCartItem] = useState(0);
  const handleSidebarOpen = (condition) => {
    setIsCardOpen(condition);
  };
  console.log(totalCartItem);
  return (
    <div className=" fixed top-0 z-50 w-full bg-gradient-to-r from-[#3E002F] to-[#32003B] ">
      <nav className="container flex items-center justify-between  py-4  ">
        <div className="flex-auto">
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
        <div className="flex-auto">
          <div className="mb-3 hidden items-center  justify-between lg:flex">
            <div className="relative flex w-5/12 ">
              <span className="absolute left-4 top-3 text-lg text-gray-400">
                <FaSearch />
              </span>

              <input
                type="text"
                placeholder="Search"
                className="w-full border border-r-0 border-rose-700 py-2 pl-12 pr-3 text-rose-800  focus:outline-none"
              />
              <button className=" bg-rose-700 px-8 font-roboto text-sm uppercase text-white  transition hover:bg-transparent hover:text-rose-700">
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
                    <div className="font-bold text-rose-600">Contact </div>
                    <div className="text-xs  text-white">+8801811275653</div>
                  </div>
                </div>
              </div>
              <div className="grid-span-1 flex items-center justify-center gap-1 px-3">
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
                <CartMobilePopOver />
              </div>
              <div className="grid-span-1 flex items-center justify-center gap-1 px-3">
                <div className="relative">
                  <FaHeart size={24} />
                  <span className="absolute -right-2 -top-1 h-4 w-4 rounded-full bg-rose-500 text-center text-xs">
                    1
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* main Menu */}
          <div className="flex w-full items-center justify-end from-[#4f085c] to-[#3c0030] lg:bg-gradient-to-l">
            <div className="hidden justify-end divide-x divide-purple-800 text-sm lg:flex">
              {mainMenu.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="hover:white group  relative   p-3 text-rose-200  "
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

                <div className="absolute top-full right-0 hidden w-full divide-y divide-rose-400 bg-secondary px-1 font-roboto text-xs uppercase opacity-0 shadow-lg shadow-primary transition duration-300 group-hover:block group-hover:opacity-100">
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
