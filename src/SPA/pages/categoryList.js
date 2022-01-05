import React from 'react';
import {Link} from "react-router-dom";

function CategoryList({catalog = []}) {

    return (
        <div className='container pt-2 pb-3'>
            <div className="row">
                <div className="coll">
                    {catalog.map(el => (
                        <div className="box1 border d-flex" key={el.idCategory}>
                            <img className="card-img-top" src={el.strCategoryThumb} alt={el.strCategory}/>
                            <div className="box2">
                                <h3><b>{el.strCategory}</b></h3>
                                <p className="card-text">{el.strCategoryDescription.slice(0, 100)}...</p>

                                <div>
                                    <Link to={`/category/${el.strCategory}`} class='btn btn-light'>Watch Categoy</Link>
                                </div>
                                <hr/>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default CategoryList;