import React from "react";
import { useState } from "react";
import Tittle from "../../Components/Head/Tittle";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { addToCart } from "../../redux/cartReducer";
import { ToastContainer, toast } from "react-toastify";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import corprateData from "../../assets/corporate.json";
import consultanceData from "../../assets/consultation.json";
import freediliveryData from "../../assets/delivery.json";
import qualityData from "../../assets/quality.json";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// requires a loader
// import { Carousel } from "react-responsive-carousel";
import RelatedProducts from "../../Components/ReletedProduct/ReletedProduct";
import Meta from "../../Components/Meta/Meta";
import BreadCrumb from "../../Components/Meta/BreadCrumb";
import Compo from "../../Components/Compo";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const Product = () => {
  const phoneRef = useRef();
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  console.log(data, "na aaya");
  return (
    <>
      <Meta title={data?.attributes?.title} />
      <BreadCrumb title={data?.attributes?.title} />
     
      <div class=" overflow-hidden rounded-xl  ">
        <div class="flex flex-col  overflow-hidden sm:flex-row ">
          <div class="order-first ml-auto h-full w-full sm:order-none sm:h-auto sm:w-full lg:w-2/5">
            {/* <img
              class="h-full w-full object-contain xl:px-2 xl:mt-2 "
              src="https://cdn.shopify.com/s/files/1/0575/8920/3125/files/Digestive-Care.png?v=1629541512"
              loading="lazy"
            /> */}
            <div className="m-4 carousel">
            <Carousel
              hasMediaButton={false}
              hasSizeButton={false}
              hasLeftButto={"centerLeft"}
            >
              <img
                src={
                  // "https://strapi-backend-ui4h.onrender.com" +
                  data?.attributes?.img?.data[0]?.attributes?.url
                }
              />
              <img
                src={
                  // "https://strapi-backend-ui4h.onrender.com" +
                  data?.attributes?.img?.data[1]?.attributes?.url
                }
              />
              <img
                src={
                  // "https://strapi-backend-ui4h.onrender.com" +
                  data?.attributes?.img2?.data[1]?.attributes?.url
                }
              />
              <img
                src={
                  // "https://strapi-backend-ui4h.onrender.com" +
                  data?.attributes?.img2?.data[2]?.attributes?.url
                }
              />
              <img
                src={
                  // "https://strapi-backend-ui4h.onrender.com" +
                  data?.attributes?.img2?.data[3]?.attributes?.url
                }
              />
              <img
                src={
                  // "https://strapi-backend-ui4h.onrender.com" +
                  data?.attributes?.img2?.data[4]?.attributes?.url
                }
              />
            </Carousel>
          </div>
          </div>
          <div class=" flex w-full flex-col sm:w-1/2 sm:p-8 lg:w-3/5 lg:mt-6">
          <div className="">
          {/* content - start */}
          <div className="m-4">
            <span className="product-name  text-[32px] font-semibold">
              {data?.attributes?.title}
            </span>
            {/* <div className="product-rating flex">
            <span>
              <AiFillStar />
            </span>
            <span>
              <AiFillStar />
            </span>
            <span>
              <AiFillStar />
            </span>
            <span>
              <AiFillStar />
            </span>
            <span>
              <AiFillStar />
            </span>
            <span>(350 ratings)</span>
          </div> */}
            <p className="product-description my-[15px] font-light text-[17px] lg:pr-8 sm:pr-2 text-[#6c6c6c] leading-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              animi ad minima veritatis dolore. Architecto facere dignissimos
              voluptate fugit ratione molestias quis quidem exercitationem
              voluptas.
            </p>

            <div className="info__price flex">
              <span className="digestiveproduct-price font-semibold text-2xl">
                Rs.&nbsp;{data?.attributes?.price}
              </span>
              <span className="origin_price text-2xl font-light font-body-3-2  pl-3 text-[#9b9b9b] line-through  mr-6">
                Rs.&nbsp;28,999
              </span>
              {/* <span class="inline-flex items-center gap-x-1 py-0 px-2 rounded-lg text-[13px] font-md bg-green-100  dark:bg-blue-800/30 text-green-700 ring-1 ring-inset ring-green-600/20">Sale</span> */}
              <span className="tag font-body-3-2 mt-1 pl-3 ">
                (&nbsp;incl. of all taxes&nbsp;)
              </span>
            </div>
            {/* <div className="btn-groups">
                <div className="selection-box">
                  <select className="choose">
                    <option value="option1"> 1</option>
                    <option value="option2"> 2</option>
                    <option value="option3"> 3</option>
                  </select>
                </div>
                <button type="button" className="add-cart-btn">
                  <i className="fas fa-shopping-cart"></i>Add To Cart
                </button>
                <button type="button" className="buy-now-btn">
                  <i className="fas fa-wallet"></i>Buy Now
                </button>
              </div> */}
            <div className="flex flex-row items-center gap-12 pt-4">
              <div className="flex flex-row items-center">
                <button
                  className="bg-green-100 py-[4px] px-[14px] rounded-lg text-[#206c43] text-2xl shadow-md"
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                <span className="py-4 px-6 text-2xl rounded-lg">
                  {" "}
                  {quantity}
                </span>
                <button
                  className="bg-green-100 py-[4px] px-[12px] shadow-md rounded-lg text-[#206c43] text-2xl"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="bg-[#206c43] text-md text-white font-semibold py-3 xl:px-12 rounded-md h-full sm:px-3 add-to-cart-pd hover:bg-[#318e4c] shadow"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: data.id,
                      title: data.attributes.title,
                      desc: data.attributes.desc,
                      price: data.attributes.price,
                      img: data.attributes.img.data[0].attributes.url,
                      quantity,
                    })
                  )
                }
              >
                Add To Cart
              </button>
            </div>
            <ul class="reviews flex ">
              <li className="text-[#6c6c6c] text-xl">
                4.4{data?.attributes?.rating}
              </li>
              <li>
                <img src="https://cdn.shopify.com/s/files/1/0575/8920/3125/files/reviewstar.png?v=1629806756" />
              </li>
              <li className="px-6 text-[#6c6c6c] text-lg italic">
                13500+ People Using&nbsp;
              </li>

              {/* <li className="float">30 Days</li> */}
            </ul>

            <ul className="product-details">
              {/* <div className="flex mb-2">
              <h5 className="w-[20%] font-semibold text-lg">Includes :-</h5>
              <div className="font-light mb-2">
                Soulfly 30 Caps (1), Xor-Digestive Powder 100gm(1), Pilocool 60
                Caps (2){" "}
              </div>
            </div> */}

              {/* <div class="max-w-4xl mx-auto py-4 pr-6">
              <div class="flex flex-col space-y-6">
                <div className="flex">
                  <h3 class="text-lg font-semibold ">Includes</h3>
                  <div class="text-md pl-8 font-light align-middle pt-[5px]">
                    Soulfly 30 Caps (1), Xor-Digestive Powder 100gm(1), Pilocool
                    60 Caps (2)
                  </div>
                </div>
                <div className="flex">
                  <h3 class="text-lg font-semibold pt-1">Care For</h3>
                  <div class="flex space-x-2 pl-8">
                    <span class="inline-block bg-[#d5eadb] rounded-full px-4 py-2 text-sm font-light  mb-2">
                      Gas
                    </span>
                    <span class="inline-block bg-[#d5eadb] rounded-full px-4 py-2 text-sm font-light mr-2 mb-2">
                      Acidity
                    </span>
                    <span class="inline-block bg-[#d5eadb] rounded-full px-4 py-2 text-sm font-light mr-2  mb-2">
                      Constipation
                    </span>
                  </div>
                </div>
                <div className="flex ">
                  <h3 class="text-lg font-semibold">Dosage</h3>

                  <div
                    class="text-sm text-green-800 cursor-pointer decoration-solid pl-9 mt-1"
                    href="#"
                    rel="ugc"
                  >
                    Click Here <span className="underline ">To Download</span>
                  </div>
                </div>
              </div>
            </div> */}
              <ul className="product-details">
                {/* <li className="kevin pb-0 flex my-2">
              <h6 className="font-semibold text-lg">Care For</h6>
              <p className="mx-8">
                <span className="inline-block bg-[#d5eadb] rounded-full px-3 py-2 text-sm font-light mr-2 mb-2 text-green-800">Stomach Gas</span> <span className="inline-block bg-[#d5eadb] text-green-800 rounded-full px-3 py-2 text-sm font-light mr-2 mb-2">Acidity</span>
                <span className="inline-block text-green-800 bg-[#d5eadb] rounded-full px-3 py-2 text-sm font-light mr-2 mb-2">Constipation</span>
              </p>
            </li> */}
                <li className="flex mb-[15px] my-2">
                  <h6 className="font-semibold text-lg">Includes</h6>
                  <p className="mx-8 text-[15px] text-gray-700 font-light lg:pr-8 sm:pr-2 ">
                    {/* {product.includes} */}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Hic amet, eveniet adipisci recusandae.
                  </p>
                </li>

                <li className="py-2 flex">
                  <h6 className="font-semibold text-lg">Dosage</h6>
                  <p className="text-[15px] text-gray-700 font-light">
                    <a href="#" className="pr-1 text-[#206c43] ml-10 pt-[4px]">
                      Click Here
                    </a>
                    To Download
                  </p>
                </li>
                <li className="py-2 flex">
                  <h6 className="font-semibold text-lg">Dilivery</h6>
                  <p className="text-[15px] text-gray-700 font-light pt-[4px] ml-10">
                    <a href="#"></a>
                    Free Home Delivery
                  </p>
                </li>
                <li className="py-2 flex">
                  <h6 className="font-semibold text-lg">Shipping</h6>
                  <p className="text-[15px] text-gray-700 font-light pt-[4px] ml-[30px]">
                    <a href="#"></a>
                    All Over India
                  </p>
                </li>
              </ul>
              {/* <div className="flex">
              <h5 className="w-[20%] font-semibold text-lg">Care For :-</h5>
              <span class="inline-block bg-[#d5eadb] rounded-full px-3 py-2 text-sm font-light mr-2 mb-2">
                Gas
              </span>
              <span class="inline-block bg-[#d5eadb] rounded-full px-3 py-2 text-sm font-light mr-2 mb-2">
                Acidity
              </span>
              <span class="inline-block bg-[#d5eadb] rounded-full px-3 py-2 text-sm font-light mr-2 mb-2">
                Constipation
              </span>
            </div> */}
              {/* <li className="flex mb-[15px]">
              <h6>Includes</h6>
              <p>{product.includes}</p>
            </li> */}
              {/* <li className="kevin pb-2">
              <h6>Care For</h6>
              <p>
                <span>Stomach Gas</span> <span>Acidity</span>
                <span>Constipation</span>
              </p>
            </li> */}
              {/* <li className="py-3">
              <h6>Dosage</h6>
              <p>
                <a href="#" className="pr-1 text-[#206c43]">
                  Click Here
                </a>
                To Download
              </p>
            </li> */}
              {/* <li className="py-3">
              <h6>Dilivery</h6>
              <p>
                <a href="#"></a>
                Free Home Delivery
              </p>
            </li> */}
              {/* <li className="py-3">
              <h6>Shipping</h6>
              <p>
                <a href="#"></a>
                All Over India
              </p>
            </li> */}
              {/* <li className="py-3">
                  <h6>Services</h6>
                  <img src="./icons/verified.png" alt="" />
                  <p className="padding-bottom">
                    <a href="#"></a>
                    Secure Payments
                  </p>
                  <img src="./icons/operator.png" alt="" />
                  <p className="padding-bottom">
                    <a href="#"></a>
                    Free Consultance
                  </p>
                  <img
                    className="three-dots"
                    src="./icons/vertical-dots.png"
                    alt=""
                  />
                </li> */}
            </ul>
            <span className="divider" />
            {/* <div className="info-item">
            <span className="text-bold">
              Category:{" "}
              <span>{product.categories.data[0].attributes.title}</span>
            </span>
            <span className="text-bold">
              Share:
              <span className="social-icons">
                <FaFacebookF size={16} />
                <FaTwitter size={16} />
                <FaInstagram size={16} />
                <FaLinkedinIn size={16} />
                <FaPinterest size={16} />
              </span>
            </span>
          </div> */}
          </div>
        
          {/* content - end */}
        </div>
            
          </div>
        </div>
      </div>
      <div>
        <Tittle
          name="Problem To Cure"
          head="If you can relate to the following conditions then you should use this product."
          style={{ padding: "30px" }}
        />
        <div className="bg-white pb-8">
          <div className="container mx-auto px-4">
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <img
                  alt="Boost Digestion"
                  className="mb-4 rounded-lg"
                  height="200"
                  src={data?.attributes?.ptoc_image1?.data?.attributes?.url}
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="text-2xl font-semibold">
                  {data?.attributes?.ptoc_title1}
                </h3>
                <p className="mt-2 text-gray-600">
                  {data?.attributes?.ptoc_desc1}
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img
                  alt="Reduce Flatulence"
                  className="mb-4 rounded-lg"
                  height="200"
                  src={data?.attributes?.ptoc_image2?.data?.attributes?.url}
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="text-2xl font-semibold">
                  {data?.attributes?.ptoc_title2}
                </h3>
                <p className="mt-2 text-gray-600">
                  {data?.attributes?.ptoc_desc2}
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img
                  alt="Relieve Discomfort"
                  className="mb-4 rounded-lg"
                  height="200"
                  src={data?.attributes?.ptoc_image3?.data?.attributes?.url}
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="text-2xl font-semibold">
                  {data?.attributes?.ptoc_title3}
                </h3>
                <p className="mt-2 text-gray-600">
                  {data?.attributes?.ptoc_desc3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <Tittle
        name="Who Should Use This Product"
        head="If you can relate to the following conditions then you should use this product."
        style={{ padding: "30px" }}
      />
      <div className="flex  my-8">
        <div className="flex flex-col w-1/2 p-8 space-y-6">
          <div className="flex items-center space-x-4">
            <div className="text-3xl font-bold text-gray-700">01</div>
            <p className="text-lg text-gray-600">
              {data?.attributes?.who_can_use_t1}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-3xl font-bold text-gray-700">02</div>
            <p className="text-lg text-gray-600">
              {data?.attributes?.who_can_use_t2}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-3xl font-bold text-gray-700">03</div>
            <p className="text-lg text-gray-600">
              {data?.attributes?.who_can_use_t3}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-3xl font-bold text-gray-700">04</div>
            <p className="text-lg text-gray-600">
              {data?.attributes?.who_can_use_t4}
            </p>
          </div>
        </div>
        <div className="w-1/2 mx-5">
          <img
            alt="Healthcare"
            className="object-cover w-full h-full"
            height="580"
            src={data?.attributes?.who_can_use_i1?.data?.attributes?.url}
            style={{
              aspectRatio: "844/580",
              objectFit: "cover",
            }}
            width="844"
          />
        </div>
      </div>
      {/* <div className="m-6  ">
        <div class="bg-[#D5EADB] rounded-2xl p-10 shadow-md">
          <div class="text-center">
            <h2 class="text-3xl font-bold text-[#1F2937] mb-2">
              Why Choose us?
            </h2>
            <p class="text-[#374151] mb-8">
              Get complete care for your digestive problems like gas, acidity
              &amp; constipation.
            </p>
          </div>
          <div class="flex justify-center space-x-10">
            <div class="text-center">
              <div class="mb-4 inline-flex items-center justify-center h-20 w-20 rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-[#10B981] text-3xl"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-[#1F2937] mb-2">
                Regular Follow-ups
              </h3>
              <p class="text-[#374151]">
                We provide free regular follow-ups after every phone
                consultation.
              </p>
            </div>
            <div class="text-center">
              <div class="mb-4 inline-flex items-center justify-center h-20 w-20 rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-[#10B981] text-3xl"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-[#1F2937] mb-2">
                Free Expert Phone Consultation
              </h3>
              <p class="text-[#374151]">
                We connect you to the best experts through free phone
                consultations.
              </p>
            </div>
            <div class="text-center">
              <div class="mb-4 inline-flex items-center justify-center h-20 w-20 rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-[#10B981] text-3xl"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <path d="M12 11h4"></path>
                  <path d="M12 16h4"></path>
                  <path d="M8 11h.01"></path>
                  <path d="M8 16h.01"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-[#1F2937] mb-2">
                Customised Diet Plan
              </h3>
              <p class="text-[#374151]">
                We provide customised diet plans according to your existing
                lifestyle.
              </p>
            </div>
            <div class="text-center">
              <div class="mb-4 inline-flex items-center justify-center h-20 w-20 rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-[#10B981] text-3xl"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <path d="m9 14 2 2 4-4"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-[#1F2937] mb-2">
                Assured Quality
              </h3>
              <p class="text-[#374151]">
                We follow strict quality checks to retain quality for our
                products.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <section className="py-10 bg-green-200 sm:py-16 lg:py-8 mx-4 rounded-2xl shadow-lg ">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-green-800 mb-2">Why Choose us?</h2>
          <p class="text-[#374151] mb-8 px-2">
            Get complete care for your digestive problems like gas, acidity
            &amp; constipation.
          </p>
        </div>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-2 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
            <div>
              <div className="flex items-center justify-center w-28 h-28 mx-auto bg-blue-100 rounded-full">
                <Lottie
                  onComplete={() => {
                    phoneRef.current?.setSpeed(0.6);
                    phoneRef.current?.setDirection(-1);
                    phoneRef.current?.play();
                    // setshowCart(false)
                  }}
                  loop={true}
                  lottieRef={phoneRef}
                  animationData={consultanceData}
                />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Free Expert Consultance
              </h3>
            </div>
            <div>
              <div className="flex items-center justify-center w-28 h-28 mx-auto bg-orange-100 rounded-full">
                <Lottie
                  onComplete={() => {
                    phoneRef.current?.setSpeed(0.6);
                    phoneRef.current?.setDirection(-1);
                    phoneRef.current?.play();
                    // setshowCart(false)
                  }}
                  loop={true}
                  lottieRef={phoneRef}
                  animationData={freediliveryData}
                />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                {/* Fast &amp; Easy to Load */}
                Free Home Delivery
              </h3>
            </div>
            <div>
              <div className="flex items-center justify-center w-28 h-28 mx-auto bg-green-100 rounded-full">
                <Lottie
                  onComplete={() => {
                    phoneRef.current?.setSpeed(0.6);
                    phoneRef.current?.setDirection(-1);
                    phoneRef.current?.play();
                    // setshowCart(false)
                  }}
                  loop={true}
                  lottieRef={phoneRef}
                  animationData={qualityData}
                />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                {/* Light &amp; Dark Version */}
                Assured Quality
              </h3>
            </div>
            <div>
              <div className="flex items-center justify-center w-28 h-28 mx-auto bg-red-100 rounded-full">
                <Lottie
                  onComplete={() => {
                    phoneRef.current?.setSpeed(0.6);
                    phoneRef.current?.setDirection(-1);
                    phoneRef.current?.play();
                    // setshowCart(false)
                  }}
                  loop={true}
                  lottieRef={phoneRef}
                  animationData={corprateData}
                />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Customized Diet Plan
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <div className="flex  my-8">
        <div className="flex flex-col w-1/2 p-8 space-y-6">
          <div className="flex items-center space-x-4">
            <div className="text-3xl font-bold text-gray-700">01</div>
            <p className="text-lg text-gray-600">
              {data?.attributes?.prodinfo?.title1}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-3xl font-bold text-gray-700">02</div>
            <p className="text-lg text-gray-600">
              {data?.attributes?.who_can_use_t2}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-3xl font-bold text-gray-700">03</div>
            <p className="text-lg text-gray-600">
              {data?.attributes?.who_can_use_t3}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-3xl font-bold text-gray-700">04</div>
            <p className="text-lg text-gray-600">
              {data?.attributes?.who_can_use_t4}
            </p>
          </div>
        </div>
        <div className="w-1/2 mx-5">
          <img
            alt="Healthcare"
            className="object-cover w-full h-full"
            height="580"
            src={data?.attributes?.who_can_use_i1?.data?.attributes?.url}
            style={{
              aspectRatio: "844/580",
              objectFit: "cover",
            }}
            width="844"
          />
        </div>
      </div>
      <RelatedProducts
        productId={id}
        categoryId={data?.attributes.categories.data[0].id}
      />
      {/* <div className="product">
        {loading ? (
          "loading"
        ) : (
          <>
            <div className="left">
              <div className="images">
                <img
                  src={
                    "http://localhost:1337" +
                    data?.attributes?.img?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img")}
                />
                <img
                  src={
                    "http://localhost:1337" +
                    data?.attributes?.img2?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img2")}
                />
              </div>
              <div className="mainImg">
                <img
                  src={
                    "http://localhost:1337" +
                    data?.attributes[selectedImg]?.data?.attributes?.url
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="right">
              <h1>{data?.attributes?.title}</h1>
              <span className="price">${data?.attributes?.price}</span>
              <p>{data?.attributes?.desc}</p>
              <div className="quantity">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                {quantity}
                <button onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>
              <button
                className="add"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: data.id,
                      title: data.attributes.title,
                      desc: data.attributes.desc,
                      price: data.attributes.price,
                      img: data.attributes.img.data.attributes.url,
                      quantity,
                    })
                  )
                }
              >
                ADD TO CART
              </button>
              <div className="links">
                <div className="item">ADD TO WISH LIST</div>
                <div className="item">ADD TO COMPARE</div>
              </div>
              <div className="info">
                <span>Vendor: Polo</span>
                <span>Product Type: T-Shirt</span>
                <span>Tag: T-Shirt, Women, Top</span>
              </div>
              <hr />
              <div className="info">
                <span>DESCRIPTION</span>
                <hr />
                <span>ADDITIONAL INFORMATION</span>
                <hr />
                <span>FAQ</span>
              </div>
            </div>
          </>
        )}
      </div> */}
      {/* carousel */}
    </>
  );
};

export default Product;
