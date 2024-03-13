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
      //filter: dataState.filter,
      filter: {
        ...dataState.filter,
        // parse dates to format "ddmmyyyy"
        dueDateStart: formatDate(dataState.filter.dueDateStart),
        dueDateEnd: formatDate(dataState.filter.dueDateEnd),
      },
    };
    // debug
    console.log(">>>payload: ", payload.filter);
    AccountAPI.searchAccounts(payload)
      .then((res) => {
        dataDispatch({
          type: "dataLoaded",
          response: res,
        });
      })
      .catch((error) => console.log(error));
    // dataDispatch({
    //   type: "dataLoaded",
    //   response: {
    //     data: [
    //       {
    //         id: "abcd-1234",
    //         user_id: "user-12345",
    //         kyc: 3,
    //         balance: 100000000,
    //         rate: 0.045,
    //         created_date: "01022024",
    //         due_date: "01052024",
    //       },
    //     ],
    //   },
    // });
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
