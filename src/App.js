import './App.css';
import Dashboard from './Components/Dashboard';
import Contact from './Components/Contact';
import Services from './Components/Services';
import About from './Components/about';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Dashboard />} />
          <Route path="/about" element={<About Us />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
