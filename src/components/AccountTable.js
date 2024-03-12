import React from "react";

export default function AccountTable({ dataState }) {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">UserID</th>
          <th scope="col">KYC</th>
          <th scope="col">Balance</th>
          <th scope="col">InterestRate</th>
          <th scope="col">CreatedDate</th>
          <th scope="col">DueDate</th>
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
