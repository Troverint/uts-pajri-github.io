import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PembeliList = () => {
  const [pembelis, setPembelis] = useState([]);

  useEffect(() => {
    getPembelis();
  }, []);

  const getPembelis = async () => {
    const response = await axios.get("http://localhost:3001/pembeli");
    setPembelis(response.data);
  };

  const deletePembeli = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/admin/pembeli/delete/${id}`);
      getPembelis();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#F8FCFF]">Pembeli List</h1>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          <Link
            to="/pembeli/add"
          >
            Add New
          </Link>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#08527A] backdrop-blur-lg bg-opacity-30 border-gray-300 rounded-lg shadow-xl border-2 text-[#F8FCFF] font-bold">
          <thead className="bg-gray-200 backdrop-blur-sm bg-opacity-50">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Password</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pembelis.map((pembeli, index) => (
              <tr
                key={pembeli.id}
                className="backdrop-blur-sm bg-opacity-50 hover:backdrop-blur-none hover:bg-opacity-100"
              >
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{pembeli.name}</td>
                <td className="px-4 py-2 border">{pembeli.email}</td>
                <td className="px-4 py-2 border">{pembeli.password}</td>
                <td className="px-4 py-2 border text-center">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                  >
                   <Link
                    to={`/pembeli/edit/${pembeli.id}`}
                   
                  >
                    Edit
                  </Link>
                  </button>
                  <button
                    onClick={() => deletePembeli(pembeli.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PembeliList;
