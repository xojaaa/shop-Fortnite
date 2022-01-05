import React, {useState} from 'react';

function Search({cb = Function.prototype}) {
    const [value, setValue] = useState("")

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            heandleSubmit()
        }
    }

    const heandleSubmit = () => {
        cb(value)
    }

    return (
        <div className='row mt-3'>
            <div className="container">
                <div className='col-md-12'>

                    <div className="input-group mb-3">
                        <input
                            type="search"
                            className="form-control"
                            placeholder='Search...'
                            onKeyDown={handleKey}
                            onChange={(e) => setValue(e.target.value)}
                            value={value}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-success"
                                    onClick={heandleSubmit}
                            >Search
                            </button>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
}

export default Search;