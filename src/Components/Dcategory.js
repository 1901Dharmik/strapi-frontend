import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const Dcategory = () => {
  const { data } = useFetch(`/categories?populate=*`);
  const navigate = useNavigate();
  return (
    <>
      <div>
      
        
       
        <div class="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4 mx-6 ">
          {data?.map((item) => (
            
            <article
              key={item.id}
              onClick={() => navigate(`/category/${item.id}`)}
              class="relative p-4 w-full  rounded-lg overflow-hidden shadow-md flex flex-col justify-center items-center bg-[#e6ffe6]"
            >
              <div class="aspect-square overflow-hidden w-20 h-20 rounded-lg">
                <img
                  class="group-hover:scale-125 h-full w-full object-cover transition-all duration-300 border-2 rounded-full hover:border-green-800"
                  src={
                   
                    
                    item?.attributes?.img?.data[0]?.attributes?.url
                   
                  }
                  draggable="false"
                />
               </div>
                {/* <div class="absolute top-0 m-1 rounded-full bg-white">
                      <p class="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white            sm:px-3 sm:py-1">Sale</p>
                    </div> */}
               <div class="mt-4 flex items-start justify-between">
                <div class="">
                  <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                    <a title="" class="cursor-pointer">
                      {item?.attributes?.title}
                      <span class="absolute" aria-hidden="true"></span>
                    </a>
                  </h3>
                  <a title="" class="cursor-pointer ">
                    {item?.attributes?.desc}
                    <span class="absolute" aria-hidden="true"></span>
                  </a>
                </div>
              </div>
              </article>
          ))}
        </div>
      </div>
     
     
    </>
  );
};

export default Dcategory;
