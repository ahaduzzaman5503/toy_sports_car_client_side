import React from "react";
import { useLoaderData } from "react-router-dom";

const MyToy = () => {
  const newtoy = useLoaderData();

  const handleDeleteToy = _id => {
    console.log('delete ', _id);
  }
  return (
    <div className="container mx-auto">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Toy Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Toy Name
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Update
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {newtoy.map((toy, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-32 p-4">
                  <img src={toy?.photoUrl} alt={toy.name} />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {toy?.toyname}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {toy?.quantity}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  ${toy?.price}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {toy?.details}
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Update
                  </a>
                </td>
                <td className="px-6 py-4">
                  <a
                  onClick={() => handleDeleteToy(newtoy._id)}
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
