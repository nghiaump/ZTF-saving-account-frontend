import React from "react";

export default function AccountTable({ dataState }) {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">user_id</th>
          <th scope="col">kyc</th>
          <th scope="col">balance</th>
          <th scope="col">rate</th>
          <th scope="col">created_date</th>
          <th scope="col">due_date</th>
        </tr>
      </thead>
      <tbody>
        {dataState.data?.map((account) => {
          return (
            <>
              <tr>
                <td>{account.id}</td>
                <td>{account.user_id}</td>
                <td>{account.kyc}</td>
                <td>{account.balance}</td>
                <td>{account.rate}</td>
                <td>{account.created_date}</td>
                <td>{account.due_date}</td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}
