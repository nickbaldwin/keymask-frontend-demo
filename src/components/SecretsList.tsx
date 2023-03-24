import {connect} from 'redux-bundler-react';
import React from 'react';

const SecretsList = ({secretsData, secretsFetchFailed, secretsLoading, secretsLastFetched}) => {

    const notInitialized = secretsLoading && (secretsLastFetched === null);

    return (
        <div>
            {notInitialized && <p>No data yet - loading</p>}
            {!secretsData && <p>No data</p>}
            {secretsFetchFailed && <p>There is a problem fetching the secrets :-(</p>}
            {secretsData && <ul>
                {secretsData.map((s, _key) => (
                    <ul key={_key}>
                        <li>
                            <a href={'#'}>{s.name}</a>
                        </li>
                    </ul>
                ))}
            </ul>}
        </div>
    );
};

export default connect(
    'selectSecretsFetchFailed',
    'selectSecretsLastFetched',
    'selectSecretsData',
    'selectSecretsLoading',
    SecretsList
);
