import { Container, Navbar, NavDropdown, Nav} from 'react-bootstrap'

const NavBar=()=>{
    return(
        <div className='container-fluid socharaBackgroundColor'>
        <Navbar collapseOnSelect  expand="sm" className="container-fluid ">
          <Container>
            <Navbar.Brand className="row " href="/">
              <div className="col-sm">
                <h1 className='sochara-text'>Sochara</h1>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle className="menu">
            <img src=""/>
             </Navbar.Toggle >
          </Container>

         
          <Navbar.Collapse className="justify-content-start">
            <Nav className="me-auto">
                <Nav.Link className="" href = "/">Home</Nav.Link>
                <Nav.Link className="p-2" href = "/our-story">About</Nav.Link>
                <Nav.Link className="" href = "/shop" >Shop</Nav.Link>
                <Nav.Link className="" href = "/blog" >Blog</Nav.Link>
                <Nav.Link className="" href = "/contact-us">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      </div>
    )
}

export default NavBar