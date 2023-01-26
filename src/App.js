// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import React, {useState } from "react";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

 const App =()=> {
  // apikey=process.env.REACT_APP_NEWS_API;
  const apiKey ="3d3fd0ad6eec41a3abc4fd9dbf5b15cf";
 
  const[progress,setProgress]=useState(0);
 

    return (
      <BrowserRouter>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="Home"
                pageSize={6}
                country="in"
                category="General"
              />
            }
          />
          <Route
            path="/General"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="General"
                pageSize={6}
                country="in"
                category="General"
              />
            }
          />
          <Route
            path="/Sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="Sports"
                pageSize={6}
                country="in"
                category="Sports"
              />
            }
          />
          <Route
            path="/Entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="Entertainment"
                pageSize={6}
                country="in"
                category="Entertainment"
              />
            }
          />
          <Route
            path="/Health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="Health"
                pageSize={6}
                country="in"
                category="Health"
              />
            }
          />
          <Route
            path="/Technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="Technology"
                pageSize={6}
                country="in"
                category="Technology"
              />
            }
          />
          <Route
            path="/Business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="Business"
                pageSize={6}
                country="in"
                category="Business"
              />
            }
          />
          <Route
            path="/Science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="Science"
                pageSize={6}
                country="in"
                category="Science"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  
}
export default App;