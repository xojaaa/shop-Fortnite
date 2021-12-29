import React, {useEffect, useState} from 'react';
import {API_KEY, API_URL} from "./api";
import data from "bootstrap/js/src/dom/data";
import Lodear from "./Lodear";
import GoodList from "./GoodList";
import Card from "./Card";
import BasketList from "./BasketList";
import {toast} from "react-toastify";


function Main(props) {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isbasket, setBasket] = useState(false)


    function remuve(id) {
        const newOrder =order.filter(item => item.id !== id)
        setOrder(newOrder)
        toast.error('Muofaqatli O`chirildi')
    }

    function hendlarBasket()  {
        setBasket(!isbasket)
    }

    function addBasked(item) {
        const itemIndex = order.findIndex(ordetItem => ordetItem.id === item.id)

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else {
            const newOreder = order.map((ordetItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...ordetItem,
                        quantity:ordetItem.quantity + 1
                    }

                } else {
                    return item
                }
            })
            setOrder(newOreder)
        }
        toast.success('Muofaqatli qoshildi')

    }

    function increment(inc){
        const newOrder = order.map(el => {
            if (el.id === inc){
                const newQuntity = el.quantity +1
                return{
                    ...el,
                    quantity: newQuntity
                }
            }else {
                return el
            }
        })
        setOrder(newOrder)
    }
    function dicrement(inc){
        const newOrder = order.map(el => {
            if (el.id === inc){
                const newQuntity = el.quantity - 1
                return{
                    ...el,
                    quantity: newQuntity >= 0 ? newQuntity : 0
                }
            }else {
                return el
            }
        })
        setOrder(newOrder)
    }
    
    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            }
        })
            .then((response) => response.json())
            .then((data) => {
                data.featured && setGoods(data.featured);
                setLoading(false);
            })
    }, [])


    return (
        <div className='container-fluid main'>

            <Card quantity={order.length} hendlarBasket={hendlarBasket} />
            {loading ? <Lodear/> : <GoodList goods={goods} addBasked={addBasked} />}
            {isbasket && <BasketList
                increment={increment}
                dicrement={dicrement}
                remuve={remuve}
                order={order}
                hendlarBasket={hendlarBasket} />}

        </div>
    );
}

export default Main;