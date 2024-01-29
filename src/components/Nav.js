import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navibar() {
    return (
    <>
        <Navbar bg="light" data-bs-theme="--bs-body-bg">
            <Container>
                <Navbar.Brand href="/">　 　　Krabi Climbing　</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="About">　Krabiとは　</Nav.Link>
                    <Nav.Link href="Area">　おすすめクライミングエリア　</Nav.Link>
                    <Nav.Link href="Climbing">　クライミングスポット　</Nav.Link>
                    <Nav.Link href="Spot">　おすすめスポット　</Nav.Link>
                    <Nav.Link href="Shop">　おすすめショップ　</Nav.Link>
                    <Nav.Link href="Photo">　Krabi写真館　　</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
    );
}

export default Navibar;