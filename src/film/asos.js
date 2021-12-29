import React from 'react';
import Header from "./header";
import '../film/main.css'
import Footer from "./footer";
import Main from "./main";
import Lodear from "./Lodear";
import 'react-toastify/dist/ReactToastify.min.css'
import {ToastContainer} from "react-toastify";

function Asos(props) {
    return (
        <>
            <ToastContainer/>
            <Header/>
            <Main/>
            <Footer/>

        </>
    );
}

export default Asos;