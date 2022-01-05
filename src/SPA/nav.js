import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Search from "./pages/search";
import burger from './burger.png'
function Nav(props) {




    return (
        <>

            <nav className="navbar navbar-expand-md  ">

                <a className="navbar-brand" href="/">
                    <img src="https://themealdb.com/images/logo-small.png" alt="logo"/>
                </a>

                <button className="navbar-toggler"  type="button" data-toggle="collapse"
                        data-target="#collapsibleNavbar">

                    <img src={burger} alt=""/>

                </button>


                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <div className='w-100 d-flex justify-content-lg-end'>
                        <ul className="navbar-nav">
                            <li className="nav-item pt-3">
                                <a className="nav-link text-light" href="https://www.themealdb.com/"><b>About</b></a>
                            </li>
                            <li className="nav-item pt-3">
                                <Link className="nav-link text-light" to="sdsd"><b>Contact</b></Link>
                            </li>
                            <li className="nav-item">
                                <Search/>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </>
    );
}

export default Nav;