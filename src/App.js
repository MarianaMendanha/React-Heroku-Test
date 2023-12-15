// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import MainContent from './components/MainContent/MainContent';
import HomePage from './pages/HomePage/HomePage'
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import './App.css'; // Adicione seu próprio CSS
import 'typeface-nunito';


function App() {
    return (
        <div className="app">
            <div className='screen-all'>
                
                <SideBar />
                
                <div className="container" >
                    <NavBar />
                    <MainContent />
                    <ScrollToTopButton />
                    <Footer />

                    {/* <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="/contas-de-agua" element={<HomePage />} />
                    </Routes> */}
                </div>
                
                
            </div>           
        </div>
    );
}

export default App;