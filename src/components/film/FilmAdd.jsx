// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";


// const FilmAdd = () => {
//   const [title, setTitle] = useState("");
//   const [genre, setGenre] = useState("");
//   const [sutradara, setSutradara] = useState("");
//   const [description, setDescription] = useState("");
//   const [rating, setRating] = useState("");

//   const saveFilm = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:3001/admin/film/post", {
//         title,
//         genre,
//         sutradara,
//         description,
//         rating,
//       });
//       alert("Film berhasil ditambahkan");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="flex justify-center mt-10">
//       <div className="w-full max-w-md">
//         <form onSubmit={saveFilm} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
//             <input
//               type="text"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder="Title"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Genre</label>
//             <input
//               type="text"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={genre}
//               onChange={(e) => setGenre(e.target.value)}
//               placeholder="Genre"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Sutradara</label>
//             <input
//               type="text"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={sutradara}
//               onChange={(e) => setSutradara(e.target.value)}
//               placeholder="Sutradara"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
//             <textarea
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Description"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
//             <input
//               type="number"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={rating}
//               onChange={(e) => setRating(e.target.value)}
//               placeholder="Rating"
//               min="0"
//               max="10"
//             />
//           </div>
//           <div className="mb-4">
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-1"
//             >
//               Save
//             </button>
//             <button
//               type="button"

//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//                 <Link
//           to="/list" className="flex w-full"
        
//         >
//           back
//         </Link>
//             </button>
          
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// {/* <div className="container mx-auto mt-10">
// <div className="flex justify-between items-center mb-6">
//   <h1 className="text-2xl font-bold text-slate-50">Film List</h1>
//   <Link
//     to="/add"
//     className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//   >
//     Add New
//   </Link>
// </div>

// <div className="overflow-x-auto">
//   <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
//     <thead className="bg-gray-200">
//       <tr>
//         <th className="px-4 py-2 border">No</th>
//         <th className="px-4 py-2 border">Title</th>
//         <th className="px-4 py-2 border">Genre</th>
//         <th className="px-4 py-2 border">Sutradara</th>
//         <th className="px-4 py-2 border">Description</th>
//         <th className="px-4 py-2 border">Rating</th>
//         {/* <th className="px-4 py-2 border">Poster</th> */}
//         <th className="px-4 py-2 border">Actions</th>
//       </tr>
//     </thead>
//     <tbody>
//       {film.map((filmItem, index) => (
//         <tr key={filmItem.id} className="hover:bg-gray-100">
//           <td className="px-4 py-2 border text-center">{index + 1}</td>
//           <td className="px-4 py-2 border">{filmItem.title}</td>
//           <td className="px-4 py-2 border">{filmItem.genre}</td>
//           <td className="px-4 py-2 border">{filmItem.sutradara}</td>
//           <td className="px-4 py-2 border">{filmItem.description}</td>
//           <td className="px-4 py-2 border">{filmItem.rating}</td>
//           {/* <td className="px-4 py-2 border">{filmItem.image}</td> */}
//           <td className="px-4 py-2 border text-center">
//             <Link
//               to={`/edit/${filmItem.id}`}
//               className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
//             >
//               Edit
//             </Link>
//             <button
//               onClick={() => deleteFilm(filmItem.id)}
//               className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//             >
//               Delete
//             </button>
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>
// </div> */}

// export default FilmAdd;
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FilmAdd = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [sutradara, setSutradara] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState(""); // Field baru untuk URL poster

  const saveFilm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/admin/film/post", {
        title,
        genre,
        sutradara,
        description,
        rating,
        image, // Kirim URL poster
      });
      alert("Film berhasil ditambahkan");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-md">
        <form onSubmit={saveFilm} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Genre</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              placeholder="Genre"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Sutradara</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={sutradara}
              onChange={(e) => setSutradara(e.target.value)}
              placeholder="Sutradara"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder="Rating"
              min="0"
              max="10"
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

export default FilmAdd;
