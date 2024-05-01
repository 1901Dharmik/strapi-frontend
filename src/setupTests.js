// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// import React from 'react';

// const ProductCard = ({ product }) => {
//   const { name, description, tags, image, quantity, onAddToCart, onBuyNow } = product;

//   return (
//     <div className="bg-white shadow-md rounded-lg p-4">
//       <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg mb-4" />
//       <h2 className="text-lg font-medium mb-2">{name}</h2>
//       <p className="text-gray-600 mb-4">{description}</p>
//       <div className="flex items-center mb-4">
//         <span className="text-gray-600 mr-2">Tags:</span>
//         {tags.map((tag, index) => (
//           <span key={index} className="bg-gray-200 py-1 px-2 rounded-full text-xs text-gray-700 mr-2">{tag}</span>
//         ))}
//       </div>
//       <div className="flex items-center mb-4">
//         <span className="text-gray-600 mr-2">Quantity:</span>
//         <span className="text-gray-900">{quantity}</span>
//       </div>
//       <div className="flex justify-between">
//         <button onClick={onAddToCart} className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md">Add to Cart</button>
//         <button onClick={onBuyNow} className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md">Buy Now</button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;