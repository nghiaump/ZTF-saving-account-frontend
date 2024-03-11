import React, { useReducer } from "react";
import AccountFilter from "../components/AccountFilter";
import { dataInitState, dataReducer } from "../reducers/reducerAccount";
import "./css/AccountPage.css";
import AccountAPI from "../api/AccountAPI";
import AccountTable from "../components/AccountTable";

export default function AccountPage() {
  const [dataState, dataDispatch] = useReducer(dataReducer, dataInitState);

  const handleSubmitFilter = () => {
    const payload = {
      paging: dataState.paging,
      filter: dataState.filter,
    };
    // AccountAPI.searchAccounts(payload)
    //   .then((res) => {
    //     dataDispatch({
    //       type: "dataLoaded",
    //       response: res,
    //     });
    //   })
    //   .catch((error) => console.log(error));
    dataDispatch({
      type: "dataLoaded",
      response: {
        data: [
          {
            id: "abcd-1234",
            user_id: "user-12345",
            kyc: 3,
            balance: 100000000,
            rate: 0.045,
            created_date: "01022024",
            due_date: "01052024",
          },
        ],
      },
    });
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
