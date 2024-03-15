import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Select from "react-select";
import "./AccountInquiryResult.css";
import { numberWithCommas, formatResponseDate } from "./Helper";

export default function AccountInquiryResult({ data }) {
  return (
    <Container className="acc-reg-zlp-color mt-5 acc-inquiry-container">
      <Row className="justify-content-center mb-2 font-weight-bold">
        KẾT QUẢ TRUY VẤN
      </Row>
      <Row>
        <Col>ID tài khoản</Col>
        <Col>{data?.id}</Col>
      </Row>

      <Row>
        <Col>ID khách hàng</Col>
        <Col>{data?.user_id}</Col>
      </Row>

      <Row>
        <Col>Tiền gốc</Col>
        <Col>{numberWithCommas(data?.balance)}</Col>
      </Row>

      <Row>
        <Col>Ngày tạo tài khoản</Col>
        <Col>
          {data.created_date != null
            ? formatResponseDate(data?.created_date)
            : ""}
        </Col>
      </Row>

      <Row>
        <Col>Ngày tất toán</Col>
        <Col>
          {data.due_date != null ? formatResponseDate(data?.due_date) : ""}
        </Col>
      </Row>

      <Row>
        <Col>KYC</Col>
        <Col>{data?.kyc}</Col>
      </Row>

      <Row>
        <Col>Lãi suất</Col>
        <Col>{data?.rate}</Col>
      </Row>
    </Container>
  );
}
