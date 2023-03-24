import React, {useState} from 'react';
import {connect} from 'redux-bundler-react';

const Form = ({doPostSecret}) => {

    const [name, setName] = useState('');
    const [value, setValue] = useState('');

    const handleChange = (e, field: string) => {
        console.log("new value", e.target.value);
        if (field === 'name') {
            setName(e.target.value);
        }
        if (field === 'value') {
            setValue(e.target.value);
        }
    }
    const handleSubmit = (e) => {
        console.log(typeof e);
        e.preventDefault();
        setName('');
        setValue('');
        doPostSecret({name, value});
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Enter a secret and a recipient</p>
            <label htmlFor="name" >email</label>
            <input id="name"
                   type="text"
                   value={name}
                   onChange={(e)=>{handleChange(e,'name')}}
            />
            <br />
            <label htmlFor="value" >secret</label>
            <input id="value"
                   type="text"
                   value={value}
                   onChange={(e)=>{handleChange(e,'value')}}
            />
            <br />
            <input type="submit" value="Submit"/>
            <br />
        </form>
    );
};

export default connect(
    'doPostSecret',
    Form
);