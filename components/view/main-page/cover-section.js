import Image from 'next/image';
import React from 'react';
import offerPic from '../../../assets/cover01.png';
import productPC from '../../../assets/Product-01.png';
import productPC02 from '../../../assets/Product-03.png';
import productPC01 from '../../../assets/Product-02.png';
import { imageLoader } from '../../../utils/utolity';
const CoverSection = () => {
  return (
    <header>
      <div className="grid  gap-4 lg:grid-cols-7 ">
        <div className=" grid  gap-4 lg:col-span-4">
          <div className=" relative gap-4 bg-primary pl-10">
            <Image
              className="object-fill"
              // loader={imageLoader}
              priority
              alt="product 01"
              src={offerPic}
            />
            <button className="absolute  bottom-0 right-0  w-36 bg-secondary p-2  text-2xl font-semibold hover:bg-primary">
              Shop Now
            </button>
          </div>
        </div>
        <div className="grid gap-4 lg:col-span-3">
          <div className=" flex items-center gap-4  bg-secondary-light p-6">
            <div className=" py-6 ">
              <h2 className="text-2xl font-bold uppercase italic md:text-3xl">
                Gaming PC
              </h2>
              <p className=" mt-2 text-xs">
                Deserunt id reprehenderit commodo fugiat .
              </p>
              <button className="mt-2  w-24 -skew-x-12  bg-secondary p-1 font-semibold  hover:skew-x-0 hover:bg-primary">
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
          <div className="grid grid-cols-2 gap-4 ">
            <div className=" relative bg-secondary-light text-center">
              <h2 className="py-2 text-2xl  font-bold ">Mobile Phone</h2>
              <div className="flex justify-center">
                <Image
                  // loader={imageLoader}
                  priority
                  alt="product 02"
                  height={150}
                  src={productPC01}
                />
              </div>
              <button className="absolute bottom-0 right-0  left-0 mt-2 w-full  bg-secondary py-2 font-semibold opacity-60 hover:bg-primary">
                Shop Now
              </button>
            </div>
            <div className=" relative bg-primary text-center">
              <h2 className="py-2 text-2xl  font-bold">Shoes</h2>
              <div className="flex justify-center">
                <Image
                  // loader={imageLoader}
                  priority
                  alt="product 03"
                  height={150}
                  src={productPC02}
                />
              </div>
              <button className="absolute bottom-0 right-0 left-0 mt-2 w-full bg-secondary  py-2 font-semibold opacity-60 hover:bg-secondary-light hover:opacity-100">
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
