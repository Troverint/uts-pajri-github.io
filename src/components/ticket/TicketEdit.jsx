import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const TicketEdit = () => {
  const [nomorBangku, setNomorBangku] = useState("");
  const [harga, setHarga] = useState("");
  const [studio, setStudio] = useState("");
  const [pembeli, setPembeli] = useState("");
  const [metodePembayaran, setMetodePembayaran] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getTicketById();
  }, []);

  const updateTicket = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/admin/ticket/update/${id}`, {
        nomor_bangku: nomorBangku,
        harga: harga,
        studio: studio,
        pembeli: pembeli,
        metode_pembayaran: metodePembayaran,
      });
      navigate("/ticket/list");
    } catch (error) {
      console.log(error);
    }
  };

  const getTicketById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/ticket/find/${id}`
      );
      setNomorBangku(response.data.nomor_bangku);
      setHarga(response.data.harga);
      setStudio(response.data.Screening.studio);
      setPembeli(response.data.Pembeli.name);
      setMetodePembayaran(response.data.Transaksi.metode_pembayaran);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Edit Ticket</h1>
        <form onSubmit={updateTicket}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nomor Bangku
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={nomorBangku}
              onChange={(e) => setNomorBangku(e.target.value)}
              placeholder="Nomor Bangku"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Harga
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              placeholder="Harga"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Studio
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={studio}
              onChange={(e) => setStudio(e.target.value)}
              placeholder="Studio"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Pembeli
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={pembeli}
              onChange={(e) => setPembeli(e.target.value)}
              placeholder="Pembeli"
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

          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update Ticket
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              <Link to="/ticket/list" className="flex w-full">
                Back
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TicketEdit;
