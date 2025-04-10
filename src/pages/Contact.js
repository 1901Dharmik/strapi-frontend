import React from "react";
import useFetch from "../hooks/useFetch";


const Contact = () => {
  const { data, error, loading } = useFetch(`/symptoms?populate=*`);
  console.log("system", data);
  return (
    <>
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-full px-4 md:px-8">
          <div className="flex flex-col overflow-hidden rounded-lg bg-white sm:flex-row md:h-80">
            {/* content - start */}
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
              <h2 className="mb-4 text-xl font-bold text-black md:text-2xl lg:text-4xl guj">
                {data[0]?.attributes.title}
                <br />
                {data[0]?.attributes.subtitle}
              </h2>
              <p className="mb-8 font-light leading-8 text-md max-w-xl text-black guj">
                {data[0]?.attributes.description}
              </p>
            </div>
            {/* content - end */}
            {/* image - start */}
            <div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
              <img
                src="https://images.unsplash.com/photo-1505846951821-e25bacf2eccd?auto=format&q=75&fit=crop&crop=top&w=1000&h=500"
                loading="lazy"
                alt="Photo by Dom Hill"
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/* image - end */}
          </div>
        </div>
      </div>
    </div>

    {/* section 2 */}
    <section class="py-10 bg-white sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
          <div>
            <div class="relative flex items-center justify-center mx-auto">
              <svg
                class="text-blue-100"
                width="72"
                height="75"
                viewBox="0 0 72 75"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
              </svg>
              <svg
                class="absolute text-blue-600 w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">
              Secured Payments
            </h3>
            <p class="mt-4 text-base text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>

          <div>
            <div class="relative flex items-center justify-center mx-auto">
              <svg
                class="text-orange-100"
                width="62"
                height="64"
                viewBox="0 0 62 64"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z" />
              </svg>
              <svg
                class="absolute text-orange-600 w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">
              Fast & Easy to Load
            </h3>
            <p class="mt-4 text-base text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>

          <div>
            <div class="relative flex items-center justify-center mx-auto">
              <svg
                class="text-green-100"
                width="66"
                height="68"
                viewBox="0 0 66 68"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
              </svg>
              <svg
                class="absolute text-green-600 w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">
              Light & Dark Version
            </h3>
            <p class="mt-4 text-base text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>

          <div>
            <div class="relative flex items-center justify-center mx-auto">
              <svg
                class="text-purple-100"
                width="66"
                height="68"
                viewBox="0 0 66 68"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
              </svg>
              <svg
                class="absolute text-purple-600 w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">
              Light & Dark Version
            </h3>
            <p class="mt-4 text-base text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>

          <div>
            <div class="relative flex items-center justify-center mx-auto">
              <svg
                class="text-gray-100"
                width="65"
                height="70"
                viewBox="0 0 65 70"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M64.5 26C64.5 46.4345 56.4345 70 36 70C15.5655 70 0 53.9345 0 33.5C0 13.0655 13.0655 0 33.5 0C53.9345 0 64.5 5.56546 64.5 26Z" />
              </svg>
              <svg
                class="absolute text-gray-600 w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">
              Fast & Easy to Load
            </h3>
            <p class="mt-4 text-base text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>

          <div>
            <div class="relative flex items-center justify-center mx-auto">
              <svg
                class="text-yellow-100"
                width="78"
                height="78"
                viewBox="0 0 78 78"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.49996 28.0002C4.09993 47.9554 14.1313 66.7885 35.5 71.5002C56.8688 76.2119 68.0999 58.4553 72.5 38.5001C76.9 18.5449 68.3688 12.711 47 7.99931C25.6312 3.28759 12.9 8.04499 8.49996 28.0002Z" />
              </svg>
              <svg
                class="absolute text-yellow-500 w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
            </div>
            <h3 class="mt-8 text-lg font-semibold text-black">
              Secured Payments
            </h3>
            <p class="mt-4 text-base text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>

        
        </div>
      </div>
    </section>
  </>
  );
};

export default Contact;
