import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">SAVING ACCOUNT SYSTEM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item href="/new-user">
                Đăng ký User mới
              </NavDropdown.Item>
              <NavDropdown.Item href="/check-kyc">
                Kiểm tra KYC
              </NavDropdown.Item>
              <NavDropdown.Item href="/own-account-list">
                Kiểm tra danh sách tài khoản
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Tài khoản tiết kiệm" id="basic-nav-dropdown">
              <NavDropdown.Item href="/account-inquiry">
                Vấn tin số dư
              </NavDropdown.Item>
              <NavDropdown.Item href="/withdrawal">Rút tiền</NavDropdown.Item>
              <NavDropdown.Item href="/account-list">Thống kê</NavDropdown.Item>
            </NavDropdown>

            {/* <Nav.Link href="/withdrawal">Rút tiền</Nav.Link> */}

            <NavDropdown title="Công cụ khác" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
