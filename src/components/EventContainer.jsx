import React from "react";
import Event from "./Event";
import { useAllEventContext } from "../pages/Events";
import Wrapper from "../assets/wrappers/JobsContainer";
const EventContainer = () => {
  const events = useAllEventContext();
  return (
    <Wrapper>
      <div className="jobs">
        {events.map((event) => (
          <Event key={event._id} {...event} />
        ))}
      </div>
    </Wrapper>
  );
};

export default EventContainer;
