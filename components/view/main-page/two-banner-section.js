import Image from 'next/image';
import React from 'react';
import Shop01 from '../../../assets/images/products/sofa-1.png';
import Shop02 from '../../../assets/images/products/sofa-2.png';

const TwoBannerSection = () => {
  return (
    <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className=" flex h-96  flex-col-reverse justify-center gap-4 bg-primary/20 p-8  lg:flex lg:h-56  lg:flex-row lg:justify-between">
        <div>
          <span className="text-lg font-medium text-primary">30% Offer</span>
          <h4 className=" my-1 text-2xl font-medium">Free Shipping</h4>
          <p className="my-2 text-base font-normal text-secondary-light dark:text-gray-400">
            Attractive Natural Furniture
          </p>
          <button className="mt-3 w-28 bg-primary  py-2 px-3 text-white hover:border-2 hover:border-primary hover:bg-secondary">
            Shop Now
          </button>
        </div>
        <div className="flex justify-center">
          <Image width={200} src={Shop01} alt="sfsf" priority />
        </div>
      </div>
      <div className=" flex h-96  flex-col-reverse justify-center gap-4 bg-primary/20 p-8  lg:flex lg:h-56  lg:flex-row lg:justify-between">
        <div>
          <span className="text-lg font-medium text-primary">50% Offer</span>
          <h4 className=" my-1 text-2xl font-medium">Flash Sale</h4>
          <p className="my-2 text-base font-normal text-secondary-light dark:text-gray-400">
            Attractive Natural Furniture
          </p>
          <button className="mt-3 w-28 bg-primary py-2 px-3 text-white  hover:border-2 hover:border-primary hover:bg-secondary">
            Shop Now
          </button>
        </div>
        <div className="flex justify-center">
          <Image width={200} src={Shop02} alt="fdfdfd" priority />
        </div>
      </div>
    </div>
  );
};

export default TwoBannerSection;
