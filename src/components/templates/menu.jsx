import React from 'react';
import { NavLink } from "react-router-dom";
import { FaHome, FaInfo, FaBusinessTime, FaUser, FaKey } from "react-icons/fa";
import '../styles/menu.scss';
const Menu = () => {
    return(
        <>
        <nav>
            <div className="title">ANDRA MANDAY</div>
            <ul>
                <NavLink activeClassName="active"to="/" exact><FaHome/> <p>TERAS</p></NavLink>
                <NavLink to="/profile"><FaUser/> <p>PROFIL</p></NavLink>
                <NavLink to="/experiences"><FaBusinessTime/> <p>PENGALAMAN</p></NavLink>
                <NavLink to="/projects"><FaKey/> <p>PROYEK</p></NavLink>
                <NavLink to="/about"><FaInfo/> <p>TENTANG</p></NavLink>
            </ul>
        </nav>
        </>
    )
}

export default Menu;