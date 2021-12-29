import React, {useState} from 'react';





function Form2() {
    const [input, setInup] = useState('')
    const [chank, setChak] = useState(false)






    function into(){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(input)){
            alert('Email xarolika duch keldi togri keriting')
        }else {
            alert('Email togri terildi')
        }
    }

    return (
        <>
            <div className="container">
                <div className="col-md-4 offset-3 mt-5">
                    <h1>Form</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="text"
                                   value={input}
                                   onChange={e => setInup(e.target.value)}
                                   className="form-control"
                                   onBlur={into}
                                   placeholder="firstname"/>
                        </div>

                        <div className='form-group'>
                            <input type="checkbox"

                                   onChange={e => setChak(e.target.checked)}
                                   className="form-check-input" />
                        </div>

                        <button type="submit"  className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Form2;