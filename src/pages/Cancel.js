import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import CancelAnimation from "../assets/cancel.json";


const Cancel = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-screen p-4 mt-24">
      <div className="flex items-center justify-center">
        <div className="w-2/5 p-6 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col space-y-4 items-center pb-6 ">
            <Lottie
              animationData={CancelAnimation}
              className="w-32"
              loop={false}
            />
            <h5 className="mb-2 text-xl font-bold tracking-tight text-red-800 dark:text-gray-400">
              Payment Failed!!
            </h5>
          </div>
          <div className="py-2 mt-3">
            <div className="md:flex md:items-center md:justify-between space-y-3">
              <Link
                to="/"
                className="text-white block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Back To Home
              </Link>
              <Link
                to=""
                className="text-white block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
               Continue Shopping
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height={14} width={14} id="Shield-Check--Streamline-Core" ><desc>{"Shield Check Streamline Icon: https://streamlinehq.com"}</desc><g id="shield-check--shield-protection-security-defend-crime-war-cover-check"><path id="Vector" fill="#eef8f0" d="M7.354 13.384a0.992 0.992 0 0 1 -0.715 0A9.492 9.492 0 0 1 0.55 4.517V1.542A0.992 0.992 0 0 1 1.542 0.55h10.91a0.992 0.992 0 0 1 0.991 0.992v2.975a9.491 9.491 0 0 1 -6.09 8.867Z" strokeWidth={1} /><path id="Vector_2" stroke="#206c43" strokeLinecap="round" strokeLinejoin="round" d="M7.354 13.384a0.992 0.992 0 0 1 -0.715 0v0A9.492 9.492 0 0 1 0.55 4.517V1.542A0.992 0.992 0 0 1 1.542 0.55h10.91a0.992 0.992 0 0 1 0.991 0.992v2.975a9.491 9.491 0 0 1 -6.09 8.867v0Z" strokeWidth={1} /><path id="Vector_3" stroke="#206c43" strokeLinecap="round" strokeLinejoin="round" d="M10 4 6 8.5 4 7" strokeWidth={1} /></g></svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height={14} width={14} id="Notepad-Text--Streamline-Flex" ><desc>{"Notepad Text Streamline Icon: https://streamlinehq.com"}</desc><g id="notepad-text--content-notes-book-notepad-notebook"><path id="Intersect" fill="#eef8f0" d="M1.092 10.525c0.161 1.44 1.331 2.582 2.778 2.652 1 0.048 2.021 0.073 3.13 0.073s2.13 -0.025 3.13 -0.073c1.447 -0.07 2.617 -1.213 2.778 -2.652 0.109 -0.97 0.198 -1.963 0.198 -2.976 0 -1.012 -0.09 -2.006 -0.198 -2.975 -0.161 -1.44 -1.331 -2.582 -2.778 -2.652 -1 -0.048 -2.021 -0.073 -3.13 -0.073s-2.13 0.025 -3.13 0.073c-1.447 0.07 -2.617 1.213 -2.778 2.652 -0.109 0.97 -0.198 1.963 -0.198 2.975 0 1.013 0.09 2.007 0.198 2.976Z" strokeWidth={1} /><path id="Intersect_2" stroke="#206c43" strokeLinecap="round" strokeLinejoin="round" d="M1.092 10.525c0.161 1.44 1.331 2.582 2.778 2.652 1 0.048 2.021 0.073 3.13 0.073s2.13 -0.025 3.13 -0.073c1.447 -0.07 2.617 -1.213 2.778 -2.652 0.109 -0.97 0.198 -1.963 0.198 -2.976 0 -1.012 -0.09 -2.006 -0.198 -2.975 -0.161 -1.44 -1.331 -2.582 -2.778 -2.652 -1 -0.048 -2.021 -0.073 -3.13 -0.073s-2.13 0.025 -3.13 0.073c-1.447 0.07 -2.617 1.213 -2.778 2.652 -0.109 0.97 -0.198 1.963 -0.198 2.975 0 1.013 0.09 2.007 0.198 2.976Z" strokeWidth={1} /><path id="Line 7" stroke="#206c43" strokeLinecap="round" strokeLinejoin="round" d="m4 0.75 0 2.54" strokeWidth={1} /><path id="Line 8" stroke="#206c43" strokeLinecap="round" strokeLinejoin="round" d="m10 0.75 0 2.54" strokeWidth={1} /><path id="Line 9" stroke="#206c43" strokeLinecap="round" strokeLinejoin="round" d="m7 0.75 0 2.54" strokeWidth={1} /><path id="Vector 12" stroke="#206c43" strokeLinecap="round" strokeLinejoin="round" d="M3.922 6.502h6.156" strokeWidth={1} /><path id="Vector 13" stroke="#206c43" strokeLinecap="round" strokeLinejoin="round" d="M3.922 9.471h2.951" strokeWidth={1} /></g></svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height={14} width={14} id="Customer-Support-5--Streamline-Flex" ><desc>{"Customer Support 5 Streamline Icon: https://streamlinehq.com"}</desc><g id="customer-support-5--customer-headset-help-phone-support"><path id="Subtract" fill="#eef8f0" fillRule="evenodd" d="m1.575 7.24 -0.039 -0.43C1.326 4.26 3.312 1.577 7 1.577c3.688 0 5.675 2.683 5.464 5.233l-0.039 0.427a2.597 2.597 0 0 1 1.303 2.273l0.23 -2.569 0 -0.004C14.246 3.478 11.532 0.077 7 0.077 2.467 0.077 -0.246 3.478 0.04 6.937l0 0.004 0.232 2.575 0.006 0A2.597 2.597 0 0 1 1.575 7.24Z" clipRule="evenodd" strokeWidth={1} /><path id="Union" fill="#206c43" fillRule="evenodd" d="M2.648 6.902a2.596 2.596 0 0 0 -2.36 2.812l0.161 1.84a2.596 2.596 0 0 0 5.172 -0.453l-0.16 -1.839a2.596 2.596 0 0 0 -2.813 -2.36Zm8.71 0a2.596 2.596 0 0 1 2.36 2.812l-0.161 1.84a2.596 2.596 0 1 1 -5.172 -0.453l0.16 -1.839a2.596 2.596 0 0 1 2.813 -2.36Z" clipRule="evenodd" strokeWidth={1} /></g></svg>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
