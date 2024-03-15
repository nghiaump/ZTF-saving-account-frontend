import React, { useEffect, useReducer } from "react";
import AccountInquiryForm from "../components/AccountInquiryForm";
import AccountInquiryResult from "../components/AccountInquiryResult";
import { Container, Row } from "reactstrap";
import { dataInitState, dataReducer } from "../reducers/reducerAccountInquiry";
import AccountAPI from "../api/AccountAPI";

export default function AccountInquiryPage() {
  const [dataState, dataDispatch] = useReducer(dataReducer, dataInitState);
  useEffect(() => {
    console.log(">>dispatched response:", dataState.response);
  }, [dataState.response]);
  
  const submitHandler = () => {
    const payload = {
      ...dataState.form_data,
    };

    console.log(">>payload accreg:", payload);
    AccountAPI.inquiryAccount(payload)
      .then((response) => response.json())
      .then(
        (data) => {
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
        }
        // Ket qua cua dispatch cho the khong cap nhat ngay
        // console.log("dataState after response", dataState);
        // Thu su dung useEffect
      )
      .catch((error) => console.log(error));
  };

  return (
    <Container fluid>
      <AccountInquiryForm
        formData={dataState.form_data}
        dataDispatch={dataDispatch}
        handleSubmit={submitHandler}
      />
      {dataState.status === "OK" && (
        <AccountInquiryResult data={dataState.response} />
      )}

      {dataState.status === "NOT FOUND" && (
        <Row className="acc-inquiry-not-found">KHÔNG TÌM THẤY TÀI KHOẢN</Row>
      )}
    </Container>
  );
}
