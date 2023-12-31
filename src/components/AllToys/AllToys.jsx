import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const toycars = useLoaderData();
  const defaultLimit = 20;
  const [limit, setLimit] = useState(defaultLimit);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredToycars = toycars.filter(toycar =>
    toycar.toyname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const slicedToycars = filteredToycars.slice(0, limit);

  const handleSearchQuery = event => {
    setSearchQuery(event.target.value);
    setLimit(defaultLimit);
  };

  return (
    <div className="container mx-auto">
      <div className="mb-4">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search by Toy Name"
          value={searchQuery}
          onChange={handleSearchQuery}
          className="border border-gray-300 rounded py-2 px-4 w-full"
        />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>S/L</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {slicedToycars.map((toycar, index) => (
              <tr key={index}>
                <td className="border">{toycar.id}</td>
                <td className="border">
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{toycar.seller}</div>
                    </div>
                  </div>
                </td>
                <td className="border">{toycar.toyname}</td>
                <td className="border">{toycar.subcategory}</td>
                <td className="border">{toycar.price}</td>
                <td className="border">{toycar.availablequantity}</td>
                <td className="border">
                  <button className="btn btn-light btn-xs"><Link to={`/toy/${toycar.id}`}>View Details</Link></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {limit < filteredToycars.length && (
        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => setLimit(limit + defaultLimit)}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default AllToys;
