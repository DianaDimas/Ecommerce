import React from "react"
import logo from "./logo.png"
import './navbar.scss'

const NavBar = () => {
    return(
    <header>
        <section className="wrapper">
            <nav>
                <a className="logo" href="#inicio" >
                    <img src={logo} alt={"logo"}/>
                </a>
                <ul>
                    <li> <a href="#quienes">Quiénes Somos</a></li>
                    <li> <a href="#mugs">Mugs</a></li>
                    <li> <a href="#vestir">Para Vestir</a></li>
                    <li> <a href="#contacto">Contáctenos</a></li>
                </ul>
            </nav>
        </section>
    </header>
    )
}
export default NavBar;