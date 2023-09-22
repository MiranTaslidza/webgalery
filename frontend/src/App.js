import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import Video from './pages/video/Video'
import Header from "./components/header/Header";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/video" element={<Video />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
