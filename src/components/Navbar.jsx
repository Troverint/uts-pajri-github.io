// // import React from "react";
// // import { Link } from "react-router-dom";
// // const Navbar = () => {
// //   return (
// //     <div>
// //       <div className="wrapper max-w-[10vw] bg-blue-500 flex h-[100vh] flex-col">
// //         <div className="logo"></div>
// //         <h1 className="text-3xl font-bold text-center uppercase text-slate-50 font-poppins">ticketing</h1>
// //       <div className="justify-center items-center w-full -ml-[150px]">
// //         <ul className="list-none w-100vw flex gap-12 justify-center items-center text-center mx-auto font-bold text-xl text-slate-50">
// //             <Link to="/list">film</Link>
// //             <Link to="/list">screening</Link>
// //             <Link to="/list">ticket</Link>
// //         </ul>
// //       </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;
// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="flex flex-row h-screen bg-blue-500 w-[10vh]">
//       <div className="w-1/4 p-4">
//         <h1 className="text-3xl font-bold text-center uppercase text-slate-50 font-poppins"><Link to="/">TICKETING</Link></h1>
//         <ul className="list-none mt-6 flex flex-col space-y-4">
//           <li>
//             <Link to="/list" className="text-slate-50 hover:underline">Film</Link>
//           </li>
//           <li>
//             <Link to="/screening" className="text-slate-50 hover:underline">Screening</Link>
//           </li>
//           <li>
//             <Link to="/ticket" className="text-slate-50 hover:underline">Ticket</Link>
//           </li>
//         </ul>
//       </div>

//     </div>
//   );
// };

// export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// const Navbar = () => {
//   const Navbar = ({ data }) => {
//     const navigate = useNavigate();

//     const handleNavigationn = (path) => {
//       navigate(path);
//     };
//   };
//   return (
//     <div className="fixed top-0 left-0 flex flex-col h-[100svh] w-[250px] bg-[#b76935] p-4">
//       <h1 className="text-3xl font-bold uppercase text-slate-50 font-poppins">
//         <Link to="/">TICKETING</Link>
//       </h1>
//       <ul className="list-none mt-6 flex flex-col space-y-4 font-bold text-xl">
//       <li className="group hover:bg-white hover:rounded-lg p-2">
//           <Link
//             to="/list"
//             className="text-slate-50 hover:underline group-hover:text-[#b76935]"
//           >
//             Film
//           </Link>
//           <button
//             onClick={({data}) => handleNavigationn("/list")}
//             className="mt-2 text-slate-50 hover:underline group-hover:text-[#b76935] bg-transparent border-none cursor-pointer"
//           >
//             film
//           </button>
//         </li>
//         <li>
//           <Link to="/screening" className="text-slate-50 hover:underline">
//             Screening
//           </Link>
//         </li>
//         <li>
//           <Link to="/ticket" className="text-slate-50 hover:underline">
//             Ticket
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
import React from "react";
import { Link, useLocation,useParams } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const { id } = useParams();

  return (
    <div className="fixed top-0 left-0 flex flex-col h-[100svh] w-[250px] bg-[#edf2fb] p-4">
      <h1 className="text-3xl font-bold uppercase text-[#0E89CB] font-poppins ">
        <Link to="/" >TICKETING</Link>
      </h1>
      <ul className="list-none mt-6 flex flex-col space-y-4 font-bold text-xl ">
        <li
          className={`group hover:bg-[#15A3EF] hover:rounded-lg p-2  ${
            location.pathname === "/film/list" ||
            location.pathname === "/film/add" ||
            location.pathname === "/screening/edit"
              ? " bg-[#15A3EF] w-full  rounded-lg "
              : ""
          }`}
        >
          <Link
            to="/film/list"
            className={`flex w-full  ${
              location.pathname === "/film/list" ||
              location.pathname === "/film/add" ? "!text-[#F8FCFF]" : ""
            } text-[#0E89CB] hover:underline group-hover:text-[#F8FCFF] `}
          >
            Film
          </Link>
        </li>
        <li
           className={`group hover:bg-[#15A3EF] hover:rounded-lg p-2  ${
            location.pathname === "/screening/list" ||
            location.pathname === "/screening/add" || 
            (location.pathname.startsWith("/screening/edit/") && id) 
              ? " bg-[#15A3EF] w-full  rounded-lg "
              : ""
          }`}
        >
          <Link
            to="/screening/list"
            className={`flex w-full  ${
              location.pathname === "/screening/list" ||
              location.pathname === "/screening/add" || 
              (location.pathname.startsWith("/screening/edit") && id) ? "!text-[#F8FCFF]" : ""
            } text-[#0E89CB] hover:underline group-hover:text-[#F8FCFF] `}
          >
            Screening
          </Link>
        </li>
        <li
           className={`group hover:bg-[#15A3EF] hover:rounded-lg p-2  ${
            location.pathname === "/pembeli/list" ||
            location.pathname === "/pembeli/add"
              ? " bg-[#15A3EF] w-full  rounded-lg "
              : ""
          }`}
        >
          <Link
            to="/pembeli/list"
            className={`flex w-full  ${
              location.pathname === "/pembeli/list" ||
              location.pathname === "/pembeli/add" ? "!text-[#F8FCFF]" : ""
            } text-[#0E89CB] hover:underline group-hover:text-[#F8FCFF] `}
          >
            Pembeli
          </Link>
        </li>
        <li
         className={`group hover:bg-[#15A3EF] hover:rounded-lg p-2  ${
          location.pathname === "/transaksi/list"
          ||
            location.pathname === "/transaksi/add"
            ? " bg-[#15A3EF] w-full  rounded-lg "
            : ""
        }`}
        >
          <Link
            to="/transaksi/list"
            className={`flex w-full  ${
              location.pathname === "/transaksi/list" ||
              location.pathname === "/transaksi/add"? "!text-[#F8FCFF]" : ""
            } text-[#0E89CB] hover:underline group-hover:text-[#F8FCFF] `}
          >
            Transaksi
          </Link>
        </li>
        <li
         className={`group hover:bg-[#15A3EF] hover:rounded-lg p-2  ${
          location.pathname === "/ticket/list" ||
            location.pathname === "/ticket/add"
            ? " bg-[#15A3EF] w-full  rounded-lg "
            : ""
        }`}
        >
          <Link
            to="/ticket/list"
            className={`flex w-full  ${
              location.pathname === "/ticket/list" ? "!text-[#F8FCFF]" : ""
            } text-[#0E89CB] hover:underline group-hover:text-[#F8FCFF] `}
          >
            Ticket
          </Link>
        </li>
       
      </ul>
    </div>
  );
};

export default Navbar;
