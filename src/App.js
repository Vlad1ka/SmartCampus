import Header from "./components/Header/Header";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <Header/>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/education" element={<Education/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;