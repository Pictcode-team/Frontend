import React from 'react';
import { Link } from 'react-router-dom';

import Logo from 'images/logo-pictcode.png';
import NotionLogo from 'images/notion.png';
import GithubLogo from 'images/github1.png';

const Layout = (props: any) => {

  return (
    <div className='container background-1'>
      <header className="header">
        <img src={Logo} alt="logo-pictcode" />
        <nav className="nav__menu">
          <Link to="/About">
            <a>About</a>
          </Link>
        </nav>
      </header>
      {props.children}
      <footer className="footer">
        <div className="footer__social">
          <img src={NotionLogo} alt="notion" />
          <img src={GithubLogo} alt="github" />
        </div>
        <p>Transfer team - 2021</p>
      </footer>
    </div>
  )
}

export default Layout;