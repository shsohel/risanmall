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
      <div className="grid  gap-4  lg:grid-cols-7 ">
        <div className=" grid  gap-4 lg:col-span-4">
          <div className=" relative gap-4 bg-primary pl-10">
            <Image
              className="object-fill"
              // loader={imageLoader}
              priority
              alt="product 01"
              src={offerPic}
            />
            {/* <button className="absolute  bottom-0 right-0  w-36 bg-secondary p-2  text-2xl font-semibold hover:bg-primary">
              Shop Now
            </button> */}
          </div>
        </div>
        <div className="grid gap-4  lg:col-span-3">
          <div className=" flex items-center gap-4  border-2 p-6 dark:border-none  dark:bg-secondary-light">
            <div className=" w-2/4 py-6 ">
              <h2 className="text-2xl font-bold uppercase italic md:text-3xl">
                Gaming PC
              </h2>
              <p className=" mt-2 text-xs">
                Deserunt id reprehenderit commodo fugiat .
              </p>
              <button className="mt-2  w-24 -skew-x-12 bg-primary p-1 font-semibold text-white hover:skew-x-0  hover:bg-secondary dark:bg-secondary dark:hover:bg-primary">
                Add to Cart
              </button>
            </div>
            <div className="flex w-2/4 justify-center">
              <div>
                <Image
                  // loader={imageLoader}
                  priority
                  alt="product 01"
                  height={200}
                  src={productPC}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 ">
            <div className=" relative border-2 p-6 text-center  dark:border-none dark:bg-secondary-light">
              <h2 className="pb-1 text-2xl  font-bold ">Mobile Phone</h2>
              <div className="flex justify-center pb-2">
                <Image
                  // loader={imageLoader}
                  priority
                  alt="product 02"
                  height={150}
                  src={productPC01}
                />
              </div>
              <button className="absolute left-0 bottom-0 mt-2 w-full  border bg-primary  py-2 font-semibold text-white hover:skew-x-0 hover:bg-secondary  dark:border-secondary-light dark:bg-secondary dark:hover:bg-primary">
                {/* <button className="mt-2  w-24 -skew-x-12 bg-primary p-1 font-semibold text-white hover:skew-x-0  hover:bg-secondary dark:bg-secondary dark:hover:bg-primary"> */}
                Add to Cart
              </button>
            </div>
            <div className=" relative border-2 p-6 text-center  dark:border-none dark:bg-secondary-light">
              <h2 className="pb-1 text-2xl  font-bold">Shoes</h2>
              <div className="flex justify-center pb-2">
                <Image
                  // loader={imageLoader}
                  priority
                  alt="product 03"
                  height={150}
                  src={productPC02}
                />
              </div>
              <button className="absolute left-0 bottom-0 mt-2 w-full  border bg-primary  py-2 font-semibold text-white hover:skew-x-0 hover:bg-secondary  dark:border-secondary-light dark:bg-secondary dark:hover:bg-primary">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CoverSection;
