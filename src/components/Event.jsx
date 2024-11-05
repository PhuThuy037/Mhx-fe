import React from "react";
import Wrapper from "../assets/wrappers/Job";
import JobInfo from "./JobInfo";
import { Link, Form } from "react-router-dom";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
const Event = ({ _id, title, img, describe, location, date, dateline }) => {
  return (
    <Wrapper>
      <div className="flex img-container">
        <img src={img} alt="" />
        <p className="deadline-text">{dateline || "title"}</p>
      </div>
      <div>
        <h3>{title}</h3>
        <p className="describe">
          {describe ||
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim veniam ea quam"}
        </p>
        <div className="footer flex">
          <p> Ngày bắt đầu : {date}</p>
          <button className="btn"> Approve</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Event;
