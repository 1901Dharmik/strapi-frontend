import React from "react";
import { useEffect, useState } from "react";
const Compo = () => {
  // const [product, setProduct] = useState({});
  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => console.log("json data",data))
    .catch(error => console.error('Error:', error));
  
  }, []);
  return (
    <div>
      {/* {data?.map((item) => (
        <div>
          <div>
            <h1>{item.title}</h1>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Compo;
