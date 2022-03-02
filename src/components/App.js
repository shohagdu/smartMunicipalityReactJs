import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import Citizen from "./application/Citizen";
import Warish from "./application/Warish";
import TradeLicense from "./application/tradelicense/TradeLicense";

function App() {
  return (
    <>
    <BrowserRouter>
        <Layouts>
          <Routes>
              <Route path="/" element={<Home /> } />
              <Route path="citizen" element={<Citizen /> } />
              <Route path="warish" element={<Warish /> } />
              <Route path="tradelicense" element={<TradeLicense /> } />
             
          </Routes>
        </Layouts>
      </BrowserRouter>
    </>
  );
}

export default App;
