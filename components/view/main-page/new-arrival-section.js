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
    <div className="my-3 py-3">
      <h2 className="mb-10 from-[white]/0 to-primary/80 py-1 px-2 text-3xl font-medium dark:bg-gradient-to-l  ">
        New Product
      </h2>
      <div className="w-12/12 mx-auto grid grid-cols-1 justify-center gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="group relative w-full bg-primary/20 dark:bg-secondary-light">
          <div className="flex flex-row p-3">
            <div className="basis-full">
              <div className="relative z-0 flex h-64 items-center justify-center">
                <div>
                  <Image
                    className="inline bg-opacity-75"
                    src={Image05}
                    width={200}
                    alt=""
                  />
                </div>
                <div className="group absolute inset-0 z-10 flex items-center justify-center text-2xl font-semibold text-white duration-300 group-hover:bg-secondary/50">
                  <div className="absolute bottom-0 z-20 w-full bg-primary text-center opacity-0 group-hover:opacity-100">
                    <button className="p-1">Quick View</button>
                  </div>
                </div>
              </div>

              <div className="text-center text-2xl font-semibold">
                <h3>Nikki Shoes</h3>
                <p className="text-primary">$ 200.00</p>
              </div>
              <div>
                <button className="w-full border-2 border-secondary px-3 py-2 text-xl font-semibold uppercase transition hover:border-primary hover:bg-secondary hover:text-white">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 right-0 h-9 w-32 bg-primary p-1 text-center text-base font-medium text-white">
            <span> 200 Products</span>
          </div>
        </div>
        <div className="group relative w-full bg-primary/20 dark:bg-secondary-light">
          <div className="flex flex-row p-3">
            <div className="basis-full">
              <div className="relative z-0 flex h-64 items-center justify-center">
                <div>
                  <Image src={Image06} width={200} alt="" />
                </div>
                <div className="group absolute inset-0 z-10 flex items-center justify-center text-2xl font-semibold text-white duration-300 group-hover:bg-secondary/50">
                  <div className="absolute bottom-0 z-20 w-full bg-primary text-center opacity-0 group-hover:opacity-100">
                    <button className="p-1">Quick View</button>
                  </div>
                </div>
              </div>

              <div className="text-center text-2xl font-semibold">
                <h3>Nikki Shoes</h3>
                <p className="text-primary">$ 200.00</p>
              </div>
              <div>
                <button className="w-full border-2 border-secondary px-3 py-2 text-xl font-semibold uppercase transition hover:border-primary hover:bg-secondary hover:text-white">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 right-0 h-9 w-32 bg-primary p-1 text-center text-base font-medium text-white">
            <span> 200 Products</span>
          </div>
        </div>
        <div className="group relative w-full bg-primary/20 dark:bg-secondary-light">
          <div className="flex flex-row p-3">
            <div className="basis-full">
              <div className="relative z-0 flex h-64 items-center justify-center">
                <div>
                  <Image src={Image03} width={200} alt="" />
                </div>
                <div className="group absolute inset-0 z-10 flex items-center justify-center text-2xl font-semibold text-white duration-300 group-hover:bg-secondary/50">
                  <div className="absolute bottom-0 z-20 w-full bg-primary text-center opacity-0 group-hover:opacity-100">
                    <button className="p-1">Quick View</button>
                  </div>
                </div>
              </div>

              <div className="text-center text-2xl font-semibold">
                <h3>Nikki Shoes</h3>
                <p className="text-primary">$ 200.00</p>
              </div>
              <div>
                <button className="w-full border-2 border-secondary px-3 py-2 text-xl font-semibold uppercase transition hover:border-primary hover:bg-secondary hover:text-white">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 right-0 h-9 w-32 bg-primary p-1 text-center text-base font-medium text-white">
            <span> 200 Products</span>
          </div>
        </div>
        <div className="group relative w-full bg-primary/20 dark:bg-secondary-light">
          <div className="flex flex-row p-3">
            <div className="basis-full">
              <div className="relative z-0 flex h-64 items-center justify-center">
                <div>
                  <Image src={Image02} width={200} alt="" />
                </div>
                <div className="group absolute inset-0 z-10 flex items-center justify-center text-2xl font-semibold text-white duration-300 group-hover:bg-secondary/50">
                  <div className="absolute bottom-0 z-20 w-full bg-primary text-center opacity-0 group-hover:opacity-100">
                    <button className="p-1">Quick View</button>
                  </div>
                </div>
              </div>

              <div className="text-center text-2xl font-semibold">
                <h3>Nikki Shoes</h3>
                <p className="text-primary">$ 200.00</p>
              </div>
              <div>
                <button className="w-full border-2 border-secondary px-3 py-2 text-xl font-semibold uppercase transition hover:border-primary hover:bg-secondary hover:text-white">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 right-0 h-9 w-32 bg-primary p-1 text-center text-base font-medium text-white">
            <span> 200 Products</span>
          </div>
        </div>
        <div className="group relative w-full bg-primary/20 dark:bg-secondary-light">
          <div className="flex flex-row p-3">
            <div className="basis-full">
              <div className="relative z-0 flex h-64 items-center justify-center">
                <div>
                  <Image src={Image08} width={200} alt="" />
                </div>
                <div className="group absolute inset-0 z-10 flex items-center justify-center text-2xl font-semibold text-white duration-300 group-hover:bg-secondary/50">
                  <div className="absolute bottom-0 z-20 w-full bg-primary text-center opacity-0 group-hover:opacity-100">
                    <button className="p-1">Quick View</button>
                  </div>
                </div>
              </div>

              <div className="text-center text-2xl font-semibold">
                <h3>Nikki Shoes</h3>
                <p className="text-primary">$ 200.00</p>
              </div>
              <div>
                <button className="w-full border-2 border-secondary px-3 py-2 text-xl font-semibold uppercase transition hover:border-primary hover:bg-secondary hover:text-white">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 right-0 h-9 w-32 bg-primary p-1 text-center text-base font-medium text-white">
            <span> 200 Products</span>
          </div>
        </div>
        <div className="group relative w-full bg-primary/20 dark:bg-secondary-light">
          <div className="flex flex-row p-3">
            <div className="basis-full">
              <div className="relative z-0 flex h-64 items-center justify-center">
                <div>
                  <Image src={Image01} width={200} alt="" />
                </div>
                <div className="group absolute inset-0 z-10 flex items-center justify-center text-2xl font-semibold text-white duration-300 group-hover:bg-secondary/50">
                  <div className="absolute bottom-0 z-20 w-full bg-primary text-center opacity-0 group-hover:opacity-100">
                    <button className="p-1">Quick View</button>
                  </div>
                </div>
              </div>

              <div className="text-center text-2xl font-semibold">
                <h3>Nikki Shoes</h3>
                <p className="text-primary">$ 200.00</p>
              </div>
              <div>
                <button className="w-full border-2 border-secondary px-3 py-2 text-xl font-semibold uppercase transition hover:border-primary hover:bg-secondary hover:text-white">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 right-0 h-9 w-32 bg-primary p-1 text-center text-base font-medium text-white">
            <span> 200 Products</span>
          </div>
        </div>
        <div className="group relative w-full bg-primary/20 dark:bg-secondary-light">
          <div className="flex flex-row p-3">
            <div className="basis-full">
              <div className="relative z-0 flex h-64 items-center justify-center">
                <div>
                  <Image src={Image04} width={200} alt="" />
                </div>
                <div className="group absolute inset-0 z-10 flex items-center justify-center text-2xl font-semibold text-white duration-300 group-hover:bg-secondary/50">
                  <div className="absolute bottom-0 z-20 w-full bg-primary text-center opacity-0 group-hover:opacity-100">
                    <button className="p-1">Quick View</button>
                  </div>
                </div>
              </div>

              <div className="text-center text-2xl font-semibold">
                <h3>Nikki Shoes</h3>
                <p className="text-primary">$ 200.00</p>
              </div>
              <div>
                <button className="w-full border-2 border-secondary px-3 py-2 text-xl font-semibold uppercase transition hover:border-primary hover:bg-secondary hover:text-white">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 right-0 h-9 w-32 bg-primary p-1 text-center text-base font-medium text-white">
            <span> 200 Products</span>
          </div>
        </div>
        <div className="group relative w-full bg-primary/20 dark:bg-secondary-light">
          <div className="flex flex-row p-3">
            <div className="basis-full">
              <div className="relative z-0 flex h-64 items-center justify-center">
                <div>
                  <Image src={Image07} width={200} alt="" />
                </div>
                <div className="group absolute inset-0 z-10 flex items-center justify-center text-2xl font-semibold text-white duration-300 group-hover:bg-secondary/50">
                  <div className="absolute bottom-0 z-20 w-full bg-primary text-center opacity-0 group-hover:opacity-100">
                    <button className="p-1">Quick View</button>
                  </div>
                </div>
              </div>

              <div className="text-center text-2xl font-semibold">
                <h3>Nikki Shoes</h3>
                <p className="text-primary">$ 200.00</p>
              </div>
              <div>
                <button className="w-full border-2 border-secondary px-3 py-2 text-xl font-semibold uppercase transition hover:border-primary hover:bg-secondary hover:text-white">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 right-0 h-9 w-32 bg-primary p-1 text-center text-base font-medium text-white">
            <span> 200 Products</span>
          </div>
        </div>
      </div>
      <div className="my-4 text-center">
        <button className="w-24  -skew-x-12 border-2 border-primary  bg-primary  p-1 font-semibold hover:skew-x-0  hover:bg-secondary ">
          More
        </button>
      </div>
    </div>
  );
};

export default NewArrivalProduct;
