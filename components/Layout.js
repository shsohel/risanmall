import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Footer } from './Footer';
import Header from './Header';

const Layout = ({ children, title, description, tags }) => {
  const backTop = () => {
    window.scroll({ behavior: 'smooth', top: 0 });
  };

  return (
    <>
      <div>
        <Header title={title} description={description} tags={tags} />
        <div>{children}</div>
        <Footer />
        <button
          type="button"
          onClick={() => {
            backTop();
          }}
          className="fixed bottom-16 right-4 inline-block rounded-full border border-white bg-rose-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-lg focus:bg-rose-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-800 active:shadow-lg lg:bottom-5"
          id="btn-back-to-top"
        >
          <FaArrowUp />
        </button>
      </div>
    </>
  );
};

export default Layout;
