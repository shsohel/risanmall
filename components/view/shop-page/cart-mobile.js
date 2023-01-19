import Image from 'next/image';
import React from 'react';
import { FaCartPlus, FaCross } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import CustomPopover from '../../custom/Popover';
const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 4,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 3,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
];
const CartMobilePopOver = () => {
  return (
    <>
      <CustomPopover
        title="Shopping Cart"
        popoverBtn={
          <div className="relative">
            <FaCartPlus size={24} />
            <span className="absolute -right-2 -top-1 h-4 w-4 rounded-full border border-secondary bg-primary  text-center text-xs text-white dark:border-white ">
              {products.length}
            </span>
          </div>
        }
      >
        <div>
          <ul
            role="list"
            className=" h-[22rem] divide-y divide-gray-200 overflow-y-auto "
          >
            {products.map((product) => (
              <li key={product.id} className="flex items-center py-6 px-4">
                <Image
                  width={70}
                  height={70}
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-16 w-16 flex-none rounded-md border border-gray-200"
                />
                <div className="ml-4 flex-auto">
                  <h3 className="text-sm font-bold  ">
                    <a href={product.href}>{product.name}</a>
                  </h3>
                  <p className="text-primary">{product.color}</p>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div>
                      <div className="flex items-center gap-1">
                        <h5>Price :</h5>
                        <p className="ml-4">{product.price}</p>
                      </div>

                      <div className="mt-1 flex items-center gap-2">
                        <h5>Qty :</h5>
                        <div className="flex w-max divide-x divide-gray-300 border">
                          <div className="flex h-6 w-6 cursor-pointer select-none items-center justify-center text-xl">
                            -
                          </div>
                          <div className="flex h-6 w-6 cursor-pointer select-none items-center justify-center text-base">
                            {product.quantity}
                          </div>
                          <div className="flex h-6 w-6 cursor-pointer select-none items-center justify-center text-xl">
                            +
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <button
                        type="button"
                        className="p-1  font-medium hover:text-primary"
                      >
                        <RxCross1 />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-1 flex justify-between px-3 text-base font-medium">
            <p>Subtotal</p>
            <p>$262.00</p>
          </div>
          <button className="mt-3 w-full border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-secondary-light focus:outline-none focus:ring-2 focus:ring-primary">
            Checkout
          </button>
          <button className="mt-1 w-full border border-transparent  py-2 px-4 text-sm font-medium text-secondary shadow-sm hover:bg-secondary-light hover:text-white focus:outline-none focus:ring-2 dark:text-white  ">
            Continue to Shopping
          </button>
        </div>
      </CustomPopover>
    </>
  );
};

export default CartMobilePopOver;
