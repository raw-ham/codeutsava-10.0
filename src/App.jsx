import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import { AudioProvider , useAudio} from "./components/audioplayer";



function App() {
  
  return (
    <BrowserRouter>
      <AudioProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<Home />} />
        </Routes>
      </AudioProvider>
    </BrowserRouter>
  );
}


export default App;