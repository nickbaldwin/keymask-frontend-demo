// todo typings
import {getNavHelper}  from 'internal-nav-helper';
import React from "react";
import {connect} from 'redux-bundler-react';

import {navItems} from './nav';

const Layout = ({doUpdateUrl, route, pathname}) => {
    const Page = route;
    return (
        <main className="" onClick={getNavHelper(doUpdateUrl)}>
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
    'selectPathname',
    'selectRoute',
    'doUpdateUrl',
    Layout
);
