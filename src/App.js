import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Hire from './pages/Hire';
import Company from './pages/Company';
import Contact from './pages/Contact';




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
