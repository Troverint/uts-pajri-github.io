import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const TransaksiList = () => {
  const [transaksi, setTransaksi] = useState([]);

  useEffect(() => {
    getTransaksi();
  }, []);

  const getTransaksi = async () => {
    const response = await axios.get("http://localhost:3001/transaksi");
    setTransaksi(response.data);
  };

  const deleteTransaksi = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/admin/transaksi/delete/${id}`);
      getTransaksi();
    } catch (error) {
      console.log(error);
    }
  };
  const payTransaksi = async (id) => {
    try {
      await axios.put(`http://localhost:3001/admin/transaksi/update/${id}`, {
        status: "succes",
      });
      getTransaksi();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold font-poppins text-white drop-shadow-lg">Transaksi List</h1>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          <Link to="/transaksi/add">Add New</Link>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#08527A] backdrop-blur-lg bg-opacity-30 border-gray-300 rounded-lg shadow-xl border-2 text-[#F8FCFF] font-bold">
          <thead className="bg-gray-200 backdrop-blur-sm bg-opacity-50">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">Harga Total</th>
              <th className="px-4 py-2 border">Waktu Pembayaran</th>
              <th className="px-4 py-2 border">Metode Pembayaran</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transaksi.map((transaksiItem, index) => (
              <tr
                key={transaksiItem.id}
                className="backdrop-blur-sm bg-opacity-50 hover:backdrop-blur-none hover:bg-opacity-100"
              >
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">
                  {transaksiItem.harga_total}
                </td>
                <td className="px-4 py-2 border">
                  {transaksiItem.waktu_pembayaran}
                </td>
                <td className="px-4 py-2 border">
                  {transaksiItem.metode_pembayaran}
                </td>
                <td className="px-4 py-2 border">{transaksiItem.status}</td>
                <td className="px-4 py-2 border text-center">
                  <button
                 
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                  >
                    <Link to={`/transaksi/edit/${transaksiItem.id}`}>Edit</Link>
                  </button>
                  <button
                    onClick={() => deleteTransaksi(transaksiItem.id)}

                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => payTransaksi(transaksiItem.id)}
                    className="bg-emerald-500 text-white px-3 my-auto py-1 rounded hover:bg-emerald-600"
                  >
                    Pay
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

export default TransaksiList;
