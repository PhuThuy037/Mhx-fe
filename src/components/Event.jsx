import React from "react";
import Wrapper from "../assets/wrappers/Event";
import { FaLocationArrow, FaCalendarAlt } from "react-icons/fa";

const Event = ({ _id, title, img, describe, location, date, dateline }) => {
  return (
    <Wrapper>
      <div className="event-card">
        {/* Image Container */}
        <div className="img-container">
          <img src={img} alt={title} className="event-image" />
          <p className="deadline-text">{dateline || "Chưa có thời hạn"}</p>
        </div>

        {/* Event Info */}
        <div className="event-info">
          <h3 className="event-title">{title}</h3>
          <p className="event-description">
            {describe ||
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim veniam ea quam"}
          </p>

          {/* Event Details */}
          <div className="event-details">
            <p className="event-location">
              <FaLocationArrow /> {location || "Chưa có địa điểm"}
            </p>
            <p className="event-date">
              <FaCalendarAlt /> {date || "Chưa có ngày"}
            </p>
          </div>

          {/* Approve Button */}
          <button className="btn approve-btn">Tham gia</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Event;
