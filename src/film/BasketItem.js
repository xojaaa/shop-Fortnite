import React from 'react';

function BasketItem(props) {
    const {id, name, price,quantity, increment, dicrement}=props
    return (
        <>
            <li className="list-group-item collapse d-flex justify-content-between">
                <div>
                    <span>{name} x{quantity}= <span className='bg-primary'>{price * quantity}</span></span>
                    <span className='bg-danger'>
                    <i>$</i>
                </span>
                </div>
                <div className="btn-group">
                <button className='btn btn-dark' onClick={() => increment(id)}>add</button>
                <button className='btn btn-primary' onClick={() => dicrement(id)}>remuve</button>
                <button className='btn btn-outline-danger' onClick={() => props.remuve(id) }>Delate</button>
                </div>
            </li>

        </>
    );
}

export default BasketItem;