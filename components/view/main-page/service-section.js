import Image from 'next/image';
import React from 'react';
import VanImage from '../../../assets/images/icons/delivery-van.svg';
import MoneyReturn from '../../../assets/images/icons/money-back.svg';
import HourServices from '../../../assets/images/icons/service-hours.svg';
const ServiceSection = () => {
  return (
    <div className="py-16">
      <div className="lg:w-10/12 w-12/12 grid md:grid-cols-3 grid-cols-1  gap-6 mx-auto justify-center">
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <Image className="w-12 h-12 object-contain" src={VanImage} />
          <div>
            <h4 className="font-medium capitalize text-lg">Free Shopping</h4>
            <p className="text-gray-500 lg:text-sm text-xs">Order over $200</p>
          </div>
        </div>

        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <Image className="w-12 h-12 object-contain" src={MoneyReturn} />
          <div>
            <h4 className="font-medium capitalize text-lg">Money Returns</h4>
            <p className="text-gray-500 lg:text-sm text-xs">
              30 Days money return
            </p>
          </div>
        </div>

        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <Image className="w-12 h-12 object-contain" src={HourServices} />
          <div>
            <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
            <p className="text-gray-500 lg:text-sm text-xs">Customer support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
