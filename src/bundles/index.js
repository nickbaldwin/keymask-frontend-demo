import {composeBundles, createCacheBundle} from 'redux-bundler';
import routes from './routes';
import people from './people';
import secrets from './secrets';
import extraArgs from './extra-args';
import cache from '../utils/cache';

export default composeBundles(
    routes,
    people,
    secrets,
    createCacheBundle(cache.set),
    extraArgs
);
