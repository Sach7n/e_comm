import React,{useContext} from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SearchBox from './SearchBox'
import { ProdContext } from '../Context';


const Navigation = props => {

  const { User} = useContext(ProdContext);

    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>LOGO</Navbar.Brand>
                    </LinkContainer>
                    <SearchBox/> 
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />

                    <Navbar.Collapse id='basic-navbar-nav'>

                        <Nav className="justify-content-end"  style={{ width: "100%" }}>

                        <LinkContainer to="/SignIn">
                                <Nav.Link>
                                    Sign In
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/SignUp">
                                <Nav.Link>
                                    Sign up
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/Cart">
                                <Nav.Link>My Cart</Nav.Link>
                            </LinkContainer>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

Navigation.propTypes = {}

export default Navigation