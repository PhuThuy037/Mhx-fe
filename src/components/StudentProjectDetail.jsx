import React from "react";
import   "../assets/css/StudentProjectDetail.css";
/* import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; */

const StudentProjectDetail = ({ name, description, requirements, maxStudents,imgV }) => {
  return (
    <div>
      
      <img class="img-fluid" src={imgV} alt={name} />
      
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Requirements: {requirements}</p>
      <p>Max Students: {maxStudents}</p>
      <button className="btn approve-btn">Tham gia</button>
      {/* Ensure that you are not rendering an object directly */}
    </div>
  );
};

export default StudentProjectDetail;