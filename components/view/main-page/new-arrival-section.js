import Image from 'next/image';
import React from 'react';
import Image01 from '../../../assets/images/products/headphone-3.png';
import Image02 from '../../../assets/images/products/sofa-2.png';
import Image03 from '../../../assets/images/products/phone-2.png';
import Image04 from '../../../assets/images/products/headphone-2.png';
import Image05 from '../../../assets/images/products/phone-1.png';
import Image06 from '../../../assets/images/products/sofa-1.png';
import Image07 from '../../../assets/images/products/laptop-2.png';
import Image08 from '../../../assets/images/products/shoes-4.png';

const NewArrivalProduct = () => {
  return (
    <div className="py-3 my-3">
      <h2 className="font-medium text-3xl mb-10 bg-gradient-to-l to-primary/80 from-[white]/0 py-1 px-2  ">
        New Product
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mx-auto justify-center w-12/12">
        <div className="group bg-secondary-light w-full relative">
          <div className="flex flex-row p-3">
            <div className="basis-full">
              <div className="flex justify-center items-center relative z-0 h-64">
                <div>
                  <Image
                    className="bg-opacity-75 inline"
                    src={Image05}
                    width={200}
                  />
                </div>
                <div className="group group-hover:bg-secondary/50 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-white font-semibold">
                  <div className="opacity-0 group-hover:opacity-100 bottom-0 absolute bg-primary w-full text-center z-20">
                    <button className="p-1">Quick View</button>
                  </div>
                </div>
              </div>

              <div className="text-2xl text-center font-semibold">
                <h3>Nikki Shoes</h3>
                <p className="text-primary">$ 200.00</p>
              </div>
              <div>
                <button className="px-3 py-2 border-2 border-secondary hover:border-primary transition hover:bg-secondary  uppercase text-xl font-semibold w-full">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 right-0 h-9 bg-primary w-32 p-1 text-center text-base font-medium">
            <span> 200 Products</span>
          </div>
        </div>
        <div className="group bg-secondary-light w-full  relative">
          <div className="flex flex-row p-3">
            <div className="basis-full">
              <div className="flex justify-center items-center relative z-0 h-64">
                <div>
                  <Image src={Image06} width={200} />
                </div>
                <div className="group group-hover:bg-secondary/50 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-white font-semibold">
                  <div className="opacity-0 group-hover:opacity-100 bottom-0 absolute bg-primary w-full text-center z-20">
                    <button className="p-1">Quick View</button>
                  </div>
                </div>
              </div>

              <div className="text-2xl text-center font-semibold">
                <h3>Nikki Shoes</h3>
                <p className="text-primary">$ 200.00</p>
              </div>
              <div>
                <button className="px-3 py-2 border-2 border-secondary hover:border-primary transition hover:bg-secondary  uppercase text-xl font-semibold w-full">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 right-0 h-9 bg-primary w-32 p-1 text-center text-base font-medium">
            <span> 200 Products</span>
          </div>
        </div>
        <div className="group bg-secondary-light w-full relative">
          <div className="flex flex-row p-3">
            <div className="basis-full">
              <div className="flex justify-center items-center relative z-0 h-64">
                <div>
                  <Image src={Image03} width={200} />
                </div>
                <div className="group group-hover:bg-secondary/50 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-white font-semibold">
                  <div className="opacity-0 group-hover:opacity-100 bottom-0 absolute bg-primary w-full text-center z-20">
                    <button className="p-1">Quick View</button>
                  </div>
                </div>
              </div>

              <div className="text-2xl text-center font-semibold">
                <h3>Nikki Shoes</h3>
                <p className="text-primary">$ 200.00</p>
              </div>
              <div>
                <button className="px-3 py-2 border-2 border-secondary hover:border-primary transition hover:bg-secondary  uppercase text-xl font-semibold w-full">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 right-0 h-9 bg-primary w-32 p-1 text-center text-base font-medium">
            <span> 200 Products</span>
          </div>
        </div>
        <div className="group bg-secondary-light w-full relative">
          <div className="flex flex-row p-3">
            <div className="basis-full">
              <div className="flex justify-center items-center relative z-0 h-64">
                <div>
                  <Image src={Image02} width={200} />
                </div>
                <div className="group group-hover:bg-secondary/50 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-white font-semibold">
                  <div className="opacity-0 group-hover:opacity-100 bottom-0 absolute bg-primary w-full text-center z-20">
                    <button className="p-1">Quick View</button>
                  </div>
                </div>
              </div>

              <div className="text-2xl text-center font-semibold">
                <h3>Nikki Shoes</h3>
                <p className="text-primary">$ 200.00</p>
              </div>
              <div>
                <button className="px-3 py-2 border-2 border-secondary hover:border-primary transition hover:bg-secondary  uppercase text-xl font-semibold w-full">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 right-0 h-9 bg-primary w-32 p-1 text-center text-base font-medium">
            <span> 200 Products</span>
          </div>
        </div>
        <div className="group bg-secondary-light w-full relative">
          <div className="flex flex-row p-3">
            <div className="basis-full">
              <div className="flex justify-center items-center relative z-0 h-64">
                <div>
                  <Image src={Image08} width={200} />
                </div>
                <div className="group group-hover:bg-secondary/50 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-white font-semibold">
                  <div className="opacity-0 group-hover:opacity-100 bottom-0 absolute bg-primary w-full text-center z-20">
                    <button className="p-1">Quick View</button>
                  </div>
                </div>
              </div>

              <div className="text-2xl text-center font-semibold">
                <h3>Nikki Shoes</h3>
                <p className="text-primary">$ 200.00</p>
              </div>
              <div>
                <button className="px-3 py-2 border-2 border-secondary hover:border-primary transition hover:bg-secondary  uppercase text-xl font-semibold w-full">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 right-0 h-9 bg-primary w-32 p-1 text-center text-base font-medium">
            <span> 200 Products</span>
          </div>
        </div>
        <div className="group bg-secondary-light w-full relative">
          <div className="flex flex-row p-3">
            <div className="basis-full">
              <div className="flex justify-center items-center relative z-0 h-64">
                <div>
                  <Image src={Image01} width={200} />
                </div>
                <div className="group group-hover:bg-secondary/50 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-white font-semibold">
                  <div className="opacity-0 group-hover:opacity-100 bottom-0 absolute bg-primary w-full text-center z-20">
                    <button className="p-1">Quick View</button>
                  </div>
                </div>
              </div>

              <div className="text-2xl text-center font-semibold">
                <h3>Nikki Shoes</h3>
                <p className="text-primary">$ 200.00</p>
              </div>
              <div>
                <button className="px-3 py-2 border-2 border-secondary hover:border-primary transition hover:bg-secondary  uppercase text-xl font-semibold w-full">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 right-0 h-9 bg-primary w-32 p-1 text-center text-base font-medium">
            <span> 200 Products</span>
          </div>
        </div>
        <div className="group bg-secondary-light w-full relative">
          <div className="flex flex-row p-3">
            <div className="basis-full">
              <div className="flex justify-center items-center relative z-0 h-64">
                <div>
                  <Image src={Image04} width={200} />
                </div>
                <div className="group group-hover:bg-secondary/50 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-white font-semibold">
                  <div className="opacity-0 group-hover:opacity-100 bottom-0 absolute bg-primary w-full text-center z-20">
                    <button className="p-1">Quick View</button>
                  </div>
                </div>
              </div>

              <div className="text-2xl text-center font-semibold">
                <h3>Nikki Shoes</h3>
                <p className="text-primary">$ 200.00</p>
              </div>
              <div>
                <button className="px-3 py-2 border-2 border-secondary hover:border-primary transition hover:bg-secondary  uppercase text-xl font-semibold w-full">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 right-0 h-9 bg-primary w-32 p-1 text-center text-base font-medium">
            <span> 200 Products</span>
          </div>
        </div>
        <div className="group bg-secondary-light w-full relative">
          <div className="flex flex-row p-3">
            <div className="basis-full">
              <div className="flex justify-center items-center relative z-0 h-64">
                <div>
                  <Image src={Image07} width={200} />
                </div>
                <div className="group group-hover:bg-secondary/50 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-white font-semibold">
                  <div className="opacity-0 group-hover:opacity-100 bottom-0 absolute bg-primary w-full text-center z-20">
                    <button className="p-1">Quick View</button>
                  </div>
                </div>
              </div>

              <div className="text-2xl text-center font-semibold">
                <h3>Nikki Shoes</h3>
                <p className="text-primary">$ 200.00</p>
              </div>
              <div>
                <button className="px-3 py-2 border-2 border-secondary hover:border-primary transition hover:bg-secondary  uppercase text-xl font-semibold w-full">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 right-0 h-9 bg-primary w-32 p-1 text-center text-base font-medium">
            <span> 200 Products</span>
          </div>
        </div>
      </div>
      <div className="text-center my-4">
        <button className="bg-primary  hover:bg-secondary border-primary border-2  font-semibold  -skew-x-12 w-24 p-1  hover:skew-x-0 ">
          More
        </button>
      </div>
    </div>
  );
};

export default NewArrivalProduct;
