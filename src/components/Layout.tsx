
import {connect} from 'redux-bundler-react';
import {getNavHelper}  from 'internal-nav-helper';
import React from "react";

const navHelper = getNavHelper;

const Layout = ({doUpdateUrl, route, pathname}) => {
    const navItems = [
        {url: '/', label: 'Home'},
        {url: '/people', label: 'People List'},
        {url: '/secrets', label: 'Secrets List'},
    ];

    const Page = route;
    return (
        <main className="" onClick={navHelper(doUpdateUrl)}>
            <nav className="">

                <div className="">
                    {navItems.map((item, _key) => {
                        return (
                            <span key={_key}>
                                <a
                                    className={`link ${item.url === pathname ? 'activeLink' : ''}`}
                                    href={item.url}
                                >
                                    {item.label}
                                </a>
                                {_key < navItems.length - 1 ? ' | ' : ''}
                            </span>
                        );
                    })}
                </div>
            </nav>
            <Page />
        </main>
    );
};

export default connect(
    'selectRoute',
    'selectPathname',

    'doUpdateUrl',

    Layout
);
