import React from 'react';
import {connect} from 'redux-bundler-react';
import SecretsList from 'components/SecretsList';

const Home: React.FC = () => (
    <div>
        <p>Home Page</p>
        This is a simple demo of fetching/posting data from apis:
        <ul>
            <li>from a simple static api server - GET secrets </li>
            <li>to a simple mock api server - POST a secret </li>
            <li>todo -  to a simple static api server - POST a secret and get a response</li>
        </ul>
        <br />


        <SecretsList />

    </div>
);

export default connect(Home);
