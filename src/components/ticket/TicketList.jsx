import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getTickets();
  }, []);

  const getTickets = async () => {
    const response = await axios.get("http://localhost:3001/ticket");
    setTickets(response.data);
  };

  const deleteTicket = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/admin/tickets/delete/${id}`);
      getTickets();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#F8FCFF]">Ticket List</h1>
        <button
          onClick={() => alert("Navigate to Add Ticket page")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
            <Link to="/ticket/add">Add New</Link>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#08527A] backdrop-blur-lg bg-opacity-30 border-gray-300 rounded-lg shadow-xl border-2 text-[#F8FCFF] font-bold">
          <thead className="bg-gray-200 backdrop-blur-sm bg-opacity-50">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">Nomor Bangku</th>
              <th className="px-4 py-2 border">Harga</th>
              <th className="px-4 py-2 border">Studio</th>
              <th className="px-4 py-2 border">Pembeli </th>
              <th className="px-4 py-2 border">Metode Pembayataran</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr
                key={ticket.id}
                className="backdrop-blur-sm bg-opacity-50 hover:backdrop-blur-none hover:bg-opacity-100"
              >
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{ticket.nomor_bangku}</td>
                <td className="px-4 py-2 border">{ticket.harga}</td>
                <td className="px-4 py-2 border">{ticket.Screening.studio}</td>
                <td className="px-4 py-2 border">{ticket.Pembeli.name}</td>
                <td className="px-4 py-2 border">{ticket.Transaksi.metode_pembayaran}</td>
                <td className="px-4 py-2 border text-center">
                  <button
                    onClick={() => alert(`Edit ticket with ID: ${ticket.id}`)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTicket(ticket.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketList;
