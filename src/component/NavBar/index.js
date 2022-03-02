import React from 'react';
import {Nav, NavLink, Bars, Circle, NavMenu, NavBtn, NavBtnLink} from './NavBarElements';


const NavBar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <h1>PcariMovie</h1>
            </NavLink>
            <NavMenu>
                <NavLink to="/home">
                    Home
                </NavLink>
                <NavLink to="/movie">
                    Movies
                </NavLink>
                <NavLink to="/tv-show" >
                    TV Show
                </NavLink>
                <NavLink to="/video" >
                    Videos
                </NavLink>
                <NavLink to="/faq" >
                    FAQ
                </NavLink>
                <NavLink to="/pricing" >
                    Pricing
                </NavLink>
                <NavLink to="/contact-us" >
                    Contact Us
                </NavLink>
                <NavLink to="/search" >
                    Search
                </NavLink>
            </NavMenu>
            <Bars />
            <Circle>
                <div></div>
            </Circle>
            <NavBtn>
                <NavBtnLink to="/sign-up">John Glich</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  );
};

export default NavBar;