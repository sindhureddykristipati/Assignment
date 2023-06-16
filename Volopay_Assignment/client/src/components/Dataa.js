import React from "react";
import "./Navbar.css";
export default function Dataa({ data }) {
  return (
    <div
      style={{ margin: "100px" }}
      className="shadow-lg p-3 mb-5 bg-white rounded"
    >
      <p className="left">Id</p>
      <h1>{data.Id}</h1>
      <p className="left">Date</p>
      <h1>{data.date}</h1>
      <p className="left">User</p>
      <h1>{data.user}</h1>
      <p className="left">Department</p>
      <h1>{data.department}</h1>
      <p className="left">Software</p>
      <h1>{data.software}</h1>

      <div className="flex-container">
        <div className="w-100">
          <p className="left">Seats</p>
          <h1>{data.seats}</h1>
        </div>
        <div className="w-100">
          <p className="left">Amount</p>
          <h1>{data.amount}</h1>
        </div>
      </div>
    </div>
  );
}
