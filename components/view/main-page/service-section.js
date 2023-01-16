import Image from "next/image";
import React from "react";
import VanImage from "../../../assets/images/icons/delivery-van.svg";
import MoneyReturn from "../../../assets/images/icons/money-back.svg";
import HourServices from "../../../assets/images/icons/service-hours.svg";
const ServiceSection = () => {
  return (
    <div className="py-16">
      <div className="w-12/12 mx-auto grid grid-cols-1 justify-center  gap-6 md:grid-cols-3 lg:w-10/12">
        <div className="flex items-center justify-center gap-5 rounded-sm border border-primary px-3 py-6">
          <Image className="h-12 w-12 object-contain" src={VanImage} alt="" />
          <div>
            <h4 className="text-lg font-medium capitalize">Free Shopping</h4>
            <p className="text-xs text-gray-500 lg:text-sm">Order over $200</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 rounded-sm border border-primary px-3 py-6">
          <Image
            className="h-12 w-12 object-contain"
            src={MoneyReturn}
            alt=""
          />
          <div>
            <h4 className="text-lg font-medium capitalize">Money Returns</h4>
            <p className="text-xs text-gray-500 lg:text-sm">
              30 Days money return
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 rounded-sm border border-primary px-3 py-6">
          <Image
            className="h-12 w-12 object-contain"
            src={HourServices}
            alt=""
          />
          <div>
            <h4 className="text-lg font-medium capitalize">24/7 Support</h4>
            <p className="text-xs text-gray-500 lg:text-sm">Customer support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
