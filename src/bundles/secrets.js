import {createSelector} from 'redux-bundler';

export default {
    name: 'secrets',
    getReducer: () => {
        const initialData = {
            data: null,
            loading: false,
            sending: false,
            lastFetchFailed: false,
            lastFetch: null,
            lastSendFailed: false,
            lastSend: null
        };

        return (state = initialData, {type, payload}) => {
            if (type === 'FETCH_SECRETS_START') {
                return Object.assign({}, state, {
                    loading: true,
                    initialized: true
                });
            }
            if (type === 'FETCH_SECRETS_SUCCESS') {
                return Object.assign({}, state, {
                    loading: false,
                    data: payload,
                    lastFetchFailed: false,
                    lastFetch: Date.now()
                });
            }
            if (type === 'FETCH_SECRETS_FAILURE') {
                return Object.assign({}, state, {
                    loading: false,
                    lastFetchFailed: true,
                    lastFetch: Date.now()
                });
            }

            if (type === 'POST_SECRET_START') {
                return Object.assign({}, state, {
                    sending: true
                });
            }
            // todo
            if (type === 'POST_SECRET_SUCCESS') {
                return Object.assign({}, state, {
                    sending: false,
                    lastSendFailed: false,
                    lastSend: Date.now()
                });
            }
            if (type === 'POST_SECRET_FAILURE') {
                return Object.assign({}, state, {
                    sending: false,
                    lastSendFailed: true,
                    lastSend: Date.now()
                });
            }
            return state;
        };
    },
    // note apis passed in via extra-args bundle
    doFetchSecrets: () => ({dispatch, expressFetch}) => {
        dispatch({type: 'FETCH_SECRETS_START'});
        expressFetch().then((payload) => {
            dispatch({type: 'FETCH_SECRETS_SUCCESS', payload});
        }).catch( (err) => {
            console.log(err);
            dispatch({type: 'FETCH_SECRETS_FAILURE'})
        });
    },
    doPostSecret: (secret) => ({dispatch, postFetch}) => {
        dispatch({type: 'POST_SECRET_START'});
        postFetch(secret).then((payload) => {
            dispatch({type: 'POST_SECRET_SUCCESS', payload});
            // todo - best option? use reactor?
            // eslint-disable-next-line no-undef
            store.doFetchSecrets();
        }).catch( (err) => {
            console.log("error posting secret in bundle");
            console.log(err);
            dispatch({type: 'POST_SECRET_FAILURE'});
        });
    },
    selectSecretsRaw: (state) => state.secrets,
    selectSecretsInitTime: (state) => state.secrets.initTime,
    selectSecretsLastFetched: (state) => state.secrets.lastFetch,
    selectSecretsLoading: (state) => state.secrets.loading,
    selectSecretsFetchFailed: (state) => state.secrets.lastFetchFailed,
    selectSecretsData: (state) => state.secrets.data,
    selectActiveSecret: createSelector(
        'selectRouteParams',
        'selectPathname',
        'selectSecretsData',
        (routeParams, pathname, secretsData) => {
            if (!pathname.includes('/secrets') || !routeParams.id || !secretsData) {
                return null;
            }
            return secretsData.find((s) => s.id === routeParams.id) || null;
        }
    ),
    reactShouldFetchSecrets: createSelector('selectAppTime', 'selectSecretsLastFetched', 'selectSecretsRaw', (appTime, secretsLastFetched, secretsData) => {
        let isFresh = !!secretsLastFetched && (appTime < (secretsLastFetched + 15000)); //15s for demo
        if (secretsData.loading || (secretsData.data && isFresh)) {
            return false;
        }
        return {actionCreator: 'doFetchSecrets'};
    })
};
