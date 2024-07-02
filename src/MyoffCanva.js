import React, { useState } from 'react'
import { Offcanvas, Container, Nav, Navbar, OffcanvasHeader, OffcanvasBody, } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const MyoffCanva = () => {
    const [isShow, setisShow] = useState(false)

    const handleShow = () => { setisShow(true) }
    const handleHide = () => { setisShow(false) }
    return (


        <>


            <Navbar expand="lg" stickly="top" fixed="top" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand className='nav'>
                        <FaBars className='BG' onClick={() => handleShow()} size={30} />
                        <h>FOOD JUNCTION</h></Navbar.Brand>

                </Container>
            </Navbar>

            <Offcanvas show={isShow} onHide={handleHide}>
                <OffcanvasHeader closeButton>
                    Royal Palace
                </OffcanvasHeader>
                <OffcanvasBody>
                    <Nav className='flex-column'>
                        <Nav.Link onClick={() => handleHide()}>
                            <Link to={'/'}>DASHBOARD</Link>
                        </Nav.Link>

                        <Nav.Link onClick={() => handleHide()}>
                            <Link to={'/addfood'}>ADDFOOD</Link>
                        </Nav.Link>

                        <Nav.Link onClick={() => handleHide()}>
                            <Link to={'/allfood'}>ALLFOOD</Link>
                        </Nav.Link>

                        <Nav.Link onClick={() => handleHide()}>
                            <Link to={'/order'}>ORDER</Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => handleHide()}>
                            <Link to={'/coustomerlist'}>COUSTOMER LIST</Link>
                        </Nav.Link>
                    </Nav>
                </OffcanvasBody>

            </Offcanvas>
        </>
    )
}

export default MyoffCanva