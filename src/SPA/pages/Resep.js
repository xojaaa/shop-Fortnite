import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {getMeatById} from "../api";
import data from "bootstrap/js/src/dom/data";
import Loader from "./loader";

const Resep = () => {
    const {id} = useParams()
    const [retsep, setRetsep] = useState([])
    const [showRetsep, setShowRetsep] = useState(false)

    useEffect(() => {
        getMeatById(id).then(data => setRetsep(data.meals[0]))
    }, [])


    const heandleShowRetsep = () => {
      setShowRetsep(!showRetsep)
    }

    return (
        <div className='container'>
            <hr/>
            <h1 className='text-center text-info'><b>
                On this dish <span className='text-danger'>Retsep</span></b></h1>
            <hr/>
            {!retsep.idMeal ? <Loader/> : (
                <div className='d-lg-flex d-md-block'>
                    <div className='foto'>
                        <img className="card-img-top" src={retsep.strMealThumb} alt={retsep.strMeal}/>
                    </div>

                    <div className='text m-3'>
                        <h3 className='text-center'>{retsep.strMeal}</h3>
                        <h5>Qaysi Toifa: <span  className='text-danger'>{retsep.strCategory}</span></h5>
                        {retsep.strArea ? <h6>Davlat: <span className='text-danger'>{retsep.strArea}</span></h6> : null}
                        <p>{retsep.strInstructions}</p>

                    </div>

                </div>
            )}
            <button className='btn btn-primary mb-2' onClick={heandleShowRetsep}>Show Retsep</button>
            {showRetsep ? (
                <div className="col">
                    <table className="table table-hover border">
                        <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(retsep).map(key => {
                            if (key.includes('Ingredient') && retsep[key]){
                                return(
                                    <tr>
                                        <td> {retsep[key]}</td>
                                        <td>{retsep[`strMeasure${key.slice(13)}`]}</td>
                                    </tr>
                                )
                            }
                        })}
                        </tbody>
                    </table>
                </div>
            ): null}

        </div>
    );
};

export default Resep;