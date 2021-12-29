import React, {useState} from 'react';

function From(props) {

    const [fisrt, setFisrt] = useState('')
    const [last, setLast] = useState('')
    const [text, setText] = useState('')
    const [select, setSelect] = useState('')
    const [chak, setChak] = useState(false)
    const [radio, setRadio] = useState('')


    function validate() {
        if (fisrt.length < 6) {
            alert('eroro')

        }
    }

    function validateEmail() {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(last)) {
            alert('email togri meas')
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
                                   className="form-control"
                                   id="exampleInputEmail1"
                                   aria-describedby="emailHelp"
                                   value={fisrt}
                                   onChange={e => setFisrt(e.target.value)}
                                   onBlur={validate}
                                   placeholder="firstname"/>
                            <p id='xato'></p>


                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="text"
                                   className="form-control"
                                   id="exampleInputEmail1"
                                   aria-describedby="emailHelp"
                                   value={last}
                                   onBlur={validateEmail}
                                   onChange={e => setLast(e.target.value)}
                                   placeholder="firstname"/>
                        </div>

                        <div className="form-group">
                            <textarea value={text} className='w-100' placeholder='text forma' onChange={e => setText(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <select className='w-100' onChange={e => setSelect(e.target.value)}>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                            </select>
                        </div>

                        <div className='form-group'>
                            <input type="checkbox"
                                   onChange={e => setChak(e.target.value)}
                                   className="form-check-input" />
                        </div>

                        <div className='form-group'>
                            <input type="radio"
                                   onChange={e => setRadio(e.target.value)}
                                   name="exampleRadios"
                                   value="Erkak"
                                   />Erkak
                            <input type="radio"
                                   value='Ayol'
                                   name="exampleRadios"
                                   onChange={e => setRadio(e.target.value)}
                            />Ayol
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>


        </>
    );
}

export default From;