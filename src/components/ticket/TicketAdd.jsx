import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TicketAdd = () => {
  const [nomorBangku, setNomorBangku] = useState("");
  const [harga, setHarga] = useState("");
  const [pembeliId, setPembeliId] = useState("");
  const [screeningId, setScreeningId] = useState("");
  const [transaksiId, setTransaksiId] = useState("");
  
  const [screenings, setScreenings] = useState([]);
  const [pembelis, setPembelis] = useState([]);
  const [transaksis, setTransaksis] = useState([]);

  const navigate = useNavigate();

  // Fetch data saat komponen pertama kali dirender
  useEffect(() => {
    const fetchData = async () => {
      try {
        const screeningResponse = await axios.get("http://localhost:3001/screening");
        const pembeliResponse = await axios.get("http://localhost:3001/pembeli");
        const transaksiResponse = await axios.get("http://localhost:3001/transaksi");
        
        setScreenings(screeningResponse.data);
        setPembelis(pembeliResponse.data);
        setTransaksis(transaksiResponse.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const saveTicket = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/admin/ticket/post", {
        nomor_bangku: nomorBangku,
        harga: harga,
        ScreeningId: screeningId,
        PembeliId: pembeliId,
        TransaksiId: transaksiId
      });
      alert("Tiket berhasil ditambahkan");
      navigate("/ticket/list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-md">
        <form
          onSubmit={saveTicket}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
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
              min="0"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Studio (Screening)
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={screeningId}
              onChange={(e) => setScreeningId(e.target.value)}
            >
              <option value="">Pilih Studio</option>
              {screenings.map((screening) => (
                <option key={screening.id} value={screening.id}>
                  {screening.studio} - {screening.jadwal_pemutaran}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Pembeli
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={pembeliId}
              onChange={(e) => setPembeliId(e.target.value)}
            >
              <option value="">Pilih Pembeli</option>
              {pembelis.map((pembeli) => (
                <option key={pembeli.id} value={pembeli.id}>
                  {pembeli.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Metode Pembayaran (Transaksi)
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={transaksiId}
              onChange={(e) => setTransaksiId(e.target.value)}
            >
              <option value="">Pilih Transaksi</option>
              {transaksis.map((transaksi) => (
                <option key={transaksi.id} value={transaksi.id}>
                  {transaksi.metode_pembayaran}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TicketAdd;
