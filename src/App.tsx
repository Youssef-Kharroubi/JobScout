import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";


function App() {
    return(
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/statistics" element={<Statistics/>}/>
        </Routes>
    </Router>
    );
}

export default App;
