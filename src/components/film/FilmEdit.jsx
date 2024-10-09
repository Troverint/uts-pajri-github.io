import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const FilmEdit = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [sutradara, setSutradara] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getFilmById();
  }, []);

  const updateFilm = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/admin/film/update/${id}`, {
        title,
        genre,
        sutradara,
        description,
        image,
        rating,
      });
      navigate("/film/list");
    } catch (error) {
      console.log(error);
    }
  };

  const getFilmById = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/film/find/${id}`);
      setTitle(response.data.title);
      setGenre(response.data.genre);
      setSutradara(response.data.sutradara);
      setDescription(response.data.description);
      setImage(response.data.image);
      setRating(response.data.rating);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Edit Film</h1>
        <form onSubmit={updateFilm}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Film Title"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Genre
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              placeholder="Film Genre"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Sutradara
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={sutradara}
              onChange={(e) => setSutradara(e.target.value)}
              placeholder="Director"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Film Description"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Poster URL</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Poster URL"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Rating
            </label>
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder="Film Rating"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update Film
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              <Link to="/film/list" className="flex w-full">
                back
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilmEdit;
