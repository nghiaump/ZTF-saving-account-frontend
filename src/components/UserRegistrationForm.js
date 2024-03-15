import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Input, Button } from "reactstrap";
import DatePickerSingle from "./DatePickerSingle";
import "react-datepicker/dist/react-datepicker.css";
import "./UserRegistrationForm.css";

export default function UserRegistrationForm({
  formData,
  dataDispatch,
  handleSubmit,
}) {
  useEffect(() => {
    console.log(">>reg_info changed:", formData);
  }, [formData]);

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
        <h4>THÔNG TIN NGƯỜI DÙNG</h4>
      </Row>

      <Row className="flex-column">
        <div>Số căn cước công dân</div>
        <Input
          className="acc-reg-field"
          onChange={(e) => optionChange(e.target.value, "id_card_number")}
          value={formData.id_card_number}
        />
      </Row>

      <Row className="flex-column">
        <div>username</div>
        <Input
          className="acc-reg-field"
          onChange={(e) => optionChange(e.target.value, "user_name")}
          value={formData.username}
        />
      </Row>

      <Row className="flex-column">
        <div>Họ và tên</div>
        <Input
          className="acc-reg-field"
          onChange={(e) => optionChange(e.target.value, "fullname")}
          value={formData.fullname}
        />
      </Row>

      <DatePickerSingle
        pickerName={"Ngày sinh"}
        fieldName={"dob"}
        optionChange={optionChange}
      />

      <Row className="flex-column">
        <div>Địa chỉ</div>
        <Input
          className="acc-reg-field"
          onChange={(e) => optionChange(e.target.value, "address")}
          value={formData.address}
        />
      </Row>

      <Row className="flex-column">
        <div>Số điện thoại</div>
        <Input
          className="acc-reg-field"
          onChange={(e) => optionChange(e.target.value, "phone")}
          value={formData.phone}
        />
      </Row>

      <Row className="justify-content-center mt-3">
        <Button className="btn-zlp-color" onClick={handleSubmit}>
          ĐĂNG KÝ
        </Button>
      </Row>
    </Container>
  );
}
