import React from "react";

const ContentPage = () => {

  return (
    <div>
     











      <div className="bg-gray-100 px-2 py-10">
        <article className="mx-auto my-10 flex max-w-md flex-col rounded-2xl bg-white px-4 shadow md:max-w-5xl md:flex-row md:items-center">
          <div className="shrink-0 my-4 md:mr-8 md:max-w-sm">
            <img
              className="rounded-2xl"
              src="https://images.unsplash.com/photo-1663287695452-bf59337d8746?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt
            />
          </div>
          <div className="py-4 sm:py-8">
            <a
              href="#"
              className="mb-6 block text-2xl font-medium text-gray-700"
            >
              Long walks are helpful in decreasing stress levels
            </a>
            <p className="mb-6 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit illum consequatur quia doloremque! Similique eius
              enim nostrum totam.
            </p>
            <div className="flex items-center">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
                alt="Simon Lewis"
              />
              <p className="ml-4 w-56">
                <strong className="block font-medium text-gray-700">
                  Johanson Levinsiki
                </strong>
                <span className="text-sm text-gray-400">Jun 26, 2022</span>
              </p>
            </div>
          </div>
        </article>
      </div>
   <article className="mx-2 my-10 max-w-screen-lg rounded-md border border-gray-100 text-gray-700 shadow-md md:mx-auto">
  <div className="flex flex-col md:flex-row">
    <div className="p-5 md:w-4/6 md:p-8">
      <span className="rounded-md bg-orange-400 px-2 py-1 text-xs uppercase text-white">Tailwind</span>
      <p className="mt-2 text-xl font-black md:mt-6 md:text-4xl">How to make comment card with tailwind?</p>
      <p className="mt-3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptate vero soluta voluptatum error non.</p>
      <button className="mt-4 mr-2 flex items-center justify-center rounded-md bg-sky-400 px-8 py-2 text-center text-white duration-150 md:mb-4 hover:translate-y-1 hover:bg-sky-500">Read More</button>
    </div>
    <div className="mx-auto hidden items-center px-5 md:flex md:p-8">
      <img className="rounded-md shadow-lg" src="/images/4PQXlbagb4MqcadNmeo0D.png" alt="Shop image" />
    </div>
  </div>
</article>


    </div>
  );
};

export default ContentPage;
