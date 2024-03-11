import React from "react";

export default function UserTable({ dataState }) {
  return (
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>IDCardNumber</td>
          <td>Name</td>
          <td>DOB</td>
          <td>Address</td>
          <td>Phone</td>
          <td>RegisteredDate</td>
          <td>CurrentKYC</td>
        </tr>
      </thead>
    </table>
  );
}
