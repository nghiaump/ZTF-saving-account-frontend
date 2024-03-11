import React from "react";
import { Row, Col, FormGroup, Input } from "reactstrap";
import Select from "react-select";
import DateTimePicker from "./DateTimePicker";
import "../pages/css/AccountPage.css";

export default function AccountFilter({ filter, dataDispatch }) {
  const termDaysOption = [
    { value: 21, label: "21DAYS" },
    { value: 30, label: "30DAYS" },
    { value: 90, label: "90DAYS" },
    { value: 180, label: "180DAYS" },
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

  return (
    <Row>
      {/* 1 filter 1 col */}
      <Col>
        <div className="text-bold-500 mb-1">TermDays Filter</div>
        <FormGroup>
          <Select
            placeholder="All"
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
        <div>Balance Filter</div>
        <FormGroup>
          <Input
            placeholder="All"
            className="React"
            onChange={(e) => optionChange(e.target.value, "minBalance")}
            value={filter?.minBalance}
          />
        </FormGroup>
      </Col>

      <Col>
        <div className="text-bold-600 mb-1">Due Date Start</div>
        <FormGroup className="position-relative has-icon-right">
          <DateTimePicker
            name="dueDateStart"
            className="form-control"
            placeholder="dd-mm-yyyy"
            options={{
              mode: "single",
              dateFormat: "d-m-Y",
            }}
            value={parseDate([filter?.dueDateStart])}
          />
        </FormGroup>
      </Col>

      <Col>
        <div className="text-bold-600 mb-1">Due Date End</div>
        <FormGroup className="position-relative has-icon-right">
          <DateTimePicker
            name="dueDateEnd"
            className="form-control"
            placeholder="dd-mm-yyyy"
            options={{
              mode: "single",
              dateFormat: "d-m-Y",
            }}
            value={parseDate([filter?.dueDateEnd])}
          />
        </FormGroup>
      </Col>
    </Row>
  );
}
