import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TransaksiAdd = () => {
  const [hargaTotal, setHargaTotal] = useState("");
  const [metodePembayaran, setMetodePembayaran] = useState("");
  const [status, setStatus] = useState("pending"); // Status default
  const navigate = useNavigate();

  const saveTransaksi = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/admin/transaksi/post", {
        harga_total: hargaTotal,
        metode_pembayaran: metodePembayaran,
        status: status,
      });
      alert("Transaksi berhasil ditambahkan");
      navigate("/transaksi/list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-md">
        <form
          onSubmit={saveTransaksi}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Harga Total
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={hargaTotal}
              onChange={(e) => setHargaTotal(e.target.value)}
              placeholder="Harga Total"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Metode Pembayaran
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={metodePembayaran}
              onChange={(e) => setMetodePembayaran(e.target.value)}
              placeholder="Metode Pembayaran"
              
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Status
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="success">Success</option>
            </select>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => navigate("/transaksi/list")}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransaksiAdd;
