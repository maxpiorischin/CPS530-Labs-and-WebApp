import React, {useState} from 'react'
import * as Icons from "react-icons/fa"
import {Link} from "react-router-dom"
import {NavbarData} from './NavBarData'
import './Navbar.css';

function Navbar() {
    const [Navbar, setNavbar] = useState(false) // From Youtube
    const showNavbar = () => setNavbar(!Navbar)
    return (
        <>
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                    <Icons.FaBars onClick={showNavbar}/>
                </Link>
                <div className="navtoptext"> CPS530 Express, React, and Material UI Web App </div>
            </div>
            <nav className={Navbar ? 'nav-menu on' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showNavbar}>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <Icons.FaWindowClose/>
                        </Link>
                    </li>
                    {NavbarData.map((item, index) => {
                        return (
                            <li key={index} className={item.classname}>
                            <Link to={item.path}>
                                <span>{item.title}</span>
                            </Link>
                            </li>
                        );
                        })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar
