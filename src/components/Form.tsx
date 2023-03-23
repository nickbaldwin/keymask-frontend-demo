import React, {useState} from 'react';
import {connect} from 'redux-bundler-react';
import {postData} from '../api/fetch';

const Form = ({doPostSecret}) => {

    const [email, setEmail] = useState('');
    const [secret, setSecret] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e, field: string) => {
        console.log("new value", e.target.value);
        if (field === 'email') {
            setEmail(e.target.value);
        }
        if (field === 'secret') {
            setSecret(e.target.value);
        }
    }
    const handleSubmit = (e) => {
        console.log(typeof e);
        e.preventDefault();
        setEmail('');
        setSecret('');

        // todo - still need to get toy server to accept post
        doPostSecret();

        // in meantime, can post to mock server
        postData("https://m128e.wiremockapi.cloud/addsecret", { answer: 42 }).then((data) => {
            setMessage(data.message);
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Enter a secret and a recipient</p>
            <label htmlFor="email" >email</label>
            <input id="email"
                   type="text"
                   value={email}
                   onChange={(e)=>{handleChange(e,'email')}}
            />
            <br />
            <label htmlFor="secret" >secret</label>
            <input id="secret"
                   type="text"
                   value={secret}
                   onChange={(e)=>{handleChange(e,'secret')}}
            />
            <br />
            <input type="submit" value="Submit"/>
            <br />
            {message}
        </form>
    );
};

export default connect(
    'doPostSecret',
    Form
);