import React from 'react';

function GoodItem(props) {
    const {id, name, description, price, full_background, addBasked} = props
    return (
        <>
            <div className="card" id={id}>
                <img className="card-img-top" src={full_background} alt={name}/>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text w-100">{description}</p>
                    <button onClick={() => addBasked({id, name, price})}
                        className='btn buy btn-primary'>Buy
                    <span> {price} $</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default GoodItem;