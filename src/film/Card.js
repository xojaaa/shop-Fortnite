import React from 'react';
import foto from './savat.png'

function Card(props) {
    const {quantity = 0, hendlarBasket = Function.prototype} = props
    return (

        <div className="container kz" onClick={hendlarBasket}>
                  <span>
                <img src={foto} width={40} alt=""/>
            </span>
            <span>
                {quantity ? <b className='text-danger'>{quantity}</b> : null}
            </span>

        </div>


    );
}

export default Card;