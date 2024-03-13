import React, { useState, useRef, useEffect } from "react";
import { Col, Container, Input, Button } from "reactstrap";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AccountRegistrationForm.css";

export default function AccountRegistrationForm({
  regInfo,
  dataDispatch,
  handleSubmitRegInfo,
}) {
  const termDaysOption = [
    { value: -1, label: "Tất cả" },
    { value: 21, label: "21 ngày" },
    { value: 30, label: "1 tháng (30 ngày)" },
    { value: 90, label: "3 tháng (90 ngày)" },
    { value: 180, label: "6 tháng (180 ngày)" },
  ];

  const [startDate1, setStartDate1] = useState(new Date());
  const [isDatePickerVisible1, setDatePickerVisibility1] = useState(false);
  const refDatePicker1 = useRef(null);

  const toggleDatePicker1 = () => {
    setDatePickerVisibility1(!isDatePickerVisible1);
  };

  return (
    <Container fluid className="justify-content-center">
      <Col className="justify-content-center">
        <div>
          <div>ID người dùng</div>
          <Input className="filter-item" onChange={(e) => {}} value={""} />
        </div>

        <div>
          <div>Số tiền gửi</div>
          <Input className="filter-item" onChange={(e) => {}} value={""} />
        </div>

        <div>
          <div>Ngày tạo tài khoản tiết kiệm</div>

          <div onClick={toggleDatePicker1} className="filter-item form-control">
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
                }}
                dateFormat="dd-MM-yyyy"
              />
            </div>
          )}
        </div>

        {/* <div>
          <div>Kỳ hạn</div>
          <Select
            placeholder="Tất cả"
            className="filter-item"
            name="termDays"
            onChange={() => {}}
            options={termDaysOption}
          />
        </div> */}

        <div className="mx-2 filter-item d-flex justify-content-center">
          <Button onClick={(e) => {}}>Đăng ký</Button>
        </div>
      </Col>
    </Container>
  );
}
