import React, { useEffect, useReducer } from "react";
import { Container, Row } from "reactstrap";
import AccountFilter from "../components/AccountFilter";
import { dataInitState, dataReducer } from "../reducers/reducerAccount";
import "./css/AccountPage.css";
import AccountAPI from "../api/AccountAPI";
import AccountTable from "../components/AccountTable";
import Paginator from "../components/Paginator";

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
          response: data,
        });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    handleSubmitFilter();
  }, [dataState.filter.page_index]);

  const onPageChange = (number) => {
    console.log(">>number: ", number);
    dataDispatch({
      type: "changeFilter",
      selectedFilter: {
        page_index: number,
      },
    });
  };

  return (
    <Container fluid>
      <AccountFilter
        filter={dataState.filter}
        dataDispatch={dataDispatch}
        handleSubmitFilter={handleSubmitFilter}
      />

      <AccountTable dataState={dataState} />

      <Row className="d-flex justify-content-center">
        <Paginator
          totalPages={Math.ceil(
            dataState.agg.total_hits / dataState.filter.page_size
          )}
          currentPageIndex={dataState.filter.page_index}
          onPageChange={onPageChange}
        />
      </Row>
    </Container>
  );
}
