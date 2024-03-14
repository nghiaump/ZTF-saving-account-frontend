import React, { useReducer } from "react";
import AccountRegistrationForm from "../components/AccountRegistrationForm";
import AccountRegistrationResult from "../components/AccountRegistrationResult";
import { Container } from "reactstrap";
import {
  dataAccRegInitState,
  dataAccRegReducer,
} from "../reducers/reducerAccountRegistration";
import AccountAPI from "../api/AccountAPI";

function formatDate(date) {
  if (date == null || date == undefined || date == "") {
    // Xử lý khi giá trị là null hoặc undefined
    return ""; // hoặc một giá trị mặc định khác
  }
  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0"); // Tháng trả về từ 0-11 nên cần +1
  let year = date.getFullYear().toString();
  return `${day}${month}${year}`;
}

export default function AccountRegistrationPage() {
  const [dataState, dataDispatch] = useReducer(
    dataAccRegReducer,
    dataAccRegInitState
  );
  const handleSubmitAccReg = () => {
    const payload = {
      ...dataState.reg_info,
      created_date: formatDate(dataState.reg_info.created_date),
    };

    console.log(">>payload accreg:", payload);
    AccountAPI.registerAccount(payload)
      .then((response) => response.json())
      .then((data) => {
        console.log(">>accreg response data:", data);
        dataDispatch({
          type: "setResponse",
          response: data,
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container fluid>
      {!dataState.response.success && (
        <AccountRegistrationForm
          reg_info={dataState.reg_info}
          dataDispatch={dataDispatch}
          handleSubmitAccReg={handleSubmitAccReg}
        />
      )}

      {dataState.response.success && (
        <AccountRegistrationResult data={dataState.response} />
      )}
    </Container>
  );
}
