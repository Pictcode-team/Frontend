import React from 'react'
import Logo from '../../assets/img/logo-pictcode.png'

export const Layout = (props:any) => {

    return (
        <>
            <header className="header">
            <img src={Logo} alt="logo-pictcode" />
                <nav className="nav__menu">
                    <a>About</a>
                </nav>
            </header>
            {props.children}
            
        </>
    )
}
