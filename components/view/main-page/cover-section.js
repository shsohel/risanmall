import Image from 'next/image';
import React from 'react';
import offerPic from '../../../assets/cover01.png';
import productPC from '../../../assets/Product-01.png';
import productPC02 from '../../../assets/Product-03.png';
import productPC01 from '../../../assets/Product-02.png';
import { imageLoader } from '../../../utils/utolity';
const CoverSection = () => {
  return (
    <header className="mt-[4.5rem] lg:mt-[7.9rem]   ">
      <div className="grid  lg:grid-cols-7 gap-4 ">
        <div className=" lg:col-span-4  grid gap-4">
          <div className=" bg-primary pl-10 gap-4 relative">
            <Image
              className="object-fill"
              // loader={imageLoader}
              priority
              alt="product 01"
              src={offerPic}
            />
            <button className="bg-secondary  hover:bg-primary font-semibold  absolute bottom-0 w-36  right-0 text-2xl p-2">
              Shop Now
            </button>
          </div>
        </div>
        <div className="lg:col-span-3 grid gap-4">
          <div className=" flex items-center bg-secondary-light  p-6 gap-4">
            <div className=" py-6 ">
              <h2 className="text-2xl md:text-3xl font-bold uppercase italic">
                Gaming PC
              </h2>
              <p className=" text-xs mt-2">
                Deserunt id reprehenderit commodo fugiat .
              </p>
              <button className="bg-secondary  hover:bg-primary font-semibold  -skew-x-12 w-24 p-1  hover:skew-x-0 mt-2">
                Shop Now
              </button>
            </div>
            <div className="flex justify-center">
              <Image
                // loader={imageLoader}
                priority
                alt="product 01"
                height={200}
                src={productPC}
              />
            </div>
          </div>
          <div className="grid gap-4 grid-cols-2 ">
            <div className=" bg-secondary-light text-center relative">
              <h2 className="text-2xl font-bold  py-2 ">Mobile Phone</h2>
              <div className="flex justify-center">
                <Image
                  // loader={imageLoader}
                  priority
                  alt="product 02"
                  height={150}
                  src={productPC01}
                />
              </div>
              <button className="bg-secondary py-2 opacity-60  hover:bg-primary font-semibold w-full  mt-2 absolute bottom-0 right-0 left-0">
                Shop Now
              </button>
            </div>
            <div className=" bg-primary text-center relative">
              <h2 className="text-2xl font-bold  py-2">Shoes</h2>
              <div className="flex justify-center">
                <Image
                  // loader={imageLoader}
                  priority
                  alt="product 03"
                  height={150}
                  src={productPC02}
                />
              </div>
              <button className="bg-secondary py-2 opacity-60 hover:opacity-100 hover:bg-secondary-light font-semibold w-full  mt-2 absolute bottom-0 right-0 left-0">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CoverSection;
