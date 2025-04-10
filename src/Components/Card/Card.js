import React, { useState } from "react";
// import "./Card.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { userData } from "../../helper";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import toast, { Toaster } from "react-hot-toast";

const Card = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const dispatch = useDispatch();
  console.log(item);

  const { jwt } = userData();
  const isLoggedIn = !!jwt;
  const handleAddToCart = () => {
    isLoggedIn
      ? dispatch(
          addToCart({
            id: item.id,
            title: item.attributes.title,
            desc: item.attributes.desc,
            price: item.attributes.price,
            img: item.attributes.img.data[0].attributes.url,
            quantity,
          })
        )
      : toast("first You Have to login Your Account");
  };
  return (
    <>
      {/* <div className="grid xl:grid-cols-4 gap-3 pl-6 pt-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 overflow-scroll"> */}
      {loading ? (
        <div class="cards ">
          <div class="card is-loading shadow-md rounded-3xl">
            <div class="image"></div>
            <div class="content">
              <h2></h2>
              <p></p>
            </div>
          </div>
        </div>
      ) : (
        // h-[220px]

        <div
          class="
            max-w-[280px]
             mb-12 overflow-hidden  bg-white border border-gray-200 rounded-[20px] dark:bg-gray-800 dark:border-gray-700 box-shadow"
        >
          <Link className="link " to={`/product/${item.id}`}>
            <div className="w-full border-b-2 border-gray-200 overflow-hidden bg-cover bg-no-repeat rounded-t-[20px]">
              <div className="cards">
                <div className="image">
                  {/* <span>New Season</span> */}
                  {/* <Link className="link" to="/Products/1"> */}
                  <img
                    src={ item.attributes?.img?.data[0]?.attributes?.url}
                    alt=""
                    className="mainImg"
                    style={{transition: 'all .5s'}}
                  />
                  <img
                    src={item.attributes?.img?.data[1]?.attributes?.url}
                    alt=""
                    className="secondImg border-none"
                    style={{transition: 'all .5s'}}
                  />
                  {/* </Link> */}
                </div>
              </div>
              {/* <img
                    class="h-[220px]  w-full transition duration-300 ease-in-out hover:scale-110  "
                    src={
                     
                      item.attributes?.img?.data?.attributes?.url
                    }
                    alt=""
                    draggable="false"
                    style={{transition: 'all .5s'}}
                  /> */}
            </div>
          </Link>
          <div class="px-5 pt-5  ">
            {/* <a href="#"> */}
            <h5 class="mb-2 text-lg  font-semibold  text-gray-900 dark:text-white">
              {item?.attributes.title}
            </h5>
            {/* </a> */}
            <li class="list-none flex font-[300] ">
              <span className="font-lg">4.6</span>
              <img
                class="h-[16px] w-[16px]  ml-1"
                src="https://cdn.shopify.com/s/files/1/0575/8920/3125/files/reviewstar.png?v=1629806756"
                alt="Vigyanveda Review Star"
              />{" "}
              <span className="pl-10">11000+ People Using</span>
            </li>
            {/* <li class="list-none flex font-[300] mt-1 "><span className="font-semibold text-lg">₹</span><h5 className="mt-[1px] pl-1 font-semibold text-lg">5000</h5>
                         < className="font-semibold text-slate-500 text-lg mt-[6px] ml-8 leading-tight line-through">₹</ span>
                               <h5 className="mt-1 pl-1 font-semibold text-lg  text-slate-500 line-through  ">8000</h5></li> */}
            <li className="list-none flex pb-2">
              <h6 className="font-semibold text-lg py-1 mb-0 dark:text-white">
                ₹{item?.attributes.price}
              </h6>
              <h6 className="font-small text-lg py-1 mb-0 line-through pl-4 text-gray-500">
                ₹{item.oldPrice || item?.attributes.price + 20}
              </h6>
            </li>

            <li className="flex list-none">
              <span className="font-light text-[14px] text-green-800">
                Care For
              </span>
              <h6 className="text-[14px] font-light mt-[2px] pl-2 mb-4">
                Gas, Acidity, Constipation
              </h6>
            </li>
          </div>
          <li className="list-none flex ">
            <button className="w-[50%] bg-[#318e4c] dark:bg-gray-800 py-[10px] rounded-bl-[19px] mr-[1px] text-white font-semibold">
              <Link to={`/product/${item.id}`}>Know More</Link>
            </button>

            <button
              className="bg-[#206c43] dark:bg-gray-700 py-[10px] w-[50%] rounded-br-[19px] text-white font-semibold"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </li>
        </div>
      )}

      {/* </div> */}

      {/* <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              'http://localhost:1337' + item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              'http://localhost:1337' + item.attributes?.img2?.data[0]?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        
        <div className="prices">
          <h3>₹{item.oldPrice || item?.attributes.price + 20}</h3>
          <h3>₹{item?.attributes.price}</h3>
          <div className="border-[1px] border-orange-600 py-1 px-4 rounded-full text-xs">
            
            </div>
        </div>
       
      </div>
      
    </Link> */}

      {/* <button className="absolute"
  onClick={() =>
    dispatch(
      addToCart({
        id: item.id,
        title: item.attributes.title,
        desc: item.attributes.desc,
        price: item.attributes.price,
        img: item.attributes.img.data.attributes.url,
        quantity,
       
      })
    )&&
    toast.success(
      `${item.title.substring(0, 15)} added successfully!`
    )
  }>Add to Cart
</button> */}
    </>
  );
};

export default Card;
