import React from 'react';
import { FaCartPlus, FaChevronRight, FaHeart, FaHome } from 'react-icons/fa';
import Image01 from '../../../assets/images/products/SmallCardProduct_PC.png.thumb.webp';
import Image02 from '../../../assets/images/products/shoes-5.png';
import Image03 from '../../../assets/images/products/shoes-3.png';
import Image04 from '../../../assets/images/products/headphone-2.png';
import Product01 from '../../../assets/images/products/product1.jpg';
import { MdStarRate } from 'react-icons/md';
import Image from 'next/image';
const SingleProductPage = () => {
  return (
    <div className="container">
      <div className="mt-[4.5rem] lg:mt-[9rem]">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-3  py-4">
          <a href="/" className="text-base text-primary">
            <FaHome />
          </a>
          <span className="text-sm ">
            <FaChevronRight />
          </span>
          <a href="/shop" className="text-base font-medium text-primary">
            Shop
          </a>
          <span className="text-sm ">
            <FaChevronRight />
          </span>
          <p>mens-adidas-courtsmash</p>
        </div>
        <div>
          <div className="grid grid-cols-1  gap-6 md:grid-cols-2">
            {/* media section */}
            <div>
              <Image width={700} src={Product01} alt="bg-image" />
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
            </div>
            {/* details section */}
            <div className="">
              <h2 className="text-lg  font-semibold  md:text-xl lg:text-2xl ">
                MEN'S ADIDAS COURTSMASH
              </h2>
              <div className="mt-1 flex items-center gap-2">
                <div className="flex gap-2 text-amber-600">
                  <MdStarRate size={20} />
                  <MdStarRate size={20} />
                  <MdStarRate size={20} />
                  <MdStarRate size={20} />
                </div>
                <div className="text-primary">50 Reviews</div>
              </div>
              <div className="mt-2 flex flex-col gap-2 text-base">
                <div>
                  <span className="mr-1 font-semibold">Availability :</span>
                  <span className="font-bold text-primary"> In Stock</span>
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
                  <h3 className="mb-2 text-base font-medium uppercase ">
                    Size
                  </h3>
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
                        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs  shadow-sm"
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
                        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs shadow-sm"
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
                        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs shadow-sm"
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
                        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs  shadow-sm"
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
                        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs  shadow-sm"
                      >
                        XL
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-base font-medium uppercase ">
                    Color
                  </h3>
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
                        className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs  shadow-sm"
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
                        className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs shadow-sm"
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
                        className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs shadow-sm"
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
                        className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs  shadow-sm"
                        style={{ backgroundColor: 'skyblue' }}
                      ></label>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-base font-medium uppercase ">
                    Quantity
                  </h3>
                  <div className="flex w-max divide-x divide-gray-300 border border-gray-300">
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
                <div>
                  <h3 className="text-base font-semibold">
                    Short Description :
                  </h3>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim exercitationem quaerat....
                  </p>
                </div>
                <div className="mt-3 flex gap-2">
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
                <div>
                  <span className="text-base font-semibold">
                    Social Share :
                  </span>
                  <div className="text-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul
          className="nav nav-tabs mb-4 flex list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row"
          id="tabs-tab3"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              href="#tabs-home3"
              className="
      nav-link
      active
      my-2
      block
      w-full
      border-x-0
      border-t-0
      border-b-2 border-transparent px-6 py-3
      text-xs
      font-medium
      uppercase
      leading-tight hover:border-transparent
      hover:bg-gray-100
      focus:border-transparent
    "
              id="tabs-home-tab3"
              data-bs-toggle="pill"
              data-bs-target="#tabs-home3"
              role="tab"
              aria-controls="tabs-home3"
              aria-selected="true"
            >
              Home
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              href="#tabs-profile3"
              className="
      nav-link
      my-2
      block
      w-full
      border-x-0
      border-t-0
      border-b-2
      border-transparent px-6 py-3 text-xs
      font-medium
      uppercase
      leading-tight
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
              id="tabs-profile-tab3"
              data-bs-toggle="pill"
              data-bs-target="#tabs-profile3"
              role="tab"
              aria-controls="tabs-profile3"
              aria-selected="false"
            >
              Profile
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              href="#tabs-messages3"
              className="
      nav-link
      my-2
      block
      w-full
      border-x-0
      border-t-0
      border-b-2
      border-transparent px-6 py-3 text-xs
      font-medium
      uppercase
      leading-tight
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
              id="tabs-messages-tab3"
              data-bs-toggle="pill"
              data-bs-target="#tabs-messages3"
              role="tab"
              aria-controls="tabs-messages3"
              aria-selected="false"
            >
              Messages
            </a>
          </li>
        </ul>
        <div className="tab-content" id="tabs-tabContent3">
          <div
            className="tab-pane fade show active"
            id="tabs-home3"
            role="tabpanel"
            aria-labelledby="tabs-home-tab3"
          >
            Tab 1 content button version
          </div>
          <div
            className="tab-pane fade"
            id="tabs-profile3"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab3"
          >
            Tab 2 content button version
          </div>
          <div
            className="tab-pane fade"
            id="tabs-messages3"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab3"
          >
            Tab 3 content button version
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
