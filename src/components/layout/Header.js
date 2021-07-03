import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import '../../styles/layout/header.css'
import Brand from './Brand'

const Header = () => {
    return (
        <Navbar className="navbar-orange" variant="">
            <Navbar.Brand href="/dashboard">
                <Brand></Brand>{' '}
            </Navbar.Brand>

            <Nav defaultActiveKey="/dashboard" as="ul" className="nav-links">
                <Nav.Item as="li">
                    <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
                </Nav.Item>
                <Nav.Item as="li">
                    <NavLink to="/events" className="nav-link">Events</NavLink>

                </Nav.Item>
            </Nav>

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
