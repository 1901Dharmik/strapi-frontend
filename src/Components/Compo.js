import React from 'react'
import useFetch from '../hooks/useFetch'
const Compo = () => {
    const {data } = useFetch('/products?populate=*')
console.log(data, 'data not found')
  return (
    <div>
        <h3>data not define</h3>
        <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Problems To Cure</h2>
            <p className="mt-4 text-lg text-gray-600">
              Busy lifestyle can lead to digestive complications, manage your
              digestive health today to make life better
            </p>
            <div className="mt-8 h-1 w-24 bg-green-500 mx-auto" />
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <img
                alt="Boost Digestion"
                className="mb-4 rounded-lg"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="text-2xl font-semibold">{data?.attributes?.ptoc_title1}</h3>
              <p className="mt-2 text-gray-600">
              {data?.attributes?.ptoc_desc1}
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                alt="Reduce Flatulence"
                className="mb-4 rounded-lg"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="text-2xl font-semibold">{data?.attributes?.ptoc_title2}</h3>
              <p className="mt-2 text-gray-600">
              {data?.attributes?.ptoc_desc1}
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                alt="Relieve Discomfort"
                className="mb-4 rounded-lg"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="text-2xl font-semibold">{data?.attributes?.ptoc_title3}</h3>
              <p className="mt-2 text-gray-600">
              {data?.attributes?.ptoc_desc3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Compo
