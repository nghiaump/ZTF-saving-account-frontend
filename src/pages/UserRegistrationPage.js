import React, { useReducer, useEffect } from "react";
import UserRegistrationForm from "../components/UserRegistrationForm";
import {
  dataInitState,
  dataReducer,
} from "../reducers/reducerUserRegistration";

import AccountAPI from "../api/AccountAPI";
import { Container } from "reactstrap";

import { formatDate8Digits } from "../components/Helper.js";

export default function UserRegistrationPage() {
  const [dataState, dataDispatch] = useReducer(dataReducer, dataInitState);
  useEffect(() => {
    console.log(">>dispatched response:", dataState.response);
  }, [dataState.response]);

  const submitHandler = () => {
    const payload = {
      ...dataState.form_data,
      dob: formatDate8Digits(dataState.form_data.dob),
    };

    console.log(">>userReg payload:", payload);
    AccountAPI.registerUser(payload)
      .then((response) => response.json())
      .then((data) => {
        console.log(">>response data:", data);
        if (data.id != null) {
          dataDispatch({
            type: "setResponse",
            status: "OK",
            data: data,
          });
        } else {
          dataDispatch({
            type: "setResponse",
            status: "NOT FOUND",
            data: data,
          });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <Container fluid>
      <UserRegistrationForm
        formData={dataState.form_data}
        dataDispatch={dataDispatch}
        handleSubmit={submitHandler}
      ></UserRegistrationForm>
    </Container>
  );
}
