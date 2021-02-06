import React, {useState} from 'react';
import logo from "./logo.png"
import './navbar.scss'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    // eslint-disable-next-line no-unused-vars
    const [links, setLinks] = useState([
        {nombre: 'Quiénes Somos', url: '/quienesSomos'}, 
        {nombre: 'Mugs', url: '/category/mugs'}, 
        {nombre: 'Para Vestir', url: '/category/vestir'}
      ])
    
    return(
        <header >
            <nav className="navbar-items">
                <NavLink to='/' className="navbar-logo">
                    <img src={logo} alt={"logo"}/>
                </NavLink>
                <ul className="nav-menu">
                    {links.map((link, i) => {
                    return (<li  key={i}><NavLink className="nav-link" to={link.url}>{link.nombre}</NavLink></li>)
                    })}
                    <CartWidget/>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar;