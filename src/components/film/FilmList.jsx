
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link} from "react-router-dom";

const FilmList = () => {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    getFilms();
    //ifienfi
  }, []);

  const getFilms = async () => {
    try {
      const response = await axios.get("http://localhost:3001/film");
      setFilm(response.data);
    } catch (error) {
      console.error("Error fetching films:", error);
    }
  };

  const deleteFilm = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/admin/film/delete/${id}`);
      getFilms();
    } catch (error) {
      console.error("Error deleting film:", error);
    }
  };

  return (
    <div className="">
   
      <div className=" container mx-auto ">
        <div className="atas flex justify-between">
        <h1 className="text-2xl font-bold font-poppins text-white drop-shadow-lg">
  Film List
</h1>
          <Link
            to="/film/add"
            className="text-[#ffffff] font-bold outline-8 ring-4 ring-[#ccdbfd] bg-[#50E3F0] rounded-3xl p-2 px-5 hover:bg-[#6EE7F2] hover:ring-[#C5F6FA] 
          bg-gradient-to-t from-[#edf2fb] to-[#[#b6ccfe]b] 
          "
          >
            Add New
          </Link>
        </div>
       
        <div className="card">
          <div className="grid grid-cols-2 gap-4 mt-7 min-w-full">
          <div
                className="h-[35svh] bg-[#08527A] flex  flex-row min-w-full backdrop-blur-xl shadow-lg shadow-[#063751] bg-opacity-25 border-blue-300 border-4 hover:shadow-2xl hover:bg-opacity-50 transition-all duration-300 ease-in-out"
              >
                <div className="flex items-center ">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0057/3728/3618/files/Titanic.mpw.102378_500x749.jpg?v=1709331723"
                      className="max-w-[25%] ml-3 border-blue-300 border-4 bg-slate-400"
                      alt=""
                    />
                </div>
                <div className="flex items-center">
                <div className="text-white font-bold  ml-[-315px] text-[13px] leading-6">
                  <h1>Title : Titanic (dummy)</h1>
                  <h1>Genre : Romance</h1>
                  <h1>Sutradara : James Cameron</h1>
                  <h1>Sinopsis : lorem iipsum dolor sit amet</h1>
                  <h1>Rating : 0</h1>
                  <button  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 mr-3">

                  <Link
                    to={`/film/edit/1`}
                   
                  >
                    Edit
                  </Link>
                  </button>
                  <button
                      onClick={() => deleteFilm(1)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                </div>
                </div>
              </div>
            {film.map((o, i) => (
              <div
                className="h-[35svh] bg-[#08527A] flex  flex-row min-w-full backdrop-blur-xl shadow-lg shadow-[#063751] bg-opacity-25 border-blue-300 border-4 hover:shadow-2xl hover:bg-opacity-50 transition-all duration-300 ease-in-out"
                key={o.id}
              >
                <div className="flex items-center ">
                  {o.image ? (
                    <img
                      src={o.image}
                      className="max-w-[25%] ml-3 border-blue-300 border-4 bg-slate-400"
                      alt=""
                    />
                  ) : (
                    <span>No Image Available</span> // Atau kosongkan elemen ini jika tidak ingin menampilkan teks
                  )}
                </div>
                <div className="flex items-center">
                <div className="text-white font-bold  ml-[-315px] text-[13px] leading-6">
                  <h1 className="text-[#F8FCFF]"><span className="text-[#F8FCFF]">No :</span> {i+1}  ID : {o.id}</h1>
                  <h1>Title : {o.title}</h1>
                  <h1>Genre : {o.genre}</h1>
                  <h1>Sutradara : {o.sutradara}</h1>
                  <h1>Sinopsis : {o.description}</h1>
                  <h1>Rating : {o.rating}</h1>
                  <button  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 mr-3">

                  <Link
                    to={`/film/edit/${o.id}`}
                   
                  >
                    Edit
                  </Link>
                  </button>
                  <button
                      onClick={() => deleteFilm(o.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmList;
