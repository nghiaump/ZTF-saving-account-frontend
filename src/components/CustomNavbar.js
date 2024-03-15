import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./CustomNavbar.css";

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary nav-container">
      <Container>
        <Navbar.Brand href="/">
          <p className="app-name-zlp-color">SAVING</p>{" "}
          <p className="app-name-zlp-color-green">SYSTEM</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item href="/new-user">
                Đăng ký User mới
              </NavDropdown.Item>
              <NavDropdown.Item href="/check-kyc">
                Kiểm tra KYC (*)
              </NavDropdown.Item>
              <NavDropdown.Item href="/own-account-list">
                Kiểm tra danh sách tài khoản (*)
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Tài khoản tiết kiệm" id="basic-nav-dropdown">
              <NavDropdown.Item href="/account-register">
                Mở tài khoản mới
              </NavDropdown.Item>
              <NavDropdown.Item href="/account-inquiry">
                Vấn tin số dư
              </NavDropdown.Item>
              <NavDropdown.Item href="/withdrawal">
                Rút tiền (*)
              </NavDropdown.Item>
              <NavDropdown.Item href="/account-list">Thống kê</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Công cụ khác" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Công cụ 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Công cụ 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Công cụ 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Giới thiệu</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
