import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const ScreeningAdd = () => {
  const [jadwalPemutaran, setJadwalPemutaran] = useState("");
  const [studio, setStudio] = useState("");
  const [bangkuTersedia, setBangkuTersedia] = useState("");
  const [FilmId, setFilmId] = useState(""); // Field untuk ID film
  const [films, setFilms] = useState([]); // State untuk menampung list film
  const navigate = useNavigate();

  // Mengambil data film saat komponen dirender
  useEffect(() => {
    const getFilms = async () => {
      try {
        const response = await axios.get("http://localhost:3001/film"); // Sesuaikan URL API untuk mengambil daftar film
        setFilms(response.data); // Simpan data film ke state
      } catch (error) {
        console.log(error);
      }
    };
    getFilms();
  }, []); // Hanya dijalankan saat komponen dirender pertama kali

  const saveScreening = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/admin/screening/post", {
        jadwal_pemutaran: jadwalPemutaran,
        studio,
        bangku_tersedia: bangkuTersedia,
        FilmId: FilmId, // Kirim ID film
      });
      alert("Screening berhasil ditambahkan");
      navigate("/screening/list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-md">
        <form
          onSubmit={saveScreening}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Jadwal Pemutaran
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={jadwalPemutaran}
              onChange={(e) => setJadwalPemutaran(e.target.value)}
              placeholder="Jadwal Pemutaran"
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
              Bangku Tersedia
            </label>
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={bangkuTersedia}
              onChange={(e) => setBangkuTersedia(e.target.value)}
              placeholder="Bangku Tersedia"
              min="0"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Film ID
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={FilmId}
              onChange={(e) => setFilmId(e.target.value)}
            >
              <option value="">Pilih Film</option>
              {films.map((film) => (
                <option key={film.id} value={film.id}>
                  {film.title}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-1"
            >
              Save
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              <Link to="/screening/list" className="flex w-full">
                Back
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScreeningAdd;
