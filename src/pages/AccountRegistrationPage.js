import React from "react";
import AccountRegistrationForm from "../components/AccountRegistrationForm";
import { dataInitState, dataReducer } from "../reducers/reducerAccount";

export default function AccountRegistrationPage() {
  return (
    <>
      <AccountRegistrationForm></AccountRegistrationForm>
    </>
  );
}
