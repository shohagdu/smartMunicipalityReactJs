import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import Citizen from "./application/Citizen";
import Warish from "./application/Warish";
function App() {
  return (
    <>
    <BrowserRouter>
        <Layouts>
          <Routes>
              <Route path="/" element={<Home /> } />
              <Route path="citizen" element={<Citizen /> } />
              <Route path="warish" element={<Warish /> } />
          </Routes>
        </Layouts>
      </BrowserRouter>
    </>
  );
}

export default App;
