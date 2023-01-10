import React from 'react';
import Banner from '../../../assets/images/products/offer-2.jpg';
const SingleBannerSection = () => {
  return (
    <div
      className="h-80 lg:h-80 md:h-48 sm:h-32 bg-center w-full bg-cover bg-no-repeat my-10 md:block"
      style={{
        backgroundImage: `url(${Banner.src})`,
      }}
    ></div>
  );
};

export default SingleBannerSection;
