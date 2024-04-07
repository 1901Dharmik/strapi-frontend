import React from "react";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa6";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../../src/assets/search1.json";





import { useRef } from "react";
import { useState } from "react";
// import Sub_category from "../Components/Sub_category";
import Dcategory from "../Components/Dcategory";
const Contact = () => {
  const [columns, setColumns] = useState(2);
  const phoneRef = useRef();
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };
  const handleClick = () => {
    // Toggle between 2 and 3 columns
    setColumns(columns === 2 ? 3 : 2);
  };
  return (
    <>
    <Dcategory/>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-12 h-12 text-green-700"
      >
        <motion.path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
      </svg>
      <Lottie className="h-4 w-4" 
        onClick={() => {
          phoneRef.current?.setSpeed(0.6);
          // phoneRef.current?.setDirection(-1);
          phoneRef.current?.play();
          // setshowCart(false)
        }}
        // loop={false}
       
        lottieRef={phoneRef}
        animationData={animationData}
      />
      
      <lord-icon trigger="hover" src="../assets/search3.json"></lord-icon>

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
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
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
      <p className="guj">
        વધુમાં કોઇપણ વ્યક્તિ તે સ્વતંત્ર, ટ્રસ્ટ હેઠળના સ્વશાસન હેઠળ ન હોય તેવા
        અથવા સાર્વભામત્વની બીજી કોઇપણ મર્યાદા હેઠળ આવેલા દેશ અથવા પ્રદેશની હોય
        તો પણ રાજકીય, હફમવવિષયક અથવા આંતરરાષ્ટ્રીય મોભાના ધોરણે તેની સાથે કોઇપણ
        ભેદભાવ રાખવામાં આવશે નહિ. દરેક વ્યક્તિને જીવવાનો, સ્વતંત્રતાનો અને
        સ્વરક્ષણનો અધિકાર છે. કોઇને પણ ગુલામી અથવા પરાધીન દશામાં રાખવામાં આવશે
        નહિ; દરેક પ્રકારની ગુલામી અને ગુલામોના વેપાર પર પ્રતિબંધ મૃકવામાં આવશે.
        કોઇપણ વ્યક્તિની ઉપર જુલમ ગુજારવામાં આવશે નહિ અથવા તેની સાથે ધાતકી,
        અમાનુષી અથવા હલકા પ્રકારનો વર્તાવ રાખવામાં આવશે નહિ અથવા તેવા પ્રકારની
        શિક્ષા કરવામાં આવશે નહિ.
      </p>
    </>
  );
};

export default Contact;
