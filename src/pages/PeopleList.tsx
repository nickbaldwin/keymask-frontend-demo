import {connect} from 'redux-bundler-react';
import React from 'react';

const PeopleList = ({peopleData}) => (
    <article>
        <h1>People Data</h1>
        {!peopleData && <p>No data yet</p>}
        {peopleData && <ul>
            {peopleData.map((person, _key) => (
                <ul key={_key}>
                    <li>
                        <a href={`/people/${person.id}`}>{person.name}</a>
                    </li>
                </ul>
            ))}
        </ul>}
    </article>
);

export default connect(
    'selectPeopleData',

    PeopleList
);
