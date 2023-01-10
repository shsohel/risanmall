import Image from 'next/image';
import React from 'react';
import Shop01 from '../../../assets/images/products/sofa-1.png';
import Shop02 from '../../../assets/images/products/sofa-2.png';

const TwoBannerSection = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-10">
      <div className=" flex flex-col-reverse  lg:flex lg:flex-row justify-center lg:justify-between gap-4  bg-primary/20 h-96  lg:h-56 p-8">
        <div>
          <span className="text-primary font-medium text-lg">30% Offer</span>
          <h4 className=" font-medium text-2xl my-1">Free Shipping</h4>
          <p className="text-gray-400 font-normal text-base my-2">
            Attractive Natural Furniture
          </p>
          <button className="w-28 py-2 px-3 rounded-md bg-primary mt-3 hover:bg-secondary hover:border-primary hover:border-2">
            Shop Now
          </button>
        </div>
        <div className="flex justify-center">
          <Image width={200} src={Shop01} alt="" priority />
        </div>
      </div>
      <div className=" flex flex-col-reverse  lg:flex lg:flex-row justify-center lg:justify-between gap-4  bg-primary/20 h-96  lg:h-56 p-8">
        <div>
          <span className="text-primary font-medium text-lg">50% Offer</span>
          <h4 className=" font-medium text-2xl my-1">Flash Sale</h4>
          <p className="text-gray-400 font-normal text-base my-2">
            Attractive Natural Furniture
          </p>
          <button className="w-28 py-2 px-3 rounded-md bg-primary mt-3  hover:bg-secondary hover:border-primary hover:border-2">
            Shop Now
          </button>
        </div>
        <div className="flex justify-center">
          <Image width={200} src={Shop02} alt="" priority />
        </div>
      </div>
    </div>
  );
};

export default TwoBannerSection;
