import React from "react";
import Wrapper from "../assets/wrappers/JobsContainer";
import Community from "./Community";
import { useAllEventCommunity } from "../pages/EventsCommunity";
const data = useAllEventCommunity();
const CommunityContainer = () => {
  return (
    <Wrapper>
      <div className="jobs">
        {data.map((e) => (
          <Community key={e._id} {...e} />
        ))}
      </div>
    </Wrapper>
  );
};

export default CommunityContainer;
