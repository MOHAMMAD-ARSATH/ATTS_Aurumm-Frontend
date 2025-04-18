import { BrowserRouter, Route, Routes } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import './App.css';

import Home from "./pages/Home";
import Contact from './pages/Contact';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;