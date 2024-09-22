import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const TransaksiEdit = () => {
  const [hargaTotal, setHargaTotal] = useState("");
  const [metodePembayaran, setMetodePembayaran] = useState("");
  const [status, setStatus] = useState(""); // Status default
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getTransaksiById();
  }, []);

  const updateTransaksi = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/admin/transaksi/update/${id}`, {
        harga_total: hargaTotal,
        metode_pembayaran: metodePembayaran,
        status,
      });
      navigate("/transaksi/list");
    } catch (error) {
      console.log(error);
    }
  };

  const getTransaksiById = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/transaksi/find/${id}`);
      setHargaTotal(response.data.harga_total);
      setMetodePembayaran(response.data.metode_pembayaran);
      setStatus(response.data.status);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Edit Transaksi</h1>
        <form onSubmit={updateTransaksi}>
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
            {/* <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={metodePembayaran}
              onChange={(e) => setMetodePembayaran(e.target.value)}
              placeholder="Metode Pembayaran"
            /> */}
             <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={metodePembayaran}
              onChange={(e) => setMetodePembayaran(e.target.value)}
            >
              <option value="Cash">Cash</option>
              <option value="QRIS">QRIS</option>
            </select>
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
              <option value="Success">Success</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update Transaksi
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              <Link to="/transaksi/list" className="flex w-full">
                Back
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransaksiEdit;
