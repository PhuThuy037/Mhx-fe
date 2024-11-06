import React from "react";
import { Link, Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/Community";
import JobInfo from "./JobInfo";
import {
  FaLocationArrow,
  FaBriefcase,
  FaCalendarAlt,
  FaUserFriends,
} from "react-icons/fa";
const Community = ({
  _id,
  title,
  describe,
  location,
  date,
  dateline,
  number,
}) => {
  return (
    <Wrapper>
      <div className="project-card">
        <div className="project-header">
          <h2 className="project-title">{title}</h2>
          <p className="project-status">{status || "Đang chờ duyệt"}</p>
        </div>
        <p className="project-description">{describe}</p>
        <div className="project-details">
          <p className="project-location">
            <FaLocationArrow /> Địa điểm: {location}
          </p>
          <p className="project-date">
            <FaCalendarAlt /> Bắt đầu: {date}
          </p>
          <p className="project-date">
            <FaCalendarAlt /> Kết thúc: {dateline}
          </p>
          <p className="project-participants">
            <FaUserFriends /> Số lượng tham gia: {number}
          </p>
        </div>
        <div className="project-actions">
          <button className="btn approve-btn">Duyệt</button>
          <button className="btn edit-btn">Chỉnh sửa</button>
          <button className="btn reject-btn">Từ chối</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Community;
