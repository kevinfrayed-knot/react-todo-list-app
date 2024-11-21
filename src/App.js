

//import logo from './logo.svg';
import './App.css';
import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

/*begin React App*/
function App() {
  return (  
    <>
    <HashRouter>            
      <NavBar/>  
      <Routes>       
        <Route path="/" element={<Home/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/about" element={<About/>}/>      
      </Routes>
    </HashRouter> 
    <Footer title="© 2024 Frayed Knot, LLC"/>
    </> 
  );
}
export default App 