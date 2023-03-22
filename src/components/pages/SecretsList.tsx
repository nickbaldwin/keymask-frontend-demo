import {connect} from 'redux-bundler-react';
import React from 'react';

const SecretsList = ({secretsData}) => (
    <article>
        <h1>People Data</h1>
        {!secretsData && <p>No data yet</p>}
        {secretsData && <ul>
            {secretsData.map((s, _key) => (
                <ul key={_key}>
                    <li>
                        <a href={'#'}>{s.name}</a>
                    </li>
                </ul>
            ))}
        </ul>}
    </article>
);

export default connect(
    'selectSecretsData',

    SecretsList
);
