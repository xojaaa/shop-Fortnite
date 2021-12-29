import React from 'react';

function Slect({defaultvalue, option, value, onChange}) {
    return (
        <select className='form-control mt-2 w-25 ml-auto'
                onChange={e => onChange(e.target.value)}
                value={value}
        >
            <option value="val" selected disabled>{defaultvalue}</option>
            {option.map(opt => (
                <option key={opt.value} value={opt.value}>
                    {opt.name}
                </option>
            ))}

        </select>
    );
}

export default Slect;