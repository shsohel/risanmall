import React, { useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Footer } from './Footer';
import Header from './Header';

const Layout = ({ children, title, description, tags }) => {
  const backTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <div className="  bg-gradient-to-r to-[#32003B] from-[#3E002F] text-white border-white  ">
        <Header />
        <div>{children}</div>
        <Footer />
        <button
          type="button"
          onClick={() => {
            backTop();
          }}
          className="fixed inline-block p-3 bg-rose-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-neutral-700 hover:shadow-lg focus:bg-rose-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-800 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5"
          id="btn-back-to-top"
        >
          <FaArrowUp />
        </button>
      </div>
    </>
  );
};

export default Layout;
