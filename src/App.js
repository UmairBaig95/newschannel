// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';
import { Route, Routes } from 'react-router-dom';
import {
  BrowserRouter as Router,
} from "react-router-dom";
function App(props) {
  return (
   <>
   <Router>
   <Navbar/>
   <Routes>
        <Route exact path="/general" element={<News key="general" pageSize= {5} countryName= "in" category= "general"/>} />
        <Route exact path="/business" element={<News key="business" pageSize= {5} countryName= "in" category= "business"/>} />
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize= {20} countryName= "in" category= "entertainment"/>} />
        <Route exact path="/health" element={<News key="health" pageSize= {5} countryName= "in" category= "health"/>} />
        <Route exact path="/science" element={<News key="science" pageSize= {5} countryName= "in" category= "science"/>} />
        <Route exact path="/sports" element={<News key="sports" pageSize= {5} countryName= "in" category= "sports"/>} />
        <Route exact path="/technology" element={<News key="technology" pageSize= {5} countryName= "in" category= "technology"/>} />
      </Routes>
   </Router>
   </>
  );
}

export default App;
