import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const ScreeningEdit = () => {
  const [jadwalPemutaran, setJadwalPemutaran] = useState("");
  const [studio, setStudio] = useState("");
  const [bangkuTersedia, setBangkuTersedia] = useState(0);
  const [filmId, setFilmId] = useState("");
  const [films, setFilms] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getScreeningById();
    getFilms(); // Untuk mendapatkan daftar film
  }, []);

  const updateScreening = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/admin/screening/update/${id}`, {
        jadwal_pemutaran: jadwalPemutaran,
        studio,
        bangku_tersedia: bangkuTersedia,
        filmId,
      });
      navigate("/screening/list");
    } catch (error) {
      console.log(error);
    }
  };

  const getScreeningById = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/screening/find/${id}`);
      setJadwalPemutaran(response.data.jadwal_pemutaran);
      setStudio(response.data.studio);
      setBangkuTersedia(response.data.bangku_tersedia);
      setFilmId(response.data.filmId);
    } catch (error) {
      console.log(error);
    }
  };

  const getFilms = async () => {
    try {
      const response = await axios.get("http://localhost:3001/film");
      setFilms(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Edit Screening</h1>
        <form onSubmit={updateScreening}>
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
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nama Film
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={filmId}
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

          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update Screening
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              <Link to="/screening/list" className="flex w-full">
                back
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScreeningEdit;
