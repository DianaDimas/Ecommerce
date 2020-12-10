import React, {Component} from 'react'
import logo from "./logo.png"
import './navbar.scss'
import CartWidget from '../CartWidget/CartWidget';

class NavBar extends Component {
    render(){
        return(
            <nav className="navbar-items">
                <div className="navbar-logo">
                    <img src={logo} alt={"logo"}/>
                </div>
                <ul className="nav-menu">
                    <li className="nav-link"><a href="#quienes">Quiénes Somos</a></li>
                    <li className="nav-link"><a href="#mugs">Mugs</a></li>
                    <li className="nav-link"><a href="#vestir">Para Vestir</a></li>
                    <li className="nav-link"><a href="#contacto">Contáctenos</a></li>
                    <li className="nav-link-cart"><a href="#cart"><CartWidget/></a></li>
                </ul>
            </nav>
        )
    }
}
export default NavBar;