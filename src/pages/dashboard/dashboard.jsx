import React from "react";
import Navbar from "../../components/navbar/navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-sm-12">
            <div className="card-wrapper">
              <h4>Appointments</h4>
              <h2>12</h2>
            </div>
          </div>
          <div className="col-xl-3 col-sm-12">
            <div className="card-wrapper">
              {" "}
              <h4>Patients</h4>
              <h2>150</h2>
            </div>
          </div>
          <div className="col-xl-3 col-sm-12">
            <div className="card-wrapper">
              {" "}
              <h4>Doctors</h4>
              <h2>12</h2>
            </div>
          </div>{" "}
          <div className="col-xl-3 col-sm-12">
            <div className="card-wrapper">
              {" "}
              <h4>New Admission</h4>
              <h2>12</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
