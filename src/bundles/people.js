import {createSelector} from 'redux-bundler';

export default {
    name: 'people',
    getReducer: () => {
        const initialData = {
            data: null,
            loading: false
        };

        return (state = initialData, {type, payload}) => {
            if (type === 'FETCH_PEOPLE_START') {
                return Object.assign({}, state, {
                    loading: true
                });
            }
            if (type === 'FETCH_PEOPLE_SUCCESS') {
                return Object.assign({}, state, {
                    loading: false,
                    data: payload.results.map((person) => {
                        const split = person.url.split('/');
                        const id = split[split.length - 2];
                        return Object.assign(person, {id});
                    })
                });
            }
            return state;
        };
    },
    doFetchPeople:
        () =>
        ({dispatch, swapiFetch}) => {
            dispatch({type: 'FETCH_PEOPLE_START'});
            swapiFetch('/people').then((payload) => {
                dispatch({type: 'FETCH_PEOPLE_SUCCESS', payload});
            });
        },
    selectPeopleRaw: (state) => state.people,
    selectPeopleData: (state) => state.people.data,
    selectActivePerson: createSelector(
        'selectRouteParams',
        'selectPathname',
        'selectPeopleData',
        (routeParams, pathname, peopleData) => {
            if (!pathname.includes('/people') || !routeParams.id || !peopleData) {
                return null;
            }
            return peopleData.find((person) => person.id === routeParams.id) || null;
        }
    ),
    reactShouldFetchPeople: createSelector('selectPeopleRaw', (peopleData) => {
        if (peopleData.loading || peopleData.data) {
            return false;
        }
        return {actionCreator: 'doFetchPeople'};
    })
};
