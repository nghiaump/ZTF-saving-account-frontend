import React from "react";

export default function AccountTable({ dataState }) {
  return (
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>UserID</td>
          <td>KYC</td>
          <td>Balance</td>
          <td>InterestRate</td>
          <td>CreatedDate</td>
          <td>DueDate</td>
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
