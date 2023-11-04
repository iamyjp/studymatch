import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    const linkStyle = {
        textDecoration: 'none', // 밑줄 없애기
        color: 'white',
      };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
            <Link to="/" style={linkStyle}>테스트 스터디 매칭</Link>
        </Navbar.Brand>
        <Nav className="justify-content-end">
        <Nav.Link>
            <Link to="/signup" style={linkStyle}>회원가입</Link>
        </Nav.Link>
        <Nav.Link>
            <Link to="/login" style={linkStyle}>로그인</Link>
        </Nav.Link>
        <Nav.Link>
            <Link to="/mypage" style={linkStyle}>마이페이지</Link>
        </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header;