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

          <svg
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
          </svg>
        </div>
       
       
        <div className="search-result-contant flex shadow max-h-[400px]">
       
          <div className="search-result grid xl:grid-cols-3 gap-4  w-full">
            {data?.map((item) => (
              <div
                className="search-result-item shadow-md px-2"
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
