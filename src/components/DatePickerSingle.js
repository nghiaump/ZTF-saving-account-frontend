import React, { useState, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerSingle({
  pickerName,
  fieldName,
  optionChange,
}) {
  const [startDate1, setStartDate1] = useState(new Date());
  const [isDatePickerVisible1, setDatePickerVisibility1] = useState(false);
  const refDatePicker1 = useRef(null);

  const toggleDatePicker1 = () => {
    setDatePickerVisibility1(!isDatePickerVisible1);
  };
  return (
    <Row className="flex-column">
      <div>{pickerName}</div>
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
              optionChange(date, fieldName);
            }}
            dateFormat="dd-MM-yyyy"
            showYearDropdown
            yearDropdownItemNumber={100}
            scrollableYearDropdown
          />
        </div>
      )}
    </Row>
  );
}
