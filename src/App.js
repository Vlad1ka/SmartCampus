import Header from "./components/Header/Header";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Footer from "./components/Footer/Footer";
import Life from "./pages/Life";
import Science from "./pages/Science";
import Applicants from "./pages/Applicants";
import Students from "./pages/Students";
import Cooperation from "./pages/Сooperation";
import Library from "./pages/Library";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/life" element={<Life/>}/>
        <Route path="/science" element={<Science/>}/>
        <Route path="/applicants" element={<Applicants/>}/>
        <Route path="/students" element={<Students/>}/>
        <Route path="/cooperation" element={<Cooperation/>}/>
        <Route path="/library" element={<Library/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/events" element={<Events/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;