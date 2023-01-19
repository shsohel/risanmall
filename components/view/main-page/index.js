import React from 'react';
import CoverSection from './cover-section';
import FeatureProduct from './feature-product';
import NewArrivalProduct from './new-arrival-section';
import ServiceSection from './service-section';
import SingleBannerSection from './single-banner-section';
import TwoBannerSection from './two-banner-section';

const MainPage = () => {
  return (
    <>
      <div className="container pt-[4.5rem] lg:pt-[10rem]">
        {/* <div className="mt-[4.5rem] lg:mt-[7.8rem]"> */}
        <div className="">
          <CoverSection />
          <ServiceSection />
          <TwoBannerSection />
          <FeatureProduct />
          <SingleBannerSection />
          <NewArrivalProduct />
        </div>
      </div>
    </>
  );
};

export default MainPage;
