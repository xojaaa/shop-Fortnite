import React from 'react';

function Button({children, ...props}) {
    return (
        <>
<button {...props} className='btn w-100 btn-info mt-2'>
    {children}
</button>
        </>
    );
}

export default Button;