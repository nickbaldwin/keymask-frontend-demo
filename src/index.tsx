import {render} from 'react-dom';
import getStore from './bundles';
import App from './app/App';
import cache from './utils/cache';

cache.getAll()
     .then((initialData) => {
        if (initialData) {
            console.log('starting with locally cache data:', initialData);
        }
        render(
            App(getStore(initialData)),
            document.getElementById('root')
        )
    })
    .catch((err) => {
        console.log('error getting cached data', err)
    })

