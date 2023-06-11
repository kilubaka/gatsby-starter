import React from 'react';
import Navbar from 'components/Navbar';

import 'styles/global.scss';

const Layout = (props) => {
    const { children } = props;

    return (
        <div className="layout">
            <Navbar/>
            <div className="content">
                {children}
            </div>
            <footer>
                <p>© {new Date().getFullYear()} Gatsby Starter</p>
            </footer>
        </div>
    );
};

export default Layout;
