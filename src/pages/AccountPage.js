import React, { useReducer } from "react";
import AccountFilter from "../components/AccountFilter";
import { dataInitState, dataReducer } from "../reducers/reducerAccount";
import "./css/AccountPage.css";
import AccountAPI from "../api/AccountAPI";
import AccountTable from "../components/AccountTable";

function formatDate(date) {
  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0"); // Tháng trả về từ 0-11 nên cần +1
  let year = date.getFullYear().toString();
  return `${day}${month}${year}`;
}

export default function AccountPage() {
  const [dataState, dataDispatch] = useReducer(dataReducer, dataInitState);
  const handleSubmitFilter = () => {
    const payload = {
      paging: dataState.paging,
      filter: {
        ...dataState.filter,
        due_date_earliest: formatDate(dataState.filter.due_date_earliest),
        due_date_latest: formatDate(dataState.filter.due_date_latest),
      },
    };
    // debug
    console.log(">>>payload filter: ", payload.filter);
    AccountAPI.searchAccounts(payload.filter)
      .then((response) => response.json()) // Chuyển đổi response thành JSON
      .then((data) => {
        //console.log(">>>Data:", data); // In ra dữ liệu JSON
        console.log(data);
        dataDispatch({
          type: "dataLoaded",
          response: data.acc_list,
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <AccountFilter
        filter={dataState.filter}
        dataDispatch={dataDispatch}
        handleSubmitFilter={handleSubmitFilter}
      />

      <AccountTable dataState={dataState} />
    </>
  );
}
