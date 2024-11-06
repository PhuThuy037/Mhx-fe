import React from "react";
import Wrapper from "../assets/wrappers/JobsContainer";
import Community from "./Community";
import { useAllEventCommunity } from "../pages/EventsCommunity";

const CommunityContainer = () => {
  const data = useAllEventCommunity();
  return (
    <Wrapper>
      <div className="jobs">
        {console.log(data)}
        {data.map((e) => (
          <Community key={e._id} {...e} />
        ))}
      </div>
    </Wrapper>
  );
};

export default CommunityContainer;
