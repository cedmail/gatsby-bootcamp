import React from 'react';
import {Link} from 'gatsby';

import headerStyles from './header.module.scss';

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1 className={headerStyles.title}>
                <Link to='/'>Ced</Link>
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
                </ul>
            </nav>
        </header>
    );
};

export default Header;