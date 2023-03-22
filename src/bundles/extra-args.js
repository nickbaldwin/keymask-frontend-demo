export default {
    name: 'extra-args',
    // the store is passed in here

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getExtraArgs: (store) => {
        return {
            swapiFetch: (urlPath) => {
                let url = `https://swapi.dev/api${urlPath}`;
                return fetch(url)
                    .then((res) => {
                        return res.json();
                    })
                    .catch((err) => {
                        throw err;
                    });
            },
            expressFetch: () => {
                return fetch('https://express-vercel-livid.vercel.app/api/secrets')
                // return fetch('http://localhost:3030/api/secrets')
                    .then((res) => {
                        return res.json();
                    })
                    .catch((err) => {
                        throw err;
                    });
            }
        };
    }
};
