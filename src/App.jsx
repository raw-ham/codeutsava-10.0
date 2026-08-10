import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Landing from "./pages/Landing";

function App() {
  
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;