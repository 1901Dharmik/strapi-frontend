import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Menu, Transition } from '@headlessui/react'
const Search = ({ setSearchModal }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/products?populate=*&filters[title][$contains]=${query}`
  );
    
  if (!query.length) {
    data = data;
  }
  
  return (
    
    <div className="search-bar">
      <div className="search-model bg-white/0 bg-opacity-75 backdrop-blur">
        <div className="form-field md:p-5">
          <input
            onChange={onChange}
            type="text  "
            autoFocus
            placeholder="Search For Products"
          />

          {/* <svg
            onClick={() => setSearchModal(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 svg-search "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg> */}
          <svg onClick={() => setSearchModal(false)} xmlns="http://www.w3.org/2000/svg" fill="#EEF8F0" viewBox="0 0 14 14" height={32} width={32} id="Block-2--Streamline-Flex" ><desc>{"Block 2 Streamline Icon: https://streamlinehq.com"}</desc><g id="block-2--remove-circle-garbage-trash-delete-cross-x"><path id="Vector" stroke="#206c43" strokeLinecap="round" strokeLinejoin="round" d="M7 13.25c4 0 6.25 -2.25 6.25 -6.25S11 0.75 7 0.75 0.75 3 0.75 7 3 13.25 7 13.25Z" strokeWidth={1} /><path id="Vector_2" stroke="#206c43" strokeLinecap="round" strokeLinejoin="round" d="m2.375 11.625 9.25 -9.25" strokeWidth={1} /><path id="Vector_3" stroke="#206c43" strokeLinecap="round" strokeLinejoin="round" d="m11.625 11.625 -9.25 -9.25" strokeWidth={1} /></g></svg>
        </div>
       
       
        <div className="search-result-contant flex shadow max-h-[400px]">
       
          <div className="search-result grid xl:grid-cols-3 gap-4  w-full">
            {data?.map((item) => (
              <div
                className="search-result-item "
                key={item.id}
                onClick={() => {
                  navigate("/product/" + item.id);
                  setSearchModal(false);
                }}
              >
                <div className="image-container">
                  <img
                    src={
                        
                        item.attributes?.img?.data[0]?.attributes?.url
                      }
                    alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                    class="h-full w-full object-cover object-center rounded-md"
                  />
                </div>
                <div className="prod-details">
                  <span className="p-name">{item.attributes.title}</span>
                  <span className="descript flex">{item.attributes.desc}</span>
                  <span className="descript flex flex-end">₹{item.attributes.price}</span>
                  {/* <span className="descript flex flex-end">{item.attributes.type}</span> */}
                </div>
              </div>
            ))}
            {/* <div className="search-result-item">
              <div className="image-container">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
                  alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <div className="prod-details">
                <span className="p-name">Digestive Kit 2</span>
                <span className="descript flex">
                  Lorem ipsum dolor, laborum facere a est? Quisquam,
                  voluptatibus.
                </span>
              </div>
            </div> */}
          </div>
        
        </div>
       
       
      </div>
    </div>
  );
};

export default Search;
