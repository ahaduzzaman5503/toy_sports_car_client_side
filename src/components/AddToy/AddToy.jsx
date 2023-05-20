import React from "react";

const AddToy = () => {
  const handleAddToy = (event) => {
    event.preventDefault();

    const sname = event.target.sname.value;
    const toyname = event.target.toyname.value;
    const quantity = event.target.quantity.value;
    const price = event.target.price.value;
    const rating = event.target.rating.value;
    const details = event.target.details.value;
    const email = event.target.email.value;
    const photoUrl = event.target.photoUrl.value;

    const newToy = {
      sname, toyname, quantity, price, rating, details, email,  photoUrl,
    };
    console.log(newToy);

    fetch("http://localhost:5000/toycardata", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) {
          alert("Toy Car Added Successfully");
        }
      });
  };
  return (
    <div className="container mx-auto ">
      <form onSubmit={handleAddToy}>
        <div className="bg-blue-400 p-3 my-3 rounded ">
          <h1 className="text-2xl font-bold text-black text-center">
            Add A Toy
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {/* Sallar Name */}
          <div className="mb-6">
            <label
              htmlFor="name"
             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Saller Name
            </label>
            <input
              type="text"
              id="sname"
              name="sname"
             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Sallar Name"
              required
            />
          </div>

          {/* Toy Name */}
          <div className="mb-6">
            <label
              htmlFor="toyname"
             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Toy Name
            </label>
            <input
              type="text"
              id="toyname"
              name="toyname"
             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Toy Price */}
          <div className="mb-6">
            <label
              htmlFor="price"
             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Toy Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Price"
              required
            />
          </div>

          {/* Available quantity */}
          <div className="mb-6">
            <label
              htmlFor="quantity"
             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Toy Quantity
            </label>
            <input
              type="text"
              id="quantity"
              name="quantity"
             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="quantity"
              required
            />
          </div>

          {/* Rating */}
          <div className="mb-6">
            <label
              htmlFor="rating"
             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Toy Rating
            </label>
            <input
              type="text"
              id="rating"
              name="rating"
             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Rating"
              required
            />
          </div>

          {/* Detail description */}
          <div className="mb-6">
            <label
              htmlFor="details"
             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Toy Details
            </label>
            <input
              type="text"
              id="details"
              name="details"
             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Detail description"
              required
            />
          </div >

          {/* seller email */}
          <div className="mb-6">
            <label
              htmlFor="email"
             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Seller Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@website.com"
              required
            />
          </div>

          {/* Picture URL of the toy */}
          <div className="mb-6">
            <label
              htmlFor="photoUrl"
             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Toy Picture Url
            </label>
            <input
              type="text"
              id="photoUrl"
              name="photoUrl"
             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Toy Photo Url"
              required
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
           className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
