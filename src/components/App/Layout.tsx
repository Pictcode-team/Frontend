import React from 'react';
import Logo from 'images/logo-pictcode.png';
import NotionLogo from 'images/notion.png';
import GithubLogo from 'images/github1.png';


export const Layout = (props:any) => {

  return (
    <div className='container background-1'>
      <header className="header">
        <img src={Logo} alt="logo-pictcode" />
        <nav className="nav__menu">
          <a>About</a>
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
