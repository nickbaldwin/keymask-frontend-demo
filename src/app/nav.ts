import HomePage from 'components/../pages/Home';
import SecretsList from '../pages/Secrets';

/*
    Navigation items: [
        {url: '/', label: 'Home'},
        {url: '/secrets', label: 'Secrets List'},
    ];

    Routes: {
        '/': HomePage,
        '/secrets': SecretsList,
    }
*/


interface RouteNav {
    id: string,
    url: string,
    label: string,
    // todo - typing
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    page: any
}

interface Routes {
    // todo - type pages
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
}

interface NavItem {
    // todo - type pages
    'url': string,
    'label': string
}

export const items: RouteNav[] = [
    {id: 'home', url: '/', label: 'Home', page: HomePage},
    {id: 'secrets', url: '/secrets', label: 'Secrets List', page: SecretsList},
    // todo - notfound default
];

export const getRoutes = (): Routes => {
    const r = {};
    items.forEach((item) => {
        r[item.url] = item.page;
    });
    return r;
};

export const routes = getRoutes();

export const navItems = items.map((item): NavItem => ({
    url: item.url, label: item.label
}));
