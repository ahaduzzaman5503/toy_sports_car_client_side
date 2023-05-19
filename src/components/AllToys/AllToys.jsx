import React from "react";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const toycars = useLoaderData();

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto w-full">
        <table className="table w-full ">
          {/* head */}
          <thead   >
            <tr >
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody className=" ">
            {
            toycars.map((toycar, index) => (
              <tr key={index} >
                <td className=" border">
                  <div className="flex items-center space-x-3border ">
                    <div className="">
                      <div className="font-bold ">{toycar.seller}</div>
                    </div>
                  </div>
                </td>
                <td className="border">{toycar.toyname}</td>
                <td className="border">{toycar.subcategory}</td>
                <td className="border">{toycar.price}</td>
                <td className="border">{toycar.availablequantity}</td>
                <td className="" >
                  <button className="btn btn-light btn-xs">View Details</button>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
