import React from 'react';
import {Link} from "react-router-dom";

function MealsList({meals}) {
    return (
        <div className='container'>
            <div className="row">

                {meals.map(meal => (
                    <div className="bet border" key={meal.idCategory}>
                        <img className="card-img-top" src={meal.strMealThumb} alt={meal.strMeal}/>
                        <div className="box2">
                            <b>{meal.strMeal}</b>
                            <hr/>
                            <div className='buton'>
                                <Link to={`/meal/${meal.idMeal}`} class='btn btn-primary'><b>Watch Retsep</b></Link>
                            </div>
                            <hr/>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    );
}

export default MealsList;