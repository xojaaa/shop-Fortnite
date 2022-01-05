import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getFillterCategory} from "../api";
import data from "bootstrap/js/src/dom/data";
import Loader from "./loader";
import MealsList from "./MealsList";


const Category = () => {
    const {name} = useParams()
    const [meals, setMeals] = useState([])


    useEffect(() => {
        getFillterCategory(name).then(data => setMeals(data.meals))
    }, [name])

    return (
        <>
            {!meals.length ? <Loader/> : <MealsList meals={meals}/>}
        </>
    );
};

export default Category;