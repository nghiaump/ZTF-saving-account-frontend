import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Select from "react-select";
import "./AccountRegistrationResult.css";
import { numberWithCommas, formatResponseDate } from "./Helper";

export default function AccountRegistrationResult({ data }) {
  return (
    <Container className="acc-reg-zlp-color">
      <Row className="justify-content-center mt-3 mb-3 acc-reg-success-label">
        Tạo mới tài khoản thành công
      </Row>

      <Row>
        <Col className="font-weight-bold">ID khách hàng</Col>
        <Col className="font-weight-bold">{data?.user_id}</Col>
      </Row>

      <Row>
        <Col className="font-weight-bold">ID tài khoản</Col>
        <Col className="font-weight-bold">{data?.account_id}</Col>
      </Row>

      <Row>
        <Col>Tiền gốc</Col>
        <Col>{numberWithCommas(data?.balance)}</Col>
      </Row>

      <Row>
        <Col>Ngày tạo tài khoản</Col>
        <Col>{formatResponseDate(data?.created_date)}</Col>
      </Row>

      <Row>
        <Col>Ngày tất toán</Col>
        <Col>{formatResponseDate(data?.due_date)}</Col>
      </Row>

      <Row>
        <Col>Lãi suất</Col>
        <Col>{data?.rate}</Col>
      </Row>

      <Row>
        <Col>Tiền lãi dự kiến</Col>
        <Col>{numberWithCommas(data?.expected_interest)}</Col>
      </Row>
    </Container>
  );
}
