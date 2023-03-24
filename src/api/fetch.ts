export const baseExpressFetch = (param: string) => {
    console.log('this was passed in to request: ' + param)
    return fetch('https://express-vercel-livid.vercel.app/secrets')
        // return fetch('http://localhost:3030/secrets');
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            throw err;
        });
};


export const  basePostExpressFetch = (data = {}) => {
    // options shown for fetch request
    // default options are marked with *
    const options: RequestInit = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    };


    // todo - will not post yet
    return fetch('https://express-vercel-livid.vercel.app/newsecret', options)
        // return fetch('http://localhost:3030/api/secrets');
        .then((res) => {
            const r = res.json();
            console.log('post success', r);
            return r;
        })
        .catch((err) => {
            console.log('post error', err);
            throw err;
        });
}
