import React from 'react';

import Header from './Header'
const Layout = props => {
    return (
        <div className="wrapper">
            <Header />
            <section className="section-container">
                {props.children}
            </section>
        </div>
    )
}
export default Layout;
