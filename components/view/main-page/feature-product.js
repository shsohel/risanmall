import Image from 'next/image';
import React, { useState } from 'react';
import Image01 from '../../../assets/images/products/SmallCardProduct_PC.png.thumb.webp';
import Image02 from '../../../assets/images/products/shoes-5.png';
import Image03 from '../../../assets/images/products/shoes-3.png';
import Image04 from '../../../assets/images/products/headphone-2.png';
import Product01 from '../../../assets/images/products/product1.jpg';
import { MdStarRate } from 'react-icons/md';
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import Modal from '../../custom/Modal';
import Link from 'next/link';

const FeatureProduct = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = (condition) => {
    setOpenModal(condition);
  };
  return (
    <div className="py-3">
      <h2 className="mb-10 from-[white]/0 to-primary/80 py-1 px-2 text-3xl font-medium dark:bg-gradient-to-l  ">
        Feature Product
      </h2>
      <div className="w-12/12 mx-auto grid grid-cols-1 justify-center gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="group relative w-full bg-primary/20 dark:bg-secondary-light">
          <div className="flex flex-row p-3">
            <div className="basis-full">
              <div className="relative z-0 flex h-64 items-center justify-center">
                <div>
                  <Image src={Image03} width={200} alt="sfsfsf" />
                </div>
                <div className="group absolute inset-0 z-10 flex items-center justify-center text-2xl font-semibold text-white duration-300 group-hover:bg-secondary/50">
                  <div className="absolute bottom-0 z-20 w-full bg-primary text-center opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => {
                        handleOpenModal(true);
                      }}
                      className="p-1"
                    >
                      Quick View
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-center text-2xl font-semibold">
                <h3 className="hover:text-primary">
                  <Link href="/shop/nikki-shoes">Nikki Shoes</Link>
                </h3>
                <p className="text-primary">$ 200.00</p>
              </div>
              <div>
                <button className="w-full border-2 border-secondary px-3 py-2 text-xl font-semibold  uppercase transition hover:border-primary hover:bg-secondary hover:text-white">
                  Add to Cart
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
                  <Image src={Image02} width={200} alt="sfsf" />
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
                  Add to Cart
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
                  <Image src={Image01} width={200} alt="fsfsf" />
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
                  Add to Cart
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
                  <Image src={Image04} width={200} alt="s" />
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
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 right-0 h-9 w-32 bg-primary p-1 text-center text-base font-medium text-white">
            <span> 200 Products</span>
          </div>
        </div>
      </div>
      <Modal
        title="Product Quick View"
        isOpen={openModal}
        openModal={handleOpenModal}
        FooterComponent={
          <div className="flex items-center justify-center pt-2 md:justify-end">
            <div className="grid grid-cols-2 gap-2">
              <button
                id="addtocard"
                className="bg-primary px-3 py-2 font-medium uppercase text-white hover:bg-secondary focus:outline-none"
              >
                <span className="flex items-center justify-center gap-2">
                  <FaCartPlus size={18} />
                  <span> Add to Card</span>
                </span>
              </button>
              <button
                id="whitelist"
                className="bg-primary px-3 py-2 font-medium uppercase text-white hover:bg-secondary  focus:outline-none"
              >
                <span className="flex items-center justify-center gap-2">
                  <FaHeart size={18} />
                  <span> Whitelist</span>
                </span>
              </button>
            </div>
          </div>
        }
      >
        <div className="grid grid-cols-1  gap-6 md:grid-cols-2">
          {/* media section */}
          <div>
            <Image width={500} src={Product01} alt="bg-image" />
            <div className="mt-1 grid grid-cols-4 gap-2">
              <div>
                <Image
                  className="w-full"
                  width={100}
                  src={Product01}
                  alt="Sg"
                />
              </div>
              <div>
                <Image
                  className="w-full"
                  width={100}
                  src={Product01}
                  alt="Sg"
                />
              </div>
              <div>
                <Image
                  className="w-full"
                  width={100}
                  src={Product01}
                  alt="Sg"
                />
              </div>
              <div>
                <Image
                  className="w-full"
                  width={100}
                  src={Product01}
                  alt="Sg"
                />
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold">Short Description : </h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                exercitationem quaerat....
              </p>
            </div>
          </div>
          {/* details section */}
          <div className="text-secondary">
            <h2 className="text-lg  font-semibold text-secondary md:text-xl lg:text-2xl ">
              MEN'S ADIDAS COURTSMASH
            </h2>
            <div className="mt-1 flex items-center gap-2">
              <div className="flex gap-2 text-amber-600">
                <MdStarRate size={20} />
                <MdStarRate size={20} />
                <MdStarRate size={20} />
                <MdStarRate size={20} />
              </div>
              <div className="text-secondary-light">50 Reviews</div>
            </div>
            <div className="mt-2 flex flex-col gap-2 text-base">
              <div>
                <span className="mr-1 font-semibold">Availability :</span>
                <span className="font-bold text-green-800"> In Stock</span>
              </div>
              <div>
                <span className="mr-1 font-semibold">Band :</span>
                <span> Bat a</span>
              </div>
              <div>
                <span className="mr-1 font-semibold ">Category :</span>
                <span>Clothing</span>
              </div>
              <div>
                <span className="mr-1 font-semibold">SKU :</span>
                <span>5S-65S-5545</span>
              </div>
              <div>
                {/* <span className="mr-1 font-semibold"> :</span> */}
                <span className="text-2xl font-bold text-primary">
                  $4500.00
                </span>
              </div>

              <div>
                <h3 className="mb-2 text-base font-medium uppercase ">Size</h3>
                <div className="flex items-center gap-2">
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      className="hidden"
                      id="size-xs"
                    />
                    <label
                      htmlFor="size-xs"
                      className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs text-secondary shadow-sm"
                    >
                      XS
                    </label>
                  </div>
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      className="hidden"
                      id="size-xs"
                    />
                    <label
                      htmlFor="size-xs"
                      className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs text-secondary shadow-sm"
                    >
                      S
                    </label>
                  </div>
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      className="hidden"
                      id="size-xs"
                    />
                    <label
                      htmlFor="size-xs"
                      className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs text-secondary shadow-sm"
                    >
                      M
                    </label>
                  </div>
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      className="hidden"
                      id="size-xs"
                    />
                    <label
                      htmlFor="size-xs"
                      className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs text-secondary shadow-sm"
                    >
                      L
                    </label>
                  </div>
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      className="hidden"
                      id="size-xs"
                    />
                    <label
                      htmlFor="size-xs"
                      className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs text-secondary shadow-sm"
                    >
                      XL
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-base font-medium uppercase ">Color</h3>
                <div className="flex items-center gap-2">
                  <div className="color-selector">
                    <input
                      type="radio"
                      name="color"
                      className="hidden"
                      id="color-xs"
                    />
                    <label
                      htmlFor="color-xs"
                      className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs text-secondary shadow-sm"
                      style={{ backgroundColor: 'red' }}
                    ></label>
                  </div>
                  <div className="color-selector">
                    <input
                      type="radio"
                      name="color"
                      className="hidden"
                      id="color-xs"
                    />
                    <label
                      htmlFor="color-xs"
                      className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs text-secondary shadow-sm"
                      style={{ backgroundColor: 'black' }}
                    ></label>
                  </div>
                  <div className="color-selector">
                    <input
                      type="radio"
                      name="color"
                      className="hidden"
                      id="color-xs"
                    />
                    <label
                      htmlFor="color-xs"
                      className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs text-secondary shadow-sm"
                      style={{ backgroundColor: 'blue' }}
                    ></label>
                  </div>
                  <div className="color-selector">
                    <input
                      type="radio"
                      name="color"
                      className="hidden"
                      id="color-xs"
                    />
                    <label
                      htmlFor="color-xs"
                      className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs text-secondary shadow-sm"
                      style={{ backgroundColor: 'skyblue' }}
                    ></label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-base font-medium uppercase ">
                  Quantity
                </h3>
                <div className="flex w-max divide-x divide-gray-300 border border-gray-300 text-gray-600">
                  <div className="flex h-8 w-8 cursor-pointer select-none items-center justify-center text-xl">
                    -
                  </div>
                  <div className="flex h-8 w-8 cursor-pointer select-none items-center justify-center text-base">
                    4
                  </div>
                  <div className="flex h-8 w-8 cursor-pointer select-none items-center justify-center text-xl">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FeatureProduct;
