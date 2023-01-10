/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import {
  FaFacebook,
  FaFacebookSquare,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import Logo from '../assets/Logo.png';
import { navMenu, secondaryMenu } from '../pages/api/mode';

export const Footer = () => {
  return (
    <div className="bg-gradient-to-r to-[#32003B] from-[#3E002F] bg-no-repeat bg-cover text-white ">
      <div className="container min-h-[5rem] py-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 ">
          <div className="col-span-1 ">
            <div className="">
              <Image src={Logo} alt="logo" />
            </div>
            <p className="text-[1.2rem] font-normal mt-2 ">
              Inspiring the world through change
            </p>
            <div className="mt-14">
              <h5 className="text-2xl font-medium mb-3">Get our newsletter</h5>
              <div className="flex items-center justify-between">
                <p className=" flex-2 text-sm ">
                  Read about the latest in workplace trends, events and insights
                  straight to your inbox.
                </p>
                <div className="ml-2 flex-1">
                  <div className="flex justify-between">
                    <FaFacebookSquare size={20} className="m-1 flex-1" />
                    <FaInstagram size={20} className="m-1 flex-1" />
                    <FaTwitter size={20} className="m-1 flex-1" />
                    <FaYoutube size={20} className="m-1 flex-1" />
                    <FaLinkedin size={20} className="ml-1 my-1 mr-0 flex-1" />
                  </div>
                </div>
              </div>
              <div className="flex mt-5">
                <input
                  placeholder="Enter Email"
                  className=" flex-1 border-0 border-b border-white   focus:outline-none bg-inherit"
                />
                <button className="uppercase flex-2 bg-sky-600 text-white p-2">
                  Subscription to newsletter
                </button>
              </div>
              <div className=" text-neutral-400 font-semibold text-[0.8rem] mt-3">
                <input type="checkbox" className=" bg-sky-800 mr-1 " />
                <span>
                  Yes. I'd like to receive marketing emails from Edge and agree
                  to it's
                  <span className="text-sky-500 ml-1">
                    <Link href="/">terms of business.</Link>
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
              {navMenu.map((nav, index) => (
                <div key={index} className="col-span-1">
                  <h2 className="uppercase text-lg font-semibold text-sky-500">
                    {nav.mainItem}
                  </h2>
                  {nav.subItem.map((subNav, index) => (
                    <div key={index} className="flex flex-col ">
                      <Link
                        href={subNav.link}
                        className="text-[0.9rem] font-semibold py-1"
                      >
                        {subNav.name}
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-20 ">
              <div className=" flex justify-between">
                {secondaryMenu.map((subNav, index) => (
                  <span key={index} className="">
                    <Link
                      href={subNav.link}
                      className="text-[0.9rem] font-semibold py-1 "
                    >
                      {subNav.name}
                    </Link>
                  </span>
                ))}
              </div>
              <div className="uppercase text-neutral-400 font-semibold text-[.6rem] mt-3">
                <p>
                  Edge refers to the global platform and may refer to one or
                  more licensed companies. Each of which is a separate legal
                  entity .
                </p>
                <p>
                  Edge Brand and technology Owned by G.C.C Limited, Comapany No.
                  10453456
                </p>
                <p className="mt-2">G.C.C Limited @ All Rights Reserved 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
