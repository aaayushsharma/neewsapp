// import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
const App=()=>{
  const pagesize=5;
  const apiKey=process.env.REACT_APP_NEWS_API;  
 
  const [progress,setProgress]=useState(0);

    return (
      <div>
        
        {/* <News pagesize={pagesize} country="us" category="science"/> */}
        <Router>  
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      
      />
        <Routes>
            <Route path='/' element={<News  setProgress={setProgress} apiKey={apiKey} key='general' pagesize={pagesize} country='us' category='general' />}></Route>
            <Route path='/business' element={<News  setProgress={setProgress} apiKey={apiKey} key='business' pagesize={pagesize} country='us' category='business' />}></Route>
            <Route path='/entertainment' element={<News  setProgress={setProgress} apiKey={apiKey} key='entertainment' pagesize={pagesize} country='us' category='entertainment' />}></Route>
            <Route path='/health' element={<News  setProgress={setProgress} apiKey={apiKey} key='health' pagesize={pagesize} country='us' category='health' />}></Route>
            <Route path='/science' element={<News  setProgress={setProgress} apiKey={apiKey} key='science' pagesize={pagesize} country='us' category='science' />}></Route>
            <Route path='/sports' element={<News  setProgress={setProgress} apiKey={apiKey} key='sports' pagesize={pagesize} country='us' category='sports' />}></Route>
            <Route path='/technology' element={<News  setProgress={setProgress} apiKey={apiKey} key='technology' pagesize={pagesize} country='us' category='technology' />}></Route>
            </Routes>
            </Router>
      </div>
    )
  
}
 

 export default App;