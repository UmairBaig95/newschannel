// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';
import { Route, Routes } from 'react-router-dom';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Component } from 'react';
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  state =
  {
    progress : 0
  }
  setProgress = (progress)=>
  {
    this.setState({progress : progress})
  }
  render() {
  return (
   <>
   <Router>
   <Navbar/>
   <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
   <Routes>
        <Route exact path="/general" element={<News setProgress={this.setProgress}  apiKey={this.apiKey}   key="general" pageSize= {this.pageSize} countryName= "in" category= "general"/>} />
        <Route exact path="/business" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="business" pageSize= {this.pageSize} countryName= "in" category= "business"/>} />
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize= {this.pageSize} countryName= "in" category= "entertainment"/>} />
        <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize= {this.pageSize} countryName= "in" category= "health"/>} />
        <Route exact path="/science" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="science" pageSize= {this.pageSize} countryName= "in" category= "science"/>} />
        <Route exact path="/sports" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="sports" pageSize= {this.pageSize} countryName= "in" category= "sports"/>} />
        <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize= {this.pageSize} countryName= "in" category= "technology"/>} />
      </Routes>
   </Router>
   </>
  );
}
}


