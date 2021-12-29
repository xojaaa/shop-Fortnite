import React from 'react';

function Header(props) {
    return (
        <header>
            <nav className="navbar navbar-expand-md">

                <a className="navbar-brand text-danger" href="https://fortniteapi.io/"><h4>Fortnite</h4> </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </header>
    );
}

export default Header;