import React from 'react';
import {connect} from 'redux-bundler-react';

const PersonDetail = ({routeParams, activePerson}) => {

    if (!activePerson || !activePerson.name) {
        return null;
    }
    const {name} = activePerson;



    return (
        <div>
            <p>{`${name} `}</p>
            <p>
                the route parameters that are available in redux with this URL open:
                <code>{JSON.stringify(routeParams, null, 2)}</code>
            </p>
            <p>
                We can use this in our selectors to determine if this is data we have or need to fetch.
            </p>
        </div>
    );
}

export default connect(
    'selectRouteParams',
    'selectActivePerson',

    PersonDetail
);
