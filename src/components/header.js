import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';

import headerStyles from './header.module.scss';

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    return (
        <header className={headerStyles.header}>
            <h1 className={headerStyles.title}>
                <Link to='/'>{data.site.siteMetadata.title}</Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} to='/'
                              activeClassName={headerStyles.activeNavItem}>Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}
                              to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}
                              to='/about'>About</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}
                              to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}
                              to='/news'>News</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}
                              to='/companies'>Companies</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;