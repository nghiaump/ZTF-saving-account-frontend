import React, { useReducer } from "react";
import AccountFilter from "../components/AccountFilter";
import { dataInitState, dataReducer } from "../reducers/reducerAccount";
import "./css/AccountPage.css";

export default function AccountPage() {
  const [dataState, dataDispatch] = useReducer(dataReducer, dataInitState);

  return (
    <>
      <AccountFilter filter={dataState.filter} dataDispatch={dataDispatch} />
    </>
  );
}
