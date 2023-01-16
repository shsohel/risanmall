import React from 'react';
import Banner from '../../../assets/images/products/offer-2.jpg';
const SingleBannerSection = () => {
  return (
    <div
      className="my-10 h-16 w-full bg-cover bg-center bg-no-repeat sm:h-32 md:block md:h-48 lg:h-80"
      style={{
        backgroundImage: `url(${Banner.src})`,
      }}
    ></div>
  );
};

export default SingleBannerSection;
