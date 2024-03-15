import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Input, Button } from "reactstrap";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AccountInquiryForm.css";

export default function AccountInquiryForm({
  formData,
  dataDispatch,
  handleSubmit,
}) {
  const optionChange = (value, name) => {
    const payload = {
      [name]: value !== null && value !== undefined ? value : "",
    };
    console.log(">>payload:", payload);

    dataDispatch({
      type: "changeState",
      payload,
    });
  };

  return (
    <Container fluid className="justify-content-center acc-reg-container">
      <Row className="justify-content-center mb-2">
        <h4>VẤN TIN TÀI KHOẢN</h4>
      </Row>
      <Row className="flex-column">
        <div>ID người dùng</div>
        <Input
          className="acc-reg-field"
          onChange={(e) => optionChange(e.target.value, "user_id")}
          value={formData.user_id}
        />
      </Row>

      <Row className="flex-column">
        <div>ID tài khoản</div>
        <Input
          className="acc-reg-field"
          onChange={(e) => optionChange(e.target.value, "account_id")}
          value={formData.id}
        />
      </Row>

      <Row className="justify-content-center mt-3">
        <Button className="btn-zlp-color" onClick={handleSubmit}>
          KIỂM TRA
        </Button>
      </Row>
    </Container>
  );
}
