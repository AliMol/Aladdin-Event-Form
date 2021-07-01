import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import '../../styles/layout/header.css'
import Brand from './Brand'

const Header = () => {
    return (
        <Navbar className="navbar-orange" variant="dark">
            <Navbar.Brand href="#home">
                <Brand></Brand>{' '}
                <span className="brand-title">Onboarding</span>
            </Navbar.Brand>

            <NavDropdown className="ml-auto navbar-user" title="Hi, John Doe">
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
        </Navbar>
    )
}

Header.propTypes = {

}

export default Header
