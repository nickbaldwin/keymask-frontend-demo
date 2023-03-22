import {createSelector} from 'redux-bundler';

export default {
    name: 'secrets',
    getReducer: () => {
        const initialData = {
            data: null,
            loading: false
        };

        return (state = initialData, {type, payload}) => {
            if (type === 'FETCH_SECRETS_START') {
                return Object.assign({}, state, {
                    loading: true
                });
            }
            if (type === 'FETCH_SECRETS_SUCCESS') {
                return Object.assign({}, state, {
                    loading: false,
                    // we'll just extract an ID here and insert it as a property
                    // on the data for this person.
                    // Normally API will include an id attribute of some kind
                    // for each object in the results, but not so for this API.
                    data: payload
                });
            }
            return state;
        };
    },
    doFetchSecrets:
        () =>
        ({dispatch, expressFetch}) => {
            dispatch({type: 'FETCH_SECRETS_START'});
            expressFetch().then((payload) => {
                dispatch({type: 'FETCH_SECRETS_SUCCESS', payload});
            });
        },
    selectSecretsRaw: (state) => state.secrets,
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
    reactShouldFetchSecrets: createSelector('selectSecretsRaw', (secretsData) => {
        if (secretsData.loading || secretsData.data) {
            return false;
        }
        return {actionCreator: 'doFetchSecrets'};
    })
};
