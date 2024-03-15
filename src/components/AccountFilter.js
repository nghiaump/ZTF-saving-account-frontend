import React, { useState, useRef, useEffect } from "react";
import { Row, Container, Input, Button } from "reactstrap";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AccountFilter.css";

export default function AccountFilter({
  filter,
  dataDispatch,
  handleSubmitFilter,
}) {
  const termDaysOption = [
    { value: -1, label: "Tất cả" },
    { value: 21, label: "21 ngày" },
    { value: 90, label: "3 tháng (90 ngày)" },
    { value: 180, label: "6 tháng (180 ngày)" },
    { value: 360, label: "12 tháng (360 ngày)" },
  ];

  const kycOption = [
    { value: -1, label: "Tất cả" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
  ];

  const optionChange = (value, name) => {
    const selectedFilter = {};
    selectedFilter[name] = value || value === 0 ? value : "";

    dataDispatch({
      type: "changeFilter",
      selectedFilter,
    });
  };

  // useEffect(() => {
  //   console.log(filter);
  // }, [filter]);

  const handleBalanceValidate = (e) => {
    const value = e.target.value;
    if (isNaN(value)) {
      optionChange(0, "min_balance");
    }
    // Nếu là số dương, gọi hàm optionChange để cập nhật giá trị
    let b = parseInt(value);
    if (b > 0) {
      optionChange(b, "min_balance");
    } else {
      optionChange(0, "min_balance");
    }
  };

  const [startDate1, setStartDate1] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [isDatePickerVisible1, setDatePickerVisibility1] = useState(false);
  const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
  const refDatePicker1 = useRef(null);
  const refDatePicker2 = useRef(null);

  const toggleDatePicker1 = () => {
    setDatePickerVisibility1(!isDatePickerVisible1);
  };

  const toggleDatePicker2 = () => {
    setDatePickerVisibility2(!isDatePickerVisible2);
  };

  return (
    <Container fluid>
      <Row className="justify-content-center mt-3 mb-3 label-account-filter">
        Thống kê tài khoản tiết kiệm theo các thông tin tùy chọn
      </Row>
      <Row className="justify-content-center align-items-end">
        <div className="mx-2">
          <div>KYC level</div>

          <Select
            placeholder="Tất cả"
            className="filter-item"
            name="kycLevel"
            onChange={(selection, action) => {
              optionChange(selection?.value, "kyc");
            }}
            options={kycOption}
            value={kycOption.find((term) => term.value === filter?.kyc)}
          />
        </div>

        <div className="mx-2">
          <div>Kỳ hạn</div>

          <Select
            placeholder="Tất cả"
            className="filter-item"
            name="termDays"
            onChange={(selection, action) =>
              optionChange(selection?.value, "term_in_days")
            }
            options={termDaysOption}
            value={termDaysOption.find(
              (term) => term.value === filter?.term_in_days
            )}
          />
        </div>

        <div className="mx-2">
          <div>Số dư tối thiểu</div>

          <Input
            className="filter-item"
            onChange={(e) => handleBalanceValidate(e)}
            value={filter?.min_balance}
          />
        </div>

        <div className="mx-2">
          <div>Ngày tất toán (bắt đầu)</div>
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
                  // Kiểm tra nếu ngày chọn lớn hơn hoặc bằng ngày thứ 2 thì không cho phép cập nhật state
                  if (startDate2 && date >= startDate2) return;
                  setStartDate1(date);
                  setDatePickerVisibility1(false);

                  optionChange(date, "due_date_earliest");
                }}
                dateFormat="dd-MM-yyyy"
                inline
                maxDate={startDate2} // Đặt ngày tối đa là ngày thứ 2
              />
            </div>
          )}
        </div>

        <div className="mx-2">
          <div>Ngày tất toán (kết thúc)</div>

          <div onClick={toggleDatePicker2} className="filter-item form-control">
            {startDate2.toLocaleDateString("vi-VN", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </div>
          {isDatePickerVisible2 && (
            <div ref={refDatePicker2} className="position-absolute">
              <DatePicker
                selected={startDate2}
                onChange={(date) => {
                  // Kiểm tra nếu ngày chọn nhỏ hơn hoặc bằng ngày thứ 1 thì không cho phép cập nhật state
                  if (date <= startDate1) return;
                  setStartDate2(date);
                  setDatePickerVisibility2(false);
                  optionChange(date, "due_date_latest");
                }}
                dateFormat="dd-MM-yyyy"
                inline
                minDate={startDate1} // Đặt ngày tối thiểu là ngày thứ 1
              />
            </div>
          )}
        </div>

        <div className="mt-3 mx-2 filter-item d-flex justify-content-center">
          <Button onClick={handleSubmitFilter}>Tìm kiếm</Button>
        </div>
      </Row>
    </Container>
  );
}
