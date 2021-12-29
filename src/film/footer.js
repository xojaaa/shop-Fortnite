import React from 'react';

function Footer(props) {
    return (
        <footer>
            <h6 className='pt-4 pl-4'>@{new Date().getFullYear()}-yil <span className='text-danger'>COM</span> </h6>
        </footer>
    );
}

export default Footer;