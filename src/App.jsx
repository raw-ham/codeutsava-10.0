import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Landing from "./pages/Landing";
import { AudioProvider , useAudio} from "./components/audioplayer";



function App() {
  
  return (
    <BrowserRouter>
      <AudioProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AudioProvider>
    </BrowserRouter>
  );
}


export default App;