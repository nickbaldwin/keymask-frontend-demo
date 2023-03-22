import React, {useState} from 'react';
import {connect} from 'redux-bundler-react';

const Form: React.FC = () => {

    async function postData(url = "", data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }



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
        e.preventDefault();
        setEmail('');
        setSecret('');

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

export default connect(Form);