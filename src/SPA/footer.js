import React from 'react';

function Footer(props) {
    return (
        <footer className='d-flex'>
            <div>
                <h6 className='pt-4 pl-4 text-light'>@{new Date().getFullYear()}-yil <span><b>TheMealDB</b></span>
                </h6>
                <p className='pl-4'><b>Proudly built in the</b> <img className='bg'
                    src="https://themealdb.com/images/icons/flags/big/16/gb.png" alt=""/></p>
            </div>
            <div className='pt-4 ml-auto mr-auto'>
                <a href="https://www.thecocktaildb.com/">
                    <img  src="https://www.themealdb.com/images/logo-tcdb.png" alt=""/>
                </a>

                <span>
                    <a href="https://www.theaudiodb.com/">
                          <img src="https://www.themealdb.com/images/logo-tadb.png" alt=""/>
                    </a>
                  
                </span>
                <span>
                    <a href="https://www.thesportsdb.com/">
                        <img src="https://www.themealdb.com/images/logo-tsdb.png" alt=""/>
                    </a>

                </span>
            </div>
        </footer>
    );
}

export default Footer;