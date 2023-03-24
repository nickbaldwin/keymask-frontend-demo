import {connect} from 'redux-bundler-react';
import React from 'react';
import Form from "components/Form";
import SecretsList from 'components/SecretsList';

const Secrets = () => {

    return (
        <div>
            <h1>Secrets</h1>

            <h2>Add a new secret</h2>
            <Form />

            <h2>Stored secrets</h2>
            <SecretsList />
        </div>
    );
};

export default connect(
    Secrets
);
