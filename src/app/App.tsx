import React from 'react';
import {Provider} from 'redux-bundler-react';

import Layout from './Layout';

const App: React.FC = (store) => {
    console.log('production environment?: ' + process.env.PRODUCTION.toString());
    console.log('name: ' + process.env.NAME);
    console.log('version: ' + process.env.VERSION);

    return (
        <Provider store={store}>
            <Layout/>
        </Provider>
    );
};

export default App;