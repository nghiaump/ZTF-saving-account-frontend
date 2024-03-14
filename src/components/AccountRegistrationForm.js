import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Input, Button } from "reactstrap";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AccountRegistrationForm.css";

export default function AccountRegistrationForm({
  reg_info,
  dataDispatch,
  handleSubmitAccReg,
}) {
  useEffect(() => {
    console.log(">>reg_info changed:", reg_info);
  }, [reg_info]);

  const handleBalanceValidate = (e) => {
    const value = e.target.value;
    if (isNaN(value)) {
      optionChange(0, "min_balance");
    }
    // Nếu là số dương, gọi hàm optionChange để cập nhật giá trị
    let b = parseInt(value);
    if (b > 0) {
      optionChange(b, "balance");
    } else {
      optionChange(0, "balance");
    }
  };

  const termDaysOption = [
    { value: 21, label: "21 ngày" },
    { value: 30, label: "1 tháng (30 ngày)" },
    { value: 90, label: "3 tháng (90 ngày)" },
    { value: 180, label: "6 tháng (180 ngày)" },
  ];

  const optionChange = (value, name) => {
    const payload = {
      [name]: value !== null && value !== undefined ? value : "",
    };
    console.log(">>payload:", payload);

    dataDispatch({
      type: "changeRegInfo",
      payload,
    });
  };

  const [startDate1, setStartDate1] = useState(new Date());
  const [isDatePickerVisible1, setDatePickerVisibility1] = useState(false);
  const refDatePicker1 = useRef(null);

  const toggleDatePicker1 = () => {
    setDatePickerVisibility1(!isDatePickerVisible1);
  };

  return (
    <Container fluid className="justify-content-center acc-reg-container">
      <Row className="justify-content-center mb-2">
        <h4>THÔNG TIN TẠO MỚI TÀI KHOẢN</h4>
      </Row>
      <Row className="flex-column">
        <div>ID người dùng</div>
        <Input
          className="acc-reg-field"
          onChange={(e) => optionChange(e.target.value, "user_id")}
          value={reg_info.user_id}
        />
      </Row>

      <Row className="flex-column">
        <div>Số căn cước công dân</div>
        <Input
          className="acc-reg-field"
          onChange={(e) => optionChange(e.target.value, "id_card_number")}
          value={reg_info.user_name}
        />
      </Row>

      <Row className="flex-column">
        <div>Số tiền gửi</div>
        <Input
          className="acc-reg-field"
          onChange={(e) => handleBalanceValidate(e)}
          value={reg_info?.balance}
        />
      </Row>

      <Row className="flex-column">
        <div>Kỳ hạn</div>

        <Select
          placeholder="Tất cả"
          className="acc-reg-field"
          name="termDays"
          onChange={(selection, action) => {
            console.log(">>selection.value:", selection.value);
            optionChange(selection?.value, "term_in_days");
            switch (selection.value) {
              case 21: {
                optionChange("DAYS", "term_type");
                optionChange(21, "term");
                break;
              }
              case 30: {
                optionChange("MONTHS", "term_type");
                optionChange(1, "term");
                break;
              }

              case 90: {
                optionChange("MONTHS", "term_type");
                optionChange(3, "term");
                break;
              }

              case 180: {
                optionChange("MONTHS", "term_type");
                optionChange(6, "term");
                break;
              }
              default: {
                optionChange("MONTHS", "term_type");
                optionChange(6, "term");
                break;
              }
            }
          }}
          options={termDaysOption}
          value={termDaysOption.find(
            (term) => term.value === reg_info?.term_in_days
          )}
        />
      </Row>

      <Row className="flex-column">
        <div>Ngày tạo</div>
        <div onClick={toggleDatePicker1} className="acc-reg-field form-control">
          {startDate1.toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </div>

        {isDatePickerVisible1 && (
          <div ref={refDatePicker1} className="position-absolute">
            <DatePicker
              selected={startDate1}
              onChange={(date) => {
                setStartDate1(date);
                setDatePickerVisibility1(false);
                optionChange(date, "created_date");
              }}
              dateFormat="dd-MM-yyyy"
            />
          </div>
        )}
      </Row>

      <Row className="justify-content-center mt-3">
        <Button className="btn-zlp-color" onClick={handleSubmitAccReg}>
          TẠO TÀI KHOẢN
        </Button>
      </Row>
    </Container>
  );
}
