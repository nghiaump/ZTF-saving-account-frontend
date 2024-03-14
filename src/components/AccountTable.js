import React from "react";
import { Container, Row, Col } from "reactstrap";

function numberWithCommas(x) {
  if (x === undefined || x === null) {
    return "0";
  }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatResponseDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

export default function AccountTable({ dataState }) {
  return (
    <>
      <Container>
        <Row>
          Tổng số tài khoản:{"\t"}
          <strong>{numberWithCommas(dataState.agg?.total_hits)}</strong>
        </Row>
        <Row>
          Tổng số dư:{"\t"}
          <strong>{numberWithCommas(dataState.agg.total_balance)}</strong>
        </Row>
      </Container>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>ID tài khoản</th>
            <th>ID người dùng</th>
            <th>KYC</th>
            <th>Số dư</th>
            <th>Kỳ hạn (ngày)</th>
            <th>Lãi suất</th>
            <th>Ngày mở tài khoản</th>
            <th>Ngày tất toán</th>
          </tr>
        </thead>
        <tbody>
          {dataState.acc_list?.map((account, index) => {
            const orderNumber =
              (dataState.filter.page_index - 1) * dataState.filter.page_size +
              index +
              1;
            return (
              <>
                <tr>
                  <td>
                    <strong>{orderNumber}</strong>
                  </td>
                  <td>{account.id}</td>
                  <td>{account.user_id}</td>
                  <td>{account.kyc}</td>
                  <td>{numberWithCommas(account.balance)}</td>
                  <td>{account.term_in_days}</td>
                  <td>{account.rate}</td>
                  <td>{formatResponseDate(account.created_date)}</td>
                  <td>{formatResponseDate(account.due_date)}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
