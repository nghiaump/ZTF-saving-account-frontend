import React, { useState, useRef, useEffect } from "react";
import { Row, Col, FormGroup, Input } from "reactstrap";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../pages/css/AccountPage.css";

export default function AccountFilter({ filter, dataDispatch }) {
  const termDaysOption = [
    { value: -1, label: "Tất cả" },
    { value: 21, label: "21 ngày" },
    { value: 30, label: "1 tháng (30 ngày)" },
    { value: 90, label: "3 tháng (90 ngày)" },
    { value: 180, label: "6 tháng (180 ngày)" },
  ];

  const kycOption = [
    { value: -1, label: "Tất cả" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
  ];

  const optionChange = (value, name) => {
    const selectedFilter = {};
    console.log(value);
    selectedFilter[name] = value ? value : "";

    dataDispatch({
      type: "changeFilter",
      selectedFilter,
    });
  };

  const parseDate = (date) => {
    return date.filter((date) => !!date).map((date) => new Date(date));
  };

  const handleBalanceValidate = (e) => {
    const value = e.target.value;
    // Kiểm tra nếu giá trị không phải là số dương thì không cho phép cập nhật state
    if (isNaN(value) || value < 0) {
      return;
    }
    // Nếu là số dương, gọi hàm optionChange để cập nhật giá trị
    optionChange(value, "minBalance");
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
    <Row>
      <Col>
        <div className="text-bold-500 mb-1">KYC level</div>
        <FormGroup>
          <Select
            placeholder="Tất cả"
            className="React"
            name="kycLevel"
            onChange={(selection, action) =>
              optionChange(selection?.value, "kycLevel")
            }
            options={kycOption}
            value={kycOption.find((term) => (term.value = filter?.kycLevel))}
          />
        </FormGroup>
      </Col>

      <Col>
        <div className="text-bold-500 mb-1">Kỳ hạn</div>
        <FormGroup>
          <Select
            placeholder="Tất cả"
            className="React"
            name="termDays"
            onChange={(selection, action) =>
              optionChange(selection?.value, "termDays")
            }
            options={termDaysOption}
            value={termDaysOption.find(
              (term) => (term.value = filter?.termDays)
            )}
          />
        </FormGroup>
      </Col>

      <Col>
        <div>Số dư tối thiểu</div>
        <FormGroup>
          <Input
            placeholder="Tất cả"
            className="React"
            onChange={handleBalanceValidate}
            value={filter?.minBalance}
          />
        </FormGroup>
      </Col>

      <Col>
        <div className="text-bold-600 mb-1">Ngày tất toán (bắt đầu)</div>
        <FormGroup className="position-relative has-icon-right">
          <div onClick={toggleDatePicker1} className="form-control">
            {startDate1.toDateString()}
          </div>
          {isDatePickerVisible1 && (
            <div ref={refDatePicker1}>
              <DatePicker
                selected={startDate1}
                onChange={(date) => {
                  // Kiểm tra nếu ngày chọn lớn hơn hoặc bằng ngày thứ 2 thì không cho phép cập nhật state
                  if (startDate2 && date >= startDate2) return;
                  setStartDate1(date);
                  setDatePickerVisibility1(false);
                }}
                dateFormat="dd-MM-yyyy"
                inline
                maxDate={startDate2} // Đặt ngày tối đa là ngày thứ 2
              />
            </div>
          )}
        </FormGroup>
      </Col>

      <Col>
        <div className="text-bold-600 mb-1">Ngày tất toán (kết thúc)</div>
        <FormGroup className="position-relative has-icon-right">
          <div onClick={toggleDatePicker2} className="form-control">
            {startDate2.toDateString()}
          </div>
          {isDatePickerVisible2 && (
            <div ref={refDatePicker2}>
              <DatePicker
                selected={startDate2}
                onChange={(date) => {
                  // Kiểm tra nếu ngày chọn nhỏ hơn hoặc bằng ngày thứ 1 thì không cho phép cập nhật state
                  if (date <= startDate1) return;
                  setStartDate2(date);
                  setDatePickerVisibility2(false);
                }}
                dateFormat="dd-MM-yyyy"
                inline
                minDate={startDate1} // Đặt ngày tối thiểu là ngày thứ 1
              />
            </div>
          )}
        </FormGroup>
      </Col>
    </Row>
  );
}
