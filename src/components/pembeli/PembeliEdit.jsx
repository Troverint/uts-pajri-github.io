import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams,Link } from "react-router-dom";

const PembeliEdit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getPembeliById();
  }, []);

  const updatePembeli = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/admin/pembeli/update/${id}`, {
        name,
        email,
        password,
      });
      navigate("/pembeli/list");
    } catch (error) {
      console.log(error);
    }
  };

  const getPembeliById = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/pembeli/find/${id}`);
      setName(response.data.name);
      setEmail(response.data.email);
      setPassword(response.data.password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Edit Pembeli</h1>
        <form onSubmit={updatePembeli}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update Pembeli
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              <Link to="/pembeli/list" className="flex w-full">
                back
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PembeliEdit;
