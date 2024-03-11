import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { useState } from "react";
const Contact = () => {
  const [columns, setColumns] = useState(2);

  const handleClick = () => {
    // Toggle between 2 and 3 columns
    setColumns(columns === 2 ? 3 : 2);
  };
  return (
    <>
      <div>
        <div>
          <button onClick={handleClick}>Switch Columns</button>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
            }}
          >
            {/* Your grid items go here */}
            <div
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "5px",
              }}
            >
              Item 1
            </div>
            <div
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "5px",
              }}
            >
              Item 2
            </div>
            {/* Add more items as needed */}{" "}
            <div
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "5px",
              }}
            >
              Item 1
            </div>
            <div
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "5px",
              }}
            >
              Item 2
            </div>
          </div>
        </div>
      </div>
      <div className="m-2">
        <div class="bg-white rounded-lg shadow-lg p-6 max-w-sm">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center space-x-2">
              <span class="relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full">
                {/* <span class="flex h-full w-full items-center justify-center rounded-full bg-[#c6c6c6]">
                  U
                </span> */}
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </span>
              <div className="ml-2">
                <div class="text-md font-semibold  ">Hi, Friends</div>
                <div class="flex space-x-1 text-xs font-medium text-gray-500">
                  <a class="hover:underline text-sm ml-1 flex" href="#">
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
                  <a class="hover:underline mt-[1px] text-sm" href="#">
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
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
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
      
    </>
  );
};

export default Contact;
