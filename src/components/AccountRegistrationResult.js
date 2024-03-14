import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Select from "react-select";
import "./AccountRegistrationResult.css";

export default function AccountRegistrationResult({ data }) {
  return (
    <Container className="acc-reg-zlp-color">
      <Row>
        <Col xs={6} md={4}>
          ID tài khoản
        </Col>
        <Col xs={12} md={8}>
          {data?.account_id}
        </Col>
      </Row>

      <Row>
        <Col>ID khách hàng</Col>
        <Col>{data?.user_id}</Col>
      </Row>

      <Row>
        <Col>Tiền gốc</Col>
        <Col>{data?.balance}</Col>
      </Row>

      <Row>
        <Col>Ngày tạo tài khoản</Col>
        <Col>{data?.created_date}</Col>
      </Row>

      <Row>
        <Col>Ngày tất toán</Col>
        <Col>{data?.due_date}</Col>
      </Row>

      <Row>
        <Col>Lãi suất</Col>
        <Col>{data?.rate}</Col>
      </Row>

      <Row>
        <Col>Tiền lãi dự kiến</Col>
        <Col>{data?.expected_interest}</Col>
      </Row>
    </Container>
  );
}
