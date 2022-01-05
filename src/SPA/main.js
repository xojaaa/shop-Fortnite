import React from 'react';
import {Route, Router, Switch} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contacts from "./pages/contacts";
import {Routes, Link} from "react-router-dom";
import NotFoutd from "./pages/NotFoutd";
import Category from "./pages/category";
import Resep from "./pages/Resep";


function Main() {
    return (
        <div className='main content container-fluid'>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contacts/>}/>
                <Route path="/category/:name" element={<Category/>}/>
                <Route path="/meal/:id"  element={<Resep/>}/>
                <Route path="*" element={<NotFoutd/>}/>
            </Routes>
        </div>


    );
}

export default Main;