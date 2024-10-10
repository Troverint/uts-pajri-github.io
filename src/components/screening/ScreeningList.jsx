import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ScreeningList = () => {
  const [screenings, setScreenings] = useState([]);

  useEffect(() => {
    getScreenings();
  }, []);

  const getScreenings = async () => {
    const response = await axios.get("http://localhost:3001/screening");
    setScreenings(response.data);
  };

  const deleteScreening = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/admin/screening/delete/${id}`);
      getScreenings();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold font-poppins text-white drop-shadow-lg">Screening List</h1>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          <Link to="/screening/add">Add New</Link>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#08527A] backdrop-blur-lg bg-opacity-30 border-gray-300 rounded-lg shadow-xl border-2 text-[#F8FCFF] font-bold">
          <thead className="bg-gray-200 backdrop-blur-sm bg-opacity-50">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">Jadwal Pemutaran</th>
              <th className="px-4 py-2 border">Studio</th>
              <th className="px-4 py-2 border">Bangku Tersedia</th>
              <th className="px-4 py-2 border">Nama Film</th>
              <th className="px-4 py-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {screenings.map((screening, index) => (
              <tr
                key={screening.id}
                className="backdrop-blur-sm bg-opacity-50 hover:backdrop-blur-none hover:bg-opacity-100"
              >
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">
                  {screening.jadwal_pemutaran}
                </td>
                <td className="px-4 py-2 border">{screening.studio}</td>
                <td className="px-4 py-2 border">
                  {screening.bangku_tersedia}
                </td>
                <td className="px-4 py-2 border">{screening.Film.title}</td>
                <td className="px-4 py-2 border text-center">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                  >
                    <Link to={`/screening/edit/${screening.id}`}>Edit</Link>
                  </button>
                  <button
                    onClick={() => deleteScreening(screening.id)}
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

export default ScreeningList;
