// import {BrowserRouter, Routes, Route} from "react-router-dom";

// import FilmList from "./components/film/FilmList";
// import FilmAdd from "./components/film/FilmAdd";
// import Navbar from "./components/Navbar";
// import "./App.css"
// import FilmEdit from "./components/film/FilmEdit";
// function App() {
  
//   return (
//     <BrowserRouter className="flex-row">
//     <Navbar/>
//     <Routes >
//       <Route path="/" element={<Navbar/>}/>
//       <Route path="/list" element={<FilmList/>}/>
//       <Route path="/add" element={<FilmAdd/>}/> 
//       <Route path="/edit/:id" element={<FilmEdit/>}/> 
//     </Routes>
//   </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilmList from "./components/film/FilmList";
import FilmAdd from "./components/film/FilmAdd";
import Navbar from "./components/Navbar";
import "./App.css";
import FilmEdit from "./components/film/FilmEdit";
import ScreeningList from "./components/screening/ScreeningList";
import PembeliList from "./components/pembeli/PembeliList";
import TransaksiList from "./components/transaksi/TransaksiList";
import TicketList from "./components/ticket/TicketList";
import ScreeningAdd from "./components/screening/ScreeningAdd";
import ScreeningEdit from "./components/screening/ScreeningEdit";
import PembeliAdd from "./components/pembeli/PembeliAdd";
import PembeliEdit from "./components/pembeli/PembeliEdit";
import TransaksiAdd from "./components/transaksi/TransaksiAdd";
import TransaksiEdit from "./components/transaksi/TransaksiEdit";
import TicketAdd from "./components/ticket/TicketAdd";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Navbar />
        <div className="flex-grow ml-[250px] p-6">
          <Routes>
            <Route path="/" element={<FilmList />} />
            <Route path="/film/list" element={<FilmList />} />
            <Route path="/film/add" element={<FilmAdd />} />
            <Route path="/film/edit/:id" element={<FilmEdit />} />
            <Route path="/screening/list" element={<ScreeningList />} />
            <Route path="/screening/add" element={<ScreeningAdd/>} />
            <Route path="/screening/edit/:id" element={<ScreeningEdit />} />
            <Route path="/pembeli/list" element={<PembeliList />} />
            <Route path="/pembeli/add" element={<PembeliAdd />} />
            <Route path="/pembeli/edit/:id" element={<PembeliEdit />} />
            <Route path="/transaksi/list" element={<TransaksiList />} />
            <Route path="/transaksi/add" element={<TransaksiAdd />} />
            <Route path="/transaksi/edit/:id" element={<TransaksiEdit />} />
            <Route path="/ticket/list" element={<TicketList />} />
            <Route path="/ticket/add" element={<TicketAdd />} />
            {/* <Route path="/screening/add" element={<FilmAdd />} />
            <Route path="/screening/edit/:id" element={<FilmEdit />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

