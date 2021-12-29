import React from 'react';
import BasketItem from "./BasketItem";

function BasketList(props) {
    const {order, increment, dicrement} = props

    const  totalPrice = order.reduce((sum, el) => {
            return sum + el.price * el.quantity
    }, 0)

    return (
        <div className='container basket'>
            <div className="col-md-7 offset-3">
                <ul className="list-group  ">
                    <li className="list-group-item d-flex justify-content-between bg-primary">
                        <span>Basket</span> <b className='xmen' onClick={props.hendlarBasket}>X</b>
                    </li>
                    {order.length ? order.map(item => {
                        return(
                            <BasketItem
                                increment={increment}
                                dicrement={dicrement}
                            remuve={props.remuve}
                                key={item.id}
                                {...item}/>
                        )
                    }): <li className="list-group-item">Basket is epty</li>}
                    <li className="list-group-item bg-primary">Total Cost: {totalPrice} <b>$</b> </li>

                </ul>
            </div>

        </div>
    );
}

export default BasketList;