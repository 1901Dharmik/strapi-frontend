import React from "react";
import Cart from "../Cart/Cart";
import { NavLink, Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { useContext } from "react";
// import DarkMode from "../DarkMode";
// import { Context } from "react";
import Search from "../Search";
import {
  Dialog,
  Disclosure,
  Popover,
  Menu,
  Tab,
  Transition,
} from "@headlessui/react";
import { useEffect } from "react";
import { userData } from "../../helper";
// import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { ShiftingDropDown } from "../ShiftingDropDown";

const filters = [
  {
    id: "products",
    name: "Products",
    options: [
      { value: "white", label: "", checked: false },
      { value: "beige", label: "", checked: false },
      { value: "blue", label: "", checked: true },
      { value: "brown", label: "", checked: false },
      { value: "green", label: "", checked: false },
      { value: "purple", label: "", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "Basic Tees",
          href: "#",
          imageSrc: "/images/icerose.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc: "/images/gesofine.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc: "./images/refresh.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc: "/images/constirelex.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc: "/images/lexolite.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc: "/images/amrutam.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { username } = userData();
  // const [{ basket }, dispatch] = useStateValue();
  // const { cartCount } = useContext(Context);
  const [show, setShow] = useState(false);
  const [showCart, setshowCart] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const { jwt } = userData();
  const isLoggedIn = !!jwt;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <>
      <div className="bg-white z-10 sticky top-0  ">
        {/* Mobile menu */}

        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-100 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-[21rem] flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pb-2 pt-5">
                    <button
                      type="button"
                      className="-m-2 inline-flex items-center justify-center border rounded-md p-2 text-gray-900"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="ml-4 flex lg:ml-0">
                      <NavLink to="/">
                        {/* <span className="sr-only">Your Company</span>
                    <h1 className="text-xl text-[#111]">Online Gadget Store</h1> */}
                        <img
                          // className="h-[60px] w-auto"
                          className="h-[35px] w-[100px] ml-2"
                          src="./images/medicy.png"
                          alt=""
                          draggable="false"
                        />
                      </NavLink>
                    </div>
                  </div>

                  {/* Links */}

                  <Tab.Group as="div" className="mt-2">
                    <div className="border-b border-gray-200">
                      {/* <Tab.List className="-mb-px flex space-x-8 px-4">
                        {navigation.categories.map((category) => (
                          <Tab
                            key={category.name}
                            className={({ selected }) =>
                              classNames(
                                selected
                                  ? "border-[#206c43] text-[#206c43]"
                                  : "border-transparent text-gray-900",
                                "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                              )
                            }
                          >
                            {category.name}
                          </Tab>
                        ))}
                      </Tab.List> */}
                    </div>
                    <Tab.Panels as={Fragment}>
                      {navigation.categories.map((category) => (
                        <Tab.Panel
                          key={category.name}
                          className="space-y-6 px-4 text-md pb-4 pt-6"
                        >
                          {/* <div className="flex flex-row gap-4 mb-12 overflow-x-auto">
                            {category.featured.map((item) => (
                              <div
                                key={item.name}
                                className="group relative text-sm"
                              >
                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                  <img
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    className="object-cover object-center "
                                  />
                                </div>

                                <NavLink
                                  onClick={() => setOpen(false)}
                                  to={item.NavLink}
                                  className=" mt-2 mx-8 block font-medium text-gray-900 "
                                >
                                  <span
                                    className="absolute inset-0 z-10"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </NavLink>
                               
                              </div>
                            ))}
                          </div> */}
                          <NavLink
                            onClick={() => setOpen(false)}
                            to="./"
                            className="font-medium text-lg text-gray-900 ml-4"
                          >
                            Home
                          </NavLink>

                          <div className=" border-t-1 border-gray-200 ">
                            {/* {filters.map((section) => ( */}
                            <Disclosure
                              as="div"
                              className="border-t border-gray-200 pl-4 py-6"
                            >
                              {({ open }) => (
                                <>
                                  <h3 className="-mx-2 -my-3 flow-root">
                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3  text-gray-400 hover:text-gray-500">
                                      <span className="font-medium text-lg text-gray-900">
                                        products
                                      </span>

                                      <span className="mr-4 flex items-center">
                                        {open ? (
                                          <MinusIcon
                                            className="h-6 w-6 text-green-800"
                                            aria-hidden="true"
                                          />
                                        ) : (
                                          <PlusIcon
                                            className="h-6 w-6  text-green-800 "
                                            aria-hidden="true"
                                          />
                                        )}
                                      </span>
                                    </Disclosure.Button>
                                  </h3>
                                  <Transition
                                    enter="transition-all ease-in-out duration-500 delay-[50ms]"
                                    enterFrom="opacity-0 translate-y-6"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition-all ease-in-out duration-300 "
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Disclosure.Panel className="pt-6">
                                      <div className="space-y-8">
                                        <div className="flex items-center">
                                          {/* <img src="/images/icerose." alt="" />                                   
                                        <label className="ml-3 min-w-0 flex-1 text-lg text-gray-500">
                                          Icerose Powder
                                        </label> */}
                                          <div className="flex flex-row gap-4 mb-12 overflow-x-auto">
                                            {category.featured.map((item) => (
                                              <div
                                                key={item.name}
                                                className="group relative text-sm"
                                              >
                                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                  <img
                                                    src={item.imageSrc}
                                                    alt={item.imageAlt}
                                                    className="object-cover object-center "
                                                  />
                                                </div>

                                                <NavLink
                                                  onClick={() => setOpen(false)}
                                                  to={item.NavLink}
                                                  className=" mt-2 mx-8 block font-medium text-gray-900 "
                                                >
                                                  <span
                                                    className="absolute inset-0 z-10"
                                                    aria-hidden="true"
                                                  />
                                                  {item.name}
                                                </NavLink>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    </Disclosure.Panel>
                                  </Transition>
                                </>
                              )}
                            </Disclosure>
                            <Disclosure
                              as="div"
                              className="border-y border-gray-200 px-4 py-6"
                            >
                              {({ open }) => (
                                <>
                                  <div className="">
                                    <h3 className="-mx-2 -my-3 flow-root">
                                      <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3  text-gray-400 hover:text-gray-500">
                                        <span className="font-medium text-lg text-gray-900 ">
                                          Category
                                        </span>

                                        <span className="ml-6 flex items-center">
                                          {open ? (
                                            <MinusIcon
                                              className="h-6 w-6 text-green-800 "
                                              aria-hidden="true"
                                            />
                                          ) : (
                                            <PlusIcon
                                              className="h-6 w-6 text-green-800 "
                                              aria-hidden="true"
                                            />
                                          )}
                                        </span>
                                      </Disclosure.Button>
                                    </h3>
                                    <Transition
                                      enter="transition-all ease-in-out duration-500 delay-[50ms]"
                                      enterFrom="opacity-0 translate-y-6"
                                      enterTo="opacity-100 translate-y-0"
                                      leave="transition-all ease-in-out duration-300"
                                      leaveFrom="opacity-100"
                                      leaveTo="opacity-0"
                                    >
                                      <Transition.Root>
                                        <Disclosure.Panel className="pt-6">
                                          <div className="space-y-8 flex">
                                            <div className="flex items-center">
                                              <img
                                                src="./images/stomach-problem.png"
                                                className="h-12 w-12"
                                                alt=""
                                              />
                                              <div className="ml-2 min-w-0 flex-1 text-lg text-gray-500">
                                                Digestive Care
                                              </div>
                                            </div>
                                          </div>
                                        </Disclosure.Panel>

                                        <Disclosure.Panel className="pt-6">
                                          <div className="space-y-8">
                                            <div className="flex items-center">
                                              <img
                                                src="./images/fistula.png"
                                                className="h-12 w-12"
                                                alt=""
                                              />
                                              <div className="ml-2 min-w-0 flex-1 text-lg text-gray-500">
                                                Piles Care
                                              </div>
                                            </div>
                                          </div>
                                        </Disclosure.Panel>
                                        <Disclosure.Panel className="pt-6">
                                          <div className="space-y-8">
                                            <div className="flex items-center">
                                              <img
                                                src="./images/weight_loss.png"
                                                className="h-12 w-12"
                                                alt=""
                                              />
                                              <div className="ml-2 min-w-0 flex-1 text-lg text-gray-500">
                                                Weight Care
                                              </div>
                                            </div>
                                          </div>
                                        </Disclosure.Panel>
                                        <Disclosure.Panel className="pt-6">
                                          <div className="space-y-8">
                                            <div className="flex items-center">
                                              <img
                                                src="/images/immune_system.png"
                                                className="h-12 w-12"
                                                alt=""
                                              />
                                              <div className="ml-2 min-w-0 flex-1 text-lg text-gray-500">
                                                Immunity Care
                                              </div>
                                            </div>
                                          </div>
                                        </Disclosure.Panel>
                                      </Transition.Root>
                                    </Transition>
                                  </div>
                                </>
                              )}
                            </Disclosure>
                            {/* ))} */}
                          </div>
                          <div className="m-2">
                            <div class="bg-white rounded-lg shadow-lg p-2  max-w-sm">
                              <div class="flex items-center justify-between mb-4">
                                <div class="flex items-center space-x-2">
                                  <span class="relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full">
                                    {/* <span class="flex h-full w-full items-center justify-center rounded-full bg-[#c6c6c6]">
                  U
                </span> */}
                                    <img
                                      className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                      alt=""
                                    />
                                  </span>
                                  <div className="ml-2">
                                    <div class="text-md font-semibold  ">
                                      Hi, Friends
                                    </div>
                                    <div class="flex space-x-1 text-xs font-medium text-gray-500">
                                      <a
                                        class="hover:underline text-sm ml-1 flex"
                                        href="#"
                                      >
                                        Sign up
                                      </a>

                                      <span className="">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          class="text-gray-400"
                                        >
                                          <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                      </span>
                                      <a
                                        class="hover:underline mt-[1px] text-sm"
                                        href="#"
                                      >
                                        Sign in
                                      </a>
                                      <span className="">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          class="text-gray-400"
                                        >
                                          <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="space-y-3">
                                <div class="flex items-center justify-between mb-2 mt-2 mx-2 hover:bg-gray-100 p-1.5 rounded-md">
                                  <div class="flex items-center space-x-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      class="text-gray-500"
                                    >
                                      <line
                                        x1="4"
                                        x2="20"
                                        y1="12"
                                        y2="12"
                                      ></line>
                                      <line x1="4" x2="20" y1="6" y2="6"></line>
                                      <line
                                        x1="4"
                                        x2="20"
                                        y1="18"
                                        y2="18"
                                      ></line>
                                    </svg>
                                    <span class="font-medium">Orders</span>
                                  </div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="text-gray-400"
                                  >
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </div>
                                <div class="flex items-center justify-between mb-2 mt-2 mx-2 hover:bg-gray-100 p-1.5 rounded-md">
                                  <div class="flex items-center space-x-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      class="text-gray-500"
                                    >
                                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                      <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    <span class="font-medium">Account</span>
                                  </div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="text-gray-400"
                                  >
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </div>
                                <div class="flex items-center justify-between mb-2 mt-2 mx-2 hover:bg-gray-100 p-1.5 rounded-md">
                                  <div class="flex items-center space-x-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      class="text-gray-500"
                                    >
                                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                    <span class="font-medium">Membership</span>
                                  </div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="text-gray-400"
                                  >
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>

                          {category.sections.map((section) => (
                            <div key={section.name}>
                              <p
                                id={`${category.id}-${section.id}-heading-mobile`}
                                className="font-medium text-lg px-4 text-gray-900"
                              >
                                {section.name}
                              </p>
                              <ul
                                role="list"
                                aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                className="mt-6 flex flex-col space-y-6 pl-8 text-lg"
                              >
                                {section.items.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <NavLink
                                      onClick={() => setOpen(false)}
                                      href={item.NavLink}
                                      className="-m-2 block p-2 text-gray-500 "
                                    >
                                      {item.name}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </Tab.Panel>
                      ))}
                    </Tab.Panels>
                  </Tab.Group>

                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                    {navigation.pages.map((page) => (
                      <div key={page.name} className="flow-root">
                        <a
                          href={page.href}
                          className="-m-2 block p-2 font-medium text-gray-900"
                        >
                          {page.name}
                        </a>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                    <div className="flow-root">
                      <a
                        href="./singin"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Sign in
                      </a>
                    </div>
                    <div className="flow-root">
                      <a
                        href="singup"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Create account
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6">
                    <NavLink to="./" className="-m-2 flex items-center p-2">
                      <img
                        src="https://tailwindui.com/img/flags/flag-canada.svg"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      />
                      <span className="ml-3 block text-base font-medium text-gray-900">
                        CAD
                      </span>
                      <span className="sr-only">, change currency</span>
                    </NavLink>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div>
          <header className="relative  ">

            <p className="flex h-10 items-center justify-center bg-[#206c43] px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
              Welcome To Medisy
              <span>
              {/* <DarkMode/> */}
              </span>
            </p>

            <nav
              aria-label="Top"
              className="mx-auto w-full px-4 sm:px-6 lg:px-8 "
            >
              <div className="border-b border-gray-200">
                <div className="flex h-16 items-center">
                  <button
                    type="button"
                    className="border-2  rounded-md  p-2 text-black-600 lg:hidden focus:outline-0"
                    onClick={() => setOpen(true)}
                  >
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Logo */}
                  <div className="ml-4 flex lg:ml-0">
                    <NavLink to="/">
                      {/* <span className="sr-only">Your Company</span>
                    <h1 className="text-xl text-[#111]">Online Gadget Store</h1> */}
                      <img
                        // className="h-[60px] w-auto"
                        className="xl:h-[35px] sm:h-[25px] w-full"
                        src="./images/medicy.png"
                        alt=""
                        draggable="false"
                      />
                    </NavLink>
                  </div>

                  {/* Flyout menus */}
                  <NavLink
                    to="./"
                    className="pl-6 font-medium text-sm text-gray-700 hover:text-gray-800 imp"
                  >
                    Home
                  </NavLink>

                  {/* <NavLink
                  to="./EmblaCarousel"
                  className="pl-12 font-medium text-sm text-gray-700 imp"
                >
                  Contact Us
                </NavLink> */}
                  {/* <NavLink
                  to="./about"
                  className="pl-12 font-medium text-sm text-gray-700 imp"
                >
                  About Us
                </NavLink> */}

                  <nav className="display lg:block md:hidden">
                    <div className="navigation hide ">
                      <li>
                        <button className="btns text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-300">
                          Features
                          <svg
                            aria-hidden="true"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                          >
                            <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                          </svg>
                        </button>
                        <div class="dropdown__wrapper">
                          <div class="dropdown ">
                            <div class="list-items-with-description ">
                              <li>
                                <img
                                  src="./images/gas.png"
                                  className="h-10 w-10"
                                  alt=""
                                />
                                <div class="item-title">
                                  <h3>Previews</h3>
                                  <p>Zero config, more innovation</p>
                                </div>
                              </li>
                              <li>
                                <img
                                  src="./images/gas.png"
                                  className="h-10 w-10"
                                  alt=""
                                />
                                <div class="item-title">
                                  <h3>Infrastructure</h3>
                                  <p>Always fast always online</p>
                                </div>
                              </li>
                              <li>
                                <img
                                  src="./images/gas.png"
                                  className="h-10 w-10"
                                  alt=""
                                />
                                <div class="item-title">
                                  <h3>Next js</h3>
                                  <p>The native Next.js platform</p>
                                </div>
                              </li>
                              <li>
                                <img
                                  src="./images/gas.png"
                                  className="h-10 w-10"
                                  alt=""
                                />
                                <div class="item-title">
                                  <h3>Edge Functions</h3>
                                  <p>Dynamic pages, static speed</p>
                                </div>
                              </li>
                              <li>
                                <img
                                  src="./images/gas.png"
                                  className="h-10 w-10"
                                  alt=""
                                />
                                <div class="item-title">
                                  <h3>Analytics</h3>
                                  <p>Real-time insights, peak </p>
                                </div>
                              </li>
                              <li>
                                <img
                                  src="./images/gas.png"
                                  className="h-10 w-10"
                                  alt=""
                                />
                                <div class="item-title">
                                  <h3>Storage</h3>
                                  <p>Serverless storage for frontend</p>
                                </div>
                              </li>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button className="btns text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-300">
                          Features
                          <svg
                            aria-hidden="true"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                          >
                            <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                          </svg>
                        </button>
                        <div class="dropdown__wrapper ">
                          <div class="dropdown ">
                            <div class="list-items-with-description ">
                              <li>
                                <img
                                  src="./images/gas.png"
                                  className="h-10 w-10"
                                  alt=""
                                />
                                <div class="item-title">
                                  <h3>Previews</h3>
                                  <p>Zero config, more innovation</p>
                                </div>
                              </li>
                              <li>
                                <img
                                  src="./images/gas.png"
                                  className="h-10 w-10"
                                  alt=""
                                />
                                <div class="item-title">
                                  <h3>Infrastructure</h3>
                                  <p>Always fast always online</p>
                                </div>
                              </li>
                              <li>
                                <img
                                  src="./images/gas.png"
                                  className="h-10 w-10"
                                  alt=""
                                />
                                <div class="item-title">
                                  <h3>Next js</h3>
                                  <p>The native Next.js platform</p>
                                </div>
                              </li>
                              <li>
                                <img
                                  src="./images/gas.png"
                                  className="h-10 w-10"
                                  alt=""
                                />
                                <div class="item-title">
                                  <h3>Edge Functions</h3>
                                  <p>Dynamic pages, static speed</p>
                                </div>
                              </li>
                              <li>
                                <img
                                  src="./images/gas.png"
                                  className="h-10 w-10"
                                  alt=""
                                />
                                <div class="item-title">
                                  <h3>Analytics</h3>
                                  <p>Real-time insights, peak </p>
                                </div>
                              </li>
                              <li>
                                <img
                                  src="./images/gas.png"
                                  className="h-10 w-10"
                                  alt=""
                                />
                                <div class="item-title">
                                  <h3>Storage</h3>
                                  <p>Serverless storage for frontend</p>
                                </div>
                              </li>
                            </div>
                            <div className="border-t border-gray-200 mx-4 mt-3">
                              <div className="flex justify-center align-middle items-center my-3 bg-green-800 text-white text-md mx-48 p-2 border-2 border-gray-200 rounded-3xl hover:shadow-md">
                                View All
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      {/* <li>
                     <NavLink
                  to="./shop">
                        <div className=" pl-1 font-medium text-sm text-gray-700 hover:text-gray-800 imp" >
                            All Products
                        </div>
                        </NavLink>
                    </li> */}
                      {/* <li>
                    <NavLink
                  to="./shufflehero">
                        <div className="pl-1 font-medium text-sm text-gray-700 hover:text-gray-800 imp" >
                           Pricing
                        </div>
                        </NavLink>
                    </li> */}

                      <ShiftingDropDown />
                    </div>
                  </nav>

                  {/* <NavLink
                  to="./shop"
                  className="ml-6 font-medium text-sm text-gray-700 imp"
                >
                  All Products
                </NavLink> */}

                  {/* <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
                    {navigation.categories.map((category) => (
                      <Popover key={category.name} className="flex">
                        {({ open }) => (
                          <>
                            <div className="relative flex">
                              <Popover.Button
                                className={classNames(
                                  open
                                    ? "border-[#206c43] text-[#206c43]"
                                    : "border-transparent text-gray-700 hover:text-gray-800",
                                  "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                                )}
                              >
                                {category.name}
                              </Popover.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                
                                <div
                                  className="absolute inset-0 top-1/2 bg-white shadow "
                                  aria-hidden="true"
                                />

                                <div className="relative bg-white">
                                  <div className="mx-auto max-w-7xl px-8 ">
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-6 ">
                                      <div className="col-start-2 grid grid-cols-3 gap-x-8 ">
                                        {category.featured.map((item) => (
                                          <div
                                            key={item.name}
                                            className="group relative text-base sm:text-sm"
                                          >
                                            <div className="aspect-h-1 aspect-w-1 overflow-scroll rounded-lg bg-gray-100 group-hover:opacity-75 w-[150px]">
                                              <img
                                                src={item.imageSrc}
                                                alt={item.imageAlt}
                                                className="object-cover object-center w-[150px]"
                                              />
                                            </div>
                                            <a
                                              href={item.href}
                                              className="mt-2  block font-medium text-gray-900"
                                            >
                                              <span
                                                className="absolute inset-0 z-10"
                                                aria-hidden="true"
                                              />
                                              {item.name}
                                            </a>
                                            <p
                                              aria-hidden="true"
                                              className="mt-1 mb-2"
                                            >
                                              Shop now
                                            </p>
                                          </div>
                                        ))}
                                      </div>
                                      <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                        {category.sections.map((section) => (
                                          <div key={section.name}>
                                            <p
                                              id={`${section.name}-heading`}
                                              className="font-medium text-gray-900"
                                            >
                                              {section.name}
                                            </p>
                                            <ul
                                              role="list"
                                              aria-labelledby={`${section.name}-heading`}
                                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                            >
                                              {section.items.map((item) => (
                                                <li
                                                  key={item.name}
                                                  className="flex"
                                                >
                                                  <NavLink
                                                    to={item.href}
                                                    className="hover:text-gray-800"
                                                  >
                                                    {item.name}
                                                  </NavLink>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    ))}

                    {navigation.pages.map((page) => (
                      <NavLink
                        key={page.name}
                        to={page.NavLink}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        {page.name}
                      </NavLink>
                    ))}
                  </div>
                </Popover.Group>  */}

                  <div className="ml-auto flex items-center">
                    {/* Search */}
                    <div
                      onClick={() => setSearchModal(true)}
                      className="flex lg:ml-6"
                    >
                      <a className="p-2 text-gray-600 hover:text-[#206c43] lg:mr-5 hover:border hover:rounded-[50%] hover:bg-[rgba(40,167,69,.0784)]">
                        <span className="sr-only">Search</span>
                        <MagnifyingGlassIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </a>
                    </div>

                    {/* end search */}
                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 mr-4 ">
                      {isLoggedIn ? (
                        <NavLink
                          to="./logout"
                          className="text-sm font-medium text-gray-700 hover:text-gray-800"
                        >
                          Log out
                        </NavLink>
                      ) : (
                        <>
                          <NavLink
                            to="./login"
                            className="text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            Log in
                          </NavLink>
                          <span
                            className="h-6 w-px bg-gray-200"
                            aria-hidden="true"
                          />
                          <NavLink
                            to="./register"
                            className="text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            Create account
                          </NavLink>
                        </>
                      )}
                    </div>

                    <div
                    //  className="hidden lg:ml-8 lg:flex"
                    >
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        {/* <div>
                          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-md text-gray-700 hover:bg-gray-50"> */}
                            {/* <img
                        src="https://tailwindui.com/img/flags/flag-canada.svg"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      /> */}
                            {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="block h-auto w-5 flex-shrink-0"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                            />
                          </svg> */}

                            {/* <span className="ml-3 block text-sm font-medium">
                            Quick Links
                          </span>
                          <ChevronDownIcon
                            className="mr-1 mt-[1px] h-5 w-5 text-gray-600"
                            aria-hidden="true"
                          /> */}
                          {/* </Menu.Button>
                        </div> */}

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Terms & Conditions
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Privacy Policy
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Refund & Cancellation policy
                                  </a>
                                )}
                              </Menu.Item>
                              <form method="POST" action="#">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      type="submit"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block w-full px-4 py-2 text-left text-sm"
                                      )}
                                    >
                                      Sign out
                                    </button>
                                  )}
                                </Menu.Item>
                              </form>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                      {/* <a
                      href="#"
                      className="flex items-center text-gray-700 hover:text-gray-800"
                    >
                      <img
                        src="https://tailwindui.com/img/flags/flag-canada.svg"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      />
                      <span className="ml-3 block text-sm font-medium">
                        CAD
                      </span>
                      <span className="sr-only">, change currency</span>
                    </a> */}
                    </div>

                    {/* Search */}
                    {/* <div className="flex lg:ml-6">
                    <a
                      href="#"
                      className="p-2 text-gray-600 hover:text-[#206c43]"
                    >
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </a>
                  </div> */}

                    {/* Cart */}

                    <div
                      className="flow-root dis-block lg:ml-2"
                      // className="ml-4 flow-root lg:ml-6 dis-block "
                    >
                      <div>
                        <div
                          onClick={() => setshowCart(true)}
                          // onClick={() => setShow(!show)}
                          className="group  flex items-center p-2 hover:border hover:rounded-md hover:bg-[rgba(40,167,69,.0784)] "
                        >
                          <ShoppingBagIcon
                            className="h-6 w-6 flex-shrink-0 text-gray-600 group-hover:text-[#206c43]"
                            aria-hidden="true"
                          />
                          <span className="ml-2 text-sm font-medium text-gray group-hover:text-[#206c43]">
                            {products.length}
                          </span>
                          <span className="sr-only">
                            items in cart, view bag
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="hover:border hover:rounded-[50%] p-2 hover:bg-[rgba(40,167,69,.0784)]">
                      <NavLink to="./Login">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-gray-600 hover:text-[#206c43] "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>
                        {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400 flex" aria-hidden="true" /> */}
                      </NavLink>
                    </div>
                    {/*  */}
                    <Menu
                      as="div"
                      className="relative inline-block text-left display"
                    >
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50">
                          Profile
                          <ChevronDownIcon
                            className="-mr-1 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-[260px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Welcome! {username}
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-[12px]"
                                  )}
                                ></a>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="./Idce"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Archive
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="./swiper"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Move
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="./Thums"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Share
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="./"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Add to favorites
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Edit Profile
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </div>
      {showCart && <Cart setshowCart={setshowCart} />}
      {searchModal && <Search setSearchModal={setSearchModal} />}
    </>
  );
}
