import React from "react";
import { Link, Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import JobInfo from "./JobInfo";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
const Community = ({ _id, title, img, describe, location, date, dateline }) => {
  return (
    <Wrapper>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={location} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
        </div>
        <footer className="actions">
          <button className="btn edit-btn">Reject</button>
          <Form method="post">
            <button type="submit" className="btn delete-btn">
              Approve
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Community;
