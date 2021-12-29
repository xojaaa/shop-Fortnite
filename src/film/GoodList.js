import React from 'react';
import GoodItem from "./GoodItem";
import err from './eror.jpg'


function GoodList(props) {
    const {goods = [], addBasked } = props

    if (!goods.length){
        return <img src={err} height={400} alt=""/>
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {goods.map(item => (
                        <div className='col-lg-3 col-md-6 col-sm-12 mt-4'>
                            <GoodItem key={item.id} {...item} addBasked={addBasked} />
                        </div>

                    ))}
                </div>

            </div>

        </div>
    );
}

export default GoodList;