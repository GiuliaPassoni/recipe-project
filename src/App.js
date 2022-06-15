import './styling/app.module.scss';
import React from "react";
import Navbar from './components/Navbar';
import About from './components/About';
import FilterPage from "./components/FilterPage";
import Products from "./components/Products";
import Contact from "./components/Contact";
import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Navbar />
            <div className='app-container'>
                <Routes>
                   <Route path='/' element={<About/>} />
                    <Route path='/recipes' element={<FilterPage/>} />
                    <Route path='/products' element={<Products/>} />
                    <Route path='/contact' element={<Contact/>} />
                </Routes>
                <Footer/>
            </div>
        </>
    )
}

export default App;
