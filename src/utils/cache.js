import {getConfiguredCache} from 'money-clip';
import {CURRENT_VERSION} from "../app/config";

export default getConfiguredCache({
    maxAge: 1000 * 60 * 60,
    version: CURRENT_VERSION
});

// todo - persist stuff into cache!
