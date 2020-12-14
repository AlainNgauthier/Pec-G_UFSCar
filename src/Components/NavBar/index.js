import React from 'react';
import {Nav, Bars, NavLogo, NavLink, NavMenu} from './NavbarElements';



const Navbar = ({toogle}) => {
    return(
        <>
            <Nav>
                <NavLogo to="/">
                    <h1>PEC-G</h1>
                </NavLogo>
                <Bars onClick={toogle} />
                <NavMenu>
                    {/* <NavLink to="/sobre">
                        Sobre o Pec-G
                    </NavLink> */}
                    <NavLink to="/formados">
                        Formados
                    </NavLink>
                    <NavLink to="/crono">
                        Cronologia
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}
export default Navbar;