import React from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { FiArrowRightCircle } from 'react-icons/fi';

const SubscriptionSection = () => {
    return (
        <div className="mt-5 ">
            <div className="container mx-auto lg:px-8  min-h-[5rem] mb-5">
                <div className="mt-5 pb-5">
                    <div className="grid grid-cols-1 lg:grid-cols-4   gap-4 mt-4">
                        <div className="col-span-1 lg:col-span-2">
                            <p className="uppercase  text-xl lg:text-2xl font-light">
                                Collaborative Work Management
                            </p>
                            <p className="text-4xl lg:text-6xl font-semibold tracking-widest">
                                Stay Connected
                            </p>
                        </div>
                        <div className="col-span-1 lg:col-span-2">
                            <p className="text-xl">
                                In publishing and graphic design, Lorem ipsum is
                                a placeholder text commonly used to demonstrate
                                the visual form of a document or a typeface
                                without relying on meaningful content. Lorem
                                ipsum may be used .
                            </p>
                            <div className="grid grid-cols-1 lg:grid-cols-10  mt-6 ">
                                <div className="uppercase font-semibold text-xl col-span-3 text-neutral-700">
                                    Subscription Now
                                </div>
                                <div className='col-span-6'>
                                    <input placeholder='Enter Email' className="border-0 border-b border-slate-900 w-full  focus:outline-none" />
                                </div>
                                <div className='col-span-1  text-right justify-self-end'>
                                    <FiArrowRightCircle className='stroke-1' size={28}  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionSection;
