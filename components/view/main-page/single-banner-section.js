import React from 'react';
import Banner from '../../../assets/images/products/offer-2.jpg';
const SingleBannerSection = () => {
  return (
    <div
      className="xs:24 my-10 h-20 w-full bg-cover bg-center bg-no-repeat  md:block md:h-48 lg:h-80"
      style={{
        backgroundImage: `url(${Banner.src})`,
      }}
    ></div>
  );
};

export default SingleBannerSection;
