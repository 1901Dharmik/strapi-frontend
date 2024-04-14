import React, { useState, useEffect } from "react";
// import "./Cart.scss";
// import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import {
  removeItem,
  resetCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/cartReducer";
import { BsCartX } from "react-icons/bs";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import animationData from "../../assets/animation.json";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const Cart = ({ setshowCart }) => {
  const [totalAmt, setTotalAmt] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [products]);
  useEffect(() => {
    if (totalAmt <= 800) {
      setShippingCharge(30);
    } else if (totalAmt <= 1800) {
      setShippingCharge(25);
    } else if (totalAmt > 2200) {
      setShippingCharge(20);
    }
  }, [totalAmt]);

  const [quantity, setQuantity] = useState(1);
  const [opacity, setOpacity] = useState(0);
  const navigate = useNavigate();
  const phoneRef = useRef();
  // const totalPrice = () => {
  //   let total = 0;
  //   products.forEach((item) => {
  //     total += item.quantity * item.price;
  //   });
  //   return total.toFixed(2);
  // };

  // for quantity
  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };
  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  // end for quantity
  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="cart-panel z-10 fixed top-0 right-0 bottom-0  bg-white overflow-scroll ">
      <div className="opac-layer h-full bg-white fadeanimation">
        <div className="cart-content sm:w-full ">
          <div className="cart-header bg-white flex">
            <span className="heading font-medium inline-flex uppercase mt-2 p-4 cursor-pointer w-[70%]">
              Shopping Cart
            </span>
            <div
              className="animate-close-cart close-btn inline-flex justify-end cursor-pointer pt-3 uppercase p-4 ml-12 mt-2 "
              onClick={() => setshowCart(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 mt-[4px] p-1 font-semibold hover:border hover:rounded-full hover:bg-[rgba(40,167,69,.0784)]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              {/* <span className="mt-1 font-medium tex-md">Close </span> */}
            </div>
          </div>
          <hr />
          {!products.length && (
            <>
              <div className="empty-cart pt-[60px] ">
                {/* <BsCartX className=""/> */}
                <Lottie
                  onComplete={() => {
                    phoneRef.current?.setSpeed(0.6);
                    phoneRef.current?.setDirection(-1);
                    phoneRef.current?.play();
                    // setshowCart(false)
                  }}
                  loop={false}
                  lottieRef={phoneRef}
                  animationData={animationData}
                />
                <span>No products in the cart.</span>
                <button
                  className=" p-2.5  border-2 text-white rounded-xl bg-green-700 hover:bg-green-800"
                  onClick={() => {
                    setshowCart(false);
                    navigate("/");
                  }}
                >
                  RETURN TO SHOP
                </button>
              </div>
            </>
          )}
          {!!products.length && (
            <>
              <div className="flex  flex-col  bg-white shadow-xl">
                {products.map((item) => (
                  <li
                    key={item.id}
                    class="flex py-6 p-4 border-b overflow-hidden "
                  >
                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <Link to={`/product/${item.id}`}>
                        <img
                          src={item.img}
                          alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                          class="h-full w-full object-cover object-center"
                        />
                      </Link>
                    </div>

                    <div class="ml-4 flex flex-1 flex-col">
                      <div>
                        <div class="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href="#">{item.title}</a>
                          </h3>
                          <p class="ml-4">
                            &#8377;{item.price * item.quantity}
                          </p>
                        </div>
                        {/* <p class="mt-0 text-sm text-gray-500">{item.attributes.desc}</p> */}
                        <p class="mt-0 text-sm text-gray-500">
                          Lorem ipsum dolor sit amet .
                        </p>
                      </div>
                      <div class="flex flex-1 items-center justify-between text-sm mt-1">
                        <p class="text-gray-500">Qty {item.quantity}</p>
                        <div className="quantity-button flex ">
                          <span
                            className="px-2 pt-2"
                            onClick={() =>
                              dispatch(decreaseQuantity({ id: item.id }))
                            }
                          >
                            <FaMinus className="mx-1 text-2xl font-semibold p-1 bg-green-100 rounded-md text-green-700 border cursor-pointer" />
                          </span>
                          <span className="text-lg pt-2">{item.quantity}</span>
                          <span
                            className="px-2 pt-2"
                            onClick={() =>
                              dispatch(increaseQuantity({ id: item.id }))
                            }
                          >
                            <FaPlus className=" text-2xl border font-semibold mx-1 p-1 bg-green-100 rounded-md text-green-700 cursor-pointer" />
                          </span>
                        </div>

                        <div class="flex mt-1">
                          <button
                            onClick={() => dispatch(removeItem(item.id))}
                            type="button"
                            class="font-medium text-md text-green-700"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </div>

              <div class="border-t border-gray-200 px-4 py-6 sm:px-6 bg-white bottom-0">
                <div class="flex justify-between text-base font-medium text-gray-900 py-1.5">
                  <p> Subtotal</p>
                  {/* <p>&#8377;{totalPrice()}</p> */}
                  &#8377;{totalAmt}
                </div>
                <div class="flex justify-between text-base font-medium text-gray- py-1.5">
                  <p> Shipping Charge</p>
                  {/* <p>&#8377;{totalPrice()}</p> */}
                  &#8377;{shippingCharge}
                </div>
                <div class="flex justify-between text-base font-medium text-gray-900 py-1.5">
                  <p>Total</p>
                  {/* <p>&#8377;{totalPrice()}</p> */}
                  &#8377;{totalAmt + shippingCharge}
                </div>
                <p class="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div class="mt-6 mx-3">
                  <div
                    onClick={handlePayment}
                    class="flex items-center justify-center rounded-md border border-transparent bg-[#206c43] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700"
                  >
                    Proceed to Checkout
                  </div>
                </div>
                <div class="mt-6 flex flex-col justify-center text-center text-sm text-gray-500">
                  <p>
                    or
                    <button
                      type="button"
                      class="font-medium text-[#206c43] hover:text-gray-500"
                    >
                      <Link to="/shop">Continue Shopping</Link>
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
        {/* 
        import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
        process.env.REACT_APP_API_URL_UPLOAD + url,
      params
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
        */}
      </div>
      {/* <div className="cart-footer bg-white">
                <div className="subtotal">
                    <span className="text-xl uppercases">Subtotal:</span>
                    <span className="text-green-800 text-xl font-[500]">&#8377;2400</span>
                </div>
                <div className="px-5 py-4 ">
                    <button className="checkout-cta">Checkout</button>
                </div>
              </div> */}
    </div>
  );
};

export default Cart;
