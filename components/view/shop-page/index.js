import React, { useState } from 'react';
import { FaChevronRight, FaFilter, FaHome, FaList, FaTh } from 'react-icons/fa';
import Image01 from '../../../assets/images/products/headphone-3.png';
import Image02 from '../../../assets/images/products/sofa-2.png';
import Image03 from '../../../assets/images/products/phone-2.png';
import Image04 from '../../../assets/images/products/headphone-2.png';
import Image05 from '../../../assets/images/products/phone-1.png';
import Image06 from '../../../assets/images/products/sofa-1.png';
import Image07 from '../../../assets/images/products/laptop-2.png';
import Image08 from '../../../assets/images/products/shoes-4.png';
import Image from 'next/image';
import Link from 'next/link';
import Pagination from '../../custom/Pagination';
import FilterSection from './filter-section';
function ShopPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(10);
  const [totalRecords, setTotalRecords] = useState(25);

  const handlePagination = (page) => {
    console.log(page);
    setCurrentPage(page.selected + 1);
  };

  const handleOnFocusFilterBtn = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="container">
      <div className="mt-[4.5rem] lg:mt-[9rem]">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-3  py-4">
          <Link href="/" className="text-base text-primary">
            <FaHome />
          </Link>
          <span className="text-sm ">
            <FaChevronRight />
          </span>
          <p className="font-medium">Shop</p>
        </div>
        {/* wrapper */}
        <div className="grid grid-cols-1 items-start gap-6 pt-4 pb-16 lg:grid-cols-4">
          {/* Filter */}
          <div className="col-span-1 hidden overflow-hidden bg-white p-2 px-4 pb-6 shadow-md shadow-gray-500 dark:bg-secondary-light lg:block">
            <FilterSection />
          </div>
          <div className="col-span-3">
            {/* filter and view Icon */}
            <div className="flex items-center justify-between">
              <div>
                <select className="w-44 border-gray-300  px-4 py-1 text-sm text-gray-600 shadow-sm invalid:text-gray-400 focus:border-primary focus:ring-primary">
                  <option className="px-2 py-4 hover:bg-primary">
                    Default Sorting
                  </option>
                  <option className="px-2 py-4  hover:bg-primary">Price</option>
                  <option className="px-2 py-4  hover:bg-primary">
                    Recent Product
                  </option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative block lg:hidden">
                  <button
                    className="bg-primary p-2 "
                    onClick={() => {
                      handleOnFocusFilterBtn();
                    }}
                  >
                    <FaFilter />
                  </button>
                  <div
                    className={`absolute -right-0 z-10 mt-[0.2rem] ${
                      isFilterOpen ? 'block' : 'hidden'
                    }   w-64 border border-primary bg-secondary-light p-2 px-4 pb-6 shadow-md shadow-gray-500 sm:right-0 lg:hidden`}
                  >
                    <FilterSection
                      onClose={() => {
                        handleOnFocusFilterBtn();
                      }}
                    />
                  </div>
                </div>
                <div className="hidden gap-2 lg:flex">
                  <button className="bg-primary p-2 text-white">
                    <FaList />
                  </button>
                  <button className="bg-primary p-2 text-white">
                    <FaTh />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="my-4 mx-auto grid grid-cols-1 justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                        <h3 className="hover:text-primary">
                          <Link href="/shop/nikki-shoes">Nikki Shoes</Link>
                        </h3>
                        <p className="text-primary">$ 200.00</p>
                      </div>
                      <div>
                        <button className="w-full border-2 border-secondary px-3 py-2 text-xl font-semibold  uppercase transition hover:border-primary hover:bg-secondary hover:text-white">
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
                        <h3 className="hover:text-primary">
                          <Link href="/shop/nikki-shoes">Nikki Shoes</Link>
                        </h3>
                        <p className="text-primary">$ 200.00</p>
                      </div>
                      <div>
                        <button className="w-full border-2 border-secondary px-3 py-2 text-xl font-semibold  uppercase transition hover:border-primary hover:bg-secondary hover:text-white">
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
                        <button className="w-full border-2 border-secondary px-3 py-2 text-xl font-semibold  uppercase transition hover:border-primary hover:bg-secondary hover:text-white">
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
                        <button className="w-full border-2 border-secondary px-3 py-2 text-xl font-semibold  uppercase transition hover:border-primary hover:bg-secondary hover:text-white">
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
                        <button className="w-full border-2 border-secondary px-3 py-2 text-xl font-semibold  uppercase transition hover:border-primary hover:bg-secondary hover:text-white">
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
                        <button className="w-full border-2 border-secondary px-3 py-2 text-xl font-semibold  uppercase transition hover:border-primary hover:bg-secondary hover:text-white">
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
                        <button className="w-full border-2 border-secondary px-3 py-2 text-xl font-semibold  uppercase transition hover:border-primary hover:bg-secondary hover:text-white">
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
                        <button className="w-full border-2 border-secondary px-3 py-2 text-xl font-semibold  uppercase transition hover:border-primary hover:bg-secondary hover:text-white">
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
                        <button className="w-full border-2 border-secondary px-3 py-2 text-xl font-semibold  uppercase transition hover:border-primary hover:bg-secondary hover:text-white">
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
              <div className="grid grid-cols-1 place-items-center justify-items-center">
                <Pagination
                  handlePagination={handlePagination}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  rowPerPage={rowPerPage}
                  totalRecords={totalRecords}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
