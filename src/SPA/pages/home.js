import React from 'react';
import {useState, useEffect} from "react";
import {getAllCategories} from "../api";
import Loader from "./loader";
import CategoryList from "./categoryList";
import Search from "./search";
import {useLocation} from "react-router-dom";

const Home = () => {

    const [catalog, setCatalog] = useState([])
    const [filteredCatalog, setFilteredCatalog] = useState([])


    const handleSearch = (str) => {
      setFilteredCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())))
    }

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories)
            setFilteredCatalog(data.categories)
        })
    }, [])

    return (
        <>
            <hr className='border'/>
            {!catalog.length ? (
                <Loader/>
            ):(
                <CategoryList catalog={filteredCatalog} />
            )}
        </>
    );
};

export default Home;