import {baseExpressFetch, basePostExpressFetch} from "../api/fetch";

export default {
    name: 'extra-args',
    // the store is passed in here
    // so can pass in additional info e.g. keys into requests...

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getExtraArgs: (store) => {
        return {
            expressFetch: () => {
                // reference stuff from store here... pass into api calls
                return baseExpressFetch('hi this is a param on get');
            },
            // pass in object
            postFetch: (data) => {
                // reference stuff from store here... pass into api calls
                return basePostExpressFetch(data);
            }
        };
    }
};
