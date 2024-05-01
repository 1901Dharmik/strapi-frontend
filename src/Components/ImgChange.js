import React, { useState, useEffect } from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
function ImgChange() {
  const [product, setProduct] = useState({});
  useEffect(() => {
    // fetch product data from API

    fetch("https://dummyjson.com/products/1")
      .then((response) => response.json())

      .then((data) => setProduct(data));
  }, []);
//   useEffect(() => {
//     // fetch product data from API

//     fetch("https://dummyjson.com/products")
//       .then((response) => response.json())

//       .then((data) => setProduct(data));
//   }, []);
  const images = [
    "https://sajivanayurveda.in/wp-content/uploads/2023/01/My-project-1-1-e1675763027728-1024x939.png",

    "https://sajivanayurveda.in/wp-content/uploads/2023/01/My-project-3-1-e1675763296496-1024x939.png",

    "https://sajivanayurveda.in/wp-content/uploads/2023/01/My-project-2-1-e1675763509294-1024x939.png",

    // add more images to the array
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000); // change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <>
      <div>

      <img className='m-6 rounded-md max-h-24' src={images[currentIndex]} alt="Image" />

    </div>
      <div>
        <h1>{product.title}</h1>
        <p>{product.price}</p>
        <p>{product.category}</p>
        <p>{product.description}</p>

        <ul className="w-1/2">
          {/* <img src={product.thumbnail} /> */}
          {/* <img src={product.images[4]} /> */}
          <Carousel
                hasMediaButton={false}
                hasSizeButton={false}
                hasIndexBoard={"topRight"}
                hasLeftButton={false}
                hasRightButton={false}
              >
               
               {product.images &&
            product.images.map((image, index) => (
              <li key={index} >
                <img  src={image} alt={image} />
              </li>
            ))}
              </Carousel>
         
        </ul>
      </div>


    </>
  );
}

export default ImgChange;
