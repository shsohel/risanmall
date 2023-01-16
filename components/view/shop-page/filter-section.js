import React from 'react';
import { RxCross1 } from 'react-icons/rx';

const FilterSection = (props) => {
  const { onClose } = props;
  return (
    <div>
      <div className=" flex justify-end  lg:hidden">
        <button
          className="p-1 hover:bg-primary"
          onClick={() => {
            onClose();
          }}
        >
          <RxCross1 />
        </button>
      </div>
      <div className="space-y-5 divide-y divide-gray-200">
        <div>
          <h3 className="mb-3 text-xl font-medium uppercase">Categories</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="item"
                id="cat-1"
                className="cursor-pointer rounded-sm text-primary  focus:ring-0"
              />
              <label htmlFor="cat-1" className="ml-3 cursor-pointer">
                Bedroom
              </label>
              <div className="ml-auto text-sm">(15)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="item"
                id="cat-1"
                className="cursor-pointer rounded-sm text-primary focus:ring-0"
              />
              <label htmlFor="cat-1" className="ml-3 cursor-pointer">
                Men
              </label>
              <div className="ml-auto text-sm">(35)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="item"
                id="cat-1"
                className="cursor-pointer rounded-sm text-primary focus:ring-0"
              />
              <label htmlFor="cat-1" className="ml-3 cursor-pointer">
                Women
              </label>
              <div className="ml-auto text-sm">(05)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="item"
                id="cat-1"
                className="cursor-pointer rounded-sm text-primary focus:ring-0"
              />
              <label htmlFor="cat-1" className="ml-3 cursor-pointer">
                Shoes
              </label>
              <div className="ml-auto text-sm">(55)</div>
            </div>
          </div>
        </div>
        {/* brand */}
        <div className="pt-4">
          <h3 className="mb-3 text-xl font-medium uppercase">Brands</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="item"
                id="cat-1"
                className="cursor-pointer rounded-sm text-primary focus:ring-0"
              />
              <label htmlFor="cat-1" className="ml-3 cursor-pointer">
                Bata
              </label>
              <div className="ml-auto text-sm">(15)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="item"
                id="cat-1"
                className="cursor-pointer rounded-sm text-primary focus:ring-0"
              />
              <label htmlFor="cat-1" className="ml-3 cursor-pointer">
                Cats Eye
              </label>
              <div className="ml-auto text-sm">(35)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="item"
                id="cat-1"
                className="cursor-pointer rounded-sm text-primary focus:ring-0"
              />
              <label htmlFor="cat-1" className="ml-3 cursor-pointer">
                Sholpik
              </label>
              <div className="ml-auto text-sm">(05)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="item"
                id="cat-1"
                className="cursor-pointer rounded-sm text-primary focus:ring-0"
              />
              <label htmlFor="cat-1" className="ml-3 cursor-pointer">
                Linkcaps
              </label>
              <div className="ml-auto text-sm">(55)</div>
            </div>
          </div>
        </div>
        {/* price */}
        <div className="pt-4">
          <h3 className="mb-3 text-xl font-medium uppercase ">Price</h3>
          <div className="mt-4 flex items-center">
            <input
              type="text"
              className="w-full rounded border-gray-300 px-3 py-1 text-sm text-gray-600 shadow-sm focus:border-primary focus:ring-0"
              placeholder="min"
            />
            <span className="mx-3 ">-</span>
            <input
              type="text"
              className="w-full rounded border-gray-300 px-3 py-1 text-sm text-gray-600 shadow-sm focus:border-primary focus:ring-0"
              placeholder="max"
            />
          </div>
        </div>
        {/* size */}
        <div className="pt-4">
          <h3 className="mb-3 text-xl font-medium uppercase ">Size</h3>
          <div className="flex items-center gap-2">
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="size-xs" />
              <label
                htmlFor="size-xs"
                className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs shadow-sm"
              >
                XS
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="size-xs" />
              <label
                htmlFor="size-xs"
                className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs shadow-sm"
              >
                S
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="size-xs" />
              <label
                htmlFor="size-xs"
                className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs shadow-sm"
              >
                M
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="size-xs" />
              <label
                htmlFor="size-xs"
                className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs shadow-sm"
              >
                L
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="size-xs" />
              <label
                htmlFor="size-xs"
                className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs shadow-sm"
              >
                XL
              </label>
            </div>
          </div>
        </div>
        {/* color */}
        <div className="pt-4">
          <h3 className="mb-3 text-xl font-medium uppercase ">Color</h3>
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
      </div>
    </div>
  );
};

export default FilterSection;
